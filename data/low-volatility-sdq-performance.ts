// Pre-processed THOR Low Volatility SDQ performance data
// Source: low-volatility-sdq.csv
// All returns are monthly percentages. NET returns used throughout.
// "As of" date: January 31, 2026 (last complete month)

export interface MonthlyReturn {
  date: string; // YYYY-MM-DD
  thorNet: number; // monthly return in %
  benchmark: number; // monthly return in %
}

// Monthly returns parsed from CSV (through Jan 2026 — excluding partial Feb 2026)
export const monthlyReturns: MonthlyReturn[] = [
  { date: "2017-01-31", thorNet: 2.4439077800546993, benchmark: 1.7894469840357807 },
  { date: "2017-02-28", thorNet: 4.415829639947999, benchmark: 3.92916067452842 },
  { date: "2017-03-31", thorNet: 0.5173780593198618, benchmark: 0.1257989043003338 },
  { date: "2017-04-30", thorNet: 1.7003047207335253, benchmark: 0.9926151533977245 },
  { date: "2017-05-31", thorNet: 2.0291743792082872, benchmark: 1.4112798548627126 },
  { date: "2017-06-30", thorNet: -0.08620216310278872, benchmark: 0.6374566311541319 },
  { date: "2017-07-31", thorNet: 2.9125463530136786, benchmark: 2.055418846831869 },
  { date: "2017-08-31", thorNet: 1.0024116576990094, benchmark: 0.2917643848062035 },
  { date: "2017-09-30", thorNet: 1.2114454469722702, benchmark: 2.014095202387911 },
  { date: "2017-10-31", thorNet: 3.784382224279814, benchmark: 2.3564375207840937 },
  { date: "2017-11-30", thorNet: 2.999319958531843, benchmark: 3.056568452637687 },
  { date: "2017-12-31", thorNet: 1.2645708092118735, benchmark: 1.208672150395751 },
  { date: "2018-01-31", thorNet: 6.690289456964016, benchmark: 5.635922846333674 },
  { date: "2018-02-28", thorNet: -4.7527835266285905, benchmark: -3.635993102405377 },
  { date: "2018-03-31", thorNet: -0.016939890710387928, benchmark: -2.741579213259515 },
  { date: "2018-04-30", thorNet: -0.016393442622952836, benchmark: 0.5168203228655743 },
  { date: "2018-05-31", thorNet: -0.016939890710387928, benchmark: 2.4309232659832203 },
  { date: "2018-06-30", thorNet: -1.0959771885683312, benchmark: 0.5755070964355014 },
  { date: "2018-07-31", thorNet: 1.3643056498488848, benchmark: 3.704655750899666 },
  { date: "2018-08-31", thorNet: 2.6746199748854727, benchmark: 3.191980596615074 },
  { date: "2018-09-30", thorNet: 0.13822751000087674, benchmark: 0.5948525243612446 },
  { date: "2018-10-31", thorNet: -4.028757851380194, benchmark: -6.91043313925106 },
  { date: "2018-11-30", thorNet: -0.016393442622952836, benchmark: 1.8549310098545435 },
  { date: "2018-12-31", thorNet: -0.016939890710387928, benchmark: -8.793624469624916 },
  { date: "2019-01-31", thorNet: 3.5140593244147977, benchmark: 8.006568639416024 },
  { date: "2019-02-28", thorNet: 3.3410614445194664, benchmark: 3.2415755102406907 },
  { date: "2019-03-31", thorNet: 1.9354258897975596, benchmark: 1.8079025568280782 },
  { date: "2019-04-30", thorNet: 4.040584120551971, benchmark: 4.0852515292578495 },
  { date: "2019-05-31", thorNet: -6.972970004544443, benchmark: -6.37712005681016 },
  { date: "2019-06-30", thorNet: 6.48485985440852, benchmark: 6.959258200516172 },
  { date: "2019-07-31", thorNet: 1.6113626672106252, benchmark: 1.5119426847626238 },
  { date: "2019-08-31", thorNet: -1.6800532280890512, benchmark: -1.674358208975435 },
  { date: "2019-09-30", thorNet: 2.0139285479906732, benchmark: 1.9478810086253517 },
  { date: "2019-10-31", thorNet: 1.346939819451931, benchmark: 2.2104559062549933 },
  { date: "2019-11-30", thorNet: 3.880772755834494, benchmark: 3.619819949735059 },
  { date: "2019-12-31", thorNet: 2.8157452439738107, benchmark: 2.903361103811286 },
  { date: "2020-01-31", thorNet: 0.6949753071315623, benchmark: -0.040375609672160806 },
  { date: "2020-02-29", thorNet: -7.764774951017584, benchmark: -7.916570629618636 },
  { date: "2020-03-31", thorNet: 5.93321156629798, benchmark: -12.464272688031508 },
  { date: "2020-04-30", thorNet: 17.9032489521038, benchmark: 12.698333482924816 },
  { date: "2020-05-31", thorNet: 5.320056362085612, benchmark: 4.764520497914604 },
  { date: "2020-06-30", thorNet: 3.836998451827367, benchmark: 1.7760451352641704 },
  { date: "2020-07-31", thorNet: 6.543743752072695, benchmark: 5.889196394429996 },
  { date: "2020-08-31", thorNet: 8.002975175109794, benchmark: 6.979654675536917 },
  { date: "2020-09-30", thorNet: -5.500714949335073, benchmark: -3.7398351610438363 },
  { date: "2020-10-31", thorNet: -0.016939890710387928, benchmark: -2.4933271665153356 },
  { date: "2020-11-30", thorNet: -0.016393442622952836, benchmark: 10.877677115627327 },
  { date: "2020-12-31", thorNet: 2.3921342644803945, benchmark: 3.7065977850233356 },
  { date: "2021-01-31", thorNet: -1.0309356815913273, benchmark: -1.0190524432310277 },
  { date: "2021-02-28", thorNet: 1.9629621976826828, benchmark: 2.7805560928319872 },
  { date: "2021-03-31", thorNet: 4.856078259255758, benchmark: 4.540526990058691 },
  { date: "2021-04-30", thorNet: 3.7544803615491062, benchmark: 5.291028942465648 },
  { date: "2021-05-31", thorNet: 0.09247470182631723, benchmark: 0.6566232904995584 },
  { date: "2021-06-30", thorNet: 1.0693389396770225, benchmark: 2.247292920571553 },
  { date: "2021-07-31", thorNet: 1.8709098023052873, benchmark: 2.4412667756477546 },
  { date: "2021-08-31", thorNet: 2.177573042174319, benchmark: 2.975982856529491 },
  { date: "2021-09-30", thorNet: -4.413132001382913, benchmark: -4.657524798434665 },
  { date: "2021-10-31", thorNet: 6.388769003499095, benchmark: 7.016356723438655 },
  { date: "2021-11-30", thorNet: -0.7903844188570264, benchmark: -0.8035041478363425 },
  { date: "2021-12-31", thorNet: 3.884434500892775, benchmark: 4.629498638614349 },
  { date: "2022-01-31", thorNet: -7.29354318663532, benchmark: -5.27411422309878 },
  { date: "2022-02-28", thorNet: -0.015300546448082653, benchmark: -2.9516870932291495 },
  { date: "2022-03-31", thorNet: 1.5047346357196734, benchmark: 3.7555532028997973 },
  { date: "2022-04-30", thorNet: -6.423786681696164, benchmark: -8.776879324677811 },
  { date: "2022-05-31", thorNet: -0.016939890710387928, benchmark: 0.22573993886991772 },
  { date: "2022-06-30", thorNet: -4.66250297110653, benchmark: -8.246916349408263 },
  { date: "2022-07-31", thorNet: 7.561623452562105, benchmark: 9.208741837531043 },
  { date: "2022-08-31", thorNet: -3.7750383194611437, benchmark: -4.080215812795174 },
  { date: "2022-09-30", thorNet: -0.8247237244465855, benchmark: -9.24164561192351 },
  { date: "2022-10-31", thorNet: 1.402475922334978, benchmark: 8.12757028384401 },
  { date: "2022-11-30", thorNet: 7.904765052103913, benchmark: 5.559141264701339 },
  { date: "2022-12-31", thorNet: -6.611859909136908, benchmark: -5.757579634044296 },
  { date: "2023-01-31", thorNet: 4.566316442252738, benchmark: 6.2887416039092425 },
  { date: "2023-02-28", thorNet: -2.2923768485560325, benchmark: -2.5142727091917783 },
  { date: "2023-03-31", thorNet: 5.087854497918998, benchmark: 3.7124880037967545 },
  { date: "2023-04-30", thorNet: 1.4933599822528842, benchmark: 1.5974862463315809 },
  { date: "2023-05-31", thorNet: 1.869419420267393, benchmark: 0.46163519517887774 },
  { date: "2023-06-30", thorNet: 5.764881265556654, benchmark: 6.481418552872742 },
  { date: "2023-07-31", thorNet: 3.507928170032204, benchmark: 3.2732813980396847 },
  { date: "2023-08-31", thorNet: -2.4098187702638385, benchmark: -1.6252091122347156 },
  { date: "2023-09-30", thorNet: -4.032509672812656, benchmark: -4.739334538311956 },
  { date: "2023-10-31", thorNet: -1.738771964027741, benchmark: -2.1708530443140694 },
  { date: "2023-11-30", thorNet: 5.3871013436182835, benchmark: 9.134376945313448 },
  { date: "2023-12-31", thorNet: 4.967284207473521, benchmark: 4.56626658600241 },
  { date: "2024-01-31", thorNet: 1.5225622966949848, benchmark: 1.592653159472679 },
  { date: "2024-02-29", thorNet: 4.251658201029773, benchmark: 5.218688604176869 },
  { date: "2024-03-31", thorNet: 2.2214614597796833, benchmark: 3.272386922062931 },
  { date: "2024-04-30", thorNet: -4.942628421378592, benchmark: -4.031948747543956 },
  { date: "2024-05-31", thorNet: 3.76401686543697, benchmark: 5.057997937364012 },
  { date: "2024-06-30", thorNet: 2.3907073177583893, benchmark: 3.528453274959875 },
  { date: "2024-07-31", thorNet: 1.1458833512761224, benchmark: 1.2109401782889107 },
  { date: "2024-08-31", thorNet: -5.369847121296589, benchmark: 2.336571913115537 },
  { date: "2024-09-30", thorNet: 1.4758002840714601, benchmark: 2.1009231964360664 },
  { date: "2024-10-31", thorNet: -1.1660085724411684, benchmark: -0.8923763816983898 },
  { date: "2024-11-30", thorNet: 6.4427566133489655, benchmark: 5.963333899181356 },
  { date: "2024-12-31", thorNet: -2.4341491807072457, benchmark: -2.409986671923814 },
  { date: "2025-01-31", thorNet: 3.161736702063811, benchmark: 2.6856441107538265 },
  { date: "2025-02-28", thorNet: -1.8205255935498266, benchmark: -1.2694653550941903 },
  { date: "2025-03-31", thorNet: -4.32346368079477, benchmark: -5.572105438092779 },
  { date: "2025-04-30", thorNet: 0.009926004918314746, benchmark: -0.8670539385401965 },
  { date: "2025-05-31", thorNet: 6.487978541031314, benchmark: 6.28450814422381 },
  { date: "2025-06-30", thorNet: 5.307369766836145, benchmark: 5.139351490660449 },
  { date: "2025-07-31", thorNet: 1.6514481221637123, benchmark: 2.303126303147174 },
  { date: "2025-08-31", thorNet: 2.0531800486923046, benchmark: 2.051922930861494 },
  { date: "2025-09-30", thorNet: 3.649201449045969, benchmark: 3.5606330261137575 },
  { date: "2025-10-31", thorNet: 3.263480822417897, benchmark: 2.38372094003938 },
  { date: "2025-11-30", thorNet: -0.5118027408163917, benchmark: 0.19498758913090164 },
  { date: "2025-12-31", thorNet: 0.48410872483757306, benchmark: 0.07716772751418244 },
  { date: "2026-01-31", thorNet: 1.5931963926400838, benchmark: 1.4737555503431032 },
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
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
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
