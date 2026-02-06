// Pre-processed THOR Dollar ALT performance data
// Source: dollar-alt.csv
// All returns are monthly percentages. NET returns used throughout.
// "As of" date: January 31, 2026 (last complete month)

export interface MonthlyReturn {
  date: string; // YYYY-MM-DD
  thorNet: number; // monthly return in %
  benchmark: number; // monthly return in %
}

// Monthly returns parsed from CSV (through Jan 2026 — excluding partial Feb 2026)
export const monthlyReturns: MonthlyReturn[] = [
  { date: "2018-01-31", thorNet: 2.823742715673272, benchmark: 2.5688496086992085 },
  { date: "2018-02-28", thorNet: -3.439923155204927, benchmark: -2.7144802781805977 },
  { date: "2018-03-31", thorNet: 0.017880714466667058, benchmark: -0.9094893525183334 },
  { date: "2018-04-30", thorNet: -2.8573006581386062, benchmark: -0.6534077401570082 },
  { date: "2018-05-31", thorNet: -0.9284441943486543, benchmark: -0.34450381526105467 },
  { date: "2018-06-30", thorNet: -1.2842299938802815, benchmark: -3.299798079188432 },
  { date: "2018-07-31", thorNet: 0.03934360509005863, benchmark: -2.59995315256758 },
  { date: "2018-08-31", thorNet: 0.3605589586783031, benchmark: -2.986315042391585 },
  { date: "2018-09-30", thorNet: -0.1728878626707564, benchmark: 0.9647240259383683 },
  { date: "2018-10-31", thorNet: 0.04022052300185486, benchmark: 0.679593413446189 },
  { date: "2018-11-30", thorNet: 0.3486254956997836, benchmark: 0.6936359584583274 },
  { date: "2018-12-31", thorNet: 1.209585737844865, benchmark: 6.115593239974726 },
  { date: "2019-01-31", thorNet: 1.8157446796539745, benchmark: 3.5148845744708224 },
  { date: "2019-02-28", thorNet: -1.2444146116414645, benchmark: 0.8412285265921415 },
  { date: "2019-03-31", thorNet: -2.20081532301466, benchmark: -3.412729274039139 },
  { date: "2019-04-30", thorNet: -0.8656307393073437, benchmark: -0.28267371277845843 },
  { date: "2019-05-31", thorNet: 0.5837554299815917, benchmark: -0.7880372454018736 },
  { date: "2019-06-30", thorNet: 4.695758237618053, benchmark: 8.056242471761621 },
  { date: "2019-07-31", thorNet: 2.4562317803881184, benchmark: 1.5938456131923129 },
  { date: "2019-08-31", thorNet: 9.9089235764235, benchmark: 8.270672375201539 },
  { date: "2019-09-30", thorNet: -2.7867668216738473, benchmark: -3.071573847536213 },
  { date: "2019-10-31", thorNet: 1.6780431276142815, benchmark: 4.198109521397431 },
  { date: "2019-11-30", thorNet: -1.9801693497524253, benchmark: -3.2001792175223365 },
  { date: "2019-12-31", thorNet: 2.2460313871138116, benchmark: 4.3618730796911365 },
  { date: "2020-01-31", thorNet: 3.036885585018201, benchmark: 5.353392213434605 },
  { date: "2020-02-29", thorNet: -4.466880030366072, benchmark: -0.614359359042338 },
  { date: "2020-03-31", thorNet: 2.208500627324317, benchmark: -6.119715690486538 },
  { date: "2020-04-30", thorNet: 2.1842421459246086, benchmark: 3.6085242466002976 },
  { date: "2020-05-31", thorNet: 9.101111711353926, benchmark: 5.410622705825419 },
  { date: "2020-06-30", thorNet: 2.447604967986816, benchmark: 1.8410305664411597 },
  { date: "2020-07-31", thorNet: 20.584482283055962, benchmark: 15.527385075103872 },
  { date: "2020-08-31", thorNet: 1.0252974779175528, benchmark: 4.943003376472244 },
  { date: "2020-09-30", thorNet: -1.7218529232228663, benchmark: -7.218313231780293 },
  { date: "2020-10-31", thorNet: -2.546213251014462, benchmark: -0.6917896781618804 },
  { date: "2020-11-30", thorNet: 0.04942269589744974, benchmark: -2.7220967123093853 },
  { date: "2020-12-31", thorNet: 3.7925481679083495, benchmark: 9.011769090786004 },
  { date: "2021-01-31", thorNet: 0.8519665168460921, benchmark: -2.516385906960694 },
  { date: "2021-02-28", thorNet: -1.1012945306120403, benchmark: -2.8716525514840163 },
  { date: "2021-03-31", thorNet: -0.2021859062856235, benchmark: -1.0886822595916334 },
  { date: "2021-04-30", thorNet: -0.0852024172009691, benchmark: 5.2875825813830435 },
  { date: "2021-05-31", thorNet: 4.1832823774003325, benchmark: 5.442246649933424 },
  { date: "2021-06-30", thorNet: -6.765640436935117, benchmark: -6.249991059470417 },
  { date: "2021-07-31", thorNet: -0.017075502947150323, benchmark: -0.19700357776682997 },
  { date: "2021-08-31", thorNet: -0.02063210050825548, benchmark: -3.023084749018412 },
  { date: "2021-09-30", thorNet: -1.920466642278762, benchmark: -7.3808108996935795 },
  { date: "2021-10-31", thorNet: 0.08051001094475652, benchmark: 3.6548832068480586 },
  { date: "2021-11-30", thorNet: -2.224383227318283, benchmark: -3.648747176179079 },
  { date: "2021-12-31", thorNet: 2.77673380937955, benchmark: 3.5930388036483185 },
  { date: "2022-01-31", thorNet: -2.267497917291994, benchmark: 1.327393354750872 },
  { date: "2022-02-28", thorNet: 6.951168653919582, benchmark: 6.636125646417379 },
  { date: "2022-03-31", thorNet: 1.1847193787173582, benchmark: -0.5949054294408951 },
  { date: "2022-04-30", thorNet: -4.289374346616515, benchmark: -3.372189785489954 },
  { date: "2022-05-31", thorNet: -4.0943352801940165, benchmark: -4.8901415932949055 },
  { date: "2022-06-30", thorNet: -3.1393330181084034, benchmark: -3.3635212404970027 },
  { date: "2022-07-31", thorNet: -4.005858848805143, benchmark: -0.11718032948890844 },
  { date: "2022-08-31", thorNet: -0.016939890710387928, benchmark: -5.021728653106261 },
  { date: "2022-09-30", thorNet: -0.016393442622952836, benchmark: 0.22235766589886463 },
  { date: "2022-10-31", thorNet: -0.7977193359956725, benchmark: -2.7733176411896543 },
  { date: "2022-11-30", thorNet: 6.157081214665294, benchmark: 9.660232246477186 },
  { date: "2022-12-31", thorNet: 4.773044213999755, benchmark: 3.156063503674722 },
  { date: "2023-01-31", thorNet: 2.9405109694884857, benchmark: 1.927597987999774 },
  { date: "2023-02-28", thorNet: -6.745460728172326, benchmark: -7.993395294484662 },
  { date: "2023-03-31", thorNet: 4.641814333189198, benchmark: 8.998550432883867 },
  { date: "2023-04-30", thorNet: 0.506915830154453, benchmark: 2.192732207997028 },
  { date: "2023-05-31", thorNet: -0.8340356437814611, benchmark: -3.6154910476536295 },
  { date: "2023-06-30", thorNet: -1.3617273343308867, benchmark: -3.428312121606325 },
  { date: "2023-07-31", thorNet: 1.3569314261781207, benchmark: 4.207013176866026 },
  { date: "2023-08-31", thorNet: -0.7908945912796228, benchmark: -1.4378989389402963 },
  { date: "2023-09-30", thorNet: -2.885343246812977, benchmark: -5.5607797575539575 },
  { date: "2023-10-31", thorNet: 4.339279470893209, benchmark: 4.628648212018782 },
  { date: "2023-11-30", thorNet: 1.5225516000275219, benchmark: 3.566139555652703 },
  { date: "2023-12-31", thorNet: 0.7701407448047703, benchmark: -0.18641421519293155 },
  { date: "2024-01-31", thorNet: -0.8947087374817864, benchmark: -2.933425376161536 },
  { date: "2024-02-29", thorNet: 0.26419157466941456, benchmark: -0.2829561207064679 },
  { date: "2024-03-31", thorNet: 5.310798382596604, benchmark: 8.399562434771157 },
  { date: "2024-04-30", thorNet: 1.8790212822925367, benchmark: 3.465953336247618 },
  { date: "2024-05-31", thorNet: 1.0205566258059129, benchmark: 5.242363010373974 },
  { date: "2024-06-30", thorNet: -0.10321580946401898, benchmark: -0.9712444323682234 },
  { date: "2024-07-31", thorNet: 3.441219122281569, benchmark: 2.5053664943345266 },
  { date: "2024-08-31", thorNet: 1.3558361166576827, benchmark: 1.3546683020191574 },
  { date: "2024-09-30", thorNet: 3.346331938569924, benchmark: 5.888402932058234 },
  { date: "2024-10-31", thorNet: 2.871384474438643, benchmark: 4.691500103687951 },
  { date: "2024-11-30", thorNet: -2.1440302468162864, benchmark: -4.514978213616461 },
  { date: "2024-12-31", thorNet: -0.9666146646754803, benchmark: -3.0463575474644955 },
  { date: "2025-01-31", thorNet: 4.536248888776906, benchmark: 7.4590264775526105 },
  { date: "2025-02-28", thorNet: 1.2330599743704873, benchmark: 0.4152834470312339 },
  { date: "2025-03-31", thorNet: 6.493857340840581, benchmark: 9.27583780736465 },
  { date: "2025-04-30", thorNet: 2.8809783983173576, benchmark: 2.0236346918195647 },
  { date: "2025-05-31", thorNet: -0.05112861188260043, benchmark: 0.8327802994120281 },
  { date: "2025-06-30", thorNet: 0.2306819371544755, benchmark: 3.7239838409202086 },
  { date: "2025-07-31", thorNet: -0.3913991522360605, benchmark: 0.26785292258295623 },
  { date: "2025-08-31", thorNet: 3.020801667991213, benchmark: 5.378292052438449 },
  { date: "2025-09-30", thorNet: 7.280755277173179, benchmark: 13.345216604717747 },
  { date: "2025-10-31", thorNet: 2.2832288145931523, benchmark: 4.019353560236816 },
  { date: "2025-11-30", thorNet: 3.4960477041692473, benchmark: 8.361419477511367 },
  { date: "2025-12-31", thorNet: 1.4305423997499789, benchmark: 10.247223473665779 },
  { date: "2026-01-31", thorNet: 8.214618125323248, benchmark: 13.73532623646112 },
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
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
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
