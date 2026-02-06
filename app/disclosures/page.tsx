import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures",
  description: "Important disclosures regarding THOR Financial Technologies' hypothetical performance data, privacy policy, and terms of use.",
};

export default function DisclosuresPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy text-white py-16 md:py-20">
        <div className="container-max mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclosures</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Important information regarding hypothetical performance data, legal disclosures, and terms of use for THOR Financial Technologies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg prose-navy">

            {/* Hypothetical Performance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-800 mb-4" id="hypothetical-performance">
                Important Disclosures on Hypothetical Performance Data
              </h2>
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 mb-6">
                <p className="text-sm text-navy-800 font-semibold mb-2">
                  Performance information for all THOR strategies is back-tested and hypothetical, and does not reflect the returns of any actual investment portfolio. Past performance is no indication of future performance.
                </p>
              </div>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  This material is prepared by THOR Analytics, LLC (&ldquo;THOR&rdquo;) for informational purposes only. It is not intended to serve as a substitute for personalized investment advice or as a recommendation or solicitation for any particular security, strategy or investment product. The performance results provided herein represent the hypothetical back-test of the criteria of the strategy, do not reflect actual trading by THOR and do not represent the actual performance achieved by any THOR client.
                </p>

                <h3 className="text-lg font-bold text-navy-800 mt-6 mb-2">
                  Relevance of the Hypothetical Performance Data
                </h3>
                <p>
                  You are receiving this material as the adviser or provider has made a reasonable determination — through the implementation of certain policies and procedures, and based on available information — that the hypothetical performance data contained herein is relevant to your financial situation and investment objectives.
                </p>

                <h3 className="text-lg font-bold text-navy-800 mt-6 mb-2">
                  Criteria Used and Assumptions Made
                </h3>
                <p>
                  It is assumed that the securities used in the hypothetical back-tested results were available for purchase or sale during the time period presented and the markets were sufficiently liquid to permit the types of trading used. In addition, back-testing assumes purchase and sale prices believed to be attainable. Trades for the hypothetical returns were not actually executed.
                </p>
                <p>
                  In actual trading, the prices attained may or may not be the same as the assumed order prices due to differences in the time the trades were executed and other factors. The results do not represent the impact that material economic and market factors might have on an investment adviser&apos;s decision-making process if the adviser were managing client money. Accordingly, the results may have over or under compensated for the impact, if any, of certain market factors such as lack of liquidity, money flow and other factors. Back-tested hypothetical returns are dependent on the market and economic conditions that existed during the period. Future market or economic conditions can adversely affect the returns.
                </p>

                <h3 className="text-lg font-bold text-navy-800 mt-6 mb-2">
                  Assumptions on Advisory Fees
                </h3>
                <p>
                  The hypothetical performance results reflect the deduction of an investment platform and manager fee of 0.55%. Advisory fees, however, may vary among clients invested in this strategy. Actual performance results will be reduced by fees including, but not limited to, investment management fees and other costs such as custodial, reporting, evaluation services, other expenses and a possible distribution fee. Actual advisory fees and expenses paid may be higher or lower than model advisory fees.
                </p>
                <p>
                  The investment management fee paid to THOR Financial Technologies is separate and distinct from the internal fees and expenses charged by the respective funds. Prospective clients should consider all of these fees and charges when deciding whether to invest in the program. Performance results for this program do not reflect the impact of taxes. Select programs may engage in a significant amount of trading. Gains or losses will generally be short-term in nature; consequently, such programs will likely not be suitable for clients seeking tax efficiency. THOR Financial Technologies does not provide tax or legal advice.
                </p>

                <h3 className="text-lg font-bold text-navy-800 mt-6 mb-2">
                  Risks and Limitations of Hypothetical Performance Data
                </h3>
                <p>
                  Hypothetical or simulated performance results have certain inherent limitations. Unlike an actual performance record, simulated results do not represent actual trading, but are based on the historical returns of the selected investments, indices or investment classes and various assumptions of past and future events. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. Also, since the trades have not actually been executed, the results may have under or overcompensated for the impact of certain market factors. In addition, hypothetical trading does not involve financial risk. No hypothetical trading record can completely account for the impact of financial risk in actual trading.
                </p>
                <p>
                  The following are specific limitations of hypothetical, back-tested performance: (a) the results do not reflect the results of actual trading using investor assets, but were achieved by means of the retroactive application of each of the referenced underlying Models, which may have been chosen with the benefit of hindsight; (b) back-tested performance may not reflect the impact that any material market or economic factors might have had on an adviser&apos;s use of the hypothetical Model if the Model had been used during the period to actually manage investor assets; (c) such performance does not reflect the adviser&apos;s decision making process if the adviser were actually managing a client&apos;s portfolio; (d) back-tested performance does not reflect actual client asset trading and cannot accurately account for trading costs and the ability to withstand losses; and (e) for various reasons including variances in account holdings, variances in the investment management fee incurred, market fluctuation, the date on which a client engages the adviser&apos;s investment management services, and any account contributions or withdrawals, the performance of a specific adviser&apos;s managed account may experience investment results that are materially different from those reflected by the respective Model.
                </p>
                <p>
                  Routine maintenance of the strategy — which includes updates to the strategy settings, fund substitutions, and the incorporation of recent market data into computational back-tests, among other adjustments — is performed at regular intervals. Hypothetical back-tested performance also differs from actual performance because it is achieved through the retroactive application of screening designed with the benefit of hindsight.
                </p>
              </div>
            </div>

            {/* Benchmark */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-800 mb-4" id="benchmark">
                Benchmark Disclosures
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  The S&P 500 index is widely regarded as the best single gauge of large-cap U.S. equities. The index includes 500 companies and covers approximately 80% of available market capitalization. The index results display the total return and assume the reinvestment of all dividends and interest. Investors cannot invest directly in the index and the index returns do not reflect any fees, expenses, or sales charges. The S&P 500 is shown for general market comparison purposes and does not represent the strategy. Past performance is not indicative of future results.
                </p>
                <p>
                  Any information and data pertaining to an index contained herein relate only to the index itself and not to any asset management product based on the index.
                </p>
              </div>
            </div>

            {/* Additional */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-800 mb-4" id="additional">
                Additional Disclosures
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  All information and data are generally based on information and data from third party sources. Neither the adviser nor any of its affiliates, officers, owners, employees, investment advisory representatives, licensors or contractors shall be liable for any error, omission, inaccuracy, or incompleteness in the material provided herein.
                </p>
                <p>
                  The services are not intended and should not be construed as financial or investment advice, a recommendation or promotion. Past performance does not guarantee future performance. Distribution prohibited without prior permission.
                </p>
                <p>
                  THOR Financial Technologies, LLC is a registered investment adviser. Registration does not imply a certain level of skill or training. All investments involve risk, including possible loss of principal.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-800 mb-4" id="privacy">
                Privacy Policy
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  THOR Financial Technologies, LLC (&ldquo;THOR,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This privacy policy describes the types of information we collect, how we use it, and the measures we take to protect it.
                </p>
                <p>
                  <strong>Information We Collect:</strong> We may collect personal information such as your name, email address, phone number, and firm name when you voluntarily provide it through our contact forms, whitepaper downloads, or other interactions with our website.
                </p>
                <p>
                  <strong>How We Use Information:</strong> We use the information collected to respond to your inquiries, provide requested materials, communicate about our services, and improve our website. We do not sell or share your personal information with third parties for their marketing purposes.
                </p>
                <p>
                  <strong>Data Security:</strong> We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no data transmission over the Internet or electronic storage method is 100% secure.
                </p>
                <p>
                  <strong>Contact:</strong> For privacy-related questions, contact us at welcome@thoranalytics.com.
                </p>
              </div>
            </div>

            {/* Terms of Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-800 mb-4" id="terms">
                Terms of Use
              </h2>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  By accessing and using this website (thorft.com), you agree to the following terms and conditions. This website is operated by THOR Financial Technologies, LLC.
                </p>
                <p>
                  <strong>Informational Purposes Only:</strong> The content on this website is provided for general informational purposes only. Nothing on this site constitutes investment advice, a recommendation, or an offer to buy or sell securities.
                </p>
                <p>
                  <strong>No Guarantee:</strong> While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind regarding the completeness, accuracy, or reliability of the content.
                </p>
                <p>
                  <strong>Hypothetical Performance:</strong> All model portfolio performance data presented on this website or in downloadable materials is hypothetical and back-tested. It does not represent actual trading results. Please review our full hypothetical performance disclosures above.
                </p>
                <p>
                  <strong>Intellectual Property:</strong> All content, trademarks, and intellectual property on this website are the property of THOR Financial Technologies, LLC and are protected by applicable laws.
                </p>
                <p>
                  <strong>Governing Law:</strong> These terms are governed by the laws of the Commonwealth of Pennsylvania.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
