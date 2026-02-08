'use client';

import { create } from 'zustand';
import { OptimizationResult, OptimizationMode, Holding, ReturnsData, PortfolioMetrics } from '../types';
import {
  computeOptimizationGrid,
  computeMetricsForAllocation,
  findOptimal,
  emptyAllocations,
  totalThorPct,
  ModelAllocations,
  MAX_TOTAL_THOR,
} from '../optimization';

interface OptimizationState {
  grid: OptimizationResult[];
  modelAllocations: ModelAllocations;
  currentResult: OptimizationResult | null;
  mode: OptimizationMode;
  targetScore: number;
  isComputed: boolean;
  originalHoldings: Holding[];
  returnsData: ReturnsData | null;

  // Legacy compat
  sliderValue: number;
  thirPct: number;
  thlvPct: number;

  computeGrid: (holdings: Holding[], returnsData: ReturnsData) => void;
  setModelPct: (modelId: string, value: number) => void;
  setMode: (mode: OptimizationMode) => void;
  setTargetScore: (score: number) => void;
  findOptimalAllocation: (currentMetrics: PortfolioMetrics) => void;
  reset: () => void;

  // Legacy
  setSliderValue: (value: number) => void;
  setThirPct: (value: number) => void;
  setThlvPct: (value: number) => void;
}

export const useOptimizationStore = create<OptimizationState>((set, get) => ({
  grid: [],
  modelAllocations: emptyAllocations(),
  currentResult: null,
  mode: 'min-risk',
  targetScore: 50,
  isComputed: false,
  originalHoldings: [],
  returnsData: null,
  sliderValue: 0,
  thirPct: 0,
  thlvPct: 0,

  computeGrid: (holdings, returnsData) => {
    const grid = computeOptimizationGrid(holdings, returnsData);
    const alloc = emptyAllocations();
    const initial = computeMetricsForAllocation(holdings, returnsData, alloc);
    set({
      grid,
      isComputed: true,
      modelAllocations: alloc,
      currentResult: initial,
      originalHoldings: holdings,
      returnsData,
      sliderValue: 0,
      thirPct: 0,
      thlvPct: 0,
    });
  },

  setModelPct: (modelId, value) => {
    const { modelAllocations, originalHoldings, returnsData } = get();
    if (!returnsData) return;
    const current = { ...modelAllocations };
    const otherTotal = totalThorPct(current) - (current[modelId] || 0);
    const clamped = Math.max(0, Math.min(value, MAX_TOTAL_THOR - otherTotal, 25));
    current[modelId] = clamped;
    const result = computeMetricsForAllocation(originalHoldings, returnsData, current);
    set({
      modelAllocations: current,
      currentResult: result,
      sliderValue: totalThorPct(current),
      thirPct: current['sdq'] || 0,
      thlvPct: current['sector100'] || 0,
    });
  },

  // Legacy methods (no-ops for new 6-model UI, kept for type compat)
  setSliderValue: () => {},
  setThirPct: (value) => get().setModelPct('sdq', value),
  setThlvPct: (value) => get().setModelPct('sector100', value),

  setMode: (mode) => set({ mode }),
  setTargetScore: (score) => set({ targetScore: score }),

  findOptimalAllocation: (currentMetrics) => {
    const { grid, mode, targetScore, originalHoldings, returnsData } = get();
    if (grid.length === 0 || !returnsData) return;
    const optimal = findOptimal(grid, mode, currentMetrics, targetScore);
    const result = computeMetricsForAllocation(originalHoldings, returnsData, optimal);
    set({
      modelAllocations: optimal,
      currentResult: result,
      sliderValue: totalThorPct(optimal),
      thirPct: optimal['sdq'] || 0,
      thlvPct: optimal['sector100'] || 0,
    });
  },

  reset: () => set({
    grid: [],
    modelAllocations: emptyAllocations(),
    currentResult: null,
    mode: 'min-risk',
    targetScore: 50,
    isComputed: false,
    originalHoldings: [],
    returnsData: null,
    sliderValue: 0,
    thirPct: 0,
    thlvPct: 0,
  }),
}));
