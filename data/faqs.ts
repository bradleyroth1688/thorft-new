export interface FAQ {
  question: string;
  answer: string;
}

export const homeFaqs: FAQ[] = [
  {
    question: "What is THOR Financial Technologies?",
    answer: "THOR Financial Technologies is a registered investment adviser that provides technology-driven, systematic model portfolios and actively managed ETFs for registered investment advisors (RIAs). The firm uses proprietary signal processing technology to manage risk across all investment strategies, with the ability to move to 100% cash during periods of elevated systemic risk.",
  },
  {
    question: "How does THOR's signal processing technology work?",
    answer: "THOR applies proprietary signal processing techniques — adapted from telecommunications and defense — to financial markets. The technology monitors market conditions in real time and classifies each position as risk-on or risk-off. When positions turn risk-off, they systematically cascade into short-duration treasuries. This removes emotional decision-making and replaces it with disciplined, data-driven execution.",
  },
  {
    question: "What model portfolios does THOR offer?",
    answer: "THOR offers six distinct model portfolios: Sector 100 (S&P 500 sectors), Low Volatility SDQ (S&P 500, Dow Jones, Nasdaq 100 rotation), International (top 10 countries by market cap), Levered Index (enhanced S&P 500 with dual signals), NextGen Stock (8–12 concentrated growth positions), and Dollar ALT (60/40 gold/silver precious metals). All are powered by the same proprietary risk management system.",
  },
  {
    question: "What ETFs does THOR manage?",
    answer: "THOR manages two actively managed ETFs: THLV (Thor Equal Weight Low Volatility ETF), which follows the Sector 100 strategy, and THIR (Thor SDQ Index Rotation ETF), which follows the Low Volatility SDQ strategy.",
  },
  {
    question: "What is the management fee for THOR's model portfolios?",
    answer: "THOR charges a 0.49% management fee on all model portfolios. Additional platform and custodial fees may apply depending on the advisor's custodian and platform.",
  },
  {
    question: "Can THOR's models go to 100% cash?",
    answer: "Yes. A key differentiator of THOR's approach is that all model portfolios can move entirely to short-duration treasuries (effectively 100% cash) when systemic risk is elevated across the board. Most competing strategies cannot or will not make this move.",
  },
  {
    question: "Who is Brad Roth?",
    answer: "Brad Roth is the Founder and Chief Investment Officer of THOR Financial Technologies. He has over two decades of experience in quantitative finance and built THOR's proprietary signal processing methodology. He also hosts the 'Behind the Ticker' podcast (94+ episodes) and authored 'Little Reasons, Big Consequences: Why Your Investment Returns Stink.'",
  },
  {
    question: "Is THOR's model performance real or hypothetical?",
    answer: "All model portfolio performance data is hypothetical and back-tested. It does not reflect actual trading or real client returns. Hypothetical performance has inherent limitations and should not be relied upon as indicative of future results. THOR provides full hypothetical performance disclosures on its website at thorft.com/disclosures/.",
  },
];

export const modelsFaqs: FAQ[] = [
  {
    question: "What is the minimum investment for THOR's model portfolios?",
    answer: "Minimum investments vary by model: Sector 100 requires $25,000, NextGen Stock requires $50,000, and the remaining four models (Low Volatility SDQ, International, Levered Index, and Dollar ALT) each require $5,000.",
  },
  {
    question: "How does THOR's cascading de-risk process work?",
    answer: "THOR's proprietary technology evaluates each position independently for risk-on or risk-off conditions. As individual positions turn risk-off, they systematically rotate to short-duration treasuries while stronger positions are maintained or overweighted. Risk is managed progressively — not as a binary switch — allowing for graduated positioning based on real-time market conditions.",
  },
  {
    question: "What is the difference between THOR's model portfolios and ETFs?",
    answer: "THOR's model portfolios are separately managed strategies available through advisor platforms, while the ETFs (THLV and THIR) are publicly traded funds on exchanges. The Sector 100 model and THLV ETF follow the same strategy, as do the Low Volatility SDQ model and THIR ETF. Models offer more customization; ETFs offer daily liquidity and potential tax efficiency.",
  },
  {
    question: "Can I combine multiple THOR models in one portfolio?",
    answer: "Yes. THOR's models are designed with distinct risk/return profiles and can be combined to create diversified portfolios. For example, an advisor might pair Sector 100 (domestic equity core) with International (global diversification) and Dollar ALT (alternative/metals exposure). Contact THOR for guidance on portfolio construction.",
  },
  {
    question: "What benchmarks does THOR use?",
    answer: "Each model has a specific benchmark: Sector 100, Low Volatility SDQ, Levered Index, and NextGen Stock benchmark against the S&P 500 or comparable growth indices. International benchmarks against a total world stock measure. Dollar ALT benchmarks against a precious metals basket.",
  },
  {
    question: "How often do THOR's models trade?",
    answer: "THOR's signals are evaluated continuously. Trading occurs when signal conditions change — there is no fixed rebalancing schedule. This means the models can adapt in real time to changing market conditions, rather than waiting for quarterly or annual rebalancing dates.",
  },
];

export const aboutFaqs: FAQ[] = [
  {
    question: "Where is THOR Financial Technologies located?",
    answer: "THOR Financial Technologies is headquartered at 327 W Pittsburgh St, Greensburg, PA 15601. The firm was intentionally built outside of Wall Street — Brad Roth founded THOR in the heart of Main Street America.",
  },
  {
    question: "Is THOR a registered investment adviser?",
    answer: "Yes. THOR Financial Technologies, LLC is a registered investment adviser. Registration does not imply a certain level of skill or training.",
  },
  {
    question: "What makes THOR different from other RIA model portfolio providers?",
    answer: "Three key differentiators: (1) Proprietary signal processing technology built in-house, not licensed; (2) The ability for all models to move to 100% cash during systemic risk events; and (3) A risk-first philosophy that prioritizes capital preservation as the foundation for long-term compounding. THOR's systematic approach removes behavioral biases that destroy investor wealth.",
  },
  {
    question: "How do I contact THOR Financial Technologies?",
    answer: "You can reach THOR at welcome@thoranalytics.com or visit thorft.com/contact/ to open the black box. Office hours are Monday through Friday, 9am to 5pm Eastern Time.",
  },
];

export const podcastFaqs: FAQ[] = [
  {
    question: "What is the Behind the Ticker podcast?",
    answer: "Behind the Ticker is a podcast hosted by Brad Roth, Founder and CIO of THOR Financial Technologies. The show features in-depth conversations with the people building today's most innovative ETFs — covering strategy, structure, and the stories behind each fund. It has over 94 episodes.",
  },
  {
    question: "Where can I listen to Behind the Ticker?",
    answer: "Behind the Ticker is available on Spotify, Apple Podcasts, and YouTube. You can also browse all episodes at thorft.com/podcast/.",
  },
  {
    question: "How often are new episodes released?",
    answer: "New episodes of Behind the Ticker are released regularly. Subscribe on Spotify, Apple Podcasts, or YouTube to be notified when new episodes are available.",
  },
];

export const bookFaqs: FAQ[] = [
  {
    question: "What is 'Little Reasons, Big Consequences' about?",
    answer: "It's a 12-chapter book by Brad Roth exploring the behavioral mistakes that destroy investor wealth. The core thesis is that investors underperform due to behavior, not bad strategies. Topics include the performance gap, fear and greed cycles, the buy-and-hold myth, information overload, and why systematic rules beat human intuition.",
  },
  {
    question: "Who wrote 'Little Reasons, Big Consequences'?",
    answer: "The book was written by Brad Roth, Founder and Chief Investment Officer of THOR Financial Technologies. It draws on his two decades of experience in quantitative finance and signal processing.",
  },
  {
    question: "How long is the book?",
    answer: "The book is approximately 10,600 words across 12 chapters. Each chapter stands alone but together they build a complete framework for understanding investment success and failure.",
  },
];
