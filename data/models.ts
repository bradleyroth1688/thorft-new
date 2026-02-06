export interface ModelData {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  howItWorks: string[];
  keyFeatures: { title: string; description: string }[];
  allocation: string;
  benchmark: string;
  minimum: string;
  etf?: { ticker: string; name: string; index?: string };
  inception?: string;
  factsheetUrl: string;
  category: string;
}

export const models: ModelData[] = [
  {
    slug: "sector-100",
    name: "Sector 100",
    tagline: "S&P 500 Sector-Based Adaptive Strategy",
    description: [
      "The Sector 100 model is THOR's flagship strategy, designed to capture the growth potential of S&P 500 sectors while systematically managing downside risk. The portfolio trades sector-based ETFs representing the major sectors of the S&P 500, equally weighted across each position.",
      "THOR's proprietary technology continuously evaluates each sector's risk profile. As individual sectors rotate toward risk-off conditions, the model systematically de-risks — overweighting the strongest performing sectors and moving weaker positions to short-duration treasuries.",
      "When a majority of sectors signal risk-off, the portfolio can move entirely to 100% short-duration treasuries, providing full capital protection during periods of elevated systemic risk. This cascading de-risk approach allows the model to participate in upside markets while seeking to avoid significant drawdowns.",
    ],
    howItWorks: [
      "Equally weighted S&P 500 sector ETF positions",
      "Proprietary signal processing evaluates each sector independently",
      "Risk-off sectors rotate to short-duration treasuries",
      "Best performing sectors receive overweight allocation",
      "As majority turns risk-off, portfolio raises cash systematically",
      "Can move to 100% short-duration treasuries in extreme conditions",
    ],
    keyFeatures: [
      { title: "Broad Sector Exposure", description: "Full coverage across S&P 500 sectors with equal weighting eliminates concentration risk" },
      { title: "Adaptive De-Risking", description: "Proprietary signals independently evaluate each sector for risk-on/risk-off conditions" },
      { title: "100% Cash Capability", description: "Can move entirely to short-duration treasuries when systemic risk is elevated" },
      { title: "Performance Overweighting", description: "Strongest sectors receive additional allocation as weaker sectors rotate out" },
    ],
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "S&P 500",
    minimum: "$25,000",
    etf: { ticker: "THLV", name: "Thor Equal Weight Low Volatility ETF", index: "Thor Low Volatility Index" },
    inception: "2009",
    factsheetUrl: "/documents/thor-sector-100-factsheet.pdf",
    category: "Domestic Equity",
  },
  {
    slug: "low-volatility-sdq",
    name: "Low Volatility SDQ",
    tagline: "Three-Index Rotation with Cascading Risk Management",
    description: [
      "The Low Volatility SDQ model trades the three largest U.S. equity indices — the S&P 500, Dow Jones Industrial Average, and Nasdaq 100 — using an equally weighted 33/33/33 allocation across each index.",
      "THOR's proprietary technology evaluates each index independently and dynamically rotates allocation toward the best-performing index while systematically de-risking positions that signal elevated risk. The cascading structure ensures risk is managed progressively rather than as a binary on/off switch.",
      "The risk-off cascade works as follows: when one index turns risk-off, the remaining two split the allocation 50/50. When two indices turn risk-off, the portfolio moves to 50% in the remaining index and 50% cash. When all three signal risk-off, the portfolio moves to 100% short-duration treasuries.",
    ],
    howItWorks: [
      "Equally weighted across S&P 500, Dow Jones, and Nasdaq 100",
      "Proprietary signals evaluate each index independently",
      "One index risk-off: remaining two split 50/50",
      "Two indices risk-off: 50% remaining index / 50% cash",
      "All three risk-off: 100% short-duration treasuries",
      "Overweights best-performing index in real time",
    ],
    keyFeatures: [
      { title: "Three-Index Diversification", description: "Broad U.S. equity exposure across the three most followed market indices" },
      { title: "Cascading De-Risk", description: "Progressive risk reduction as individual indices signal elevated risk conditions" },
      { title: "Low Minimum", description: "Accessible $5,000 minimum makes this strategy available to a wide range of accounts" },
      { title: "Dynamic Overweighting", description: "Best-performing index receives increased allocation as weaker indices rotate out" },
    ],
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "S&P 500",
    minimum: "$5,000",
    etf: { ticker: "THIR", name: "Thor SDQ Index Rotation ETF", index: "Thor SDQ Rotation Index" },
    factsheetUrl: "/documents/thor-low-volatility-sdq-factsheet.pdf",
    category: "Domestic Equity",
  },
  {
    slug: "international",
    name: "International",
    tagline: "Global Equity Strategy Across Top Countries",
    description: [
      "The International model applies THOR's proven systematic methodology to global markets. The strategy trades country-specific equity ETFs representing the top 10 countries by market capitalization and economic output, including Japan, United Kingdom, Germany, France, South Korea, Italy, and others.",
      "Each country allocation is equally weighted, and THOR's proprietary technology evaluates each position independently for risk-on or risk-off conditions. The same cascading de-risk approach used in domestic strategies applies here — as individual country positions turn risk-off, they rotate to short-duration treasuries.",
      "This structure provides diversified international equity exposure while maintaining the systematic risk management that defines all THOR strategies. The model can move to 100% cash when global risk conditions are elevated across the board.",
    ],
    howItWorks: [
      "Equally weighted country ETF positions across top 10 nations by market cap",
      "Countries include Japan, UK, Germany, France, South Korea, Italy, and more",
      "Proprietary signals evaluate each country position independently",
      "Risk-off positions cascade into short-duration treasuries",
      "Same tiered de-risk approach as domestic strategies",
      "Can move to 100% cash during global systemic risk events",
    ],
    keyFeatures: [
      { title: "Global Diversification", description: "Exposure to the world's largest economies outside a single domestic market" },
      { title: "Country-Level Risk Management", description: "Each country position is independently evaluated for risk conditions" },
      { title: "Equal Weight Approach", description: "No single country dominates the portfolio, reducing concentration risk" },
      { title: "Full Cash Capability", description: "Same ability to move to 100% short-duration treasuries during global risk events" },
    ],
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "Total World Stock",
    minimum: "$5,000",
    factsheetUrl: "/documents/thor-international-factsheet.pdf",
    category: "International Equity",
  },
  {
    slug: "levered-index",
    name: "Levered Index",
    tagline: "Enhanced S&P 500 Exposure with Dual-Signal Framework",
    description: [
      "The Levered Index model is designed for advisors seeking enhanced exposure to the S&P 500 with built-in risk management. The strategy uses a dual-signal framework — combining THOR's standard proprietary signal with a faster-responding signal — to determine positioning across three distinct states.",
      "When both signals indicate risk-on, the portfolio allocates to both index and leveraged index ETFs, providing up to approximately 140% S&P 500 exposure. When the standard signal remains risk-on but the fast signal turns risk-off, the portfolio shifts to 60% index exposure and 40% buffer ETF exposure, maintaining market participation with downside cushioning.",
      "When both signals turn risk-off, the portfolio moves to 100% buffer ETF exposure, providing downside protection while maintaining some upside capture potential. This three-state framework allows the model to be aggressive when conditions warrant, moderate when uncertainty rises, and defensive when risk is elevated.",
    ],
    howItWorks: [
      "Dual-signal framework: standard THOR signal + fast-response signal",
      "Both risk-on: up to ~140% S&P 500 exposure via index + leveraged ETFs",
      "Standard on / fast off: 60% index + 40% buffer ETF",
      "Both risk-off: 100% buffer ETF (downside protection + upside capture)",
      "Three distinct states provide graduated risk management",
      "Combines leverage, standard exposure, and buffered protection",
    ],
    keyFeatures: [
      { title: "Dual-Signal Framework", description: "Two proprietary signals provide more nuanced risk assessment than single-signal approaches" },
      { title: "Enhanced Upside", description: "Up to ~140% S&P 500 exposure when both signals confirm risk-on conditions" },
      { title: "Buffer Protection", description: "Buffer ETF allocation provides downside cushioning with upside capture when risk is moderate" },
      { title: "Three-State Design", description: "Graduated positioning — aggressive, moderate, and defensive — instead of binary on/off" },
    ],
    allocation: "Up to 140% Equity Exposure",
    benchmark: "S&P 500",
    minimum: "$5,000",
    factsheetUrl: "/documents/thor-levered-index-factsheet.pdf",
    category: "Enhanced Domestic Equity",
  },
  {
    slug: "nextgen-stock",
    name: "NextGen Stock",
    tagline: "Concentrated High-Growth Portfolio with Systematic De-Risk",
    description: [
      "The NextGen Stock model is THOR's higher-octane satellite strategy, designed for advisors seeking concentrated exposure to high-growth and disruptive companies. The portfolio holds 8–12 positions in innovative companies with significant growth potential.",
      "Despite the concentrated, growth-oriented nature of the holdings, the same proprietary risk management methodology applies. THOR's technology evaluates each position independently and cascades from full equity positions down to 100% short-duration treasuries as risk signals escalate.",
      "This strategy is designed as a satellite allocation — complementing core holdings with higher-conviction, higher-growth exposure while maintaining the systematic risk management that prevents catastrophic drawdowns common in concentrated growth portfolios.",
    ],
    howItWorks: [
      "Concentrated portfolio of 8–12 high-growth, disruptive stocks",
      "Proprietary technology evaluates each position for risk conditions",
      "Same laddering/cascading de-risk approach as other THOR strategies",
      "Cascades from full positions down to 100% short-duration treasuries",
      "Designed as a satellite strategy complementing core allocations",
      "Higher octane exposure with systematic risk management guardrails",
    ],
    keyFeatures: [
      { title: "High-Conviction Positions", description: "8–12 concentrated positions in the most innovative and disruptive companies" },
      { title: "Growth Exposure", description: "Focused on companies with significant growth potential and market disruption capability" },
      { title: "Systematic Risk Guard", description: "Same proprietary de-risk cascade prevents the catastrophic losses typical of concentrated growth" },
      { title: "Satellite Strategy", description: "Designed to complement core holdings, not replace them — adds higher-octane exposure with discipline" },
    ],
    allocation: "100/0 Equity/Fixed Income",
    benchmark: "Growth Innovation",
    minimum: "$50,000",
    factsheetUrl: "/documents/thor-nextgen-stock-factsheet.pdf",
    category: "Growth Equity",
  },
  {
    slug: "dollar-alt",
    name: "Dollar ALT",
    tagline: "Precious Metals Strategy with Systematic Risk Management",
    description: [
      "The Dollar ALT model provides systematic exposure to precious metals — specifically gold and silver — as a dollar diversification and alternative asset strategy. When risk-on, the portfolio maintains a 60% gold / 40% silver allocation through precious metals ETFs.",
      "THOR's proprietary technology monitors each metals position independently. When either gold or silver signals risk-off, that position rotates to short-duration treasuries (cash). This prevents the portfolio from holding metals during periods of weakness while maintaining exposure during periods of strength.",
      "The Dollar ALT strategy serves as a true alternative allocation within an advisor's portfolio construction — providing non-correlated exposure to precious metals with the same systematic risk management framework applied across all THOR models.",
    ],
    howItWorks: [
      "Risk-on allocation: 60% gold ETF / 40% silver ETF",
      "Proprietary signals evaluate gold and silver independently",
      "Risk-off on either metal: that position rotates to short-term treasuries",
      "Both risk-off: 100% short-duration treasuries",
      "Dollar diversification through precious metals exposure",
      "Non-correlated alternative asset with systematic risk management",
    ],
    keyFeatures: [
      { title: "Dollar Diversification", description: "Precious metals provide non-correlated exposure and potential hedge against currency debasement" },
      { title: "60/40 Gold/Silver", description: "Balanced precious metals allocation with gold as the anchor and silver for additional upside" },
      { title: "Independent Evaluation", description: "Each metal is evaluated separately — silver can be risk-off while gold remains risk-on, and vice versa" },
      { title: "Alternative Asset Class", description: "True alternative strategy that adds non-equity, non-fixed income diversification to portfolios" },
    ],
    allocation: "60/40 Gold/Silver",
    benchmark: "Precious Metals Basket",
    minimum: "$5,000",
    factsheetUrl: "/documents/thor-dollar-alt-factsheet.pdf",
    category: "Alternatives",
  },
];

export function getModelBySlug(slug: string): ModelData | undefined {
  return models.find((m) => m.slug === slug);
}
