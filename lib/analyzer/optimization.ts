// THOR Portfolio Risk Analyzer — Optimization Engine (6 Models)

import { Holding, ReturnsData, PortfolioMetrics, OptimizationResult, OptimizationMode } from './types';
import { calculateAllMetrics } from './risk-engine';
import { calculateRiskScore } from './scoring';

export interface ThorModel {
  id: string;
  name: string;
  subtitle: string;
  ticker: string;       // ticker in returns-matrix (or proxy)
  color: string;
  maxPct: number;
}

export const THOR_MODELS: ThorModel[] = [
  { id: 'sector100',   name: 'Sector 100',        subtitle: 'S&P 500 sector rotation, can go 100% cash', ticker: 'THLV', color: '#d69e2e', maxPct: 25 },
  { id: 'sdq',         name: 'Low Volatility SDQ', subtitle: 'SPY/DIA/QQQ rotation, cascading risk-off',  ticker: 'THIR', color: '#1a365d', maxPct: 25 },
  { id: 'intl',        name: 'International',      subtitle: 'Global equity, top countries by market cap', ticker: 'EFA',  color: '#2b6cb0', maxPct: 25 },
  { id: 'levered',     name: 'Levered Index',      subtitle: 'Enhanced S&P 500 with leveraged exposure',   ticker: 'SPY',  color: '#e53e3e', maxPct: 25 },
  { id: 'nextgen',     name: 'NextGen Stock',      subtitle: '8-12 high-growth stocks, systematic risk mgmt', ticker: 'ARKK', color: '#805ad5', maxPct: 25 },
  { id: 'dollaralt',   name: 'Dollar ALT',         subtitle: '60% gold / 40% silver, dollar diversification', ticker: 'GLD',  color: '#dd6b20', maxPct: 25 },
];

export const MAX_TOTAL_THOR = 50;

export type ModelAllocations = Record<string, number>; // model id -> pct

export function emptyAllocations(): ModelAllocations {
  const alloc: ModelAllocations = {};
  for (const m of THOR_MODELS) alloc[m.id] = 0;
  return alloc;
}

export function totalThorPct(alloc: ModelAllocations): number {
  return Object.values(alloc).reduce((s, v) => s + v, 0);
}

export function applyThorAllocation(
  originalHoldings: Holding[],
  alloc: ModelAllocations
): Holding[] {
  const total = totalThorPct(alloc);
  if (total === 0) return [...originalHoldings];

  const scaleFactor = (100 - total) / 100;
  const adjusted = originalHoldings.map(h => ({
    ...h,
    allocation: h.allocation * scaleFactor,
  })).filter(h => h.allocation >= 0.1);

  for (const model of THOR_MODELS) {
    const pct = alloc[model.id] || 0;
    if (pct > 0) {
      adjusted.push({
        ticker: model.ticker,
        name: model.name,
        type: 'model',
        allocation: pct,
      });
    }
  }

  return adjusted;
}

export function computeMetricsForAllocation(
  originalHoldings: Holding[],
  returnsData: ReturnsData,
  alloc: ModelAllocations
): OptimizationResult {
  const holdings = applyThorAllocation(originalHoldings, alloc);
  const metrics = calculateAllMetrics(holdings, returnsData);
  const riskScore = calculateRiskScore(holdings, metrics);
  metrics.riskScore = riskScore;

  const total = totalThorPct(alloc);

  return {
    thorAllocation: total,
    thirPct: alloc['sdq'] || 0,
    thlvPct: alloc['sector100'] || 0,
    holdings,
    metrics,
    riskScore,
    modelAllocations: { ...alloc },
  };
}

// Grid search over all models in steps of 5%, total capped at MAX_TOTAL_THOR
// For performance, only explore combinations where at most 3 models are active
export function computeOptimizationGrid(
  originalHoldings: Holding[],
  returnsData: ReturnsData
): OptimizationResult[] {
  const grid: OptimizationResult[] = [];
  const steps = [0, 5, 10, 15, 20, 25];

  // Generate all combinations of 6 models at step increments, total <= 50
  // Full grid is too large (6^6), so use pairwise combinations
  const models = THOR_MODELS;

  // Single-model allocations
  for (const m of models) {
    for (const pct of steps) {
      if (pct === 0) continue;
      const alloc = emptyAllocations();
      alloc[m.id] = pct;
      grid.push(computeMetricsForAllocation(originalHoldings, returnsData, alloc));
    }
  }

  // Pairwise combinations
  for (let i = 0; i < models.length; i++) {
    for (let j = i + 1; j < models.length; j++) {
      for (const p1 of steps) {
        if (p1 === 0) continue;
        for (const p2 of steps) {
          if (p2 === 0) continue;
          if (p1 + p2 > MAX_TOTAL_THOR) continue;
          const alloc = emptyAllocations();
          alloc[models[i].id] = p1;
          alloc[models[j].id] = p2;
          grid.push(computeMetricsForAllocation(originalHoldings, returnsData, alloc));
        }
      }
    }
  }

  // Zero allocation
  grid.push(computeMetricsForAllocation(originalHoldings, returnsData, emptyAllocations()));

  return grid;
}

export function findOptimal(
  grid: OptimizationResult[],
  mode: OptimizationMode,
  currentMetrics: PortfolioMetrics,
  targetScore?: number
): ModelAllocations {
  const zero = emptyAllocations();

  switch (mode) {
    case 'max-return': {
      let best: OptimizationResult | null = null;
      for (const point of grid) {
        if (Math.abs(point.riskScore - currentMetrics.riskScore) <= 3) {
          if (!best || point.metrics.annualizedReturn > best.metrics.annualizedReturn) best = point;
        }
      }
      return best?.modelAllocations || zero;
    }
    case 'min-risk': {
      let best: OptimizationResult | null = null;
      for (const point of grid) {
        if (Math.abs(point.metrics.annualizedReturn - currentMetrics.annualizedReturn) <= 0.005) {
          if (!best || point.riskScore < best.riskScore) best = point;
        }
      }
      return best?.modelAllocations || zero;
    }
    case 'min-drawdown': {
      let best: OptimizationResult | null = null;
      for (const point of grid) {
        if (!best || Math.abs(point.metrics.maxDrawdown) < Math.abs(best.metrics.maxDrawdown)) best = point;
      }
      return best?.modelAllocations || zero;
    }
    case 'target-score': {
      if (targetScore === undefined) return zero;
      let best: OptimizationResult | null = null;
      let bestDist = Infinity;
      for (const point of grid) {
        const dist = Math.abs(point.riskScore - targetScore);
        if (dist < bestDist) { bestDist = dist; best = point; }
      }
      return best?.modelAllocations || zero;
    }
  }
}
