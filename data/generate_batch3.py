#!/usr/bin/env python3
"""Generate blog-posts-batch3.json with rewritten content for indexes 50-74."""

import json

# Read original data
with open('/Users/bradleyroth/clawd/thorft-new/data/blog-posts.json', 'r') as f:
    data = json.load(f)

# New content for each episode (index 50-74)
new_content = {}

# INDEX 50: Andrew Skatoff (Bancreek)
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

# INDEX 51: Danielle Gilbert (Panagram)
new_content[51] = """<p>Danielle Gilbert spent 18 years on the sell side covering structured credit at UBS before joining Panagram, a specialized structured credit manager that runs about $17 billion in assets with more than half in CLO-related investments. On this episode, she broke down what CLOs actually are, why they're fundamentally different from the subprime mortgage products that blew up in 2008, and how Panagram's two ETFs give advisors access to institutional-grade structured credit at different risk levels.</p>

<p>CLOs pool senior secured loans from large corporations into tranches with different risk and return profiles, from AAA down to equity. Panagram isn't a CLO manager; they specialize in investing in CLO structures built by other managers, which is an important distinction. The investment team has been working together since 2014, first managing capital for Eldridge before launching Panagram in 2021. Their two ETFs target different parts of the CLO stack: CLOZ focuses on BBB and BB tranches with yields around 9%, while CLOX targets AAA tranches for more conservative allocations. Both offer floating rate exposure, which means they naturally hedge against rising rates.</p>

<p>Gilbert emphasized that CLOs have historically delivered higher yields with lower correlation to traditional fixed income and equities. The floating rate structure means duration risk is minimal, and the senior secured nature of the underlying loans means recovery rates in default scenarios have been significantly higher than unsecured corporate debt. She's seen advisors use CLOZ as a high-yield replacement, CLOX as a conservative anchor, or both in a barbell approach.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Panagram manages ~$17B with the majority in CLO investments; the team has worked together since 2014</li>
<li>CLOZ (BBB/BB tranches, ~9% yield) and CLOX (AAA tranches) offer two distinct entry points into the CLO market</li>
<li>CLOs are backed by senior secured corporate loans with historically low default rates and high recovery rates, fundamentally different from subprime mortgage products</li>
<li>Floating rate exposure provides a natural hedge against rising rates and adds diversification to fixed income allocations dominated by duration risk</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 52: Yang Tang (Arch Indices / VWI)
new_content[52] = """<p>Yang Tang co-founded Arch Indices in August 2022 after spending years in commodity sales and macro solutions at Barclays, Morgan Stanley, and Citi. His firm takes a different approach to portfolio construction: instead of weighting by market cap or equal weighting, Arch uses variance optimization to build portfolios that deliver specific outcomes (like income) with the least possible volatility. Their flagship ETF, VWI, puts that theory into practice by combining dividend-paying stocks and bond ETFs into a single product targeting high income with low volatility.</p>

<p>The math behind VWI is rooted in modern portfolio theory, but the implementation is practical. The system looks at two things: assets with high yield relative to their underlying volatility, and assets that don't move together. From a universe of roughly 600 available stocks and a set of bond ETFs covering US government, corporate, mortgage-backed, AAA CLOs, and various duration sectors, the optimization engine selects holdings that maximize income while minimizing portfolio-level volatility. The result is a yield of roughly 6.8% with meaningfully lower volatility than comparable income strategies. The portfolio rebalances quarterly, and the allocations shift based on real market conditions. Tang pointed out that when bond volatility spiked during the rate hiking cycle, the system adjusted accordingly, sometimes increasing bond allocations when yields rose but only when volatility didn't rise proportionally.</p>

<p>For advisors focused on retirement planning, VWI addresses sequence of returns risk directly: high income with low drawdowns is exactly what retirees need to avoid selling into down markets. Arch also offers the strategy through SMAs via a partnership with Quorus for advisors who want more customization.</p>

<h2>Key Takeaways</h2>
<ul>
<li>VWI uses variance optimization to deliver ~6.8% yield with lower volatility than traditional income strategies</li>
<li>The portfolio combines dividend-paying stocks with bond ETFs across multiple fixed income sectors, rebalancing quarterly based on market-observed volatility and correlation</li>
<li>The strategy is built specifically to address sequence of returns risk for retirement-focused investors</li>
<li>Arch also offers the strategy through SMAs via Quorus for advisors who want a more tailored implementation</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 53: Burke Ashenden (Innovator ETFs)
new_content[53] = """<p>Burke Ashenden started his career in ETF trading before moving to the issuer side at Innovator ETFs, where he now runs capital markets. Innovator was founded by Bruce Bond and John Souther with a singular focus: Defined Outcome ETFs. No diversified product lineup, no side projects. Just buffers. On this episode, Ashenden broke down how the products actually work, what the options mechanics look like under the hood, and why the 100% buffer ETFs have become their fastest-growing category.</p>

<p>Innovator's Defined Outcome ETFs use baskets of flex options to provide predetermined downside buffers (9%, 15%, or 30%) in exchange for capped upside over quarterly or annual periods. The 100% buffer products provide complete downside protection, essentially eliminating principal risk while still offering equity-linked upside. Ashenden explained that the defined outcome is realized at the end of the outcome period, not in real time. If the S&P hits your cap in the first month, the ETF's NAV won't reflect that full gain immediately because of the time value embedded in the options. That's a critical distinction for setting expectations. At reset, the fund rolls into a new set of options without triggering taxable events, so investors can stay in the structure and compound without realizing gains.</p>

<p>The use cases are broader than most people think. Ashenden sees advisors using 100% buffer ETFs to get clients off the sidelines when they're nervous about investing at all-time highs. With roughly 30% of advisor portfolios sitting in cash or cash equivalents, the pitch is straightforward: get equity exposure with no principal risk. Others use buffer ETFs as a fixed income alternative, particularly when a 9% annual cap on the S&P exceeds the average historical S&P return. Innovator also offers model portfolios that combine different buffer ETFs to create customized risk-return profiles across conservative, moderate, and growth allocations.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Innovator offers 9%, 15%, 30%, and 100% buffer levels across quarterly and annual outcome periods, all built using flex options</li>
<li>The defined outcome is realized at period end, not in real time. Mid-period buyers should understand that NAV movement lags the underlying index</li>
<li>100% buffer ETFs are the fastest-growing category, targeting the estimated 30% of advisor portfolio assets sitting in cash</li>
<li>ETF resets roll into new options without taxable events, allowing investors to stay in the structure and compound over multiple periods</li>
<li>A 9% annual cap on the S&P exceeds the average historical S&P return, making these a compelling alternative to traditional fixed income for conservative allocations</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 54: Jerry Parker (Chesapeake Capital) - already well-written, restructure
new_content[54] = """<p>Jerry Parker spent 40 years building Chesapeake Capital around a single conviction: systematic trend following is the best approach to markets. Not a useful tool under specific conditions. The best approach, period. Trained directly by Richard Dennis as one of the original 12 Turtles in December 1983, Parker founded Chesapeake in February 1988 and has since transitioned the firm from hedge fund to ETF, cutting fees from the traditional one-and-twenty structure to roughly 100 basis points. His conversation with Brad covered the mechanics, the philosophy, and the behavioral discipline that makes trend following work when so many other approaches don't.</p>

<p>Chesapeake's strategy uses only price data. Moving averages and breakouts generate entry and exit signals across roughly 400 instruments simultaneously, including individual stocks (about half the portfolio, long and short), currencies, commodities, bond futures, crypto, and specialty names like lithium and uranium. Parker takes every trade that looks like a trend because missing one of the 20 to 40 big moves in any given year can materially damage returns. The win rate is low by design. Maximum loss per trade is 10 to 15 basis points, and the portfolio is structured so that the handful of outsized winning trades more than offset hundreds of small losses. Average holding period runs about a year, with some trends lasting two or three years.</p>

<p>What Parker learned from Dennis shaped everything. The fundamental lesson was that trading requires rules covering every situation so discipline isn't contingent on how you feel on any given day. Dennis told the Turtles they should "love their losses," meaning you embrace everything about the system, including its low win percentage and the periods where it gives back profits. Parker's other distinctive edge is trading individual stocks rather than index futures. In a broadly rising market, there are always individual names in short-term downtrends, and that long/short diversification doesn't show up in index-level data. He cited cocoa as an example of how individual commodity exposure can generate extraordinary trend returns that would be diluted in a smaller portfolio.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Chesapeake trades ~400 instruments using only price signals. Missing even one major trend can significantly damage annual returns, so the system takes every trade</li>
<li>The low win rate is a feature: small predetermined losses on most trades allow the big outlier moves to run without interference</li>
<li>Trading individual stocks rather than indices captures long/short diversification that index futures miss</li>
<li>Average holding periods of roughly a year reflect backtested evidence that patience captures more of each trend than shorter-term systems</li>
<li>Richard Dennis's original teaching: discipline comes from the rules, not from how you feel on any given day</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 55: Bob Elliott (HFND)
new_content[55] = """<p>Bob Elliott spent years at Bridgewater Associates before founding Unlimited, a firm built on a specific thesis: hedge fund strategies deliver solid risk-adjusted returns, but the traditional fee structure eats most of the benefit before it reaches investors. HFND, Unlimited's flagship ETF, uses machine learning to replicate the return profile of multi-strategy hedge funds at a fraction of the cost. Elliott walked through why the $5 trillion hedge fund industry's returns are worth capturing and how his team built the technology to do it.</p>

<p>The core problem Elliott identified is straightforward. Hedge fund strategies have historically delivered positive returns with lower volatility than equities, but fees of one-and-twenty (or higher) consume 500 to 600 basis points in a good year. In 2022, when the broad managed futures category was up roughly 20%, fees alone took a massive bite. Elliott's approach uses a systematic process that takes in manager performance data, asset return information, and allocation signals to build the highest-probability portfolio replicating what multi-strategy hedge funds are actually doing. The model covers roughly 70 liquid markets globally, the same opportunity set that the $5 trillion industry invests in. Between Elliott and his co-founder, they bring almost 50 years of experience building proprietary hedge fund strategies.</p>

<p>What makes the replication approach work is that broad hedge fund exposure, stripped of fees, has historically offered something most asset classes don't: returns that move independently of both stocks and bonds. Elliott positions HFND as a core alternatives allocation, not a replacement for any single hedge fund but as a way to capture the category's return profile in a low-cost, tax-efficient, fully liquid ETF wrapper. The index investing parallel is deliberate: the same logic that makes low-cost equity indexing outperform most active managers over time applies to hedge fund replication.</p>

<h2>Key Takeaways</h2>
<ul>
<li>HFND uses machine learning to replicate multi-strategy hedge fund returns across ~70 liquid global markets</li>
<li>Traditional hedge fund fees (1-and-20+) can consume 500-600 bps annually, often eliminating most of the benefit for investors</li>
<li>The founding team brings almost 50 years of combined experience building proprietary hedge fund strategies, including time at Bridgewater Associates</li>
<li>Hedge fund return profiles have historically offered genuine diversification from both stocks and bonds, but only when fee drag doesn't eliminate the edge</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 56: Andrew Beer (DBMF) - restructure
new_content[56] = """<p>Andrew Beer has spent three decades in the hedge fund world and the last 15 years at DBI building a firm that replicates what hedge funds do well at a fraction of the cost. DBI manages about $2.5 billion entirely through ETFs and mutual funds. On this episode, Beer made the case for managed futures not as an abstract statistical argument but as a practical solution to the portfolio construction problem created by the breakdown of the 60/40 model. His paper, "The Great 6040 Head Fake," lays out the thesis in detail.</p>

<p>Beer's central argument: the 60/40 portfolio's performance from 2000 to 2020 was an anomaly. During that stretch, bonds never drew down more than 4%, had low volatility, and moved consistently opposite to equities. When inflation returned, bond max drawdowns went from 3.8% to over 17%, volatility doubled, and research from Verdad shows that when inflation stays above 2.5%, stocks and bonds historically move in the same direction. The diversification engine that powered two decades of 60/40 returns is broken. Managed futures has a 50-year track record of moving independently of both stocks and bonds, and DBI's replication model captures broad category exposure at roughly one-tenth the cost of traditional hedge fund access. The methodology distills complex multi-asset hedge fund portfolios into their core exposures systematically, delivering the "big trades" in a liquid ETF wrapper.</p>

<p>Beer was unusually honest about how the advisor conversation actually plays out. The math showing a 10% allocation reduces a drawdown from 18% to 16% is technically correct but not compelling when clients are panicking about everything they see in the news. The real value is behavioral: it shows clients the portfolio was built for exactly this kind of environment. But Beer also acknowledged the flip side. Clients who track line items will be frustrated when equities surge and managed futures lags. He calls himself a bit of a rogue on allocation sizing, arguing lower levels than most industry commentary suggests because an oversized position that triggers client panic defeats the purpose.</p>

<h2>Key Takeaways</h2>
<ul>
<li>The 60/40 portfolio's strong performance from 2000-2020 depended on structural conditions (falling rates, contained inflation, negative stock/bond correlation) that have since reversed</li>
<li>When inflation exceeds 2.5%, stocks and bonds have historically moved together, eliminating the core diversification benefit</li>
<li>DBI's replication model captures managed futures exposure at roughly one-tenth the cost of traditional hedge fund access</li>
<li>The compelling argument for managed futures is behavioral, not statistical: it proves the portfolio was built to work when everything else stops working</li>
<li>Right-sizing the allocation matters: large enough to show up in statements, small enough that underperformance periods don't trigger redemptions</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 57: Matt Kaufman (Calamos/CPSM) - restructure
new_content[57] = """<p>On May 1, 2024, the day it launched, Brad sat down with Matt Kaufman to break down a Calamos product that had been years in the making. The fund offers 100% downside protection linked to the S&P 500 with a capped upside of 9.81%, made possible by a higher-rate environment that couldn't have supported the structure a few years earlier. Kaufman, who spent over 20 years in the ETF space including time building the buffered ETF category at Innovator and a decade at Milliman hedging variable annuities for insurance companies, explained not just how the product works but why the capital protection segment has remained largely untouched by ETFs until now.</p>

<p>The mechanics are clean. Three options positions: a zero-strike call replicating full S&P exposure (~$98 cost), an at-the-money put providing 100% protection (~$5), and a sold out-of-the-money call (~$3 premium) that finances the put by capping upside. The strike price where the sold call generates exactly enough premium to fund the protection sets the cap. At near-zero rates, this math didn't work because the cost of the first two positions exceeded $100. With the fed funds rate above 5%, the structure pencils. After each annual outcome period, the fund rolls into new options at prevailing rates, giving investors a fresh protection level and new cap without exiting the fund or triggering taxable events.</p>

<p>Kaufman drew a sharp comparison to CDs: a 5% CD rate at the highest federal bracket yields about 3.2-3.3% after tax, paid as ordinary income. The structured protection ETF compounds tax-deferred inside the wrapper, and gains are taxed at long-term capital gains rates upon sale. For mid-period buyers, the remaining cap and protection adjust dynamically based on where NAV sits relative to inception. If the S&P is up 5% and NAV has risen 2%, a new buyer gets roughly 7% remaining cap with ~98% protection. Calamos sees the capital protection space, currently dominated by fixed index annuities and structured notes, as roughly four times the size of the buffered ETF market and largely undisrupted by the ETF wrapper.</p>

<h2>Key Takeaways</h2>
<ul>
<li>100% downside protection with 9.81% capped upside to the S&P 500 over a one-year outcome period, enabled by higher rates</li>
<li>Three-option construction: zero-strike call for exposure, at-the-money put for protection, sold OTM call to finance the structure</li>
<li>Significant tax advantage over CDs and annuities: gains compound inside the fund and are taxed at long-term capital gains rates</li>
<li>Mid-period buyers get adjusted cap and protection levels based on current NAV relative to inception</li>
<li>The capital protection market (annuities, structured notes) is roughly 4x the size of buffered ETFs and largely untouched by the ETF wrapper</li>
</ul>

<p>Listen to the full conversation on Spotify, Apple Podcasts, or YouTube.</p>"""

# INDEX 58: Jason Hsu (Rayliant) - need to read content first
# INDEX 59: Greg Reid (Westwood MDST) - need to read
# INDEX 60: Kim Mayer (GMO)
# INDEX 61: Simeon Hyman (ProShares)
# INDEX 62: Dodd Kittsley (Davis Funds)
# INDEX 63: Sal Esposito (Zacks)
# INDEX 64: Johan Grahn (Allianz)
# INDEX 65: Weldon Rice (QRAFT)
# INDEX 66: David LaValle (Grayscale)
# INDEX 67: Keri Riemer & Hazel Doyle (K&L Gates)
# INDEX 68: Adam Curran (YALL)
# INDEX 69: Todd Rosenbluth (VettaFi)
# INDEX 70: Matt Barry (Touchstone)
# INDEX 71: Andrew Chanin (ProcureAM)
# INDEX 72: Yuri Khodjamirian (Tema/TOLL)
# INDEX 73: Ragen Stienke (Ballast/MGMT)
# INDEX 74: Steve Cook (Harbor)

# Will be filled in by part 2 script

print("Part 1 content defined: indexes 50-57")
print(f"Episodes defined: {sorted(new_content.keys())}")
