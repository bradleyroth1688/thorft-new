// Pre-processed THOR Levered Index performance data
// Source: levered-index.csv
// All returns are monthly percentages. NET returns used throughout.
// "As of" date: January 31, 2026 (last complete month)

export interface MonthlyReturn {
  date: string; // YYYY-MM-DD
  thorNet: number; // monthly return in %
  benchmark: number; // monthly return in %
}

// Monthly returns parsed from CSV (through Jan 2026 — excluding partial Feb 2026)
export const monthlyReturns: MonthlyReturn[] = [
  { date: "2020-12-31", thorNet: 0.6903837939620683, benchmark: 0.5080820000000097 },
  { date: "2021-01-31", thorNet: -0.6505211310386727, benchmark: -1.0190524432310277 },
  { date: "2021-02-28", thorNet: 2.1332103435673266, benchmark: 2.7805560928319872 },
  { date: "2021-03-31", thorNet: 3.857958709130349, benchmark: 4.540526990058691 },
  { date: "2021-04-30", thorNet: 7.398863502406039, benchmark: 5.291028942465648 },
  { date: "2021-05-31", thorNet: -1.1869963795782201, benchmark: 0.6566232904995584 },
  { date: "2021-06-30", thorNet: 2.4951958011856012, benchmark: 2.247292920571553 },
  { date: "2021-07-31", thorNet: 1.3291958607518861, benchmark: 2.4412667756477546 },
  { date: "2021-08-31", thorNet: 3.6053066836404524, benchmark: 2.975982856529491 },
  { date: "2021-09-30", thorNet: -5.739223660269577, benchmark: -4.657524798434665 },
  { date: "2021-10-31", thorNet: 7.905420485159231, benchmark: 7.016356723438655 },
  { date: "2021-11-30", thorNet: -0.5411922543087644, benchmark: -0.8035041478363425 },
  { date: "2021-12-31", thorNet: 1.637641115469668, benchmark: 4.629498638614349 },
  { date: "2022-01-31", thorNet: -4.345625718785595, benchmark: -5.27411422309878 },
  { date: "2022-02-28", thorNet: -1.8213102261409264, benchmark: -2.9516870932291495 },
  { date: "2022-03-31", thorNet: 1.7011366928360028, benchmark: 3.7555532028997973 },
  { date: "2022-04-30", thorNet: -7.5842924418219715, benchmark: -8.776879324677811 },
  { date: "2022-05-31", thorNet: 0.5098670037451569, benchmark: 0.22573993886991772 },
  { date: "2022-06-30", thorNet: -4.101935726899642, benchmark: -8.246916349408263 },
  { date: "2022-07-31", thorNet: 6.822250750200332, benchmark: 9.208741837531043 },
  { date: "2022-08-31", thorNet: -3.275878504524099, benchmark: -4.080215812795174 },
  { date: "2022-09-30", thorNet: -6.478289496495105, benchmark: -9.24164561192351 },
  { date: "2022-10-31", thorNet: 6.3507243650601675, benchmark: 8.12757028384401 },
  { date: "2022-11-30", thorNet: 6.064723755904211, benchmark: 5.559141264701339 },
  { date: "2022-12-31", thorNet: -6.452182683371188, benchmark: -5.757579634044296 },
  { date: "2023-01-31", thorNet: 7.775457358176019, benchmark: 6.2887416039092425 },
  { date: "2023-02-28", thorNet: -1.9914397117787752, benchmark: -2.5142727091917783 },
  { date: "2023-03-31", thorNet: 5.157288430253204, benchmark: 3.7124880037967545 },
  { date: "2023-04-30", thorNet: 1.9786627258902012, benchmark: 1.5974862463315809 },
  { date: "2023-05-31", thorNet: 0.37442522136537093, benchmark: 0.46163519517887774 },
  { date: "2023-06-30", thorNet: 8.980346467000345, benchmark: 6.481418552872742 },
  { date: "2023-07-31", thorNet: 4.4530814745388225, benchmark: 3.2732813980396847 },
  { date: "2023-08-31", thorNet: -2.2982371062451157, benchmark: -1.6252091122347156 },
  { date: "2023-09-30", thorNet: -2.8978344407395884, benchmark: -4.739334538311956 },
  { date: "2023-10-31", thorNet: -3.699679659265065, benchmark: -2.1708530443140694 },
  { date: "2023-11-30", thorNet: 10.368429648114198, benchmark: 9.134376945313448 },
  { date: "2023-12-31", thorNet: 6.2162114947383, benchmark: 4.56626658600241 },
  { date: "2024-01-31", thorNet: 1.9455993471159116, benchmark: 1.592653159472679 },
  { date: "2024-02-29", thorNet: 7.144663121689954, benchmark: 5.218688604176869 },
  { date: "2024-03-31", thorNet: 4.424469245482632, benchmark: 3.272386922062931 },
  { date: "2024-04-30", thorNet: -5.3584341477305175, benchmark: -4.031948747543956 },
  { date: "2024-05-31", thorNet: 4.473460942447627, benchmark: 5.057997937364012 },
  { date: "2024-06-30", thorNet: 4.74198399366339, benchmark: 3.528453274959875 },
  { date: "2024-07-31", thorNet: 1.3717864622531994, benchmark: 1.2109401782889107 },
  { date: "2024-08-31", thorNet: 4.537154393459386, benchmark: 2.336571913115537 },
  { date: "2024-09-30", thorNet: -0.9381693937580482, benchmark: 2.1009231964360664 },
  { date: "2024-10-31", thorNet: -1.0482080504978453, benchmark: -0.8923763816983898 },
  { date: "2024-11-30", thorNet: 6.440342726128523, benchmark: 5.963333899181356 },
  { date: "2024-12-31", thorNet: -3.504941142007645, benchmark: -2.409986671923814 },
  { date: "2025-01-31", thorNet: 2.2487757794329877, benchmark: 2.6856441107538265 },
  { date: "2025-02-28", thorNet: -1.0642142307363045, benchmark: -1.2694653550941903 },
  { date: "2025-03-31", thorNet: -4.47711499265917, benchmark: -5.572105438092779 },
  { date: "2025-04-30", thorNet: 3.3087273773143133, benchmark: -0.8670539385401965 },
  { date: "2025-05-31", thorNet: 8.709510288851519, benchmark: 6.28450814422381 },
  { date: "2025-06-30", thorNet: 7.166850630094346, benchmark: 5.139351490660449 },
  { date: "2025-07-31", thorNet: 3.048202954805057, benchmark: 2.303126303147174 },
  { date: "2025-08-31", thorNet: 2.6895819440320823, benchmark: 2.051922930861494 },
  { date: "2025-09-30", thorNet: 4.931352815091894, benchmark: 3.5606330261137575 },
  { date: "2025-10-31", thorNet: 3.1540859405819965, benchmark: 2.38372094003938 },
  { date: "2025-11-30", thorNet: -1.9830566317803222, benchmark: 0.19498758913090164 },
  { date: "2025-12-31", thorNet: 0.15452511862079632, benchmark: 0.07716772751418244 },
  { date: "2026-01-31", thorNet: 1.2035121260061343, benchmark: 1.4737555503431032 },
];

// ─── Helper functions ───

function compoundReturns(returns: number[]): number {
  let cumulative = 1;
  for (const r of returns) {
    cumulative *= 1 + r / 100;
  }
  return (cumulative - 1) * 100;
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

  const mtdThor = data.find((d) => d.date === asOf)!.thorNet;
  const mtdBench = data.find((d) => d.date === asOf)!.benchmark;

  const qtdThor = mtdThor;
  const qtdBench = mtdBench;

  const ytdThor = mtdThor;
  const ytdBench = mtdBench;

  const oneYearThor = compoundReturns(getReturnsForPeriod(data, "2025-02-01", "2026-01-31", "thorNet"));
  const oneYearBench = compoundReturns(getReturnsForPeriod(data, "2025-02-01", "2026-01-31", "benchmark"));

  const threeYearCompThor = compoundReturns(getReturnsForPeriod(data, "2023-02-01", "2026-01-31", "thorNet"));
  const threeYearCompBench = compoundReturns(getReturnsForPeriod(data, "2023-02-01", "2026-01-31", "benchmark"));
  const threeYearThor = annualizeReturn(threeYearCompThor, 36);
  const threeYearBench = annualizeReturn(threeYearCompBench, 36);

  const siMonths = data.length;
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
    sinceInception: { thor: siThor, bench: siBench },
  };
}

// ─── Calendar Year Returns ───

function calcCalendarYears() {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  return years.map((year) => {
    const yearData = monthlyReturns.filter((d) => d.date.startsWith(`${year}-`));
    const thorReturn = compoundReturns(yearData.map((d) => d.thorNet));
    const benchReturn = compoundReturns(yearData.map((d) => d.benchmark));
    return { year, thor: thorReturn, bench: benchReturn };
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

  const thorCumulative = compoundReturns(thorReturns);
  const benchCumulative = compoundReturns(benchReturns);
  const thorAnnReturn = annualizeReturn(thorCumulative, n);
  const benchAnnReturn = annualizeReturn(benchCumulative, n);

  const thorMean = thorReturns.reduce((a, b) => a + b, 0) / n;
  const benchMean = benchReturns.reduce((a, b) => a + b, 0) / n;
  const thorMonthlyStd = Math.sqrt(thorReturns.reduce((sum, r) => sum + (r - thorMean) ** 2, 0) / (n - 1));
  const benchMonthlyStd = Math.sqrt(benchReturns.reduce((sum, r) => sum + (r - benchMean) ** 2, 0) / (n - 1));
  const thorAnnStd = thorMonthlyStd * Math.sqrt(12);
  const benchAnnStd = benchMonthlyStd * Math.sqrt(12);

  const riskFree = 2.0;
  const thorSharpe = (thorAnnReturn - riskFree) / thorAnnStd;
  const benchSharpe = (benchAnnReturn - riskFree) / benchAnnStd;

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
    return maxDD * 100;
  }

  const thorMaxDD = maxDrawdown(thorReturns);
  const benchMaxDD = maxDrawdown(benchReturns);

  const thorBest = Math.max(...thorReturns);
  const thorWorst = Math.min(...thorReturns);
  const benchBest = Math.max(...benchReturns);
  const benchWorst = Math.min(...benchReturns);

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
