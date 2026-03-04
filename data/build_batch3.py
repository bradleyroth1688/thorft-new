#!/usr/bin/env python3
"""Build blog-posts-batch3.json with all 25 rewritten episodes (indexes 50-74)."""

import json

with open('/Users/bradleyroth/clawd/thorft-new/data/blog-posts.json', 'r') as f:
    data = json.load(f)

new_content = {}

# === INDEX 50: Andrew Skatoff (Bancreek) ===
new_content[50] = """<p>Andrew Skatoff founded Bancreek in 2021 after spending years in the family office world learning how to compound capital over long time horizons. A Columbia Business School grad from the value investing program (class of 2009, right into the teeth of the financial crisis), Skatoff built a data-driven investment process around identifying structurally advantaged businesses. On this episode, he walked through how Bancreek combines fundamental analysis with quantitative modeling to find companies with durable competitive advantages, and why he decided to package that process into two ETFs.</p>

<p>Bancreek runs two ETFs: BCUS (US large-cap) and BCIL (international large-cap ex-US). Both hold roughly 30 top-ranked businesses selected through a proprietary system that scores companies on structural advantages like distribution pipelines, brand equity, and network effects. The firm employs a chief data scientist and uses modeling and simulation to analyze thousands of data points, but the core philosophy is old-school value investing: find businesses that can compound for years because their competitive position is hard to replicate. The portfolios refresh monthly to incorporate the latest signals from Bancreek's quantitative engine.</p>

<p>What makes Skatoff's approach different from typical quant strategies is the emphasis on long-term compounding rather than short-term momentum or factor tilts. The system is designed to identify companies whose structural advantages create sustainable growth, not just temporary price dislocations. Bancreek publishes data visualization tools on their website so advisors can see exactly how the ranking system works and what's driving portfolio construction at any given time.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Bancreek's two ETFs (BCUS and BCIL) each hold about 30 companies ranked by proprietary structural advantage scores, refreshed monthly</li>
<li>The investment process combines Columbia value investing principles with quantitative modeling and a dedicated data science team</li>
<li>Skatoff's family office background shaped the philosophy: this is built for long-term capital compounding, not short-term trading</li>
<li>Structural advantages the system targets include distribution pipelines, brand equity, and network effects that are difficult for competitors to replicate</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 51: Danielle Gilbert (Panagram) ===
new_content[51] = """<p>Danielle Gilbert spent 18 years on the sell side covering structured credit at UBS before joining Panagram, a specialized structured credit manager that runs about $17 billion in assets with more than half in CLO-related investments. On this episode, she broke down what CLOs actually are, why they're fundamentally different from the subprime mortgage products that blew up in 2008, and how Panagram's two ETFs give advisors access to institutional-grade structured credit at different risk levels.</p>

<p>CLOs pool senior secured loans from large corporations into tranches with different risk and return profiles, from AAA down to equity. Panagram isn't a CLO manager; they specialize in investing in CLO structures built by other managers, which is an important distinction. The investment team has been working together since 2014, first managing capital for Eldridge before launching Panagram in 2021. Their two ETFs target different parts of the CLO stack: CLOZ focuses on BBB and BB tranches with yields around 9%, while CLOX targets AAA tranches for more conservative allocations. Both offer floating rate exposure, which means they naturally hedge against rising rates.</p>

<p>Gilbert emphasized that CLOs have historically delivered higher yields with lower correlation to traditional fixed income and equities. The floating rate structure means duration risk is minimal, and the senior secured nature of the underlying loans means recovery rates in default scenarios have been significantly higher than unsecured corporate debt. Advisors are using CLOZ as a high-yield replacement, CLOX as a conservative anchor, or both in a barbell approach.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Panagram manages ~$17B with the majority in CLO investments; the team has worked together since 2014</li>
<li>CLOZ (BBB/BB tranches, ~9% yield) and CLOX (AAA tranches) offer two distinct entry points into the CLO market</li>
<li>CLOs are backed by senior secured corporate loans with historically low default rates and high recovery rates, fundamentally different from subprime mortgage products</li>
<li>Floating rate exposure provides a natural hedge against rising rates and adds diversification to fixed income allocations dominated by duration risk</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 52: Yang Tang (Arch Indices / VWI) ===
new_content[52] = """<p>Yang Tang co-founded Arch Indices in August 2022 after spending years in commodity sales and macro solutions at Barclays, Morgan Stanley, and Citi. His firm takes a different approach to portfolio construction: instead of weighting by market cap or equal weighting, Arch uses variance optimization to build portfolios that deliver specific outcomes (like income) with the least possible volatility. Their flagship ETF, VWI, puts that theory into practice by combining dividend-paying stocks and bond ETFs into a single product targeting high income with low volatility.</p>

<p>The math behind VWI is rooted in modern portfolio theory, but the implementation is practical. The system evaluates assets on two dimensions: yield relative to underlying volatility, and correlation to other holdings. From a universe of roughly 600 stocks and a set of bond ETFs covering Treasuries, corporates, mortgage-backed securities, AAA CLOs, and various duration sectors, the optimization engine selects holdings that maximize income while minimizing portfolio-level volatility. The result is a yield of roughly 6.8% with meaningfully lower volatility than comparable income strategies. The portfolio rebalances quarterly, and allocations shift based on real market conditions. Tang pointed out that when bond volatility spiked during the rate hiking cycle, the system adjusted accordingly, sometimes increasing bond allocations when yields rose but only when volatility didn't rise proportionally.</p>

<p>For advisors focused on retirement planning, VWI addresses sequence of returns risk directly: high income with low drawdowns is exactly what retirees need to avoid selling into down markets. Arch also offers the strategy through SMAs via a partnership with Quorus for advisors who want more customization.</p>

<h2>Key Takeaways</h2>
<ul>
<li>VWI uses variance optimization to deliver ~6.8% yield with lower volatility than traditional income strategies</li>
<li>The portfolio combines dividend-paying stocks with bond ETFs across multiple fixed income sectors, rebalancing quarterly based on market-observed volatility and correlation</li>
<li>The strategy is built specifically to address sequence of returns risk for retirement-focused investors</li>
<li>Arch also offers the strategy through SMAs via Quorus for advisors who want a more tailored implementation</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 53: Burke Ashenden (Innovator ETFs) ===
new_content[53] = """<p>Burke Ashenden started his career in ETF trading before moving to the issuer side at Innovator ETFs, where he now runs capital markets. Innovator was founded by Bruce Bond and John Souther with a singular focus: Defined Outcome ETFs. No diversified product lineup, no side projects. Just buffers. On this episode, Ashenden broke down how the products actually work, what the options mechanics look like under the hood, and why the 100% buffer ETFs have become their fastest-growing category.</p>

<p>Innovator's Defined Outcome ETFs use baskets of flex options to provide predetermined downside buffers (9%, 15%, or 30%) in exchange for capped upside over quarterly or annual periods. The 100% buffer products provide complete downside protection, essentially eliminating principal risk while still offering equity-linked upside. Ashenden explained that the defined outcome is realized at the end of the outcome period, not in real time. If the S&P hits your cap in the first month, the ETF's NAV won't reflect that full gain immediately because of the time value embedded in the options. That's a critical distinction for setting expectations. At reset, the fund rolls into a new set of options without triggering taxable events, so investors can stay in the structure and compound without realizing gains.</p>

<p>The use cases are broader than most people think. Ashenden sees advisors using 100% buffer ETFs to get clients off the sidelines when they're nervous about investing at all-time highs. With roughly 30% of advisor portfolios sitting in cash or cash equivalents, the pitch is straightforward: get equity exposure with no principal risk. Others use buffer ETFs as a fixed income alternative, particularly when a 9% annual cap on the S&P exceeds the average historical S&P return. Innovator also offers model portfolios combining different buffer ETFs to create customized risk-return profiles across conservative, moderate, and growth allocations.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Innovator offers 9%, 15%, 30%, and 100% buffer levels across quarterly and annual outcome periods, all built using flex options</li>
<li>The defined outcome is realized at period end, not in real time. Mid-period buyers should understand that NAV movement lags the underlying index</li>
<li>100% buffer ETFs are the fastest-growing category, targeting the estimated 30% of advisor portfolio assets sitting in cash</li>
<li>ETF resets roll into new options without taxable events, allowing investors to stay in the structure and compound over multiple periods</li>
<li>A 9% annual cap on the S&P exceeds the average historical S&P return, making these a compelling alternative to traditional fixed income for conservative allocations</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 54: Jerry Parker (Chesapeake Capital) ===
new_content[54] = """<p>Jerry Parker spent 40 years building Chesapeake Capital around a single conviction: systematic trend following is the best approach to markets. Trained directly by Richard Dennis as one of the original Turtles in December 1983, Parker founded Chesapeake in February 1988 and has since transitioned the firm from hedge fund to ETF, cutting fees from the traditional one-and-twenty structure to roughly 100 basis points. His conversation with Brad covered the mechanics, the philosophy, and the behavioral discipline that makes trend following work when so many other approaches don't.</p>

<p>Chesapeake's strategy uses only price data. Moving averages and breakouts generate entry and exit signals across roughly 400 instruments simultaneously, including individual stocks (about half the portfolio, long and short), currencies, commodities, bond futures, crypto, and specialty names like lithium and uranium. Parker takes every trade that looks like a trend because missing one of the 20 to 40 big moves in any given year can materially damage returns. The win rate is low by design. Maximum loss per trade is 10 to 15 basis points, and the portfolio is structured so that the handful of outsized winning trades more than offset hundreds of small losses. Average holding period runs about a year, with some trends lasting two or three years.</p>

<p>What Parker learned from Dennis shaped everything. The fundamental lesson was that trading requires rules covering every situation so discipline isn't contingent on how you feel on any given day. Dennis told the Turtles they should "love their losses," meaning you embrace everything about the system, including its low win percentage and the periods where it gives back profits. Parker's other distinctive edge is trading individual stocks rather than index futures. In a broadly rising market, there are always individual names in short-term downtrends, and that long/short diversification doesn't show up in index-level data.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Chesapeake trades ~400 instruments using only price signals. Missing even one major trend can significantly damage annual returns, so the system takes every trade</li>
<li>The low win rate is a feature: small predetermined losses on most trades allow the big outlier moves to run without interference</li>
<li>Trading individual stocks rather than indices captures long/short diversification that index futures miss</li>
<li>Average holding periods of roughly a year reflect backtested evidence that patience captures more of each trend than shorter-term systems</li>
<li>Richard Dennis's original teaching: discipline comes from the rules, not from how you feel on any given day</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 55: Bob Elliott (HFND) ===
new_content[55] = """<p>Bob Elliott spent years at Bridgewater Associates before founding Unlimited, a firm built on a specific thesis: hedge fund strategies deliver solid risk-adjusted returns, but the traditional fee structure eats most of the benefit before it reaches investors. HFND, Unlimited's flagship ETF, uses machine learning to replicate the return profile of multi-strategy hedge funds at a fraction of the cost. Elliott walked through why the $5 trillion hedge fund industry's returns are worth capturing and how his team built the technology to do it.</p>

<p>The core problem Elliott identified is straightforward. Hedge fund strategies have historically delivered positive returns with lower volatility than equities, but fees of one-and-twenty (or higher) consume 500 to 600 basis points in a good year. Elliott's approach uses a systematic process that takes in manager performance data, asset return information, and allocation signals to build the highest-probability portfolio replicating what multi-strategy hedge funds are actually doing. The model covers roughly 70 liquid markets globally, the same opportunity set that the industry invests in. Between Elliott and his co-founder, they bring almost 50 years of experience building proprietary hedge fund strategies.</p>

<p>What makes the replication approach work is that broad hedge fund exposure, stripped of fees, has historically offered something most asset classes don't: returns that move independently of both stocks and bonds. Elliott positions HFND as a core alternatives allocation, not a replacement for any single hedge fund but as a way to capture the category's return profile in a low-cost, tax-efficient, fully liquid ETF wrapper.</p>

<h2>Key Takeaways</h2>
<ul>
<li>HFND uses machine learning to replicate multi-strategy hedge fund returns across ~70 liquid global markets</li>
<li>Traditional hedge fund fees (1-and-20+) can consume 500-600 bps annually, often eliminating most of the benefit for investors</li>
<li>The founding team brings almost 50 years of combined experience building proprietary hedge fund strategies, including time at Bridgewater Associates</li>
<li>Hedge fund return profiles have historically offered genuine diversification from both stocks and bonds, but only when fee drag doesn't eliminate the edge</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 56: Andrew Beer (DBMF) ===
new_content[56] = """<p>Andrew Beer has spent three decades in the hedge fund world and the last 15 years at DBI building a firm that replicates what hedge funds do well at a fraction of the cost. DBI manages about $2.5 billion entirely through ETFs and mutual funds. On this episode, Beer made the case for managed futures not as an abstract statistical argument but as a practical solution to the portfolio construction problem created by the breakdown of the 60/40 model. His paper, "The Great 6040 Head Fake," lays out the thesis in detail.</p>

<p>Beer's central argument: the 60/40 portfolio's performance from 2000 to 2020 was an anomaly. During that stretch, bonds never drew down more than 4%, had low volatility, and moved consistently opposite to equities. When inflation returned, bond max drawdowns went from 3.8% to over 17%, volatility doubled, and research from Verdad shows that when inflation stays above 2.5%, stocks and bonds historically move in the same direction. The diversification engine that powered two decades of 60/40 returns is broken. Managed futures has a 50-year track record of moving independently of both stocks and bonds, and DBI's replication model captures broad category exposure at roughly one-tenth the cost of traditional hedge fund access.</p>

<p>Beer was unusually honest about how the advisor conversation actually plays out. The math showing a 10% allocation reduces a drawdown from 18% to 16% is technically correct but not compelling when clients are panicking. The real value is behavioral: it shows clients the portfolio was built for exactly this kind of environment. But Beer also acknowledged the flip side. Clients who track line items will be frustrated when equities surge and managed futures lags. He calls himself a bit of a rogue on allocation sizing, arguing lower levels than most industry commentary suggests because an oversized position that triggers client panic defeats the purpose.</p>

<h2>Key Takeaways</h2>
<ul>
<li>The 60/40 portfolio's strong performance from 2000-2020 depended on structural conditions (falling rates, contained inflation, negative stock/bond correlation) that have since reversed</li>
<li>When inflation exceeds 2.5%, stocks and bonds have historically moved together, eliminating the core diversification benefit</li>
<li>DBI's replication model captures managed futures exposure at roughly one-tenth the cost of traditional hedge fund access</li>
<li>The compelling argument for managed futures is behavioral, not statistical: it proves the portfolio was built to work when everything else stops working</li>
<li>Right-sizing the allocation matters: large enough to show up in statements, small enough that underperformance periods don't trigger redemptions</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 57: Matt Kaufman (Calamos/CPSM) ===
new_content[57] = """<p>On May 1, 2024, the day it launched, Brad sat down with Matt Kaufman to break down a Calamos product that had been years in the making. The fund offers 100% downside protection linked to the S&P 500 with a capped upside of 9.81%, made possible by a higher-rate environment that couldn't have supported the structure a few years earlier. Kaufman spent over 20 years in the ETF space including time building the buffered ETF category at Innovator and a decade at Milliman hedging variable annuities for insurance companies. He explained not just how the product works but why the capital protection segment has remained largely untouched by ETFs until now.</p>

<p>The mechanics are clean. Three options positions: a zero-strike call replicating full S&P exposure (~$98 cost), an at-the-money put providing 100% protection (~$5), and a sold out-of-the-money call (~$3 premium) that finances the put by capping upside. At near-zero rates, this math didn't work because the cost of the first two positions exceeded $100. With the fed funds rate above 5%, the structure pencils. After each annual outcome period, the fund rolls into new options at prevailing rates without triggering taxable events.</p>

<p>Kaufman drew a sharp comparison to CDs: a 5% CD rate at the highest federal bracket yields about 3.2-3.3% after tax, paid as ordinary income. The structured protection ETF compounds tax-deferred inside the wrapper, and gains are taxed at long-term capital gains rates upon sale. Calamos sees the capital protection space, currently dominated by fixed index annuities and structured notes, as roughly four times the size of the buffered ETF market and largely undisrupted by the ETF wrapper.</p>

<h2>Key Takeaways</h2>
<ul>
<li>100% downside protection with 9.81% capped upside to the S&P 500 over a one-year outcome period, enabled by higher rates</li>
<li>Three-option construction: zero-strike call for exposure, at-the-money put for protection, sold OTM call to finance the structure</li>
<li>Significant tax advantage over CDs and annuities: gains compound inside the fund and are taxed at long-term capital gains rates</li>
<li>Mid-period buyers get adjusted cap and protection levels based on current NAV relative to inception</li>
<li>The capital protection market (annuities, structured notes) is roughly 4x the size of buffered ETFs and largely untouched by the ETF wrapper</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 58: Jason Hsu (Rayliant) ===
new_content[58] = """<p>Jason Hsu co-created the Research Affiliates Fundamental Index (RAFI) with Rob Arnott before founding Rayliant Global Advisors. He holds a PhD in finance from UCLA, has taught at both UCLA and Duke, and has published more than 100 peer-reviewed papers. On this episode, he made a detailed case for why China A-shares are the most mispriced equity market in the world and why Rayliant's approach to accessing it is fundamentally different from what any US-listed product offers.</p>

<p>The thesis starts with valuation. At the time of the conversation, China A-shares were trading at roughly 10x earnings while US equities sat near 21x. But Hsu's argument went deeper than just a low multiple. China's domestic market has structural characteristics that create persistent pricing inefficiencies: 80% of trading volume comes from retail investors with average holding periods of just two weeks, and local analyst forecasts in Hong Kong and Shanghai are meaningfully less accurate than their US counterparts. Those inefficiencies give a fundamental manager real room to add alpha. Rayliant runs roughly $5 billion with offices in Taipei, Shenzhen, and Shanghai, and 40 investment professionals on the ground doing primary research across the region.</p>

<p>The fund applies Hsu's academic work on smart beta to the China opportunity. Rather than just buying cheap stocks (which in China often means catching a falling knife), the process weights holdings on fundamental measures like dividends, book value, and cash flow to systematically exploit the valuation gap between price and fundamentals. Rayliant also incorporates behavioral signals: proprietary sentiment indicators built from local market data that flag when retail-driven momentum has pushed stocks too far in either direction. The combination of academic rigor, local presence, and behavioral analytics is what Hsu argues makes the strategy distinct from a generic emerging markets allocation.</p>

<h2>Key Takeaways</h2>
<ul>
<li>China A-shares were trading at roughly 10x earnings vs. 21x for US equities, with structural inefficiencies driven by 80% retail participation and short holding periods</li>
<li>Rayliant manages ~$5B with 40 investment professionals across offices in Taipei, Shenzhen, and Shanghai doing ground-level primary research</li>
<li>The strategy applies Hsu's RAFI methodology (weighting on fundamentals rather than market cap) specifically to exploit China's valuation gap</li>
<li>Proprietary behavioral sentiment indicators built from local market data add a second layer of alpha generation beyond the fundamental process</li>
<li>Local analyst forecasts in Hong Kong and Shanghai are measurably less accurate than US forecasts, creating opportunities for a team doing its own primary research</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 59: Greg Reid (Westwood MDST) ===
new_content[59] = """<p>Greg Reid spent years running institutional equity strategies at Westwood before launching what he calls a "smid with income" ETF. MDST blends small and midcap equity exposure with a covered call overlay to generate monthly income while maintaining meaningful participation in a part of the market most advisors underweight. Reid joined Brad at the Exchange ETF conference to walk through the strategy's construction, explain why small and midcaps deserve more portfolio space than they typically get, and detail how the options overlay works mechanically.</p>

<p>Westwood manages roughly $16 billion, and Reid's team runs approximately $4 billion of that across small and midcap strategies with a track record going back over a decade. The underlying equity sleeve of MDST holds 80 to 100 names selected through a quality-value process that prioritizes free cash flow generation, balance sheet strength, and reasonable valuations. The covered call overlay sells options on broad small and midcap indices (not individual stock options), generating premium income without capping the upside on any specific holding. Reid explained that by writing options 2-5% out of the money with 30 to 60 day expirations, the strategy captures time decay premium while still participating in the majority of upside moves.</p>

<p>The pitch for small and midcaps is partly mathematical. Small and midcap stocks represent roughly 25% of total US market capitalization but make up only about 10% of the average advisor portfolio. That gap has widened as large-cap growth stocks have dominated returns. Reid argues the valuation spread between large and small/mid is at historically attractive levels, and that adding income to a small/midcap allocation makes it behaviorally easier for advisors to hold through the volatility that comes with the asset class. The monthly distribution gives clients something tangible while they wait for the valuation thesis to play out.</p>

<h2>Key Takeaways</h2>
<ul>
<li>MDST combines Westwood's 10+ year institutional small/midcap equity process with a covered call overlay for monthly income generation</li>
<li>The equity sleeve holds 80-100 names selected on free cash flow, balance sheet quality, and valuation; the options overlay sells index-level calls 2-5% out of the money</li>
<li>Small and midcaps represent ~25% of US market cap but only ~10% of the average advisor portfolio, creating a structural underweight</li>
<li>Monthly income distributions make it behaviorally easier for clients to hold through the higher volatility inherent in smaller companies</li>
<li>Westwood manages ~$16B total with ~$4B in small/midcap strategies</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 60: Kim Mayer (GMO) ===
new_content[60] = """<p>Kim Mayer represents one of the most opinionated asset managers in the industry. GMO, founded by Jeremy Grantham, manages roughly $60 billion with a willingness to take positions that make other firms uncomfortable. On this episode, Mayer walked through GMO's first ETF launch and explained the firm's thesis on US quality equities: that the highest-quality US companies are simultaneously the best businesses in the market and, after the 2022 correction, the cheapest they've been relative to the broad index in years.</p>

<p>GMO's quality definition is specific: companies that earn high returns on invested capital consistently, generate strong free cash flow, and carry manageable debt levels. The firm has been running this approach for institutional clients for over a decade, and the ETF packages the same process for the wealth channel. What makes GMO's version different from generic quality factor funds is the valuation overlay. The team won't buy a stock just because it's high quality; it also needs to be attractively priced. That double filter produced a portfolio that looks meaningfully different from the S&P 500, with significant active share and sector concentrations that reflect where the team sees the best combination of quality and value.</p>

<p>Mayer was candid about GMO's history of being early on calls. The firm's public skepticism about US equity valuations in the late 2010s cost them assets, even though the underlying research was directionally correct. The ETF launch signals that GMO sees the current opportunity set as compelling enough to build a vehicle around. The pitch isn't that US equities are cheap in absolute terms; it's that the quality segment within US equities offers a combination of business durability and relative valuation that GMO hasn't seen in years.</p>

<h2>Key Takeaways</h2>
<ul>
<li>GMO manages ~$60B and launched its first ETF to bring its institutional quality equity process to the wealth channel</li>
<li>Quality is defined as high ROIC, strong free cash flow, and manageable debt, combined with a valuation overlay that screens out overpriced quality stocks</li>
<li>The portfolio carries significant active share versus the S&P 500, with sector weights driven by where quality and valuation intersect</li>
<li>GMO sees the quality segment within US equities as offering the best combination of business durability and relative valuation in years</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 61: Simeon Hyman (ProShares) ===
new_content[61] = """<p>Simeon Hyman runs global investment strategy at ProShares, a firm managing over $70 billion that most advisors know for its leveraged and inverse products. On this episode, Hyman made the case that ProShares' most important product category isn't 2x or 3x anything. It's dividend growth, and specifically the S&P 500 Dividend Aristocrats. He walked through the data showing why companies that have raised dividends for 25+ consecutive years don't just pay income. They systematically outperform with lower volatility and better drawdown characteristics than the broad market.</p>

<p>The S&P 500 Dividend Aristocrats index requires 25 consecutive years of dividend increases, which effectively screens for business quality without explicitly measuring it. A company that has grown its dividend through the dot-com bust, the financial crisis, COVID, and the 2022 rate shock has proven something about its cash flow durability that no backward-looking quality factor can replicate. Hyman showed that the Aristocrats have historically delivered 80-85% of the S&P 500's upside in strong markets while capturing only 60-65% of the downside in weak ones. The equal-weight methodology also provides meaningful diversification compared to the cap-weighted S&P 500, which has become increasingly concentrated in a handful of mega-cap tech names.</p>

<p>ProShares extends the dividend growth thesis across international markets and into rising-rate-specific products. Hyman made the point that dividend growth stocks tend to perform well when rates are rising because the same earnings power that supports consistent dividend increases also provides pricing power during inflationary periods. He was direct about where the approach doesn't work: hyper-speculative markets where unprofitable companies lead. But for advisors building portfolios designed to compound through full market cycles, the data on dividend growth as a quality proxy is hard to argue with.</p>

<h2>Key Takeaways</h2>
<ul>
<li>The S&P 500 Dividend Aristocrats index requires 25 consecutive years of dividend increases, functioning as a quality screen by revealed behavior rather than backward-looking metrics</li>
<li>Historically, Aristocrats have captured 80-85% of S&P 500 upside with only 60-65% of the downside</li>
<li>Equal-weight methodology provides meaningful diversification versus the increasingly concentrated cap-weighted S&P 500</li>
<li>Dividend growth stocks tend to outperform in rising-rate environments because the same earnings power that supports dividend increases also supports pricing power during inflation</li>
<li>ProShares manages over $70B and extends the dividend growth thesis into international markets and rate-sensitive strategies</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 62: Dodd Kittsley (Davis Funds) ===
new_content[62] = """<p>Dodd Kittsley was part of the ETF industry before most people knew what an ETF was. In the late 1990s, with fewer than 32 products and less than $40 billion in industry assets, he helped launch one of the first dedicated ETF research teams on Wall Street at Morgan Stanley. He spent years as an industry evangelist before eventually joining Davis Funds, a three-generation investment firm founded in 1969. Brad sat down with Kittsley at the Exchange ETF conference to talk about how Davis constructs a portfolio of just 22 stocks, why benchmark agnosticism means leaving entire S&P 500 sectors empty, and what makes the Davis research approach different from the typical active manager pitch.</p>

<p>Davis traces its origins to Shelby Davis, who built a substantial fortune investing almost exclusively in equities with a focus on financials. The firm eventually expanded into mutual funds, SMAs, and in 2017, ETFs. The same investment philosophy runs through all three wrappers. The standard is demanding: before committing a dollar to any position, the team wants to be in the top decile of knowledge of the company and its industry. The flagship Select US Equity strategy holds just 22 to 23 names built entirely on conviction. Davis currently holds zero exposure to three or four entire S&P 500 sectors because the team sees better opportunities elsewhere. Kittsley pushed back on the value manager label: "We're more GARPy than anything else," noting the portfolio simultaneously holds Meta and JPMorgan.</p>

<p>What Kittsley said about exclusion was sharp: in an environment where money isn't free anymore and interest rates have normalized, selectivity has real consequences. Businesses that were viable when capital was cheap face a fundamentally different equation today. Davis also runs a worldwide strategy with roughly 30 to 35 holdings, approximately 50/50 US and international, built on the same research process for advisors seeking non-US exposure through a conviction-driven active manager.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Davis holds just 22-23 names in its flagship US equity strategy, built purely on conviction with no obligation to fill benchmark sectors</li>
<li>Several S&P 500 sectors are currently absent from the portfolio because the team can't underwrite them to the standard required</li>
<li>The team targets top-decile knowledge of every company before investing, including management teams, competitors, and competitive moats</li>
<li>Same investment process runs across mutual funds, SMAs, and ETFs since 2017</li>
<li>The worldwide strategy offers ~30-35 names globally, roughly 50/50 US and international, for advisors wanting unconstrained active international exposure</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 63: Sal Esposito (Zacks) ===
new_content[63] = """<p>Sal Esposito joined Brad at the Exchange ETF conference to explain how Zacks Investment Management applies four decades of earnings research to active ETF strategies. Esposito came to Zacks from UBS, where he worked across client services, fixed income trading, and product management. The move from a 50,000-person firm to a 200-person company was deliberate: he wanted to build something from the ground up. Two years in, he described himself as fully converted to the ETF world and unconvinced that separately managed accounts make sense for most strategies unless designed specifically for tax-managed indexing.</p>

<p>Zacks Investment Research was founded in 1978 by Len Zack (PhD, MIT) around a foundational insight: sell-side earnings estimate revisions are among the most powerful signals for predicting future stock performance. The investment management subsidiary, founded in 1992, manages approximately $16 billion. Zacks runs two distinct ETF strategies. The large cap fund screens the top 750 US companies for at least 15 years of operating history, consistent earnings across multiple cycles, and positive analyst estimates, producing a 50 to 65 name portfolio with roughly 20% annual turnover. The small and midcap fund holds approximately 198 names and targets earnings revision signals and market anomalies in a less-covered segment where the ETF structure is particularly valuable because it lets the portfolio turn over freely without triggering taxable events.</p>

<p>The most interesting part of the conversation covered Zacks+, a hybrid model portfolio that wraps the firm's active ETFs together with individual stock SMA sleeves. The ETFs handle core trading with tax efficiency while the SMA sleeves give clients the conversational value of knowing exactly what they hold. Available on Schwab and Fidelity across seven fully funded models, Zacks charges no separate strategist fee on top of ETF expense ratios.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Zacks manages ~$16B and has applied the Zacks Rank earnings revision system since 1978</li>
<li>The large cap fund screens for 15-year operating history, consistent earnings across cycles, and positive analyst estimates, producing a 50-65 name portfolio</li>
<li>The small/midcap fund holds ~198 names exploiting earnings revision signals in a less-covered segment where active management has a structural edge</li>
<li>Zacks+ combines active ETFs with individual stock SMA sleeves across seven risk-spectrum models, with no separate strategist fee</li>
<li>The ETF structure was specifically chosen for the small/midcap strategy to allow high turnover without tax consequences at the investor level</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 64: Johan Grahn (Allianz) ===
new_content[64] = """<p>Johan Grahn spent more than 20 years in institutional asset management before joining Allianz Investment Management, which entered the ETF market in mid-2020. Allianz is wholly owned by Allianz Life, an insurance company that spent decades managing defined outcomes for policyholders. That background in delivering on guarantees is exactly the skill set required for buffered ETFs. Brad sat down with Grahn at the Exchange conference to get a comprehensive walkthrough of the mechanics, the mid-period pricing dynamics, and the asset allocation case for buffers beyond just equity risk reduction.</p>

<p>The suite includes 10% and 20% buffer products over 12-month periods, a 6-month 10% buffer product, and a 6-month floor product limiting losses to a hard 5% maximum. Each 12-month series offers 12 separate funds (one per calendar month) so advisors can always access fresh starting parameters. The mechanics work through Delta-adjusted Flex options: a put spread establishes the buffer, and a sold call funds it by capping upside. If the market falls within the buffer range, investors keep their principal. If it falls further, losses begin dollar-for-dollar beyond the buffer. Grahn was clear that mid-period entry changes the effective cap and buffer, and advisors need to understand that pricing before placing clients outside of reset dates.</p>

<p>The most pointed part of the conversation was about using buffers to replace fixed income, not just reduce equity risk. Grahn's argument: rates at 5% still require investors to pay taxes on income with limited total return potential, and the traditional negative correlation between stocks and bonds has been less reliable. A 20% buffered equity product can provide lower volatility than equities while maintaining positive correlation when markets rise. His data point was direct: in a standard 60/40 portfolio, 80 to 90% of the risk comes from the equity side regardless of what the other 40% holds.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Allianz's insurance background (decades of delivering defined outcomes to policyholders) is directly relevant to running buffered ETF strategies</li>
<li>The suite includes 10% and 20% buffers (12-month), 6-month 10% buffer, and 6-month floor products limiting losses to 5% max</li>
<li>12 monthly series for each product means advisors can always enter at a fresh outcome period</li>
<li>Mid-period buyers receive different effective caps and buffers; understanding mid-period pricing is critical before placing clients at non-reset dates</li>
<li>80-90% of risk in a 60/40 portfolio comes from equities regardless of the fixed income allocation, making a case for buffers as bond replacements</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 65: Weldon Rice (QRAFT) ===
new_content[65] = """<p>Weldon Rice heads the AI ETF division at QRAFT Technologies, a Korean company founded in 2016 as an investment technology firm, not a traditional asset manager. Most of QRAFT's employees are engineers and researchers, and all AI models are developed entirely in-house. The firm received a $140 million investment from SoftBank, and its core business is providing AI-driven portfolio construction to large Korean financial institutions. Rice came to the industry through an unconventional path: he moved to Asia after college, spent more than a decade in Korea, and studied quantitative finance before joining QRAFT as it expanded into the US ETF market.</p>

<p>QRAFT runs two US equity products. The diversified fund holds 300 to 320 names, rebalanced monthly, using a combination of traditional academic factors (value, quality, momentum) and QRAFT's proprietary factors fed through a second model that ranks securities by expected four-week price appreciation. The fund gets more defensive in weak markets, tilting toward value and quality, and more aggressive in trending markets. The concentrated product holds 50 names with sector concentration potentially reaching 50% and individual positions up to 9-10%. Rice described it directly: "We're from Korea, we like spicy food. This one is a lot more spicy." The diversified fund is designed as a core complement; the concentrated fund is a satellite for clients with higher risk tolerance.</p>

<p>Rice was precise about what QRAFT actually does versus what people assume. The firm does not hold AI-related stocks. It uses AI to determine which stocks to hold. The core upgrade over traditional quant is a shift from linear to nonlinear modeling: regression-based systems assume markets behave predictably and mean-revert, while QRAFT's models capture patterns that linear approaches miss. Once the investment universe and risk guardrails are set by humans, the model's portfolio outputs are followed with discipline. The team does not review the AI's selections and override holdings that feel uncomfortable.</p>

<h2>Key Takeaways</h2>
<ul>
<li>QRAFT is an engineering-first company (founded 2016 in Korea) backed by $140M from SoftBank, with most staff being researchers and developers</li>
<li>The diversified fund (300-320 names) is designed as an active complement to passive large cap exposure; the concentrated fund (50 names) is a high-conviction satellite</li>
<li>QRAFT uses AI to pick stocks, not to invest in AI companies. The distinction matters for categorization</li>
<li>The key advantage over traditional quant: nonlinear modeling that captures patterns linear regression-based systems miss</li>
<li>Human judgment defines the investment universe and risk guardrails, but once set, the AI's outputs are not subject to discretionary override</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 66: David LaValle (Grayscale) ===
new_content[66] = """<p>On January 11, 2024, Grayscale's Bitcoin fund began trading on NYSE Arca as an ETF. What looked from the outside like a regulatory milestone was the culmination of a decade-long promise to investors, a federal court battle, and a final sprint of industry-wide logistics. David LaValle, who started his career on the floors of the stock exchanges and eventually served as CEO of a global indexing firm, walked Brad through the full arc: the legal strategy, the structural mechanics of conversion, and where Grayscale's product development goes from here.</p>

<p>Grayscale created the Bitcoin product in 2013 as a 1933 Act Delaware grantor trust, the same regulatory framework used by gold ETFs like GLD. That design choice was deliberate: it meant the eventual conversion to ETF required only two structural changes (listing venue and creation/redemption rights). Everything else was already in place. The legal battle that made it happen centered on a straightforward inconsistency: the SEC approved Bitcoin Futures ETFs but denied spot Bitcoin ETFs without adequate justification. Grayscale challenged the denial the same day it was issued, and the DC Circuit ruled unanimously in August 2023 that the SEC had acted in an impermissible way. Getting 11 spot Bitcoin ETFs to market simultaneously required what LaValle called gymnastics across the entire industry's operational ecosystem.</p>

<p>Beyond Bitcoin, Grayscale manages 17 digital asset products across a four-phase lifecycle: private placements that season under Rule 144, then OTC quotation, then SEC reporting status, and finally ETF conversion. The firm partners with FTSE on a crypto sector classification framework and is actively seeding products today that it believes will meet advisor demand in five to ten years. Custody follows the GLD model: Bank of New York handles ETF share administration while Coinbase handles Bitcoin custody, with $28 billion already in custody at Coinbase when the ETF launched.</p>

<h2>Key Takeaways</h2>
<ul>
<li>The Bitcoin product was created in 2013 specifically designed for eventual ETF conversion, using the same 1933 Act structure as gold ETFs</li>
<li>The SEC's denial was challenged the same day and overturned unanimously by the DC Circuit, which found the agency treated similar products differently without justification</li>
<li>Only two structural changes were needed at conversion: listing venue (OTC to NYSE Arca) and addition of creation/redemption rights</li>
<li>Coinbase handles Bitcoin custody separately from ETF share administration (Bank of New York), mirroring the GLD custodial architecture</li>
<li>Grayscale maintains 17 digital asset products across a four-phase lifecycle, seeding today what they believe advisors will want in 5-10 years</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 67: Keri Riemer & Hazel Doyle (K&L Gates) ===
new_content[67] = """<p>Keri Riemer and Hazel Doyle from K&L Gates joined Brad live at the Exchange ETF conference to talk about the legal and regulatory side of launching ETFs in both the US and Europe. Riemer's background spans corporate law, asset management, and a stint at the SEC, and she now helps clients work through the regulatory requirements of the Investment Company Act of 1940. Doyle works out of K&L Gates' Dublin office and brings a ground-level perspective on the European funds industry, including the UCITS framework and cross-border distribution challenges.</p>

<p>For anyone thinking about launching an ETF in the US, the process has gotten more streamlined since the SEC's ETF Rule (6c-11) eliminated the need for individual exemptive relief, but it's still complex. Riemer walked through the timeline and the key regulatory checkpoints: getting an effective registration statement, structuring the trust, selecting service providers, and working through the operational details that most managers don't think about until it's too late. The timeline from concept to launch runs roughly six to nine months if everything moves smoothly, though first-time issuers typically need more time to get the infrastructure right. She also covered the growing trend of conversions, where mutual funds, hedge funds, and separately managed accounts are converting to the ETF wrapper for its tax efficiency and lower cost structure.</p>

<p>Doyle's European perspective added a useful comparison. ETFs in Europe are subject to UCITS regulations, which impose different portfolio transparency requirements, benchmark compliance rules, and distribution constraints. The ESG overlay is much heavier in Europe, and thematic ETFs have gained traction faster there. For US issuers looking at European expansion, the regulatory differences are meaningful enough that entering the market requires dedicated local expertise and a real understanding of investor preferences that vary significantly by country.</p>

<h2>Key Takeaways</h2>
<ul>
<li>US ETF launches now benefit from the ETF Rule (6c-11) but still require careful navigation of registration, trust structure, and service provider selection</li>
<li>Timeline from concept to launch is typically 6-9 months, longer for first-time issuers building infrastructure from scratch</li>
<li>Conversions from mutual funds, hedge funds, and SMAs to the ETF wrapper are an accelerating trend driven by tax efficiency</li>
<li>European UCITS regulations impose different transparency, benchmark compliance, and distribution requirements that US issuers need local expertise to manage</li>
<li>ESG and thematic ETFs have gained traction faster in Europe, creating both opportunity and regulatory complexity for cross-border products</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 68: Adam Curran (YALL) ===
new_content[68] = """<p>Adam Curran grew up in a household obsessed with money and markets, lost a chunk of his early savings on a bad coffee stock, and vowed never to invest again without doing his own research. After building a career in financial planning, he founded the God Bless America ETF (ticker: YALL) to give conservative investors a US equity fund that filters out companies he believes have strayed from their core mission by getting involved in political and social activism. It's a values-based fund with an unapologetic point of view, and the conversation covered how the screen works, what gets filtered, and why he thinks businesses should focus on delivering shareholder value instead of making public statements on social issues.</p>

<p>The screening process starts with the S&P 500 universe and removes companies whose leadership has taken visible positions on political or social causes that Curran believes are outside the scope of running a business. The remaining holdings are weighted to maintain broad market exposure while avoiding the sector concentration problems he saw in earlier conservative investment options, which were often loaded with industrials and oil companies and missed the tech-driven growth of the last decade. Curran's biggest challenge is finding quality tech names that pass the screen, since many of the largest technology companies have been vocal on issues he's filtering for.</p>

<p>Beyond YALL, Curran runs Retire Y'all, a financial planning firm based in Charleston focused on retirement planning and financial education. He sees both the ETF and the firm as part of the same mission: making investing accessible and aligned with the values of people who feel underserved by Wall Street. The fund isn't trying to be everything to everyone. It's built for a specific investor who wants market exposure without owning companies they disagree with on a fundamental level.</p>

<h2>Key Takeaways</h2>
<ul>
<li>YALL screens the S&P 500 universe for companies involved in political or social activism that Curran believes falls outside core business operations</li>
<li>The portfolio is weighted to maintain broad market exposure and avoid the sector concentration (heavy industrials, energy) that plagued earlier conservative funds</li>
<li>Finding quality tech names that pass the screen is the fund's biggest ongoing challenge</li>
<li>The fund targets investors who want US equity exposure aligned with the belief that businesses should focus on shareholder value, not social commentary</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 69: Todd Rosenbluth (VettaFi) ===
new_content[69] = """<p>Todd Rosenbluth kicked off Season 2 of Behind the Ticker with a look at the ETF industry from the platform and data side. Rosenbluth started his career as a financial advisor at Morgan Stanley, spent over a decade building ETF and mutual fund research platforms at S&P Global and CFRA, and now runs research at VettaFi, an ETF services company focused on educating financial advisors through content, webcasts, and data tools. The conversation centered on VettaFi's role in connecting ETF issuers with the advisor community, the Exchange ETF conference, and where the industry is heading.</p>

<p>VettaFi operates as a platform that sits between ETF issuers and the advisors who use their products. The firm produces research content, hosts webcasts, and runs the Exchange ETF conference, which brings together asset managers, service providers, and financial advisors for training, education, and networking. Rosenbluth emphasized that for smaller ETF issuers, getting in front of the right advisors is one of the hardest parts of building a successful product. Platforms like VettaFi and events like Exchange provide distribution infrastructure that most new issuers can't build on their own.</p>

<p>On the industry itself, Rosenbluth sees three major growth drivers: actively managed ETFs continuing to gain market share, conversions of SMAs and mutual funds into the ETF wrapper, and growing collaboration within the ETF community that helps smaller issuers compete. He was clear that despite the massive inflows into Bitcoin ETFs dominating headlines at the time, the more important story is the thousands of other products that advisors should be evaluating for client portfolios. The Bitcoin allocation, at most, represents a small percentage of any portfolio. The rest of the allocation decisions are where the real work happens.</p>

<h2>Key Takeaways</h2>
<ul>
<li>VettaFi provides ETF issuers with distribution infrastructure (research, webcasts, data) that helps connect products with the advisor community</li>
<li>The Exchange ETF conference brings asset managers and advisors together for education, training, and relationship-building</li>
<li>Three growth drivers for the industry: actively managed ETFs, SMA/mutual fund conversions, and increased community collaboration</li>
<li>Despite Bitcoin ETF headline dominance, the real advisor work is in the other 3,000+ ETF products that make up the core of client portfolios</li>
<li>For new issuers, getting in front of the right advisors through platforms like VettaFi is one of the most important and difficult parts of building a successful ETF business</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 70: Matt Barry (Touchstone) ===
new_content[70] = """<p>Touchstone Investments has been a mutual fund manager for decades. Getting into ETFs was a deliberate bet on where the market was heading. Matt Barry, who oversees product management and ETF capital markets at the $25 billion firm, walked Brad through Touchstone's distinctively active philosophy, its sub-advisor selection discipline (a framework they call SPIDR), and two ETF strategies he's spent the most time building: a climate transition fund managed by Lombard Odier and a securitized income strategy run by Fort Washington's short-duration team.</p>

<p>Touchstone runs a fully sub-advised model. Every strategy is managed by an outside institutional manager selected through a structured evaluation covering stability, personnel, infrastructure, discipline, and results. The firm has 15 sub-advisors and a distribution team of 50+ targeting the advisor channel. Lombard Odier's climate strategy is structured around three buckets that go well beyond what most ESG products offer: clean energy solutions, transition leaders (carbon-intensive companies actively decarbonizing), and adaptation companies that benefit from a physically warmer world. That third bucket is a candid recognition that some warming is already locked in. The global portfolio runs 40 to 50 high-conviction names, roughly 60% US and 40% international, and Lombard Odier has raised over a billion dollars with this approach in Europe.</p>

<p>The securitized income ETF draws on Fort Washington's expertise across all four major categories: residential MBS, commercial MBS, asset-backed securities, and CLOs. The team has been together over 20 years and built its surveillance capabilities after the financial crisis. They run daily delinquency reports and cash flow analysis on underlying collateral, stress-test against recessionary scenarios, and make relative value decisions issue by issue. Barry argues the risk-return profile compares favorably to high-yield corporate bonds at lower volatility and minimal duration.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Touchstone is a fully sub-advised $25B manager that launched its ETF platform using the same SPIDR manager-selection discipline it applies to mutual funds</li>
<li>Lombard Odier's climate strategy has three buckets: clean energy, transition leaders, and adaptation companies, going well beyond typical ESG screening</li>
<li>Fort Washington's securitized income team has been together 20+ years, running daily collateral analysis across residential MBS, commercial MBS, ABS, and CLOs</li>
<li>The SEC's Rule 6c-11 (2019) was a structural catalyst for active ETF expansion, eliminating individual exemptive relief filings</li>
<li>Barry positions the securitized income ETF as comparable to high-yield corporate bonds with lower volatility and minimal interest rate duration</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 71: Andrew Chanin (ProcureAM) ===
new_content[71] = """<p>Andrew Chanin's path from the trading floor to founding Procure Asset Management is a story about the costs of trusting the wrong partners and the conviction to build something better. After working his way up from floor clerk to lead market maker for international ETFs on NYSE Arca, Chanin co-created 10 first-to-market ETFs including what he described as the world's first cybersecurity ETF. Then a federal court ruled that products from his white-label arrangement had been taken from him. That experience drove him to build Procure with its own trust structure and full operational infrastructure, partnering with Robert Tull, a veteran credited with helping build the predecessor to iShares.</p>

<p>Procure's flagship is a space exploration ETF tracking an index developed with M. Walter Range, a former Space Foundation director who built the most widely used model for sizing the global space market. The index requires at least 80% of holdings to derive majority revenue from space-related activities at each rebalance. The investment case combines commercial cost reduction (reusable rockets driving launch costs from millions to thousands per kilogram) with accelerating geopolitical competition. China has publicly identified the "cislunar economy" as a multi-trillion dollar opportunity, and the Ukraine conflict highlighted the strategic vulnerability of satellite dependence. Commercial activity now drives roughly 80% of total space industry activity, with government investment returning as a second tailwind.</p>

<p>Chanin's decision to own the full infrastructure was expensive and complex, but he sees it as non-negotiable for anyone building a long-term ETF business rather than a single-product experiment. A separate trust structure delineates proprietary Procure products from partnership products, which Chanin considers important for investor confidence. His second fund targets disaster restoration, extending the first-to-market philosophy into another essential and overlooked industry.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Procure was founded after a federal court ruling stripped Chanin of products he co-created under a white-label arrangement, driving him to build owned infrastructure</li>
<li>The space index requires 80%+ of holdings to derive majority revenues from space activities, with up to 20% in diversified aerospace names</li>
<li>Launch cost reduction from reusable rockets is the central enabling innovation, expanding the addressable market from governments to commercial users</li>
<li>Geopolitical competition (China's cislunar economy thesis, satellite vulnerability exposed in Ukraine) is adding government investment on top of commercial growth</li>
<li>Infrastructure independence costs more and takes longer but is essential for a long-term ETF business</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 72: Yuri Khodjamirian (Tema/TOLL) ===
new_content[72] = """<p>Yuri Khodjamirian spent 15 years at a London boutique called Maedi Asset Management, eventually co-running a UK income fund that peaked at around $2 billion, before joining Tema ETFs to build what he describes as a new standard for active thematic investing. His conversation with Brad covered how Tema defines monopolies with precision, why the best ones are actually good for their customers, and the four-pillar process the firm uses to build a concentrated conviction portfolio from a universe that can't be found with a screen.</p>

<p>Tema defines monopolies using five specific structural sources: non-replicable physical assets (US railroads went from 180 in the 1920s to six today, and no new one will ever be built), network effects (financial exchanges where liquidity attracts more liquidity), high switching costs (medical devices where changing vendors is prohibitively expensive), regulation (airport and toll road concessions running 70 to 90 years), and economies of scale (semiconductor manufacturing at incomprehensible scale). Khodjamirian explicitly excludes intangible value as too fragile. The firms worth owning built their positions by creating genuine value for customers over time. Visa, which controls roughly 84% of global network payments alongside one competitor, takes a small toll on each transaction and delivers real value in return.</p>

<p>The central investment insight is that return on invested capital is well understood, but the market systematically underprices its durability in monopolistic businesses. Standard analysis assumes returns fade back toward cost of capital, and for most companies that assumption is correct. But a business holding a 90-year airport concession or a railroad that physically cannot be replicated never experiences that fade. "The market just cannot price this properly," Khodjamirian said, "and that's why share prices of these companies go up over time. They're constantly beating expectations of the fade." The portfolio targets 30 to 35 holdings, always above 25, built through a four-pillar process: strong operating base, solid balance sheet, credible valuation case, and a clearly articulated investment edge.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Five structural sources of monopoly: non-replicable physical assets, network effects, high switching costs, regulation, and economies of scale. Intangible value is excluded</li>
<li>The best monopolies got there by creating customer value over time, not by extraction. That distinction drives long-term durability</li>
<li>ROIC durability is the key variable the market underprices. Standard analysis assumes returns fade to cost of capital, but structural monopolies defy that assumption</li>
<li>Portfolio construction starts with a hand-curated universe (not a screen) because competitive dynamics require analyst judgment</li>
<li>Four-pillar process: strong operating base, solid balance sheet, credible valuation, and articulated investment edge. All four must clear</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 73: Ragen Stienke (Ballast/MGMT) ===
new_content[73] = """<p>Ragen Stienke started his career valuing businesses at Arthur Anderson, learning to assess companies in the real world rather than from an academic perspective. That foundation runs through everything at Ballast Asset Management, which he founded in 2015 after leaving Westwood, where he and longtime partner Jay Sing launched a midcap strategy that raised $3.5 billion. Stienke joined Brad to walk through the investment process behind their small and midcap active ETF, focusing on downside quantification, management assessment, and why behavioral finance isn't just an academic interest at Ballast. It's a hard operating constraint.</p>

<p>Ballast's stated goal is to turn alpha generation into a manufacturing process rather than something dependent on any individual being right. The cornerstone: quantify downside before ever building an upside case. This isn't margin of safety in the conventional sense. Ballast tries to buy within 20 to 30% of the worst case they can envision. Once they have that number, they build a three-year base case and calculate a reward-to-risk ratio. They invest when that ratio reaches at least 3:1. The downside methods vary by business: for software companies, they value the recurring revenue stream at liquidation prices (3 to 5 times maintenance revenue). For banks, they stress-test the loan book category by category using actual loss rates from prior recessions. For a shipping company, they've valued the fleet in distressed secondary markets. If the downside is too large or too uncertain to quantify, they don't invest.</p>

<p>Management analysis follows a three-part checklist: alignment (what metrics determine their pay, not how much), capital deployment track record across prior roles, and fit (whether the management team is right for the company at its current stage). A growth operator running a mature business is a mismatch. When those misalignments shift, that transition can be a buy catalyst. Position sizing is driven by the reward-to-risk ratio with a 3% cap at purchase. As a stock appreciates and the ratio compresses, the position gets trimmed systematically. Ballast has raised $4.5 billion across both strategies, with 85-90% from institutional investors.</p>

<h2>Key Takeaways</h2>
<ul>
<li>The core framework requires a reward-to-risk ratio of at least 3:1, built by quantifying downside to the worst plausible scenario before modeling upside</li>
<li>Downside methods are specific to each business type: revenue burndowns for software, loan book stress tests for banks, distressed fleet valuations for shipping</li>
<li>Management analysis covers compensation alignment, capital deployment history across prior roles, and stage fit</li>
<li>Position sizing is mechanically driven by the reward-to-risk ratio (3% max at purchase), with systematic trimming as the ratio compresses</li>
<li>$4.5B raised across strategies, 85-90% institutional. The active ETF runs the identical process as the SMA</li>
<li>Declining sell-side coverage of small/midcaps over the past 20 years has widened the informational advantage for teams doing primary research</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# === INDEX 74: Steve Cook (Harbor Capital) ===
new_content[74] = """<p>Steve Cook has been in the ETF business long enough to remember when there was no centralized data repository and floor traders called his desk for basket updates on the Nasdaq 100 ETF. As head of ETFs at Harbor Capital Advisors, he joined Brad to trace Harbor's evolution from pension manager-of-managers to ETF issuer, explain why moving ETFs to the NYSE floor materially improves advisor execution, and make the case for a commodity ETF built from the ground up for inflation protection rather than repurposed from a corporate hedging index.</p>

<p>Harbor was founded roughly 40 years ago as the pension management arm of several Ohio manufacturing companies. The firm's core capability has always been finding exceptional investment managers in niche asset classes. They were the first to offer Pimco access in a retail mutual fund and maintain a 50+ year relationship with Janus. The ETF platform launched in September 2021 applying the same manager-sourcing philosophy to the wealth channel. Their commodity product, HEDGER, came through Quantic Commodities, whose founder Don Casturo ran Goldman Sachs' commodity trading desk for over 20 years. The key insight: the widely used commodity indices (BCOM, GSCI) were built to help manufacturers hedge commodity exposure, not to protect investor portfolios from inflation. HEDGER's index accesses up to 24 commodities, with gold currently at roughly 30% allocation adjusted quarterly by debasement and scarcity indicators.</p>

<p>Cook made a detailed case for NYSE floor listing that's hard to argue with. When a fund holds 150 names, every underlying security goes through independent price discovery at the open. A three-cent swing in each name compounds into ETF-level spreads that look far wider than fair value. Advisors using platform-based workflows often default to market-on-open orders, the exact orders most exposed to opening-auction volatility. A floor specialist inserts a human who can look at the context of an incoming order and make a fair market. Since moving products to the floor, no market-on-open trade has come in more than three cents above fair value. Brad confirmed from his own experience: prior to the move, 30,000-share orders were executing ten cents wide.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Harbor spent 35+ years as a manager-of-managers before entering ETFs in September 2021, applying the same sourcing discipline to the wealth channel</li>
<li>HEDGER uses the Quantic Total Return Commodity Index, built specifically for inflation protection by former Goldman Sachs commodity practitioners</li>
<li>The index accesses up to 24 commodities with dynamic gold weighting (~30%) adjusted quarterly by debasement and scarcity indicators</li>
<li>NYSE floor listing resolved the structural conflict between opening-auction volatility and market-on-open advisory orders, with measurable execution improvement</li>
<li>Widely used commodity indices (BCOM, GSCI) were built for corporate hedging, not investor portfolio protection. That design gap is what HEDGER addresses</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# Build the output array
output = []
for i in range(50, 75):
    ep = data[i]
    rewritten = {k: v for k, v in ep.items()}
    rewritten['content'] = new_content[i]
    output.append(rewritten)

with open('/Users/bradleyroth/clawd/thorft-new/data/blog-posts-batch3.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"Wrote {len(output)} episodes to blog-posts-batch3.json")

# Verify no banned words
banned = ['landscape', 'navigate', 'delve', 'robust', 'holistic', 'paradigm', 'synergy', 'underscore', 'leverage ', "in today's", "it's worth noting", "particularly relevant in the current market environment"]
for i, ep in enumerate(output):
    content_lower = ep['content'].lower()
    for word in banned:
        if word.lower() in content_lower:
            print(f"WARNING: Banned word '{word}' found in index {i+50} ({ep['guest']})")

# Check for em dashes
for i, ep in enumerate(output):
    if '\u2014' in ep['content']:
        print(f"WARNING: Em dash found in index {i+50} ({ep['guest']})")

print("Validation complete.")
