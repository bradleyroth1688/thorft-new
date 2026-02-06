// Pre-processed THOR Sector 100 performance data
// Source: sector-100.csv
// All returns are monthly percentages. NET returns used throughout.
// "As of" date: January 31, 2026 (last complete month)

export interface MonthlyReturn {
  date: string; // YYYY-MM-DD
  thorNet: number; // monthly return in %
  benchmark: number; // monthly return in %
}

// Monthly returns parsed from CSV (through Jan 2026 — excluding partial Feb 2026)
export const monthlyReturns: MonthlyReturn[] = [
  { date: "2005-02-28", thorNet: 1.301926674476861, benchmark: 0.22564742203552424 },
  { date: "2005-03-31", thorNet: -1.196732366224229, benchmark: -1.3636881885219165 },
  { date: "2005-04-30", thorNet: -0.16096377448612254, benchmark: -3.195051983001007 },
  { date: "2005-05-31", thorNet: 0.8504635544426042, benchmark: 4.495753910477185 },
  { date: "2005-06-30", thorNet: -0.4292896936416879, benchmark: 1.536061348221951 },
  { date: "2005-07-31", thorNet: 3.6483223549897748, benchmark: 5.107137097470238 },
  { date: "2005-08-31", thorNet: -0.7576449805396956, benchmark: -0.872899734953636 },
  { date: "2005-09-30", thorNet: 1.8567738410779633, benchmark: 0.4964743936262783 },
  { date: "2005-10-31", thorNet: -3.558118440242608, benchmark: -2.678643406015069 },
  { date: "2005-11-30", thorNet: 4.23735677294641, benchmark: 4.551485663942545 },
  { date: "2005-12-31", thorNet: 0.48362121760852084, benchmark: 0.5329100587750712 },
  { date: "2006-01-31", thorNet: 2.7511126851558876, benchmark: 4.025795323878567 },
  { date: "2006-02-28", thorNet: -0.043564778117166636, benchmark: 0.3360397447220942 },
  { date: "2006-03-31", thorNet: 2.3830185757840683, benchmark: 2.0964628469271274 },
  { date: "2006-04-30", thorNet: 0.2128661361408879, benchmark: 0.8616872696028288 },
  { date: "2006-05-31", thorNet: -3.368574829229687, benchmark: -2.9676176661594944 },
  { date: "2006-06-30", thorNet: -0.16409407576634116, benchmark: -0.27906439791827164 },
  { date: "2006-07-31", thorNet: -0.02765809795365337, benchmark: -1.3283658167252965 },
  { date: "2006-08-31", thorNet: 1.6509422611270752, benchmark: 2.7396956375525194 },
  { date: "2006-09-30", thorNet: 1.9042146401410553, benchmark: 2.3960807715905474 },
  { date: "2006-10-31", thorNet: 3.734047855681921, benchmark: 3.7595596198383374 },
  { date: "2006-11-30", thorNet: 2.249030927976703, benchmark: 2.495114631575923 },
  { date: "2006-12-31", thorNet: 0.6030866324513662, benchmark: 0.5655361462931996 },
  { date: "2007-01-31", thorNet: 2.1413833257169834, benchmark: 2.4081352123641597 },
  { date: "2007-02-28", thorNet: -1.0581937131096564, benchmark: -0.4744221685098915 },
  { date: "2007-03-31", thorNet: 0.9159716180099808, benchmark: 0.8199567889184411 },
  { date: "2007-04-30", thorNet: 3.730213065327481, benchmark: 4.412541582046958 },
  { date: "2007-05-31", thorNet: 3.259856152399365, benchmark: 3.235353151386944 },
  { date: "2007-06-30", thorNet: -1.383229702808031, benchmark: -1.8558319465205142 },
  { date: "2007-07-31", thorNet: -2.390979638105628, benchmark: -4.511715672221584 },
  { date: "2007-08-31", thorNet: 0.4521617004183298, benchmark: 0.0818179661132179 },
  { date: "2007-09-30", thorNet: 3.785445970840562, benchmark: 2.490357284502509 },
  { date: "2007-10-31", thorNet: 2.271393560466528, benchmark: 1.1202221566601445 },
  { date: "2007-11-30", thorNet: -1.4418762257263018, benchmark: -4.648865298703663 },
  { date: "2007-12-31", thorNet: 0.8178942872516526, benchmark: -1.7152595258921877 },
  { date: "2008-01-31", thorNet: -2.503241828657765, benchmark: -4.302669905486667 },
  { date: "2008-02-29", thorNet: -0.26807166671992677, benchmark: -3.0121900734337625 },
  { date: "2008-03-31", thorNet: 2.107927207250415, benchmark: -1.8639308451099734 },
  { date: "2008-04-30", thorNet: 2.3940123264264646, benchmark: 5.722963911268741 },
  { date: "2008-05-31", thorNet: -0.668440721367114, benchmark: 2.6513736537360444 },
  { date: "2008-06-30", thorNet: -4.558948127650142, benchmark: -9.836152288419608 },
  { date: "2008-07-31", thorNet: -2.6060758721376254, benchmark: -0.5031145011062388 },
  { date: "2008-08-31", thorNet: 0.490280488243644, benchmark: 2.961720907443399 },
  { date: "2008-09-30", thorNet: -3.125371589156445, benchmark: -10.908621260032902 },
  { date: "2008-10-31", thorNet: -6.010717445539648, benchmark: -20.906879457910755 },
  { date: "2008-11-30", thorNet: 4.946567551730863, benchmark: -9.633342916684185 },
  { date: "2008-12-31", thorNet: 3.6110795068345025, benchmark: 3.0830486331277607 },
  { date: "2009-01-31", thorNet: -9.761184206954997, benchmark: -8.34531662081437 },
  { date: "2009-02-28", thorNet: -11.074914078282994, benchmark: -11.24569482158112 },
  { date: "2009-03-31", thorNet: 6.654589191314053, benchmark: 10.291001707057834 },
  { date: "2009-04-30", thorNet: 13.181852419717899, benchmark: 18.691950289453207 },
  { date: "2009-05-31", thorNet: 5.421399553838202, benchmark: 6.462566379332979 },
  { date: "2009-06-30", thorNet: -0.6345515066714102, benchmark: -1.1986186908438667 },
  { date: "2009-07-31", thorNet: 7.987753540921405, benchmark: 9.185330164379902 },
  { date: "2009-08-31", thorNet: 4.4966886302424625, benchmark: 5.648063674354065 },
  { date: "2009-09-30", thorNet: 3.9153289906465716, benchmark: 5.284728760467261 },
  { date: "2009-10-31", thorNet: -2.6685436231349002, benchmark: -3.699711397855998 },
  { date: "2009-11-30", thorNet: 6.538409628872932, benchmark: 5.540064206467399 },
  { date: "2009-12-31", thorNet: 2.7996134073597245, benchmark: 4.610673308901414 },
  { date: "2010-01-31", thorNet: -4.021015706402786, benchmark: -3.3174915299848617 },
  { date: "2010-02-28", thorNet: 2.4670804944384006, benchmark: 4.1900792267981934 },
  { date: "2010-03-31", thorNet: 5.695629525471935, benchmark: 7.223959597657914 },
  { date: "2010-04-30", thorNet: 1.9218367098158273, benchmark: 2.654470331771286 },
  { date: "2010-05-31", thorNet: -7.238435277676469, benchmark: -7.36840149223249 },
  { date: "2010-06-30", thorNet: -0.5293536216375627, benchmark: -6.3072246171069875 },
  { date: "2010-07-31", thorNet: 1.0697696391922307, benchmark: 7.354481984065719 },
  { date: "2010-08-31", thorNet: -0.09667596790629007, benchmark: -4.756035978798668 },
  { date: "2010-09-30", thorNet: 1.8297709057292, benchmark: 10.188580237004775 },
  { date: "2010-10-31", thorNet: 3.729087559045774, benchmark: 3.5629982731105514 },
  { date: "2010-11-30", thorNet: 0.27086770738971033, benchmark: 0.8202174710481458 },
  { date: "2010-12-31", thorNet: 6.212485965555592, benchmark: 7.215323295204268 },
  { date: "2011-01-31", thorNet: 1.9848332987957074, benchmark: 2.113713227688363 },
  { date: "2011-02-28", thorNet: 3.489906271971255, benchmark: 4.015747619474341 },
  { date: "2011-03-31", thorNet: 0.33799273776309313, benchmark: 0.832885337315914 },
  { date: "2011-04-30", thorNet: 3.230651524228656, benchmark: 3.131191875335415 },
  { date: "2011-05-31", thorNet: -1.00708834818648, benchmark: -0.6148889125070722 },
  { date: "2011-06-30", thorNet: -1.820093921521937, benchmark: -1.8034849562493904 },
  { date: "2011-07-31", thorNet: -1.8231813094620186, benchmark: -3.615162394284266 },
  { date: "2011-08-31", thorNet: -3.052796353814413, benchmark: -6.353756783231345 },
  { date: "2011-09-30", thorNet: 0.028961207380473475, benchmark: -9.050076913418781 },
  { date: "2011-10-31", thorNet: 1.7205381027188826, benchmark: 13.06762990421586 },
  { date: "2011-11-30", thorNet: -0.7225188160774776, benchmark: -0.8758803930432046 },
  { date: "2011-12-31", thorNet: 1.59592788113192, benchmark: 0.1564378938331723 },
  { date: "2012-01-31", thorNet: 4.9378713434737875, benchmark: 5.682796107234789 },
  { date: "2012-02-29", thorNet: 2.825588023314207, benchmark: 4.007350838559187 },
  { date: "2012-03-31", thorNet: 2.6972555495301087, benchmark: 2.3198436067071615 },
  { date: "2012-04-30", thorNet: -0.07540407044216435, benchmark: -0.7518802761697141 },
  { date: "2012-05-31", thorNet: -5.116699108561629, benchmark: -6.9930012867503555 },
  { date: "2012-06-30", thorNet: 4.142538933824236, benchmark: 3.8560504715055233 },
  { date: "2012-07-31", thorNet: 1.0634698190580494, benchmark: 0.12116146990119869 },
  { date: "2012-08-31", thorNet: 0.7446722205457723, benchmark: 3.0657392945593998 },
  { date: "2012-09-30", thorNet: 2.1282089985978025, benchmark: 2.5145674252086136 },
  { date: "2012-10-31", thorNet: -1.0958914265103092, benchmark: -0.8240548841723205 },
  { date: "2012-11-30", thorNet: 0.38499854563969205, benchmark: 1.2753752114085692 },
  { date: "2012-12-31", thorNet: 1.538582845946257, benchmark: 2.2716190665307945 },
  { date: "2013-01-31", thorNet: 5.845367490802289, benchmark: 6.507852910503731 },
  { date: "2013-02-28", thorNet: 1.2187522110350235, benchmark: 0.9684731704028948 },
  { date: "2013-03-31", thorNet: 3.8346626019579277, benchmark: 4.364726677904085 },
  { date: "2013-04-30", thorNet: 2.448644212753792, benchmark: 1.6935044736034799 },
  { date: "2013-05-31", thorNet: 0.4209078658409693, benchmark: 2.6875359344590954 },
  { date: "2013-06-30", thorNet: -1.6311547271630977, benchmark: -1.231636093238253 },
  { date: "2013-07-31", thorNet: 5.314282540102888, benchmark: 5.630809507280055 },
  { date: "2013-08-31", thorNet: -2.6274881259899407, benchmark: -2.9202649920020862 },
  { date: "2013-09-30", thorNet: 3.465010409656033, benchmark: 4.112240762739816 },
  { date: "2013-10-31", thorNet: 4.57230437272933, benchmark: 4.279137344583828 },
  { date: "2013-11-30", thorNet: 2.7825365353429055, benchmark: 2.220908183006687 },
  { date: "2013-12-31", thorNet: 2.6708879146842612, benchmark: 2.881852021001441 },
  { date: "2014-01-31", thorNet: -3.911367861966919, benchmark: -2.961427126838334 },
  { date: "2014-02-28", thorNet: 5.499481121719185, benchmark: 5.336981730236934 },
  { date: "2014-03-31", thorNet: 0.006792268327959761, benchmark: 0.6071036599226032 },
  { date: "2014-04-30", thorNet: 1.2938641989528321, benchmark: 0.38361934557298305 },
  { date: "2014-05-31", thorNet: 2.112197669096094, benchmark: 2.1564044568543883 },
  { date: "2014-06-30", thorNet: 2.3996791574989462, benchmark: 2.858560255228415 },
  { date: "2014-07-31", thorNet: -2.067929283720138, benchmark: -2.333485985983086 },
  { date: "2014-08-31", thorNet: 3.374116646470404, benchmark: 4.2044876095523875 },
  { date: "2014-09-30", thorNet: -3.030335685335428, benchmark: -2.5849141209662974 },
  { date: "2014-10-31", thorNet: 0.7856377972777828, benchmark: 3.021495991736467 },
  { date: "2014-11-30", thorNet: 2.47691197723936, benchmark: 2.6639274815597025 },
  { date: "2014-12-31", thorNet: 0.11907969893698578, benchmark: 0.279898066786366 },
  { date: "2015-01-31", thorNet: 0.37785161244996424, benchmark: -2.9207005282911203 },
  { date: "2015-02-28", thorNet: 2.2016459661311494, benchmark: 5.723693566836663 },
  { date: "2015-03-31", thorNet: -1.8718188498733856, benchmark: -0.9591097812369442 },
  { date: "2015-04-30", thorNet: 0.3548786838503126, benchmark: 0.407166112469004 },
  { date: "2015-05-31", thorNet: 0.5260702552597696, benchmark: 0.7249734266063346 },
  { date: "2015-06-30", thorNet: -2.2007287567986866, benchmark: -2.2686154831981553 },
  { date: "2015-07-31", thorNet: 1.9897703037399461, benchmark: 0.9649151693326807 },
  { date: "2015-08-31", thorNet: -6.460003405852999, benchmark: -5.461073485304624 },
  { date: "2015-09-30", thorNet: -0.6110489427213817, benchmark: -3.0146039487276233 },
  { date: "2015-10-31", thorNet: 0.21802165312738708, benchmark: 6.987497078137195 },
  { date: "2015-11-30", thorNet: -0.01934824159298687, benchmark: 0.30496034482294654 },
  { date: "2015-12-31", thorNet: -2.1404221614674257, benchmark: -2.4762038316420876 },
  { date: "2016-01-31", thorNet: 0.04682481599198596, benchmark: -5.558461280435623 },
  { date: "2016-02-29", thorNet: -0.053549984684142515, benchmark: 0.9947443395534883 },
  { date: "2016-03-31", thorNet: 4.5978210421601995, benchmark: 7.9790358178811305 },
  { date: "2016-04-30", thorNet: 0.5878091776403638, benchmark: 1.2479084165998744 },
  { date: "2016-05-31", thorNet: 1.1798159144948528, benchmark: 1.3583027744298093 },
  { date: "2016-06-30", thorNet: 1.68260812124561, benchmark: -0.06339853091454906 },
  { date: "2016-07-31", thorNet: 2.6675666404831544, benchmark: 4.144362842158511 },
  { date: "2016-08-31", thorNet: -0.7038845700363394, benchmark: 0.1553358583814335 },
  { date: "2016-09-30", thorNet: -0.1164248000252277, benchmark: 0.10300360436159561 },
  { date: "2016-10-31", thorNet: -2.422866665069734, benchmark: -2.4404868637226906 },
  { date: "2016-11-30", thorNet: 6.00338369319684, benchmark: 5.236013885603286 },
  { date: "2016-12-31", thorNet: 1.367141250840831, benchmark: 1.1257472858638318 },
  { date: "2017-01-31", thorNet: 1.8097047526037136, benchmark: 2.0083081843488504 },
  { date: "2017-02-28", thorNet: 2.6300990850999906, benchmark: 3.1341890191101562 },
  { date: "2017-03-31", thorNet: -0.16406411976302993, benchmark: 0.020943950616736373 },
  { date: "2017-04-30", thorNet: 0.9862010527538878, benchmark: 0.6606433717534665 },
  { date: "2017-05-31", thorNet: 1.4890742223185205, benchmark: 0.557859467901145 },
  { date: "2017-06-30", thorNet: 1.0019234345076455, benchmark: 1.1637234955962583 },
  { date: "2017-07-31", thorNet: 1.8527624187095304, benchmark: 1.5969017648924444 },
  { date: "2017-08-31", thorNet: 0.7734128199223367, benchmark: -0.9982996970318458 },
  { date: "2017-09-30", thorNet: 1.8096417502035056, benchmark: 2.9340132437275956 },
  { date: "2017-10-31", thorNet: 2.7374126706959823, benchmark: 1.0885566451038775 },
  { date: "2017-11-30", thorNet: 2.89616034642719, benchmark: 3.7999546820655317 },
  { date: "2017-12-31", thorNet: 0.8336787554237723, benchmark: 1.2383582457037745 },
  { date: "2018-01-31", thorNet: 5.971083221076534, benchmark: 4.384834953652317 },
  { date: "2018-02-28", thorNet: -6.470327565900447, benchmark: -4.390306591585558 },
  { date: "2018-03-31", thorNet: -0.016939890710387928, benchmark: -0.9261789128294451 },
  { date: "2018-04-30", thorNet: 0.36741503343427073, benchmark: 0.37194840508534277 },
  { date: "2018-05-31", thorNet: 0.5909248035175674, benchmark: 1.4521933011175214 },
  { date: "2018-06-30", thorNet: 0.10189390793180486, benchmark: 0.9719935689009196 },
  { date: "2018-07-31", thorNet: -0.28119098787899865, benchmark: 3.1013675363339654 },
  { date: "2018-08-31", thorNet: 1.5770006207022957, benchmark: 1.9609668433711924 },
  { date: "2018-09-30", thorNet: 0.49894508800587545, benchmark: 0.1713733519680849 },
  { date: "2018-10-31", thorNet: -4.606011490022288, benchmark: -7.246506756433469 },
  { date: "2018-11-30", thorNet: 1.1334616977748402, benchmark: 2.6143140842741497 },
  { date: "2018-12-31", thorNet: -4.660056901809551, benchmark: -9.537380233994785 },
  { date: "2019-01-31", thorNet: 6.3323493776414885, benchmark: 9.814022474794593 },
  { date: "2019-02-28", thorNet: 2.8772289371060022, benchmark: 3.6664248456306225 },
  { date: "2019-03-31", thorNet: 1.985246802547791, benchmark: 0.8348190669785538 },
  { date: "2019-04-30", thorNet: 2.5992838012446784, benchmark: 3.590575304172927 },
  { date: "2019-05-31", thorNet: -5.638536580886678, benchmark: -6.932275544719991 },
  { date: "2019-06-30", thorNet: 6.4292589010308765, benchmark: 7.551799888200872 },
  { date: "2019-07-31", thorNet: 1.0592817722477443, benchmark: 0.8441344054582967 },
  { date: "2019-08-31", thorNet: -1.032450566557086, benchmark: -3.2655661533978475 },
  { date: "2019-09-30", thorNet: 1.2686562640956467, benchmark: 3.269459281552156 },
  { date: "2019-10-31", thorNet: 1.0178344772331371, benchmark: 1.2305723349445685 },
  { date: "2019-11-30", thorNet: 1.9477206089629773, benchmark: 3.4000456791111855 },
  { date: "2019-12-31", thorNet: 2.809340488905332, benchmark: 2.7049379914222405 },
  { date: "2020-01-31", thorNet: -0.6893195986324541, benchmark: -1.883844176313998 },
  { date: "2020-02-29", thorNet: -6.129937279393105, benchmark: -8.869113538481555 },
  { date: "2020-03-31", thorNet: 6.257682485906457, benchmark: -17.970521177647136 },
  { date: "2020-04-30", thorNet: 11.039538097705194, benchmark: 14.425131126381775 },
  { date: "2020-05-31", thorNet: 2.549034689308294, benchmark: 4.753494263079583 },
  { date: "2020-06-30", thorNet: 1.7968599058072465, benchmark: 1.4609539067993893 },
  { date: "2020-07-31", thorNet: 5.346202782196263, benchmark: 4.992155054925762 },
  { date: "2020-08-31", thorNet: 4.195409899772495, benchmark: 4.268065155061729 },
  { date: "2020-09-30", thorNet: -4.230458230409773, benchmark: -2.501040832780499 },
  { date: "2020-10-31", thorNet: -2.7029208769280832, benchmark: -0.5549744128961587 },
  { date: "2020-11-30", thorNet: 6.299991416497441, benchmark: 14.296356505660391 },
  { date: "2020-12-31", thorNet: 2.868130153070192, benchmark: 4.157613723100684 },
  { date: "2021-01-31", thorNet: -0.11269627221514034, benchmark: -0.8154114364192777 },
  { date: "2021-02-28", thorNet: 2.5818707343337577, benchmark: 6.086950722570239 },
  { date: "2021-03-31", thorNet: 4.7636297205983835, benchmark: 6.045988340326325 },
  { date: "2021-04-30", thorNet: 5.12138284968926, benchmark: 4.673166384767891 },
  { date: "2021-05-31", thorNet: 0.7579237674970818, benchmark: 1.9153001270451497 },
  { date: "2021-06-30", thorNet: -0.726247997515983, benchmark: 0.023256447228647836 },
  { date: "2021-07-31", thorNet: 3.1141322265259896, benchmark: 1.2937305086376583 },
  { date: "2021-08-31", thorNet: 2.3513108029305396, benchmark: 2.3709793960120518 },
  { date: "2021-09-30", thorNet: -4.6955118614172004, benchmark: -3.790479618122611 },
  { date: "2021-10-31", thorNet: 4.976557335024578, benchmark: 5.299675352259348 },
  { date: "2021-11-30", thorNet: -1.1309353277739187, benchmark: -2.6432541809231935 },
  { date: "2021-12-31", thorNet: 5.1413200226166245, benchmark: 6.274413590961636 },
  { date: "2022-01-31", thorNet: -3.044912240118991, benchmark: -4.368664483405915 },
  { date: "2022-02-28", thorNet: -1.3723344749004496, benchmark: -0.8930806628621002 },
  { date: "2022-03-31", thorNet: 1.6121930185807987, benchmark: 2.671680623131345 },
  { date: "2022-04-30", thorNet: -5.820950015416537, benchmark: -6.505611281093849 },
  { date: "2022-05-31", thorNet: -0.7080511112323884, benchmark: 1.0037239449111723 },
  { date: "2022-06-30", thorNet: -5.443765020074876, benchmark: -9.39265111347385 },
  { date: "2022-07-31", thorNet: 3.1927511537036546, benchmark: 8.64934799056849 },
  { date: "2022-08-31", thorNet: -2.836766034489646, benchmark: -3.483246440880716 },
  { date: "2022-09-30", thorNet: -2.908273301941122, benchmark: -9.167023538282804 },
  { date: "2022-10-31", thorNet: 4.815742365130116, benchmark: 9.648028062924796 },
  { date: "2022-11-30", thorNet: 6.246645117512717, benchmark: 6.635128251573041 },
  { date: "2022-12-31", thorNet: -4.170215038116288, benchmark: -4.693955954675744 },
  { date: "2023-01-31", thorNet: 3.5406925541559886, benchmark: 7.419476888506793 },
  { date: "2023-02-28", thorNet: -2.52267805221037, benchmark: -3.381022297003833 },
  { date: "2023-03-31", thorNet: -0.42513208777161804, benchmark: -0.8603412745810224 },
  { date: "2023-04-30", thorNet: -0.03877267955523234, benchmark: 0.3595653189536696 },
  { date: "2023-05-31", thorNet: -3.3255884696883675, benchmark: -3.8101221152228804 },
  { date: "2023-06-30", thorNet: 6.629501960620998, benchmark: 7.6530116790711755 },
  { date: "2023-07-31", thorNet: 3.1531781399476433, benchmark: 3.5017464630298756 },
  { date: "2023-08-31", thorNet: -2.831304929194911, benchmark: -3.2024941145319397 },
  { date: "2023-09-30", thorNet: -3.5010388382887725, benchmark: -5.07852365842516 },
  { date: "2023-10-31", thorNet: -1.108950228708827, benchmark: -4.13579840066155 },
  { date: "2023-11-30", thorNet: 3.2227984707831725, benchmark: 9.180576248327178 },
  { date: "2023-12-31", thorNet: 5.525402347720432, benchmark: 6.821740899100437 },
  { date: "2024-01-31", thorNet: -1.5909914078075182, benchmark: -0.8491865096175055 },
  { date: "2024-02-29", thorNet: 4.2850918130313165, benchmark: 4.045757973577135 },
  { date: "2024-03-31", thorNet: 3.6505815771363803, benchmark: 4.473021684409861 },
  { date: "2024-04-30", thorNet: -4.512344918129141, benchmark: -4.823767095677011 },
  { date: "2024-05-31", thorNet: 3.0156825084830308, benchmark: 2.8412151721117107 },
  { date: "2024-06-30", thorNet: -1.7269732099706614, benchmark: -0.5080976236930712 },
  { date: "2024-07-31", thorNet: 2.9667547878386102, benchmark: 4.45577306115692 },
  { date: "2024-08-31", thorNet: 3.920547168868871, benchmark: 2.4883183524694985 },
  { date: "2024-09-30", thorNet: 2.5160175626204317, benchmark: 2.2691346737744977 },
  { date: "2024-10-31", thorNet: -2.8382549599111018, benchmark: -1.6019128164188046 },
  { date: "2024-11-30", thorNet: 4.089401917024094, benchmark: 6.426919231541173 },
  { date: "2024-12-31", thorNet: -7.39272723596115, benchmark: -6.275466765050542 },
  { date: "2025-01-31", thorNet: 1.9998385401797325, benchmark: 3.4297792881309075 },
  { date: "2025-02-28", thorNet: -0.49152613135856615, benchmark: -0.5848587022903029 },
  { date: "2025-03-31", thorNet: -2.894994890437852, benchmark: -3.402610331429612 },
  { date: "2025-04-30", thorNet: 5.483291923626821, benchmark: -2.36103380254995 },
  { date: "2025-05-31", thorNet: 5.768308819729517, benchmark: 4.310029916701241 },
  { date: "2025-06-30", thorNet: 4.149661022117379, benchmark: 3.426124897325744 },
  { date: "2025-07-31", thorNet: 1.8830928033775285, benchmark: 1.0399354951607709 },
  { date: "2025-08-31", thorNet: 2.5356484110026667, benchmark: 2.7174564969313586 },
  { date: "2025-09-30", thorNet: 1.8113151003863237, benchmark: 1.010197611740793 },
  { date: "2025-10-31", thorNet: 0.07464719185634738, benchmark: -0.9330449420010822 },
  { date: "2025-11-30", thorNet: -0.21374656365664713, benchmark: 1.9156262225676013 },
  { date: "2025-12-31", thorNet: -0.5086096936340323, benchmark: 0.4103163961114209 },
  { date: "2026-01-31", thorNet: 5.540054926992832, benchmark: 3.403607970830902 },
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

  // 10 Year: Feb 2016 through Jan 2026 (120 months)
  const tenYearCompThor = compoundReturns(getReturnsForPeriod(data, "2016-02-01", "2026-01-31", "thorNet"));
  const tenYearCompBench = compoundReturns(getReturnsForPeriod(data, "2016-02-01", "2026-01-31", "benchmark"));
  const tenYearThor = annualizeReturn(tenYearCompThor, 120);
  const tenYearBench = annualizeReturn(tenYearCompBench, 120);

  // Since Inception: Feb 2005 through Jan 2026
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
    tenYear: { thor: tenYearThor, bench: tenYearBench },
    sinceInception: { thor: siThor, bench: siBench },
  };
}

// ─── Calendar Year Returns ───

function calcCalendarYears() {
  const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
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
    return maxDD * 100;
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
