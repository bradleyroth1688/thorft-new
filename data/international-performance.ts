// Pre-processed THOR International performance data
// Source: thor-international-performance.csv
// All returns are monthly percentages. NET returns used throughout.
// "As of" date: January 31, 2026 (last complete month)

export interface MonthlyReturn {
  date: string; // YYYY-MM-DD
  thorNet: number; // monthly return in %
  benchmark: number; // monthly return in %
}

// Monthly returns parsed from CSV (through Jan 2026 — excluding partial Feb 2026)
export const monthlyReturns: MonthlyReturn[] = [
  { date: "2017-01-31", thorNet: 2.8264, benchmark: 3.0000 },
  { date: "2017-02-28", thorNet: 0.9786, benchmark: 2.6898 },
  { date: "2017-03-31", thorNet: 3.7085, benchmark: 1.4759 },
  { date: "2017-04-30", thorNet: 1.7392, benchmark: 1.6253 },
  { date: "2017-05-31", thorNet: 3.8356, benchmark: 1.9463 },
  { date: "2017-06-30", thorNet: 0.5177, benchmark: 0.6255 },
  { date: "2017-07-31", thorNet: 3.9875, benchmark: 2.6507 },
  { date: "2017-08-31", thorNet: 0.3108, benchmark: 0.4183 },
  { date: "2017-09-30", thorNet: 2.3082, benchmark: 2.1066 },
  { date: "2017-10-31", thorNet: 2.7359, benchmark: 2.1069 },
  { date: "2017-11-30", thorNet: 0.7116, benchmark: 1.8972 },
  { date: "2017-12-31", thorNet: 1.5969, benchmark: 1.5962 },
  { date: "2018-01-31", thorNet: 5.9555, benchmark: 5.4807 },
  { date: "2018-02-28", thorNet: -5.3072, benchmark: -4.4427 },
  { date: "2018-03-31", thorNet: -0.0169, benchmark: -1.2867 },
  { date: "2018-04-30", thorNet: -0.0164, benchmark: 0.4210 },
  { date: "2018-05-31", thorNet: -0.0169, benchmark: 0.5680 },
  { date: "2018-06-30", thorNet: -0.0164, benchmark: -0.5996 },
  { date: "2018-07-31", thorNet: -0.0169, benchmark: 2.8758 },
  { date: "2018-08-31", thorNet: -0.0169, benchmark: 0.8612 },
  { date: "2018-09-30", thorNet: -0.0164, benchmark: 0.0794 },
  { date: "2018-10-31", thorNet: -0.0169, benchmark: -7.8201 },
  { date: "2018-11-30", thorNet: 0.9781, benchmark: 1.7310 },
  { date: "2018-12-31", thorNet: 0.1453, benchmark: -7.2232 },
  { date: "2019-01-31", thorNet: 1.1882, benchmark: 7.9896 },
  { date: "2019-02-28", thorNet: 1.7730, benchmark: 2.8151 },
  { date: "2019-03-31", thorNet: 1.1275, benchmark: 1.0648 },
  { date: "2019-04-30", thorNet: 2.8367, benchmark: 3.4714 },
  { date: "2019-05-31", thorNet: -6.4904, benchmark: -5.9701 },
  { date: "2019-06-30", thorNet: 5.6864, benchmark: 6.3687 },
  { date: "2019-07-31", thorNet: -2.8283, benchmark: -0.0000 },
  { date: "2019-08-31", thorNet: -2.9825, benchmark: -2.1022 },
  { date: "2019-09-30", thorNet: 2.3810, benchmark: 2.2761 },
  { date: "2019-10-31", thorNet: 3.1774, benchmark: 2.7934 },
  { date: "2019-11-30", thorNet: 1.2144, benchmark: 2.5615 },
  { date: "2019-12-31", thorNet: 3.8083, benchmark: 3.4515 },
  { date: "2020-01-31", thorNet: -3.4666, benchmark: -1.5557 },
  { date: "2020-02-29", thorNet: -6.3725, benchmark: -7.2244 },
  { date: "2020-03-31", thorNet: 1.1781, benchmark: -14.7571 },
  { date: "2020-04-30", thorNet: 8.2542, benchmark: 10.3662 },
  { date: "2020-05-31", thorNet: 4.5790, benchmark: 5.2085 },
  { date: "2020-06-30", thorNet: 4.6360, benchmark: 3.0669 },
  { date: "2020-07-31", thorNet: 4.6475, benchmark: 5.2941 },
  { date: "2020-08-31", thorNet: 5.4651, benchmark: 6.0056 },
  { date: "2020-09-30", thorNet: -1.6932, benchmark: -2.9250 },
  { date: "2020-10-31", thorNet: 0.3649, benchmark: -2.0461 },
  { date: "2020-11-30", thorNet: 8.7946, benchmark: 12.3687 },
  { date: "2020-12-31", thorNet: 5.6756, benchmark: 4.9366 },
  { date: "2021-01-31", thorNet: -0.2309, benchmark: -0.2268 },
  { date: "2021-02-28", thorNet: 3.2152, benchmark: 2.6740 },
  { date: "2021-03-31", thorNet: 2.3874, benchmark: 2.8498 },
  { date: "2021-04-30", thorNet: 2.3347, benchmark: 4.1320 },
  { date: "2021-05-31", thorNet: 4.0220, benchmark: 1.5793 },
  { date: "2021-06-30", thorNet: -1.3634, benchmark: 1.1751 },
  { date: "2021-07-31", thorNet: -0.3277, benchmark: 0.6177 },
  { date: "2021-08-31", thorNet: 1.7469, benchmark: 2.2638 },
  { date: "2021-09-30", thorNet: -1.7456, benchmark: -4.1008 },
  { date: "2021-10-31", thorNet: 3.5143, benchmark: 5.1458 },
  { date: "2021-11-30", thorNet: -2.9993, benchmark: -2.6151 },
  { date: "2021-12-31", thorNet: 2.8271, benchmark: 3.8131 },
  { date: "2022-01-31", thorNet: -1.4178, benchmark: -4.5797 },
  { date: "2022-02-28", thorNet: -0.0153, benchmark: -2.7705 },
  { date: "2022-03-31", thorNet: -0.6218, benchmark: 1.8863 },
  { date: "2022-04-30", thorNet: -4.8368, benchmark: -8.0956 },
  { date: "2022-05-31", thorNet: 0.2965, benchmark: 0.4942 },
  { date: "2022-06-30", thorNet: -3.0044, benchmark: -8.1354 },
  { date: "2022-07-31", thorNet: -1.8105, benchmark: 6.9838 },
  { date: "2022-08-31", thorNet: -4.1457, benchmark: -4.0526 },
  { date: "2022-09-30", thorNet: -6.3573, benchmark: -9.5320 },
  { date: "2022-10-31", thorNet: 8.2881, benchmark: 6.3768 },
  { date: "2022-11-30", thorNet: 12.4436, benchmark: 8.2827 },
  { date: "2022-12-31", thorNet: -2.8617, benchmark: -4.4330 },
  { date: "2023-01-31", thorNet: 9.1842, benchmark: 7.6459 },
  { date: "2023-02-28", thorNet: -4.1495, benchmark: -3.1796 },
  { date: "2023-03-31", thorNet: 2.3217, benchmark: 2.8468 },
  { date: "2023-04-30", thorNet: 2.1099, benchmark: 1.4225 },
  { date: "2023-05-31", thorNet: -2.8723, benchmark: -1.2099 },
  { date: "2023-06-30", thorNet: 4.6234, benchmark: 5.8154 },
  { date: "2023-07-31", thorNet: 3.2455, benchmark: 3.7224 },
  { date: "2023-08-31", thorNet: -5.1733, benchmark: -2.8432 },
  { date: "2023-09-30", thorNet: -1.3323, benchmark: -4.2548 },
  { date: "2023-10-31", thorNet: 0.3808, benchmark: -2.9191 },
  { date: "2023-11-30", thorNet: 0.6971, benchmark: 9.0095 },
  { date: "2023-12-31", thorNet: 2.9175, benchmark: 5.1541 },
  { date: "2024-01-31", thorNet: -2.7225, benchmark: -0.0000 },
  { date: "2024-02-29", thorNet: 3.4450, benchmark: 4.4907 },
  { date: "2024-03-31", thorNet: 2.9314, benchmark: 3.1911 },
  { date: "2024-04-30", thorNet: -1.5626, benchmark: -3.5837 },
  { date: "2024-05-31", thorNet: 3.3627, benchmark: 4.5992 },
  { date: "2024-06-30", thorNet: -1.3189, benchmark: 1.5873 },
  { date: "2024-07-31", thorNet: 3.5370, benchmark: 1.9799 },
  { date: "2024-08-31", thorNet: 0.2284, benchmark: 2.3333 },
  { date: "2024-09-30", thorNet: 0.8144, benchmark: 2.1982 },
  { date: "2024-10-31", thorNet: -2.5318, benchmark: -2.1804 },
  { date: "2024-11-30", thorNet: 0.5289, benchmark: 4.1421 },
  { date: "2024-12-31", thorNet: -0.9943, benchmark: -2.9418 },
  { date: "2025-01-31", thorNet: 0.9253, benchmark: 3.0558 },
  { date: "2025-02-28", thorNet: 0.1201, benchmark: -0.4130 },
  { date: "2025-03-31", thorNet: -0.4371, benchmark: -3.5168 },
  { date: "2025-04-30", thorNet: 7.6175, benchmark: 0.5606 },
  { date: "2025-05-31", thorNet: 5.4073, benchmark: 5.8062 },
  { date: "2025-06-30", thorNet: 4.7123, benchmark: 4.6751 },
  { date: "2025-07-31", thorNet: -0.4695, benchmark: 1.0971 },
  { date: "2025-08-31", thorNet: 2.9253, benchmark: 2.9554 },
  { date: "2025-09-30", thorNet: 2.9534, benchmark: 3.3709 },
  { date: "2025-10-31", thorNet: 4.0736, benchmark: 2.0247 },
  { date: "2025-11-30", thorNet: -0.5216, benchmark: 0.2134 },
  { date: "2025-12-31", thorNet: 3.6885, benchmark: 0.9154 },
  { date: "2026-01-31", thorNet: 7.7129, benchmark: 3.1122 },
];

// ─── Helper functions ───

function compoundReturns(returns: number[]): number {
  // returns are in percentage, e.g. 2.84 means +2.84%
  let cumulative = 1;
  for (const r of returns) {
    cumulative *= 1 + r / 100;
  }
  return (cumulative - 1) * 100; // return as percentage
}

function annualizeReturn(totalReturnPct: number, months: number): number {
  const totalFactor = 1 + totalReturnPct / 100;
  const annualized = Math.pow(totalFactor, 12 / months) - 1;
  return annualized * 100;
}

function getReturnsForPeriod(
  data: MonthlyReturn[],
  startDate: string,
  endDate: string,
  field: "thorNet" | "benchmark"
): number[] {
  return data
    .filter((d) => d.date >= startDate && d.date <= endDate)
    .map((d) => d[field]);
}

// ─── Standard Period Returns ───

function calcStandardPeriods() {
  const asOf = "2026-01-31";
  const data = monthlyReturns;

  // MTD = Jan 2026 return (single month)
  const mtdThor = data.find((d) => d.date === asOf)!.thorNet;
  const mtdBench = data.find((d) => d.date === asOf)!.benchmark;

  // QTD = Jan 2026 (Q1 starts Jan)
  const qtdThor = mtdThor;
  const qtdBench = mtdBench;

  // YTD = Jan 2026
  const ytdThor = mtdThor;
  const ytdBench = mtdBench;

  // 1 Year: Feb 2025 through Jan 2026 (12 months)
  const oneYearThor = compoundReturns(getReturnsForPeriod(data, "2025-02-01", "2026-01-31", "thorNet"));
  const oneYearBench = compoundReturns(getReturnsForPeriod(data, "2025-02-01", "2026-01-31", "benchmark"));

  // 3 Year: Feb 2023 through Jan 2026 (36 months)
  const threeYearCompThor = compoundReturns(getReturnsForPeriod(data, "2023-02-01", "2026-01-31", "thorNet"));
  const threeYearCompBench = compoundReturns(getReturnsForPeriod(data, "2023-02-01", "2026-01-31", "benchmark"));
  const threeYearThor = annualizeReturn(threeYearCompThor, 36);
  const threeYearBench = annualizeReturn(threeYearCompBench, 36);

  // 5 Year: Feb 2021 through Jan 2026 (60 months)
  const fiveYearCompThor = compoundReturns(getReturnsForPeriod(data, "2021-02-01", "2026-01-31", "thorNet"));
  const fiveYearCompBench = compoundReturns(getReturnsForPeriod(data, "2021-02-01", "2026-01-31", "benchmark"));
  const fiveYearThor = annualizeReturn(fiveYearCompThor, 60);
  const fiveYearBench = annualizeReturn(fiveYearCompBench, 60);

  // Since Inception: Jan 2017 through Jan 2026
  const siMonths = data.length; // all months through Jan 2026
  const siCompThor = compoundReturns(data.map((d) => d.thorNet));
  const siCompBench = compoundReturns(data.map((d) => d.benchmark));
  const siThor = annualizeReturn(siCompThor, siMonths);
  const siBench = annualizeReturn(siCompBench, siMonths);

  return {
    mtd: { thor: mtdThor, bench: mtdBench },
    qtd: { thor: qtdThor, bench: qtdBench },
    ytd: { thor: ytdThor, bench: ytdBench },
    oneYear: { thor: oneYearThor, bench: oneYearBench },
    threeYear: { thor: threeYearThor, bench: threeYearBench },
    fiveYear: { thor: fiveYearThor, bench: fiveYearBench },
    sinceInception: { thor: siThor, bench: siBench },
  };
}

// ─── Calendar Year Returns ───

function calcCalendarYears() {
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  return years.map((year) => {
    const yearData = monthlyReturns.filter((d) => d.date.startsWith(`${year}-`));
    // For 2025, only Jan is included (as of date)
    const thorReturn = compoundReturns(yearData.map((d) => d.thorNet));
    const benchReturn = compoundReturns(yearData.map((d) => d.benchmark));
    return { year, thor: thorReturn, bench: benchReturn, partial: false };
  });
}

// ─── Growth of $10,000 ───

function calcGrowthOf10K() {
  let thorValue = 10000;
  let benchValue = 10000;

  for (const m of monthlyReturns) {
    thorValue *= 1 + m.thorNet / 100;
    benchValue *= 1 + m.benchmark / 100;
  }

  return {
    thor: Math.round(thorValue),
    bench: Math.round(benchValue),
  };
}

// ─── Risk Statistics ───

function calcRiskStats() {
  const thorReturns = monthlyReturns.map((d) => d.thorNet);
  const benchReturns = monthlyReturns.map((d) => d.benchmark);
  const n = thorReturns.length;

  // Annualized return
  const thorCumulative = compoundReturns(thorReturns);
  const benchCumulative = compoundReturns(benchReturns);
  const thorAnnReturn = annualizeReturn(thorCumulative, n);
  const benchAnnReturn = annualizeReturn(benchCumulative, n);

  // Monthly std dev → annualized
  const thorMean = thorReturns.reduce((a, b) => a + b, 0) / n;
  const benchMean = benchReturns.reduce((a, b) => a + b, 0) / n;
  const thorMonthlyStd = Math.sqrt(thorReturns.reduce((sum, r) => sum + (r - thorMean) ** 2, 0) / (n - 1));
  const benchMonthlyStd = Math.sqrt(benchReturns.reduce((sum, r) => sum + (r - benchMean) ** 2, 0) / (n - 1));
  const thorAnnStd = thorMonthlyStd * Math.sqrt(12);
  const benchAnnStd = benchMonthlyStd * Math.sqrt(12);

  // Sharpe Ratio (risk-free = 2% long-term average)
  const riskFree = 2.0;
  const thorSharpe = (thorAnnReturn - riskFree) / thorAnnStd;
  const benchSharpe = (benchAnnReturn - riskFree) / benchAnnStd;

  // Max Drawdown from cumulative return series
  function maxDrawdown(returns: number[]): number {
    let peak = 1;
    let cumulative = 1;
    let maxDD = 0;
    for (const r of returns) {
      cumulative *= 1 + r / 100;
      if (cumulative > peak) peak = cumulative;
      const dd = (cumulative - peak) / peak;
      if (dd < maxDD) maxDD = dd;
    }
    return maxDD * 100; // as percentage (negative)
  }

  const thorMaxDD = maxDrawdown(thorReturns);
  const benchMaxDD = maxDrawdown(benchReturns);

  // Best / Worst Month
  const thorBest = Math.max(...thorReturns);
  const thorWorst = Math.min(...thorReturns);
  const benchBest = Math.max(...benchReturns);
  const benchWorst = Math.min(...benchReturns);

  // % Positive Months
  const thorPositive = (thorReturns.filter((r) => r > 0).length / n) * 100;
  const benchPositive = (benchReturns.filter((r) => r > 0).length / n) * 100;

  return {
    annualizedReturn: { thor: thorAnnReturn, bench: benchAnnReturn },
    annualizedStdDev: { thor: thorAnnStd, bench: benchAnnStd },
    sharpeRatio: { thor: thorSharpe, bench: benchSharpe },
    maxDrawdown: { thor: thorMaxDD, bench: benchMaxDD },
    bestMonth: { thor: thorBest, bench: benchBest },
    worstMonth: { thor: thorWorst, bench: benchWorst },
    positiveMonths: { thor: thorPositive, bench: benchPositive },
  };
}

// ─── Export all computed data ───

export const standardPeriods = calcStandardPeriods();
export const calendarYears = calcCalendarYears();
export const growthOf10K = calcGrowthOf10K();
export const riskStats = calcRiskStats();
