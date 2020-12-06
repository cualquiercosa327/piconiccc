pico-8 cartridge // http://www.pico-8.com
version 23
__lua__

#include main.lua
#include decompressor.lua
#include eg_triangle.lua
#include camera.lua
#include 3d.lua
#include misc.lua
#include campath.lua
#include renderlist.lua
#include objects.lua

__gfx__
82b0009170600050900010f08200216d0021ff10f0ff50905e70606db00082e1d191a1320081620041c28221f26d21f2ff41c2ff81625ea1326de1d18203a391
c21400b2340072a48252c46d52c4ff72a4ffb2345ec2146d03a382347591f3e500d3060093768273a66d73a6ff9376ffd3065ef3e56d34758265579115b70005
e700c44882a4786da478ffc448ff05e75e15b76d65578286299146990026b900e51a82d54a6dd54affe51aff26b95e46996d862982b7fa91776b00578b0017fb
82f61c6df61cff17fbff578b5e776b6db7fa82782c91389c0028cc00e73d82d76d6dd76dffe73dff28cc5e389c6d782c82492d9119ad00f8dd00d84e82b88e6d
b88effd84efff8dd5e19ad6d492d821aed91f97e00f9ae00d93f82d97f6dd97fffd93ffff9ae5ef97e6d1aed820b5e910bee000b2f000bbf820bff6d0bffff0b
bfff0b2f5e0bee6d0b5e82fb5e911cee001c2f003caf823cef6d3cefff3cafff1c2f5e1cee6dfb5e82ecfd911d7e002dae005d2f826d6f6d6d6fff5d2fff2dae
5e1d7e6decfd82cd4d910ead001edd005e3e827e6e6d7e6eff5e3eff1edd5e0ead6dcd4d827e3c91ce7c00ee9c003fec825f0d6d5f0dff3fecffee9c5ece7c6d
7e3c82feea914f0b007f1b00cf4b82ff5b6dff5bffcf4bff7f1b5e4f0b6dfeea90317fdeff90107f321010324120a02030a0b040d13030d1c04032403032d040
51503051e04011603011f040107030100140108030101140119030112140a0a030a0314051b01051e12010c03010514032d03032614051e03051714011f03011
814010013010914010113010a14000213000b14010313010c14010413010d140325110328220a06130a0f140d17130d1024032813032124051913051224011a1
3011324010b13010424010c13010524011d130116240a0e130a0724051f11051232010023010924032123032a24051223051b24011323011c24010423010d240
10523010e24000623000f24010723010034010823010134032921032c320a0a230a03340d1b230d1434032c23032534051d23051634011e23011734010f23010
834010033010934011133011a340a02330a0b34051331051642010433010d34032533032e34051633051f34011733011044010833010144010933010244000a3
3000344010b33010444010c33010544032d310320520a0e330a07440d1f330d1844032043032944051143051a44011243011b44010343010c44010443010d440
11543011e440a06430a0f44051741051a52010843010154032943032254051a43051354011b43011454010c43010554010d43010654000e43000754010f43010
8540100530109540321510324620a02530a0b540d13530d1c54032453032d54051553051e54011653011f540107530100640108530101640119530112640a0a5
30a0364051b51051e62010c53010564032d53032664051e53051764011f53011864010063010964010163010a64000263000b64010363010c64010463010d640
325610328720a06630a0f640d17630d1074032863032174051963051274011a63011374010b63010474010c63010574011d630116740a0e630a0774051f61051
282010073010974032173032a74051273051b74011373011c74010473010d74010573010e74000673000f74010773010084010873010184032971032c820a0a7
30a03840d1b730d1484032c73032584051d73051684011e73011784010f73010884010083010984011183011a840a02830a0b84051381051692010483010d840
32583032e84051683051f84011783011094010883010194010983010294000a83000394010b83010494010c83010594032d810320a20a0e830a07940d1f830d1
894032093032994051193051a94011293011b94010393010c94010493010d94011593011e940a06930a0f94020c10d20ff0dc4ffdcc4c1dcc100ffc183ff5483
df5400df00c169009969a0ff9923ff5ac3999ac3c19a00c16c00996cd0ff6cd3ff4ca4994ca4c14c50036c50996c214f6c934f4c64994c64034c70030d70990d
414ffcb34fec8499dc8403dc34c1c63499c6b4ff07a6ff1837995837c158c0c1e8c099e861ff19e3ffe994991a94c11a0103f80199f8a14f29a34fc954990a54
030a300379309979e04fa9e24f4a93998a93038ab8c135b8993569ff552cffe5ec9916ecc11635c166359966c5ffa6b7ffb73899f738c1f7650376659976f54f
c6874f970899d70803d76403d66499d6e44f27764ff70799380703384bc1f24b99f21cfff21ffff2ff99f2ffc1f249c1a44999a4f9ffd4bcff657d99857dc185
8903b48999b44a4fe47c4f553d99753d0375f80345f89945b94f65eb4fe5ac9906ac03064bc1004b99001cff001fff00ff9900ffc1004bc1524b99521cff521f
ff52ff9952ffc1529b03529b99526c4f52de4f52af9952af03529b03f29b99f26c4ff2de4ff2af99f2af03f21050ffbfdf1030ff1070ff9faf5f60b032101032
602050201050702050301050802043403043504060905060016032a05032116030b05030216032c05032316060d05060416032417032908032f0503261603001
5030716010115010816030215030916032315032a16060a17060f08060515060c16032615032d16030715030e16032815032f160609150600260d30270d35180
60125060826032225032926050325050a26032425032b26060525060c26043c27043128043725043e26050825050f26050925050036050a25050136043b25043
236060237060728060d25060436032e25032536050f25050636032035032736060135060836070837070d28060935060046032a35032146030b35030246032c3
5032346060d35060446032447032938032f35032646030045030746010145010846030245030946032345032a46060a47060f38060545060c46032645032d460
30745030e46032845032f460609450600560d30570d3548060155060856032255032956050355050a56032455032b56060555060c56043c57043158043755043
e56050855050f56050955050066050a55050166043b55043266060267060758060d55060466032e55032566050f5505066603206503276606016506086607086
7070d58060965060076032a65032176030b65030276032c65032376060d65060476032477032968032f650326760300750307760101750108760302750309760
32375032a76060a77060f68060575060c76032675032d76030775030e76032875032f760609750600860d30870d3578063fff24200f38400f38400f14200f112
9714a49714a497d11297d1420054129774632e54a497748400544200f51297f5632ef5a497f58400f5f400f3159714f42ef21597d1f400f1c600f3c69714c62e
f2c697d1c600f1840091a49771632e91129771420091840000a49700632e00129700420000c100f1a197d1c12ef2a19714c100f30000f10097d1002ef2009714
0000f363ffe84200e98400e98400e74200e712970aa4970aa497c71297c742005a12977a632e5aa4977a84005a4200eb1297eb632eeba497eb8400ebf400e915
970af42ee81597c7f400e7c600e9c6970ac62ee8c697c7c600e7840087a49767632e871297674200878400f5a497f5632ef51297f54200f5c100e7a197c7c12e
e8a1970ac100e90000e70097c7002ee800970a0000e963ffeb1200eb122eeba42eeba400eb1200ed1297eda497eda400ed1200df1297df2997df2900df2997ed
2900edff97ffff00ffff97fdff00fd102010ef4090ff7fbf60ffaf60c0ff4fcf70ff9fff70409f1060cf1040ff4021ffeeaff0ff1f7061ffaecf01ff0fff0140
0f40b1ff5e9f81ff8e8002ff0ecf91ff7eff91407e4042ffcd8f12fffd50a2ff6dcf62ffad306240addf1030ff1050ffbfef409fcfaf406fdf304020cf1040af
bf6050ff3010df2060efafef2020ef54201054402054203054b04040605040c06040107040d08040709040e0a05430b054a0c040a0d040016040b0d040116020
c0d020216040d0d040316054e0e054f0f05430015451114070214061314010414071514080614081715440815441914041d040a1604051d040b1602061d020c1
604071d040d1605481e05491f04040a140f1b14080c14002d14010e14012f154900254221254502254e13240e1d040426020f1d02052604002d04062604012d0
4072605422e05432f054504254925240906240a27240108240b2924060a240c2b25420c25482d24082d040e2604092d040f26020a2d020036040b2d040136054
c2e054d2f0f03310f05320f03330f0c34054735054d36041237041e38054839054f3a0f043b0f0b3c054b3d054146041c3d041246040d3d040346041e3d04144
60f0f3e0f004f0f04301f06411548321547431412341418451549361549471f05381f054915454d054b4604164d041c4604074d040d4604184d041e460f094e0
f0a4f05453a15405b14193c14115d15423e15425f1f0a302f03512f06322f0f43241f4d04155604005d04065604115d04175605425d0548560f035e0f045f0f0
6342f0a55254a36254b57241238241c5925473a254d5b2f033c2f095d25495d054f56041a5d041066040b5d040166041c5d0412660f0d5e0f0e5f06076e26086
f232460332961350562350a63350b61350660350860350d61350964355b6e250d65332c61032e62050a66350e67360b68360f67332079332b6a350f6b35027c3
50e6d35047e31007031057135517f35537040012d100d3d1d10400e14200b06292d02482a2a3b092e1c061b263a1643373237133719112f2247284d324a232d3
1172c223e4439484d4220354b0637353b514a44565a1e3d45054249376c4a4f5f531d4451055c4d34785a4b666d0d5a5006665241826b487d6a0e6060077f594
f8d6e4582790f75640989615c967252977c019a6b0b927c58a0895f9c7313ae671cac7965ba826ca18e14b4762db78970c49d68b78e25ca793cc29a8acf9b73c
e8144d1805adf9e93daab8dc69851ea8a67eda2b9d8bd95d0a27de69780fdb7ced6c0bcdcae85f3a5a7f0dcd0e7d2c0ebbaabf3b4ccf4eee0eae4d2ecc7cff6c
1edfafffddff4e1e1e2eefcdcfbf1050ffbfdf1030ff801010806020502010507020803010808020554030555040a05010a0a02050601050b020a07010a0c020
60803060904080901080e02050a01050f02080b01080012055c03055d040a0d010a0212050e010503120a0f010a0412060013060114080111080612050211050
7120803110808120554130555140a05110a0a12050611050b120a07110a0c12060813060914080911080e12050a11050f12080b11080022055c13055d140a0d1
10a0222050e110503220a0f110a04220600230601240801210806220502210507220803210808220554230555240a05210a0a22050621050b220a07210a0c220
60823060924080921080e22050a21050f22080b21080032055c23055d240a0d210a0232050e210503320a0f210a0432060033060134080131080632050231050
7320803310808320554330555340a05310a0a32050631050b320a07310a0c32060833060934080931080e32050a31050f32080b31080042055c33055d340a0d3
10a0242050e310503420a0f310a04420600430601440801410806420502410507420803410808420554430555440a05410a0a42050641050b420a07410a0c420
60843060944080941080e42050a41050f42080b41080052055c43055d440a0d410a0252050e410503520a0f410a0452060053060154014000ea4003d59003de9
000e0e00e93d00593d00a40e0014e900005900c0a400c0140000000014c000a4c000590000e914330ea4333d59333de9330e0e33e93d33593d33a40e3314e933
005933c0a433c0143300003314c033a4c033590033e914660ea4663d59663de9660e0e66e93d66593d66a40e6614e966005966c0a466c0146600006614c066a4
c066590066e914990ea4993d59993de9990e0e99e93d99593d99a40e9914e999005999c0a499c0149900009914c099a4c099590099e914cc0ea4cc3d59cc3de9
cc0e0ecce93dcc593dcca40ecc14e9cc0059ccc0a4ccc014cc0000cc14c0cca4c0cc5900cce914ff0ea4ff3d59ff3de9ff0e0effe93dff593dffa40eff14e9ff
0059ffc0a4ffc014ff0000ff14c0ffa4c0ff5900ffe9bb80ffbba2ffffa2bbff80bb01110ffe01100fff01e5ff2a10f4ff1b0ff4ffc5304a102010ef102f10e0
a01010a02120512010513120a03010a04120a05010a06120516010517120a07010a08120508010509120a09010a0a12051a01051b120a0b010a0c12050c01050
d120a0d010a0e12051e01051f120a0f010a002205001305011405011105022205521105532205031105042201041101052205051105062205561105572205071
1050822010811010922050911050a22055a11055b22050b11050c22010c11010d22050d11050e22055e11055f22050f110500320100230101240a01210a02320
512210513320a03210a04320504210505320a05210a06320516210517320a07210a08320508210509320a09210a0a32051a21051b320a0b210a0c32050c21050
d320a0d210a0e32051e21051f320a0f210a004205003305013405013105024205523105534205033105044201043101054205053105064205563105574205073
1050842010831010942050931050a42055a31055b42050b31050c42010c31010d42050d31050e42055e31055f42050f310500520100430101440a01410a02520
512410513520a03410a04520504410505520a05410a06520516410517520a07410a08520508410509520a09410a0a52051a41051b520a0b410a0c52050c41050
d520a0d410a0e52051e41051f520a0f410a006205005305015405540505526605041705036801051901046805050a05016b01030c01050d01070c01090d010b0
c010d0d010f0e01010f006009ce9009c9c00e99c0006e900530600535300065300e906339ce9339c9c33e99c3306e933530633535333065333e9a433ff4b33ff
ff334bff33a44b3300a433000033a400334ba466ff4b66ffff664bff66a44b6600a466000066a400664b06669ce9669c9c66e99c6606e9665306665353660653
66e906999ce9999c9c99e99c9906e999530699535399065399e9a499ff4b99ffff994bff99a44b9900a499000099a400994ba4ccff4bccffefcc4befcca44bcc
00a4cc0000cca400cc4b06cc9ce9cc9c9ccce99ccc06e9cc5306cc5353cc0653cce906ff9ce9ff9c9cffe99cff06e9ff5306ff5353ff0653ffe91090ff7f9f10
70ff55101055a02055201055b02055301055c02055401055d02055501055e02055601055f02055701055012055803055904051901051212050a01050312051b0
1051412050c01050512051d01051612050e01050712051f01051812050013050114060111060a12055211055b12060311060c12055411055d12060511060e120
55611055f120607110600220558130559140a09110a0222051a110513220a0b110a0422051c110515220a0d110a0622051e110517220a0f110a0822051023051
124055121055a22055221055b22055321055c22055421055d22055521055e22055621055f22055721055032055823055924051921051232050a21050332051b2
1051432050c21050532051d21051632050e21050732051f21051832050033050134060131060a32055231055b32060331060c32055431055d32060531060e320
55631055f320607310600420558330559340a09310a0242051a310513420a0b310a0442051c310515420a0d310a0642051e310517420a0f310a0842051043051
144055141055a42055241055b42055341055c42055441055d42055541055e42055641055f420557410550520558430559440f0405601f0c6e0b3b6d0f38600b3
6000533010a0403000b0f32126d3d19693849693d46604e43014a40054f1005441706261b672b03642a090324120f37155e312c5b354c5a3a495f3b4010464d0
3422d04471415491654432d51474d504c49584e4118494e0c452e0c4a15154413634f1a6f3a4a6f3f46694154094c410d41210d461809763a757040807a60807
f6e739185249d722a93522997482c5f257f552e637f28147a311d7d3e697644757965757f627e8c7130987e25945e249944338f327f78487a7c687a717575908
6379b733c98533b9c493e793d7a7244857c648572718a958a2c918722a75720ab4d26a46ea0ac63b89594b99b92b1d3c174dfbe6bd69e69d9827d875b929f469
dba605eb67a4dad65a7a57aa0a79ba1ad99aacab97dc7b773d59671d78b71b07caaa770b4aa91b5a0afafcdb182dabf78d89f76da838aa764b4ae69bc9799bd9
d97b6d6c979d2c771e9967edc8b7ebf88f7b59afdacbbfea3caf2fffbd5fcf9dff4d8dcf6cadda189d4bb76dde9aaa0f7b7a6cb93ffb0a6f7b2c7f8b8c6f9e4f
fdde1fed5f0ddd2f2cfd8cc9bf0c1aef8b3cffab9cefce5f9efe3f8e7f1d7e4f3c9e1090ff7ffe0ff00190809f8f3f4fb0c05040dfcf11215fee7fef3020c0b0
4f5fc0314fde80f08f1f55201055b02041301041c02050401050d02041501041e02055601055f020502130a02040a09050501160504170a08080a0f0905031a0
6010b06031c05521d05501e055a0f055510141b0f041610150c0f050710150d0f050810150e0f050910141f0f041a1015501f055b10160901160c12150811050
122041911041222041711041022055a11055322055611055f12060b11060422060511060e12070513170424155621055f2205172105103205082105013205192
1051232055a210553320506330a06240a0d250505360508370a0c280a033905073a05552b05573c05563d05543e055e2f055930151f2f051a3015003f050b301
1013f010c3015023f050d3015133f051e3015543f055f30155d21155042150c31050542051d31051642051b31051442055e31055742055a31055342055f31055
842055931055242060933160844155a41055352041b41041452050c41050552041d41041652055e41055752050a530a0a440a0155050956050c570a00580a075
9050b5a06094b060b5c055a5d05585e05525f055d5014135f041e5015045f050f5015055f05006015065f05016014175f04126015585f0553601601511604621
50061050962041161041a62041f51041862055261055b62055e51055762060361060c62060d51060662070d53170c64155e61055772051f61051872050071050
972051171051a72055271055b72050e730a0e640a0575050d760500870a04780a0b79050f7a055d6b055f7c055e7d055c7e05567f05518015177f05128015087
f05038011097f010480150a7f050580151b7f051680155c7f055780155571155882150481050d82051581051e82051381051c82055681055f82055281055b820
55781055092055181055a82060183160094100c02000ca00b3ca00b3c0204021f3402bd3e30b42e30162d002b3d04a93532a8253e1a2f01274f05a54733a1373
f1236031c4603ba4f30bc2f301e2519148519b28844be4844105d162c7d1aab7146a6514228512727812ba58347ad53432f591a10991abd8b44b55b4417513e1
eb13ebcb957b1795713773b23b73fa1b35aac73562e7d3c2bbd30b9b75ba2875624873f17c73fb5cd57b67d5718765228e652c6ef69ba8f691c8a5f2ada53b8d
c6da89c6929916f2fd163bdd07dab90792d9d532ded53cbe47abd847a1f80842df084cbf98bb6998b1892813ee285bce88ea6a88a27a9813fe985bded8ea7ad8
a28a8842ff884ccfd8bb79d8b199da42cfda4caf3aab693aa189ba13deba5bbe5aea5a5aa27a3b03be3b5b9eaaea4aaaa25aeab05fea584feaff2ffca0befc48
9efcef8efe901efe38fdfedfed2bd18f2b476fbc37febcc10f3d59ce3dcebecece3ece594e4e00d74e97b74e3fa74c00784ca7684c4f483a10193ab7093a5fe8
0e11a70e86977c86187c11280cb8380c2e286a3ea86ac8b8fe901efedfed4e3fa74e00d7eef1bdee6e9d5eddf75e61282f435d2ffc3dae7c38aed2584fa4fc4f
8bdcce1b78ce4498ff066cff1a5c8fb9988fa5a81050ffbfdf1030ff1040ffcf102010ef10a0ff6f30a0ff80ff8fdf6030af5ffe7111601160fe601010606020
50201050702051301051802055403055504055501055a02010601010b02050701050c020518030519040d59010d5e02051a01051f02055b01055012060c03060
d040c01110c0612010211010712011311011812031413031514031511031a12010611010b12010711010c120118130119140c09110c0e12011a11011f12031b1
10310220c0c130c0d14060121060622050221050722051321051822055423055524055521055a22010621010b22050721050c220518230519240d59210d5e220
51a21051f22055b21055032060c23060d240c01310c0632010231010732011331011832031433031534031531031a32010631010b32010731010c32011833011
9340c09310c0e32011a31011f32031b310310420c0c330c0d34060141060642050241050742051341051842055443055544055541055a42010641010b4205074
1050c420518430519440d59410d5e42051a41051f42055b41055052060c43060d440c01510c0652010251010752011351011852031453031554031551031a520
10651010b52010751010c520118530119540c09510c0e52011a51011f52031b510310620c0c530c0d540c02650c06660c04650c08660c0a670c0c68011169011
b6a01026b010c6a03156c031d6d0c046e0c0a6f0c0e670c0078011569011f6a01066b01007a03196c03117d0c086e0c0e6f0c03750c07760c05750c09760c0b7
70c0d78011279011c7a01037b010d7a03167c031e7d0c057e0c0b7f0c0f770c018801167901108a01077b01018a031a7c03128d0c097e0c0f7f0114701113611
311621312731a03810a08820c04810c09820a05810a0a820c06830c07840c07810c0c82031881031d82011981011e820c0a830c0b840a0b810a00920a0c810a0
1920a0d810a02920a0e830a0f840c0f810c04920310910315920111910116920c02930c03940