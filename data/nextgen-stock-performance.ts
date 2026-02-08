// Pre-processed THOR NextGen Stock performance data
// Source: nextgen-stock.csv
// All returns are monthly percentages. NET returns used throughout.
// "As of" date: January 31, 2026 (last complete month)

export interface MonthlyReturn {
  date: string; // YYYY-MM-DD
  thorNet: number; // monthly return in %
  benchmark: number; // monthly return in %
}

// Monthly returns parsed from CSV (through Jan 2026 — excluding partial Feb 2026)
export const monthlyReturns: MonthlyReturn[] = [
  { date: "2020-01-31", thorNet: 16.51241834040491, benchmark: 3.4965106110748767 },
  { date: "2020-02-29", thorNet: 2.357501912311033, benchmark: 2.007700811409685 },
  { date: "2020-03-31", thorNet: -6.204933490016362, benchmark: -16.729704782959775 },
  { date: "2020-04-30", thorNet: 33.34717612867175, benchmark: 25.750005874179127 },
  { date: "2020-05-31", thorNet: 9.609413959799262, benchmark: 13.536971314830026 },
  { date: "2020-06-30", thorNet: 26.757737727340334, benchmark: 13.514803306164659 },
  { date: "2020-07-31", thorNet: 8.868163818137088, benchmark: 12.705116874680723 },
  { date: "2020-08-31", thorNet: 12.514195183033895, benchmark: 18.613911596873535 },
  { date: "2020-09-30", thorNet: 1.4183774109659097, benchmark: -3.493165381302221 },
  { date: "2020-10-31", thorNet: 4.005552969781401, benchmark: -1.315190743671013 },
  { date: "2020-11-30", thorNet: 11.556105369364445, benchmark: 23.76910909334553 },
  { date: "2020-12-31", thorNet: 2.6594330805330912, benchmark: 12.60753698908803 },
  { date: "2021-01-31", thorNet: 0.9750401600764347, benchmark: 10.402389559007052 },
  { date: "2021-02-28", thorNet: -6.6189017367177865, benchmark: -5.151332460845593 },
  { date: "2021-03-31", thorNet: -0.021461910120668115, benchmark: -7.985602225887389 },
  { date: "2021-04-30", thorNet: 1.0939490687545295, benchmark: 0.6836046832636278 },
  { date: "2021-05-31", thorNet: -2.651515977230756, benchmark: -7.178912750409405 },
  { date: "2021-06-30", thorNet: 21.628948769919077, benchmark: 16.663689579138996 },
  { date: "2021-07-31", thorNet: -13.943476089121054, benchmark: -8.242837737511643 },
  { date: "2021-08-31", thorNet: -0.20303425617194115, benchmark: 1.6916538238343382 },
  { date: "2021-09-30", thorNet: -6.084328058039512, benchmark: -9.423933716488497 },
  { date: "2021-10-31", thorNet: 4.526376257386788, benchmark: 9.725851008806274 },
  { date: "2021-11-30", thorNet: 3.7069361601814954, benchmark: -12.854560573944285 },
  { date: "2021-12-31", thorNet: -10.129038217742803, benchmark: -9.755989163133538 },
  { date: "2022-01-31", thorNet: -5.326292305794178, benchmark: -20.25586275658904 },
  { date: "2022-02-28", thorNet: -0.015300546448082653, benchmark: -6.575634769456562 },
  { date: "2022-03-31", thorNet: -3.5380849920838786, benchmark: -5.931621113873331 },
  { date: "2022-04-30", thorNet: -5.057197576725003, benchmark: -28.903292306775462 },
  { date: "2022-05-31", thorNet: -6.983653982259074, benchmark: -6.450234150723377 },
  { date: "2022-06-30", thorNet: -13.99768984739531, benchmark: -9.548652754993425 },
  { date: "2022-07-31", thorNet: -0.016939890710387928, benchmark: 13.164489293270432 },
  { date: "2022-08-31", thorNet: -10.407294064693795, benchmark: -7.201409707117645 },
  { date: "2022-09-30", thorNet: -3.080223205107935, benchmark: -9.90929292954389 },
  { date: "2022-10-31", thorNet: -5.085386694751737, benchmark: 1.4577284700991955 },
  { date: "2022-11-30", thorNet: -3.3006485396784746, benchmark: -2.089811560484134 },
  { date: "2022-12-31", thorNet: -13.146949989898271, benchmark: -16.64886690102987 },
  { date: "2023-01-31", thorNet: 22.148961960561664, benchmark: 27.81690370643075 },
  { date: "2023-02-28", thorNet: 9.521600603347459, benchmark: -0.7763594355226777 },
  { date: "2023-03-31", thorNet: 3.9057468629650094, benchmark: 1.8172906925110421 },
  { date: "2023-04-30", thorNet: -0.039474356716595604, benchmark: -10.95688248960479 },
  { date: "2023-05-31", thorNet: 8.323415539885604, benchmark: 12.722735839510179 },
  { date: "2023-06-30", thorNet: 3.397630543803176, benchmark: 9.014542037488615 },
  { date: "2023-07-31", thorNet: 5.758208774651985, benchmark: 14.295389892063891 },
  { date: "2023-08-31", thorNet: -17.014315651476085, benchmark: -13.280460596630872 },
  { date: "2023-09-30", thorNet: 0.374318680061303, benchmark: -9.32572004369745 },
  { date: "2023-10-31", thorNet: 0.40561675825001586, benchmark: -11.570454374162686 },
  { date: "2023-11-30", thorNet: 11.314298342425833, benchmark: 31.442431773122625 },
  { date: "2023-12-31", thorNet: 8.751385311747374, benchmark: 13.576216327105705 },
  { date: "2024-01-31", thorNet: -2.9603586669042614, benchmark: -13.290057793935583 },
  { date: "2024-02-29", thorNet: 15.985473356178769, benchmark: 12.860596698662597 },
  { date: "2024-03-31", thorNet: 1.363955696960173, benchmark: -2.282935127313057 },
  { date: "2024-04-30", thorNet: 0.40678401014104804, benchmark: -13.218865971313665 },
  { date: "2024-05-31", thorNet: 0.43066082574854114, benchmark: -2.323963546387986 },
  { date: "2024-06-30", thorNet: -7.760875574971449, benchmark: 3.533585518398552 },
  { date: "2024-07-31", thorNet: 12.126667101688904, benchmark: 3.594987864640009 },
  { date: "2024-08-31", thorNet: 0.43578702086823906, benchmark: -1.5594140244293508 },
  { date: "2024-09-30", thorNet: 0.39738098485033735, benchmark: 6.046407200972781 },
  { date: "2024-10-31", thorNet: 0.37018489767253193, benchmark: -3.450468261487416 },
  { date: "2024-11-30", thorNet: 15.375596743560372, benchmark: 26.345603659703464 },
  { date: "2024-12-31", thorNet: -7.973831694247602, benchmark: -2.086934780152516 },
  { date: "2025-01-31", thorNet: 4.746668531555254, benchmark: 10.745110995083017 },
  { date: "2025-02-28", thorNet: -8.722378470230552, benchmark: -11.499919785720781 },
  { date: "2025-03-31", thorNet: -10.687141052468585, benchmark: -14.485995895216064 },
  { date: "2025-04-30", thorNet: 2.929991414664146, benchmark: 6.851665495050963 },
  { date: "2025-05-31", thorNet: 13.409298900297495, benchmark: 10.877228700242348 },
  { date: "2025-06-30", thorNet: 10.422297929626634, benchmark: 24.69398327109744 },
  { date: "2025-07-31", thorNet: 9.313017864711682, benchmark: 7.1703246332841974 },
  { date: "2025-08-31", thorNet: 8.21532502773592, benchmark: -0.4911848794559859 },
  { date: "2025-09-30", thorNet: 13.217831566937853, benchmark: 15.128069017736712 },
  { date: "2025-10-31", thorNet: 3.2100087374160147, benchmark: 3.105456657001615 },
  { date: "2025-11-30", thorNet: -10.930323739280057, benchmark: -10.451785679850866 },
  { date: "2025-12-31", thorNet: 0.31891534733869964, benchmark: -3.463882251832473 },
  { date: "2026-01-31", thorNet: 0.2784832328103226, benchmark: -2.6651070499473017 },
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

  const fiveYearCompThor = compoundReturns(getReturnsForPeriod(data, "2021-02-01", "2026-01-31", "thorNet"));
  const fiveYearCompBench = compoundReturns(getReturnsForPeriod(data, "2021-02-01", "2026-01-31", "benchmark"));
  const fiveYearThor = annualizeReturn(fiveYearCompThor, 60);
  const fiveYearBench = annualizeReturn(fiveYearCompBench, 60);

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
    fiveYear: { thor: fiveYearThor, bench: fiveYearBench },
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
