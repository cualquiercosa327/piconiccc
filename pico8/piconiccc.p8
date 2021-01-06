pico-8 cartridge // http://www.pico-8.com
version 23
__lua__
-- piconiccc
-- by megus, demarche & stardust
#include main.lua
#include misc.lua
#include demoengine.lua
#include eg_triangle.lua
#include 3d.lua
#include data.lua
#include huffman.lua
#include loader.lua
#include fx_intro.lua
#include fx_landscape.lua
#include fx_ball.lua
#include fx_niccc.lua
#include fx_ending.lua
#include script.lua

__gfx__
00a068a4680400079a9da26704fe02978aa78aa7308c77a9d9ae7aa7e04660a6c1a2c1004693a9d92c7a07e0ce70a668a66806b370679a9daa6706be0ad58ad6
3404abd1677ad6e40d1e0d21c829c8d9103d48ea9cb22b47fed3f023f825f8d5f0d3b3ccea5fb2db476ea7c0ac83a48347919eccacee21bb78e4de0dde82dc82
dc0dde3dbba4ce2dbb73e4bb0dbb829d644fe24fbe2bbb56674f1e02a123869c022183b62bb62b84fe23f0a3d3865f023f32cbbedbb6db846e46c08e1e3a4818
99c1ecbb68bb48e8de02de3a63c82de02db36bbb63bb43e8bb02bb3a47c628cee8bbeadd678c0ee1a2e7a4f909c3d051e6a47b02fd12efa6f7aaf98ef38cfd53
f6aa7b0d6d349d9acfa2f7006f643b650fba87d0cef1ad7a6e9a9f38bfd0de656eba37d0abf1677adef40dbf3ae65dbb658e1d3d4cfa9cb22f471f6d987742bb
39da3f3dcfacff25fb7df43f6d9f79d7b4ebab6da7b723fb48fa1e3d9dbe957987b4cba3edddf34bfadcb23f47efddf6967743bbb9dabb3deeacdf59bf3dee5f
7b56dd7977da21c3b62fb62f841f62d8cdb99b42fd23f3ecfb6dfb4df83f629fdd5fbbaed466743bfa1efa1e329d3995dd1ebb2cd4de32bfb63fb63f84ef2df6
d6cdbd9b4abd2be3eefb57bf32ee9c7b777777460d008a468a460070a0d9297a46e02f70a978aa780ac378979aedaa770a6e04661a2c1a0c6034999acda27700
ee0c678a668a66300b77a6d9a97a66e0ab50ad684d43b01a7da6674ddee0d110829c829c0dd183a4ce29bb72e43f0d3f825f825f0d3f3dcbacfe25bb7de4760a
cc3a483a7814e9c9ccea1eb28b47eedde02dc82dc8dde0ddb34beadcb23b47bedbb02bd849f624fee4bbb26b75f6e421103a62c829103268bb62bb42e83f023f
3a6df825f023b3ecbb6dbb4de86604ece8a183849119ccbe8bb68b84ee2de0ad3386dc02de32bbb63bb63b84be2bb0ab73648ce28cbeabde7dc6e8102e7a4e9a
9f300c1d654eba27d02ff16e7aaf9aef38cfd83f65afbad7d046d3a9f92c7a0ff046b653f6a07b08ed1cdfaae7a6f989f30bed5de6a67b03bd1a7fa6e74ddff0
ab63deb55be6d8d1c3a4cf29fb72f4d1867927b49ba3fdd3f3ccfa5fb2df47ffd3f699774dbbbeda767a3bb28fa4efd1d3e95b997748bb3cdade3dbfa4cf2dfb
73f4de6d6f7937b49babbddbe3cefa9df5dbe3feb567d59d77a71d326cfb62fb42f82186dd9cbb29d43f32cfbedfb6df84ff23f6d9fdb5eb4a6d46b7a3efa1ef
21d39953d9edb1cb42ed2df36bfb63fb43f8de626fdddcbba9d4bb32eebe7ff52be3ceb977777767d4c96db7ce6b31e7b5628fa78cbcecb6538f939005f8fe7c
633def9aefaf217d9eac3328d4c77fe7512bf5fc9bf4147ff2fb4599dacfbdb56289b7fd1ac5d5edbd45ef568f25f8a776a7aa1f83b7f9639fdbcb5816731c2f
bd1ff2f27a714a7ce1ce6dddfbb299bf77ac7ffb19749933054bd2762321cccee31f9bbbfd7b9e7fb16292b228f5865a02ac92483b2efc35c354772ca91ac2ec
d36587552b6afde6dcc8eb2eb8a6cb9e424f0b4cb651aaf86872e93689ec7602ff2e6c6b2cadd8bca9478f8ffee95deb27ec33b0362f3fc8949fc2531a523a66
ddcf0103e6f63cf6357d3351a87262861a4285a5e2c29ed11d1e636370975c3989e7aa15b16a5482332739cbae48eb2ae2cb16c89755579511e471e3c94a320c
2c0b9fed64398b65a35c69ae44c20fdb6c139ae98633aab2bd1e9b4dc1d894e989cd6483b8b9f885421272139a98fac6b22af29d96e297b677b2bfb37a3dbaed
4d218363b1fe640ec683c26631c2ce23c3c4d4c402b8bc27dd498d5d8fd42a664b5a9fcffee941212b93832fe074a01d941c6b71ce972bbdbe25fbc91d55cbf6
51da16ff2b9d27edc69876de73fd65fbe51629c6a57dfd3b3d9c75d8595ba24c494aebdb2a44b12c6b47a5f72c625b8a3055d71b592a575fef3756da1bd19807
74ff85f4698f21f39e9fa906eba1cdfd4f093c04c21c278e4afdb7f32dad51388252d90da672367a1e450a7c84fd57807dde80de2feca8cc33ddc7e4abb3da0f
8d41c464301fb0fbe7c29cf387fe4078c86c32c334091fb640d069b88fac87441b068ac38dac603319048fbe8567707dd0e11df63341c91356fa289ff7048f1b
4941f8d51bca63f129ff167c29b4b693bcdfd37f4512d2f10c6cfb9fc643f6c87af8157a2ac634407911f1cd4c7601365718b1c9d2d87a116419881dfb924696
5ea8343dc71328cd77f80dc29dbcbca9f9f16622bd53836b81643a3ce3352d145ea8b386fdc87c7336178ed051f2f25e62c3ef25314bf8b81778abd34a0b7f5c
d7ec95dc62f51f527c36b13a2c4cc197de18f82a69cf0b2df2396ce3f52eee6942061fcf6ca1a32fffa65c21a295e4470d3bddea4124f3530e85c2f7b2604c97
f8417e61baec23a918ee358a720fff7dca7ebe3e220aa58c165d926330ddfa79d85b760e5503cbf960519220f7524aefef3b5cd35728a538f1c282f3f16fbb1f
a2e5b4e13b5ae87e84a14a182d4901c621ffcb7f2fed07a5a3089106a1bbf5ca8dbecdbcf9ee57e9a3369185ad5ff819dbee56fe37ea7f6a85fe9585de2ec096
42524e5efe9c769b5bc98ebd79a39509a36b09350c56350c237af7be9ef7bc4feae6d0b0f622c8ca49479ce77a582ffcd3d848f1aeb1678561ee0ad4ccdfd89d
e7fd23319d9a404699459491157b91057b238ab54a724f2ff120e4f5acb4f3e97544c9ca4ab8d9523bc626bfe250d76d60d63dc0bdb2e0f076a0b19318bcd518
aebb2866f628bc738e782d2124e0785950d049e1b4d2cfc9da1f4833ab90a0deb7c2aecbcc8e7d746c2bf9d14fafb9f47b926f4fd7148eef3849efd5dae17310
54acdd549e9b51a919274d4534ff6f04596a656ec87b16994e1e2b2f864403904032e3c28bf198c990ea18ca0afe2ab9645eb10d535d92ca4b7ad75a6aadd5bc
b4db259d915a2b565a5c095a4a015aec565aec33b44646af9c49bf6104af0904bf9349bf839c5f6db3d93aaa5582f37bc0b91446e9ca1b54a25d8660fee8ab39
cf3cbfd33f2fd149cb9d490b8398af40eafbe775d24982ad5d3111ae78f928c541f54d0bb6c65ae1de71fe63c31b27e08e6045be8580753d5db190702a297dc2
0d46c9e5709dd316c31d0fed1e562856768273e1be67af3aa77d06064df8fb1b57604f19d61e4bdfc4f789591b2a6bec6d504ad247128b38b7b4946f72b9a425
75e6ef75fdf6f74118630a5758157f9925f3383e37cb4eea9730af388a9c8118a0b8becf26faf702a31b243231c1cfadb1bd1b3dfa6432aa6ef5ab8d5a997ba2
f04892e9cf116bfdc8a390a348ede6f4b3776ea3e88a63f0281180fa5793e932c8fc0a1be729c188ba7d7256d2ba28b8dff0f350444ca71a646dfbb2696cc635
f5ebe24eb020e0373a73bfaceb20572e56c07c9b7ff463266a040c1d29a732e2c3efefd8ff5df0c587d25a72cb828a435f944fb17f68cbe43d0f64bfc27b2f17
3c9ddc09592efbabda13ea59e531d4e8c38377b9e77dcef829af4b9d4a2cf1f691c2cb9783cea02df108413e33f15e7622c8ccac7dd5892551f426b34e5a6cef
061b2f52aed3f60fffe7b93313fdf056d4769acd376251b6c05cd21b9a61ef33d3aabad7fc2badb2876b39b45448fb331ee31b34d75fcea76b2b56951b9af5c2
723b99add991363e23d4a86f7dc2907e267d41fa0e9d6fa69bf5a222e21a6a3a29b5170434f5eaca91ac61d7faae7b680eefdcc2a4a289b956f43ba91605ca6f
85f49c3ec3068db17d8cd7f23316c7f484b42f8a1bc78186879cccb670d9d7a042e51b7b22e1b5ff453db8f2b8d6a86ce77b3a06b6bef0ab7a64eb0d79ebbdd7
71294c247b78f8e0956f3753fb3e96f2186bd784ec0de83361cc46a1f9b6eb1bf7e4706378f0f94c74bf619a5acc1e87bcdab5dd2a80137fd826b717420cff60
e2609838e40e1c18dd0ac40dc503f3bf0889718bb0ff08709f17078bc470f75f66e2b28699b5e4aecc8175dd2a4bdc51cd03faffab0b9995b7a8bcffba10f59f
5777b0bac4517fff17b8e88699dcb38b1c7877864edcd1073cfbbf8b6217b7e8f2ef0ed1efd57db09b0377f77f898b6f98e93dbbcc81f767f8c41d7fc0f3ffbb
2c76798b2ffffe10ff5efd07bb3d707fff2e267e61988b4bfe4c1ce8d3ad17c43dd83cc1f7bf1f908b799b4cfbff0183ff793e07fb413cf8f7df1337a5626dd9
4f1cd8ee3d3543bd6873ffeb48ade56e79ff0d73cfebcdf29a687f2b7cb15633ab66bc1b5c79c9877fe1e332fb887eee213f489a74a315fdd9f5f857e7e3a2bf
8fba7eeedaf2a34b9a553f5a75ed2edb43fa5795da75072d1b1785a0ee5066eab3d4b3576c5b7dd083c507e08bc1b6d9edd3dd3e2eeeefe27eee4ecbeea459cd
9ed5fdd9efd3fd3e2eefeff27eee4fcbfea459cf9ef5ed3e4f3d7fe5b6f5073d5c7c08bf186eea173dc557f331948fcd534cc52e70b13898eae7e3d38f8f8f1f
fe3e7cf9fb41cbcf255a3eec79f8e7d71ffeebe3b3fd7c97bfaee5d7a479972dfef7c09d48738776b4576b477d554763ed2cb527065d63b52893aaed932f6179
29e4202f947fd5a5c87bf3ee2094884295b906eb4cae96c11c2f53c7f256661b8a3e73f35a1c6b29066e7be35975d05deab4d5ef667db583ca9c0289a2fd3b5f
ff52af6d09e389803ce710abdd0432de4df0990c197670fbcc05aa8b5845e4e67fd8d88c31f0676916eebf114cbfcc70ad4b78e52434fa31bdc7f327e338f399
ea6a3d7329c90bd6f9e688cf923456fbc3a9b97ecfc8c2bf39c3bfe5f5f61bc3ee3ffafd070fa9a766a1d750bbbd18aa67f8109008a3240661ff468ce7f7a4a0
5d2556474240b94699cf209a8fbfd1f3f196fddd570f9155e73f24994c1de89bc735c98d8dec8949456cf924e53697baf74e89352d7ea095f9b30be482458079
034bc2a044225e115932fa9d677caf6e858656f7216fd7d15ee94bd4806c2a8226b26d52cd6f439a57882536b3a516f787a65fd19151915e1720bb144355582b
a2fbba52e078493fb8f961957aca702ce3e4a52864a1f159632788ba196de3e627397afa109666ff825c8bbb4bf49b165a30dc02da77b6ac575c0d9a2d13ca93
c64c129569a1f37fd1846a9fc3815cdf62dce8ccaa190dbca087757375eb921eeda0a35a932834b1f1f7974b07d526c2146b4cb1b4cad4695f645c7e02ef7312
9faba07d23d6b6a294a42527b4d9c88f474aeba11952bf5b6fdf13cadbca09f287b95964bf55b19a7e80720e1e46150ca1c80cc20fb284d2d786bb05ff351cf7
cc9c9a668849cbfc28ef57affddfe90af9c3c311b706eaa1b97d6137b8ee6784eb4aa2ffc4baf71a4c2acf5b4cfde88d982beefb6328bd27d3baf222639c836e
82ec02fbb84f7c7fe7291d5fbc80afc9168392b970506632319d71400fe4b5b7566dcfd4819e4454a3f1d3983bc15c98f57d8a49a21f5ff0bece2de3cbbd451f
b706e9c70f8c97a1886727b3e3ac9bfccb1145f61bafe8a2d19f1b9aefc4d937feaa998faa54286c570b91ecfb93733f76d20b95f765b01c4fc4584bb4e3372b
5f37bd6eb8cceb2d9389ba2559d894849c7d31605b26174557ddc89a6756a47cc18fc2f7706f7c4bb9b4655d96cf15de928da2e931102570c18a4d9f71b884a7
2f870be9a051f071d8da2a86378457aad1e0f8129c1b8f1ff37cfc49134f8eb083443b0c7465f7fe3e4b3c7856c0f3f6506e06fd0026bbe3df7de7ff3ba7c833
5930c09f45453e5c2cf9f2499a1e0351a1f962e3d910f8318fef26a7f88c5c19aedfc1b7ce822dd7fbe83996860be70e65b07e1cdf9b96ef2c3a8b671221d1b5
fcedc7e58dd601af61c7d3db07f6b2604f149cd9984bcdb77d5027a03200f9081ac7f14515d354314d15d38400ca8c442369275645b999da6391a9ccc82f10c9
022358c72308a8568c6ac5a8569c60241e482203fd72c292d76e41dac8339539f002033f6891cc51581051588ccae254162734d0e2d74b2d77d6c7ec6f5d19b5
b7a6deb996d6fbfe678df4d91bdcd6d6ff166b4f75d68eeaad17966b3fd91590f3c3ecc4ae5cc51c3f32f09ff9541bb5210dda445ebdfe91ade7ab92f9eaa876
0d2c8944a735f339a198cd0f8bfa1f5e2b873cece3a2b067564da11d26b459779e65a2a32ea8e88b6ae383aad17251a97d0bed93cca63925b168e49558323afe
45a9741235556410d6471c30852e601b4d2ecc57fa178d8486c743e38f03790cc8083ea6416d18c42983ca283386ca95604b097d8651690af46cc273810b5d19
316d44f47c07cd77d0954a5fa9f826ef3554fb8b6bdf711fea422632d217b04f347f11a98619eeff927bf7b77bdeef53ae136aa54ff54be74fdc638d84784f88
e111f8de8e85f6149104afed38654f513ad025125f22809f149e2e4d1f15195c2a728819ec2a2c8008a8a0e802e9c2228719cf13d3e3aed73a32dda11f8a7eb5
48a1601c158ef48b44aff81ead2612d4cf80ff18f110d40c3523112b1199416c54538e53ed389501ddb8d61327de1327ff15f6aed214b8693871d22bd2c6b844
044463d2ddbde42fdeb3bcdfe6ef7b05776938cb6bdc6ddc1d0a86dd3578f840c387f216e46f90fa03d4b7e151ce87050fd4f0a0571e34f4617ab8442588b91d
2226111001f471942ea2e95c34f4abf947c63ab51d538886a131fe944faab7ca851d046ca820160ec4816318765b802020d0a650de00ab8d14692400add0c41c
cdadc3601d0e640211886012042641f08613b714b0c895cf26fc3c5ccb22ef6eb8d84305b111aca912bf8897884e7d51c754b18754468944d93621f74cb4f74c
b4c7c1958f833bbe2224ca98b0e87e1fcdcfe3fed0ef6eed43bd10ab276a1dbf1d7ee4d4b7f5b1b187d629169a6da3f91fbaf76cda0fb7f938cdafdc24ca5d22
12df22a0f7047aa7407d0ad44fd025124f2280be2e68e942de841b421d64883a40552c86382562421f3218a868f9355b7321d41b3a36607d904b535398e33a18
8d1c1b28821d4186cd52fe3e2ce51ef2db2cf5b78faca11e56d0c793d4c793d4078b5019ad1056fd0f2bfe8f95d1daeb5667fd234af39925f1cceaad4675d623
a234995112cca80c0d60183ab5b693da5bd8cbad6cedd676737ab43dab59dda49ea4f1ac829774925ec17a2f49830c8a1705182e1a306c60fbaa53dffa8aded7
744504f9ade1fcdef0766f783bbf349ddf1aceef0d6ff786b7f34bd3f9ade1fcdef0766f783bbf349ddf1aceef0d6ff786b7f34bd3f9ade1fcdef0766f783bbf
349ddf1aceef0d6ff786b7f34bd3f9ade1fcdef0766f783bbf349ddf1aceef0d6ff786b7f34bd3f9ade1fcdef0766f783bbf349ddf1aceef0d6ff786b7f34bd3
f9ade1fcdef0766f783bbf349ddf1aceef0d6ff786b7f34bd3f9ade1fcdef0766f783bbf349ddf1aceef0d6ff786b7f34bd3f9ade1fcdef0766f783bbf343de5
b6dc97fa87cbe5f2112458a065daa5bbda6dbe57fa536ecb7de995fcc25ef871b85c3e57abdde65b6ecb7da93fbc9376c25e79dc3fc7fdc2368122d23c34b65e
f9a036b65e68276c1e1a5b2ffc58135b2f3c9336070dad9f762c89ad9f16c91b8b86d6c73b1ec4d6c70bec85cd4363eb950f6a63eb8576c2e6a1b1f5c28f35b1
f5c2336973d0d0fa69c792d8fa6991bcb168687dbce3c19a7ce957e4f323fbc5c33faa176eb978167ae957e4c33d07ce43f8a37af199f5eae1975d833fd43c0b
3dfca37ae1968b67a174d935f8ccfa7df0c3aec9971ba8502cf0805c201e704805820fe1a013048b141ee183a8984905e283a8984905e2223a1c2950e183a898
4905e21263d9a3459ea3194b1e63d932e0c2a2c3d35c5874788b0b8a0f7f6151e1e12e2c3a3ccd854587b7b8a0f8f01716151eeec2a2c3d35c5874788bcaa8bc
a0bca0bc139decb3937c7683ce4eca0bca0bca0bca3bd1c93e3bc96737e8eca4bca0bca0bca0bcd1c97ec33fccd571541d575e5e5e6e3a8aaea398959595c5d5
71541d575e5e5e6e3a8aaea398959595c5d571541d371d489f9262e94f26c4724b1672db6a8a576ddd525271a3bedcd61ddabdd9819e8e2cc74939f4a7136231
ad0339ed3d45a3bee62929b8d9576e6b8e6ddeecc85754a2d7dea2455ff44b8575332caa9b47257aed2d5af445bf545837c3a2ba7954a2d7dea2455ff44b8575
332caa9b96a268a58a564aaa91a61a79c5b2b2cbaa2222cbaab68887a6c0901850ea8368a538209503024b7d010f4d813120b0c517f0d01418c28901a5b68887
a6c0901850ea8378680a0c69c480d2b6a56d5bdab6a55debfd1e0e445f87e9445f87f169f9dab6a5720a4c81986f0bc3303c61665bdaf351fb51cbc2fafef2fe
f21cb6a5b2b00b2bbb140ee1b030a56d5bdab6a56d5bda562e9731fe300331cef2f23c2f2d0bffffcf0b0f0f6d5b2aa7c02b650bc30106876660d55e5a96fef4
0d876660d55e5a96fef40da0a49e6de4a3c342761393a9711d5dc0b4965dc106cff8ccefbaeffaf51bbb3c9aeaad7596d55a6759ad7596d55a6759ad7596d55a
6759ad7596d55a6759ad7596d55a6759ad7596d55a6759ad7596d55a6759ad75966759ad7596d55a6759ad7596d55a6759ad7596d55a6759ad7596d55a6759ad
7596d55a6759ad7596d55a6759ad7596d55a6759adf5ffffffffffeff2ffffffffef0610bc315ef1ffffffffffffffffffffffffffffffffffffef7748ff90ef
f148ff90eff148ff90eff148ff90eff148ff90ef1141762802e340bc4828f6231b0a4681cb8cbcc114f82c15e980088f31e22190cbac6c1809263f32c21760f3
602047402424002724ffffffffffffffffffff1ff7ffffffffffffffff2f87a91629d6ffffffffffffffffffb8ccdcc8c34d9af66ca994e0145cac513f3336f0
53a2b51f6a293409172758c7cc8d3cdca469cf964a094ec1c51af53363033f255afba1964293707192ff7ef73ffb9ffdcffeef77ff4002643e0a663e1a2840e6
a360e6a3c31c72f7ffb8ffb8ffb8ffb8ffb8ffb8ff880483ec77ffff8817bc38ffffffd1e9f0ffffcf2e14ffff2e443e03fbffffffff1fe0ff8ffbffffffffcf
c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c5
5b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b
7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a7c55b7f
5abcf5a7c55b7f5abcf5a7c55b7f5abcf5a766666696c2ccccdc529999994a3b3333436966666629cccccc2d9599994a3b3333436966666629cccccc2d959999
a9b433333394f01cff8817512eb4b3ffffffff7ef7ffffffcffeffffffffd9ffffffff3ffbffffffef77ffffffffecffffffff9ffdffffffffb3ffffffff7ef7
ffffffcffeffffffffd9ffffffff3ffbffffffef77ffffffffecffffffff8f88222222f44444948e8898d31111722a22424f4444e98888391d1121a72222f444
44948e8898d31111722a22424f4444e98888397d896e97eaf6c9000000cdfed3fc4fd1800000608eabe3395a9e08000073f44d57d3756500001079896e97eaf6
c9000000cdfed3fc4fd1800000608eabe3395a9e08000073f44d57d3756500001098c1f4a817852ecdf5c8f2913ec5f6c72783ee667199586e169789e5667199
586e169789e5667199586e169789e5667199586e169789e5667199586e16978995999999999999c918999999999999998c91999999999999c918999999999999
998c91999999999999c978e13ecf3809aafa22aaaaaa2a5955554525aaaaaaa855555515a4aaaaaa9255555554a2aaaa8a5a55555541aaaaaa2a5955557dce67
b7d5eb4e3dd4433dd4ddaaaaaaea5f555557bfd1e97df69b433dd4433d77a6aaaabadb5555d5e77c765bbdeed4433dd443ddadaaaaaafe555575f51b9dde67bf
39d4433dd47367aaaaaabb1d0184884244212290114088284414220219018488424421229011408828441422021901848872f7eb1a101214a601214171fdfe8a
048405a5484058502fe3941140882844142202282222222222222222222222222222222222222222222222222222222222222222222222c37939844a25e2f411
40a2459a255aa459b2ac52699556699556195fa8baace57fdbfeb7ed7f78d3feb7ed7fdbfee0be519735ed7fdbfeb7ed0f7edbfeb7ed7fdb1eaccbea95566995
566995c12bbcc22bbcc22be395bc9777f237c97e93ec37c97e93ec37c9ee5bec37c97e93ec37c97e93ec37ab0d9f7578e0c183071e0cd33c78e0c18307f04414
2202190184884244212290114088284414220208ffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffff
ffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affff
ffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffff
ff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffff
ffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffffaff7ffffffffffffff7affffffffffffff
aff7ffffffffffffff3432f3ffffffffffffff85ffffffffffffffdfd291ffffffffffffffffffffffffdf4b6bbdd66bbdd651b16b3df5196ebdd66bbdd4e774
b9d66bbd5464ff2dbdd66bbdd66b1d6bad755eb8d66bbdd64bfabc61bdd66bbd86fd4f6bbdd66bbdd64bb5d68266bdd66bbdd68266bdd66bbdd671dfd26bbdd6
6bbdd6fad64bfa65bdd66bbdd6b25d6bbdd66bbdb6fd4f6bbdd66bbdd66bc8d65a26bdd66bbdd65a26bdd66bbdd64b764f6bbdd66bbdd66bc8d65a26bdd66bbd
d65a26bdd66bbdd64b764f6bbdd66bbdd66b69adb5d66bbdd66b69bdd66bbdd64bffb4d66bbdd66bbd96d65a6bbdd66bbd96d66bbdd66bbdf44f6b3dff1ab996
d65a6bb8ffde4bf54f33d6f32dbdf4ffd65a6b69adf7df6bf9bfd6f32dbdf4ffd65a6b69adf7df6bf9bfd6f32dbdf4ffd65a909090828a84b4fdff1a1212f2f7
6fadf75a6b4b100678af9f6b4b715290600000aa20c00010454081f2b9b654b22dbda50080f7f5636d284eca0800a00495000041082b209f6b4b752dbda500b0
e0ebd6da509c000050020800108402503fd6865aa7b5b60400f54f64ad0dc50900002583000041e800f5636da8755a6b5b46007163bdb614270d0000258c0000

__map__
2964017cdb5a295e96da2af40005cdb6dad05cb4000014b200000a59005f36d68a57a5b6d1f59001736db68f82e5a00000a0000014002f9b6b452bd2db68abd0005cdb6da3e0b968000028000005000be6dad140696db68d424201736db6880b96821cff80b0a121212f7c0586db4ff4b6db6d7802e6db68abd0172d05dfe02a
db4f015b6d3fd2db6db5e00b9b6da351c0b9682e4ff0156da780adb69fe96db6daf005cdb4547d7f5905cb41722ff4444445fedb45e02a866da7fa5b6b5117fc056888888bf80b9682e6db6db6db4b6db6bc01736db4ff4b6d68ac05602805cb41736db6db6da5b6db5e00b9b6da7fa5b6b45602b01402e5a0b9b6db6db6d2b1
6db6bc01736db467f4b6d68ac05602805cb41736db6db6da562db6d7802e6db68cfe96dad1580ac0500b9682e6db6db6db4af56db6bc01736db5effa5b6b45602b01402e5a0b9b6db6db6d2866db6bc01736da2ffdb6b45602b01402e5a0b9b6db6db6d2bf2c5b6d7802e6db46ffa5b6b45602b01402e5a0b9b6db6db6d35f91
e6daf005cda2a37ffd11105602b0140291015fe888888bfff80affff01580ac0500a015fe02bfc057fff80ac0560280500aff015fe02bfffc05602c2820140280587f80b0ff0161fffe02b000014028000005000000a0000014afe02b000014028000005000000a0000015fe02b59000043a02964000014b200000a590000052
bf80ad6400010e80a590000052c800002964000014afe02b4700002fe0291c00000a4700000291c00000a57f015a080005840520800001482000005208000014afe02b405900043e029016400005202c80000a4059000014afe02ba020c05821f80aa020c00015404180002a80830000501fffffffffffffffffffff4043852b
ffffffffffffffd1c8ffffffffffffffffe8f7fffffffffffffff5f7fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffff
ff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57ffffffffffffff
f57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffffffff57fffffffffe0

__label__
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000dd00000000000000000000000000000000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000dc000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000c0ccd0000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
ccccc0cccccccccccccccccccccccccccccccdd10000ccccccc00001ddccccccccccccccccccccccccc00001ddcccccccccccccccccccccdd100000000000000
0000c0ccccccccccccccccccccccccccccccccccd100ccccccc001dcccccccccccccccccccccccccccc001dcccccccccccccccccccccccccccd1000000000000
0000c0cccccccccccccccccccccccccccccccccccd00ccccccc00dccccccccccccccccccccccccccccc00dcccccccccccccccccccccccccccccd000000000000
0000c0cccccccccccccccccccccccccccccccccccc10ccccccc01cccccccccccccccccccccccccccccc01ccccccccccccccccccccccccccccccc100000000000
0000c0ccccccccccccccccccccccccccccccccccccd0ccccccc0dcccccccccccccccccccccccccccccc0dcccccccccccccccccccccccccccccccd00000000000
0000c0ccccccccccccccccccccccccccccccccccccd0ccccccc0dcccccccccccccccccccccccccccccc0dcccccccccccccccccccccccccccccccd00000000000
0000c0ccccccccccccccccccccccccccccccccccccc0ccccccc0ccccccccccccccccccccccccccccccc0ccccccccccccccccccccccccccccccccc00000000000
0000c0ccccccccccccccccccccccccccccccccccccc0ccccccc0ccccccccccccccccccccccccccccccc0ccccccccccccccccccccccccccccccccc00000000000
0000c0ccccccc0000000000000000000000dccccccc0ccccccc0cccccccd000000000000000000000000cccccccd00000000000000000dccccccc00000000000
0000c0ccccccc00000000000000000000000ccccccc0ccccccc0ccccccc0000000000000000000000000ccccccc0000000000000000000ccccccc00000000000
0000c0ccccccc00000000000000000000000ccccccc0ccccccc0ccccccc0000000000000000000000000ccccccc0000000000000000000ccccccc00000000000
0000c0ccccccc00000000000000000000000ccccccc0111111c0cd11111000000000000000000000000011111110000000000000000000ccccccc00000000000
0000c0ccccccc28888888884420000000082ccccccc2888881c01144888888888888888880000244888888888888888880000244888882ccccccc28880800000
0000c0ccccccc28888888888884200000082ccccccc2888881c04888888888888888888880024888888888888888888880024888888882ccccccc28880000000
0000c0ccccccc28888888888888400000082ccccccc2888881c08888888888888888888880048888888888888888888880048888888882ccccccc28880800000
0000c0ccccccc28888888888888820000022ccccccc2888881c08888888888888888888880288888888888888888888880288888888882ccccccc28880800000
0000c0ccccccc24888888888888881ccccccccccccc2888881c28888888888888888888880488888888888888888888880488888888882ccccccc28880800000
0000c0cccccccd2488888888888881ccccccccccccc2888881c28888888888888888888880488888888888888888888880488888888882ccccccc28880800000
0000c0ccccccccd248888888888881ccccccccccccd2888881c28888888888888888888880888888888888888888888880888888888882ccccccc28880800000
0000c0cccccccccd24888888888881ccccccccccccd2888881c28888888888888888888880888888888888888888888880888888888882ccccccc28880888888
0000c0ccccccccccd1111188888881cccccccccccc22888881c288888d0000000000000000888888840011111110000000888888840000ccccccc00000000000
0000c0ccccccccccccccc188888881cccccccccccd24888881c288888100000000000000008888888000ccccccc0000000888888800000ccccccc00000000000
0000c0ccccccccccccccc188888881ccccccccccd128888881c2888881c0000000000000008888888000ccccccc0000000888888800000ccccccc00000000000
0000c0ccccccccccccccc188888881cccccccdd22048888881c2888881cd000000000000002222222000cccccccd00000088888880000dccccccc00000000000
0000c0ccccccc2222000008888888000002222222088888881c2888881ccccccccccccccccccccccccc0ccccccccccccc188888881ccccccccccc00000000000
0000c0ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc0ccccccccccccc188888881ccccccccccc00000000000
0000c0ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc0dcccccccccccc188888881ccccccccccd00000000000
0000c0ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc0dcccccccccccc188888881ccccccccccd00000000000
0000c0ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc01cccccccccccc188888881cccccccccc100000000000
0000c0ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc00dccccccccccc188888881cccccccccd000000000000
000000ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc001dcccccccccc188888881ccccccccd1000000000000
0000c0ccccccc2888000008888888000008888888088888881c2888881ccccccccccccccccccccccccc00001ddccccccc188888881cccccdd100000000000000
00000000002222888000008888888000008888888088888880228888800000000000000000222222200000000000000000888888800000000000000000000000
00000000008888888000008888888000008888888088888880888888800000000000000000888888800000000000000000888888800000000000000000000000
00000000008888888000008888888000008888888088888880888888800000000000000000888888800000000000000000888888800000000000000000000000
00000000008888888000008888888400048888888088888880888888840000000000000000888888840000000000000000888888840000000000000000000000
00000000008888888000008888888888888888888088888880888888888888888888888880888888888888888888888880888888888888888888888880800000
00000000008888888000008888888888888888888088888880888888888888888888888880888888888888888888888880888888888888888888888880000000
00000000008888888000004888888888888888884088888880488888888888888888888880488888888888888888888880488888888888888888888880800000
00000000008888888000004888888888888888884088888880488888888888888888888880488888888888888888888880488888888888888888888880800000
00000000008888888000002888888888888888882088888880288888888888888888888880288888888888888888888880288888888888888888888880800000
00000000008888888000000488888888888888840088888880048888888888888888888880048888888888888888888880048888888888888888888880800000
00000000008888888000000248888888888888420088888880024888888888888888888880024888888888888888888880024888888888888888888880800000
00000000008888888000000002448888888442000088888880000244888888888888888880000244888888888888888880000244888888888888888880888888
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000002d88080000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000028d20000000000000000000000000000000000000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000dd000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000082000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000
