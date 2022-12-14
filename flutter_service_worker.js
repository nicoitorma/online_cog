'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6a575a261680bb2ae2fed9f32eaa2226",
".git/config": "2d6c5c5621ad5ca12f4ea2e989401fb2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7dcd0e318229eee965697d9d980fd96d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d73140fb372fb588596fcba96c8efb7b",
".git/logs/refs/heads/master": "d73140fb372fb588596fcba96c8efb7b",
".git/logs/refs/remotes/origin/master": "d7d45882b6cf79d4d2bf920a672c3e70",
".git/objects/02/13aff768f16635e2caaeddcc692a7aa58e2d38": "a26acede19c66bb0b696e44d8ce7be30",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/8d4087fce8472eec5932e5066aaced1b3849d6": "a8f285128c5bb126e4f2d6dbcee7fe40",
".git/objects/04/12074283a05022ff363a28bf11bcac0dbadb03": "d6f6a214683dc6ca161c94204fc55619",
".git/objects/04/77fc37564e6e31c9a7c2148bbd7545a8a784f5": "dc2e130078c04e7a94ff2f6db1156580",
".git/objects/05/1adc160336270aa5a88f72bd9bffff06dcd115": "50e393f2dbfc403371ffc554999b1afd",
".git/objects/07/449b4340cddaee7e5111822fa7d9a6fe33cd14": "9ddb9a0bd10d6030569c0b56240d1165",
".git/objects/08/1618c4813ce951c3bbe8c4009a37e45ee9f2db": "7cb36249840178e63c9954c67f45fc49",
".git/objects/08/c01286fb99188678775392e094999dd626ad74": "470582bbc89ac928bbe85482452ed5aa",
".git/objects/09/0c3183caacfa73b4f1ca181b0ae84ff31ba95b": "3ba71e4f1041ce2d9e0c1f7a6b48b042",
".git/objects/0a/574dff4b97c0370894463e3c0dd49c85519b01": "671a9b86011d39f3673319a9a5f46eb8",
".git/objects/0c/84b4fe227bcd7dcdefef92df413d69836df195": "beb8f746b4f274babbc976d39979087b",
".git/objects/0e/0d3be7f5aaf0745de0617a2c48f44e0f2a5ee8": "6bb21a3ef520ee1315c8befd294261a6",
".git/objects/10/6acd21aac9a63cda95c3c4be9ff1771300e141": "ff7cc48dabb1693a723249be1103a9f6",
".git/objects/11/0cb5527670db1115b9fb4662c68df68dd511f1": "fbbfe782928b1e3294fe89ced28c5d7e",
".git/objects/12/9b43b2c27887bf668391fad90789fa95f00a08": "abe1279e0f1c10682549717b76ea128c",
".git/objects/13/5e603af50fcaebce790fbc0b76bc7452973cde": "6908b3939a43373edd38a513cbd9627a",
".git/objects/14/a3fa26c8680d778b98f3914e2769ea66ac5ba6": "60cbc4bcbb35cca5881a52e9c8d8e200",
".git/objects/16/67b4499ba5559cd984231e3f8e693024b6033e": "10d78191b4c19c789731e3dfdb0e3bfd",
".git/objects/20/279e05ecb91e194d93252371dacac03a5c6571": "956a2694821a75b60246e23fa1bbf9e3",
".git/objects/23/8663883a861b2aed327be736fbff981798a435": "0342cddfb4b624cad0c67c267ff4d91e",
".git/objects/24/c68e60179802b9a5d748d1073f7e8864f0b7f8": "83b4d2aa2729fd16b3b81f40939d33d2",
".git/objects/26/23761c16adf0006e8f373766bb6bcddcdb6a3a": "bc0e24b5ba1fd0fd9175056308e7744a",
".git/objects/27/3e678d1405d2774c4c1ffab1c0bcf328f1f781": "f40c5a9b015fdcb3ecfc18e225a97d53",
".git/objects/27/ce3a496fb8107431bb9107fe4881656f31831c": "5d30ee36571093b302e829da8823cd7f",
".git/objects/28/c93337411755951c56656c6246e5c84e8c042a": "7835f0bcaf5d0c9541e2ab6b5f898d2f",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/29/07364546e0c58ade24ef9798892df313aef859": "d9ca4736d735a148769c4fad7f6fa24a",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/2a/aceedc719bf6f085af5cede76efb362628d59a": "88653860cd58cb0d5cfd28008f08e17a",
".git/objects/2b/c8b895f5a7464e0cb5e155aed5906a2c988ec1": "a176c0cf746320a10aed98d9cf85fbb7",
".git/objects/2f/6729f896d89d964c8811b62f32dae1639893b7": "4062e329d5fc9293962217720ea9a1b4",
".git/objects/30/90c98a82abc5695bc4b0cccaedd4c5cb41767f": "eb848f50322f3753f3d5ff0fe3c1f1ae",
".git/objects/30/a717c87f96911711f04be991a571daae4b7319": "3d13cd93e61aff31f8f76ffcd5947bbb",
".git/objects/31/453b78a43a0062969779e9b831518e3c8a38a3": "71629c2551a96734145d72e331382101",
".git/objects/31/5cb417a4a41842cad9bf0c6354b2c2c346e029": "a287d815d940221fb5e8d64448055c47",
".git/objects/34/d733feeadbf1247ff76fc25bf1515b9b341a72": "a51ba9710b9f6e3119c8aaefdc97b8ec",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/35/bb9baf27d07574af623c30fc27107606fb222e": "ce995da40611f505889b1e5969420103",
".git/objects/35/d1882c4b2a66dff137e2328cdf5c11fe2bd57e": "03db51f9240de623a78ba523275a5d47",
".git/objects/35/e72b0658c575e7dacfca697adf0892a32d19a2": "a62fbefaa4661f1aa2e526ee41a1c857",
".git/objects/37/38561b9c4cec9c61f84a671f7c218e85a01b05": "cc1ae6e05a4bc054ebbcccd82cfc2b3a",
".git/objects/37/a67a2b30df55e2e3936033ec3c6c66636c5e4b": "b5af083f5d6519c13352b2be51dbedd9",
".git/objects/38/151f171ed4c2adcadab212cb816c5a5bfb8a59": "829d6df57e503170e1d1693397069b64",
".git/objects/39/726bc1ae3d3124f6631182b5ff2e6e40271da5": "2c9755ed7930ee193ebc51eab85b9b75",
".git/objects/39/f0f4a882c7ff7e537210c1daae8bd69d516331": "82788e990c8608ece3a01340cf0bfef8",
".git/objects/3a/1b4da80e4c8bfbafd787080bf496f50b978f7a": "019984feb42bef7c4f5a232a81d17993",
".git/objects/3b/03cfb41039a130da8af444aae1197a426334c3": "74e9874aec3e970fd467c06db089f30d",
".git/objects/40/26b559e15a70e4dd2fe040905250077c13b052": "499b945b2b7bc2cbd5c4fe1af82f3e47",
".git/objects/40/56c14b221449210ed8f0563b5b09a14bf2ee3b": "28502da320afdffbd3042a067dcc3edf",
".git/objects/41/537185be48ff67b46ee6657008c77cc53fd23c": "b14cf520f805d9e5f75d6c5a2b6be3ed",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b4e50d1c1ff08533db469a249981252de1b895": "7652d329eefe2e49b525ab8df10d05a5",
".git/objects/41/d8d5c31b8a4bc8e941bc1ff1d05821f18d2588": "3704700df09cd2d29bc58e61d13e0561",
".git/objects/43/bd8c1787d21f3a37ad32dfa86dc172649671c0": "fb89d2b261559fdd710a62340a73d861",
".git/objects/46/2b2384dc4d9d269cb28594378adf8fbc53c88e": "488a50c528dcc13d208e6e6f9bdb2f66",
".git/objects/47/328f905fd87911e3fa57d7258604fb22d79fb8": "a65e1a20db432976e3cfdfd781205abf",
".git/objects/4a/16d417a1b277fd90bf0b2bb72472963f69c0e6": "0de96090ef20fd60a720345794c2cb68",
".git/objects/4a/39b04f223f4d205f6156c0961ff740c5e04c88": "919edbe7b9180e94a1cee7f1fe3a2aab",
".git/objects/4c/357bedcc037c474428682c6c3ceb4324748609": "b39c250ab8e091531b02ab9f2eb16dc7",
".git/objects/4d/0c15a156fd3b6e32a1e3bde82dd8c862324683": "7cbc0b23f0177af0ac7b1bd64a8409ba",
".git/objects/4d/cc2a7f182cbc36fc60517bc3dd62e550b3bd71": "dc638d0ec0d3738367bcd1163fefbd4e",
".git/objects/4e/1a8146cb3bca32276e2e42f736fe6461f86228": "a2bae0c91cd34197836aeec5a7807319",
".git/objects/4e/4068c303e0f3ce5bd5f9c0b956c161bef90d66": "be4460c7fbb700c2860c218cf62ed8c3",
".git/objects/4e/969258e917cfc6515054dc3ba4382fc1fd3ba0": "a3a7cbe6ddae054542210cb97f12e23e",
".git/objects/50/7aa83f5f55a42c7401ddeedbc6577ed805be88": "82d4dcc8a51db92f4d5156a355b553e6",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/51/d881199cf8f4720729c374158bff474d9ccf63": "946d74b1e9ba94795111ba36090e4b20",
".git/objects/53/3c12d3728f8984eaa3d0f8a9045eb4dee54a2c": "20b4e04c12b0edb0c6f5a068c042a952",
".git/objects/55/abf6b04bb84085b765694fe75a804a23723858": "1814d0dd457d588afd7940b22a07720d",
".git/objects/56/0e42fb6a1a0b8d7cdae803878ea0853d383fc4": "7b5ad7395a59ec73a5a9da0fc13d066c",
".git/objects/59/9f695b965072984b85d1b0f51cda12cb4c7188": "caa950763a4b1bfe31fb117a3d5462a3",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/5c/088cf116a1b14a58a77a10089839fba29f84d9": "8fa028fd952996e6d20e42d379107653",
".git/objects/5d/c37a14edbaad191f258673799e7a7abf248279": "e0ecc4e92c1fb976c2f451e733c92733",
".git/objects/5e/9cb2409a08495396d0d39fcd04171ecd6fc829": "21101f1cfb3d5cdfe74ea12336373746",
".git/objects/5f/04ba9c347e50a56b0a2b8aca45e837e07837ef": "446c347b0836a9253c3260711b227ae3",
".git/objects/5f/232c3d2948b24d97cdffcd94c4437cf9a0ea5f": "cb6e8e80ddefbe48555dfa991d3cf6cd",
".git/objects/60/c1b5ea41e283872bba2a5c2f803f8adf784e64": "6b1c870762da75613d40c028f43735a7",
".git/objects/61/3477ef607e65c6d7c757420e25c64e10348cf4": "2905547867e3c4e25621f791f17d4368",
".git/objects/61/d4867040886c6d8ced22d3e542fde64ffcb767": "7ecf72732ae61eed5f21f9311ec372eb",
".git/objects/62/b7ff4ab3fe60293208f90476a9a4c0d3695661": "9d2da46b931d29b47d026c7055487934",
".git/objects/63/0543bf936e7781b055ff0b433b07c409f7711c": "157f0c50809cd91f35827f05ae7fef1e",
".git/objects/64/1c3a9742ba77c54b1612c54aafac9b4f3453de": "57045036f750a35301bd9af702050578",
".git/objects/66/81d4df53ca08c4e38d5e9be0997e605a5b2e3a": "2f865af6aff104f424aa535140bcf76d",
".git/objects/6a/6193a02c91bf4d760db9564bbd1b23a8475e5d": "eba37ecfbb179638daf64047b937e21c",
".git/objects/6a/bd07983c3104117ecda7e2282ab5e3d20cadb0": "db5e4f88e4f561d175280e7dcfa6dfe5",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/b39d20361dc02fda93545ca9e282b08a3daf19": "27387158d8361dc8b52146f05205bcea",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/6e/93c46a7751142a0684ea12458da1bb585eb2ab": "c3052092d30eb6a83dd8fc6d089e4c96",
".git/objects/6e/cd67b2d71f23da7f8302b80a63d76958352dd2": "905463aa06bbdfd6b609bfc511b18623",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/79/9a75a7b41213e640db8c1a188dcab23c4a8e68": "d1d13aa733b9ea816f87b0db5fb805e2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/42ca5ad70cb10b6b7a5b3deb8c89050a1ef468": "7286c2c89adcff53cd33ae918fd49bd0",
".git/objects/7c/30b8578bf5a34c3f325f775eb80abdf0b33948": "c45c1eabf0f2a0284031980467340991",
".git/objects/7d/95748cc92e21ab915c91975eca5e3dae8e29a8": "a98efa9d4d0b7ee3af8eabe843d2f6a8",
".git/objects/81/0df5bf1b9023e6206bdd8fd0e0a1e739e775aa": "d46a72f0d08e1b90ddb99fe49a13b351",
".git/objects/82/c44c69417cc165f1c013b5f7aeb002ca930699": "88924ab81c878582cf4e862a7924ab9a",
".git/objects/83/948cb45e1e5797e38dad06d26905d478c85e8b": "920605b98151f7b3c85d5021f6c03085",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/85/fad18e0050ac62c61b2a286d924cbce75ef164": "c2ecb61995be71db1432b4d7cf35e348",
".git/objects/86/05eb979bde3ccf5b6c4b00409805494baa45df": "c25c6025e8dd184ba1eb05ecf3c24373",
".git/objects/86/8712a440dc5bf3ce34a3c7649cba5b27c7d980": "a64d925490b84d489a7b0f643560dd16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8b248ee897122304c1cd483b084fa0ffd5bb8c": "b05346afa667b313527796a23eeaaf53",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e3a670b183522b513db1ce2e8d0c3b68d831c0": "0606e192ed5e55288b70f7d3af6e88d6",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/7a445e8ce3299ebff5cbd550915ff80e1d04de": "36394d5799bf83aea62aeb7aecdbba00",
".git/objects/8f/45cfcfe6e39f9803365a4f6167b353dad3678b": "f5d55c878acc644caa87852dacfc022a",
".git/objects/91/0b64f42a9b840d037319c9c7c6bb472c6c79a2": "9815b8408211e952054095bc40f61aeb",
".git/objects/91/e5dc5043683f69ea606b114d146f68e452078a": "8d1a269d45205a0213b837f86bbeca27",
".git/objects/92/aa0c281311b9f973b08d48d7b3bcaa48d8eec5": "04e929c6ba591cc64227b6e455dbbe74",
".git/objects/92/bc3fe63b14f585c67c22d5c776e8de8e66ce10": "fdf80e17c21573d12d1dd982c986d696",
".git/objects/93/14df16e823cf356a81f0faa6d268b3fbba8e7c": "00e7139ccb64087f7113b8d3ca4c8a34",
".git/objects/93/b6b2dc3f9e7ddb550398c6acfb239ff8c58d90": "b8daa0593ba8f93d392f51b724c93764",
".git/objects/94/b699aa3ef69a6d36a1f82ce43b538f76a6bd4f": "278fb2ef69e7049c1861cee7d59d35f6",
".git/objects/95/48bbbe41391942d5a3013f0ed621b21cb91ad9": "21d2aadbee2cea8a37acaee7bda84bb5",
".git/objects/96/149ddeff387854bcd4dd4ade1045fc780b887e": "66b6e71c82b080394f19c7a126a13d18",
".git/objects/97/6c3811d59ed5737931c27f52d424b265983906": "b85f10ee9278fa4d5002d7046b6c6f38",
".git/objects/98/e773b91a2f0c366a75e53171a996a9d13bca7d": "8e2fe1c704b24b7f93317c7c77dae7db",
".git/objects/9b/46de9571ca152f72d941acc01b480984b8b031": "c403d2fc0728a7e93426f475d91db2fa",
".git/objects/9b/f9ab3e0baae0a6a31a325323dc076999f704f3": "beb048ec8c205465778aa198c4202479",
".git/objects/9c/0e1864a1535e16d50eb88c29fe8558ebd8110d": "65a2cd05da27418d20cdea6debe9eccf",
".git/objects/9c/790cc08d855b921ba9f6b9f7b484551a0c6e5a": "826e404771e1b276a053bfa566551259",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a1/1d116465e52d97eabe1517616c1f5f1856d7b0": "486ea611ea8761a4793fa106580a808a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0e6f0977719c99834674100c5333925f410ea4": "840b0b635b85a8793ef752080a0b5ca1",
".git/objects/a6/172c4c2f0c50e889078a8574295b812d776077": "32eb1039625184db846f1be173a42f4c",
".git/objects/a7/dfded78dd714444def6258d3edd03ac360c869": "c24c341b653328b483d3342ccbe616ff",
".git/objects/a7/e64d25103452416d9a1bae41a656a05b12cb8e": "9d22337c773702e1d6c02304346d511a",
".git/objects/a8/59976211b807353721e54b81d1dc887c32763d": "d72a396322ea371398f25fdd3d7b443f",
".git/objects/a9/1ff9cacf3608494247e62417be197debc7863e": "bc1a62414000ef44432ee9e597a9538e",
".git/objects/aa/5f065b5bdf52ce041e10f919e45acf32dd3c12": "4ea82604279eeaa03eb37a83c73df32a",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b2/01a3e59a883c1c0e38856faebbfdba5e8a59b4": "b1300308b3336403b54b4b46032b6861",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b6/db8760b490076418ff89037abab85cfc7c1dee": "fc218bdcf77f13a56ed05949d4b2b13d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e10b68a915233588afce0d7d3b04bc62ea99b8": "60c1f8cdfa598d3060d5d50d5d76c278",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/13482bd491a01080d1d6cb45d4ba72251cd232": "447d7ce5bb7adcf4b3d0ce5b2fa3da98",
".git/objects/ba/b2d69679e0cb5e6e1cc35ecf92508e92c8500a": "dc7500bc19c10ec5e975092712ab1e71",
".git/objects/bc/ed62436bb554622f86231f7c447214cf1abe83": "e5e6223d9eb82274bbcd39835e8acc43",
".git/objects/be/3d7e96b0ccbd8aea0bfe71aa00360c1602d891": "1642c4db13fce4380071f94cfd71ab8a",
".git/objects/c0/351011e2521749c26bbdf9381cb7e3283188df": "89f99f7c5cea9d955a101103da828d3e",
".git/objects/c4/7ab2beeaacd9c02e06773ad17f00072e6b9ed2": "f0092577dd8553070bb178d71196e7b2",
".git/objects/c5/adf92d4a29514b52f399655917bfdf079515ad": "732605f6a92f76690c18101c7de2f4ce",
".git/objects/c5/f76cbe00cd6575688cd9984ed2d0b0d1b86afe": "c8eda8bfe9a407bfbf40f215152837aa",
".git/objects/c6/bcd9b8c3f0d143e96de389498068b8d14515b7": "09eec7f98f213752fbceee62e1e5ae90",
".git/objects/c6/eef838610e746dc32a31e643ca084dacc7dce4": "8f72ac5c10b9f1ddd200d83aaad57107",
".git/objects/c7/60cfcb0269294d1afb0798f87c9108af33fc92": "32e56bd747513616e02c45bbfd358195",
".git/objects/ce/1103158c638b796735fee8d1946899f7d09b4f": "b22ae2fd8a80e00401e7e1b8ddb8c7e9",
".git/objects/d0/14e72a2507613e6dd13c1c4f3566c7aa0cfc97": "7e0d6b5e4d7398748963841f4aa150c7",
".git/objects/d0/5b0b593335e9f4185bcc6e3c94a188056220f3": "71a96acb362abf08fcb0762fb933b887",
".git/objects/d1/91c1d40cdbb874ff5f8a6ff2bccb98962b3188": "b3fc39ce8d39936a8c3db4df3ca07092",
".git/objects/d2/92d5c9dd52e6fc914557479bbc7b55a77832f4": "af683b32f80f5fae131d80dd1fd367d4",
".git/objects/d3/7bc39debcf4a10fb36c647308cb95d03416d4c": "417ceb2e8251663ec3be1dad8ecef02c",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/1c0e5fd33e630eee19268ffc273d9d2b3e260d": "133de10d0a4d2b24110d86f0861a9af3",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/dc/ef146a6022843c8567a55e79c53a4be186bc7a": "356057f0e27bc1841928ff3eb9b3f24b",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/de/68565318f4e38d794878b9e172d76293eb79cd": "6f403c26dde823b0f7f539fe5a9caccb",
".git/objects/e0/376f9f2c96477c3061a10173050ee71d21a346": "1b932b4eef68aafde5a25048d85cf62d",
".git/objects/e0/b476a2081d26e7ba483fd65b1054d5948fd2bf": "387cf47dac96c68b2be8b11e51c6881a",
".git/objects/e3/4b78860dc82e99cdde0362bbc6dc3976282806": "619f188e0423d6ca37effa4ce4ecccf7",
".git/objects/e5/09fa5da07ac6b83b4a32bd3fd3161b5aa1e87f": "d1eda5ce63bb5d3f60f8dcd3fc36c6ca",
".git/objects/e5/13659dec812d494e745b609f4be26b4f8530bf": "ebe54816f9bb2ada72c1e1f447e029f9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a50ce1fa0b7cf457282f6d0c550ceb60bc5d26": "017e279894685395adeecbce81ba9bcc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9feaf9da7add025cf6392c50bcf69b9c64d161": "5a2e4ef0d41f9c372ad990259db44ae3",
".git/objects/eb/c861aa061af2a7e56b8b37a8997ee16e65b241": "dbed20f6cbe15f979a38d2b5bbc54789",
".git/objects/ee/296d12681bc4562b512b972b653bfaed65820f": "22715a253a16d282b08fe965e6ec95bd",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f1/346dca0974efef4c5ba54ccffa81e248e4bc32": "c409bd0e40aa5f7529305de0c5d26003",
".git/objects/f1/8353804295823e1399cd3aeda65a3a1ab73b6c": "5cdb28c2dc9eef15463d08d9d2f4fded",
".git/objects/f2/c002c53d4c74fbecabe965e8fb07bf5a8f5548": "811a4c744720f516cb86095c1a9929ff",
".git/objects/f5/fd14b6c5b49bd6754caab933ad62f9b5063f43": "2d47b62b96423d08fdd13937235499c5",
".git/objects/f6/942b2ad305c4f6e5048b12b07739fcbdc46b32": "c1a33b6753cbad70abebab0018c9e6cb",
".git/objects/f6/f0bfc9a57223ec0c33e8c810e0d322dd2a519e": "7bf97a81c9d0e31431110c55e466b025",
".git/objects/f7/3911ae17a51e68674f8fad1c12e4bd132e8f48": "1732f6aac45b523475bfc6d61a7e9cee",
".git/objects/f7/bcd47daf808f58db9aab608891af437e10e6a7": "0edf7b891476d92b6b977a4277469ce8",
".git/objects/f8/3e4bf64b093ee6a76ab5756ba67d04783be926": "b78f63bf9edb768ca6b395225779948e",
".git/objects/f8/4a5d717cd3c0d21c357b382789c3c4736ab8e8": "dcc9da4b8015e19d84c8589b7690df4c",
".git/objects/f8/5781e28abb26c0e46229c637dcd372a8ff3a80": "1c0f4fb7c2ef4c5b2d27d10b9804eb39",
".git/objects/f8/ad58eaec9aa80dc680fc5dfef00290e2d5db39": "608f8ec2bc6972c531a2de40587f5247",
".git/objects/f9/4cc084a22b165cadd14f1eb602c5eb6366beeb": "76ef3411e05af8cb43a0a45bc5062b0c",
".git/objects/f9/b1adede7ebca23bcdc502c801da749aec209c5": "e99deeb61b4ecde30a18e3a1e3022d0f",
".git/objects/fb/400db5b098ebd4f9c34e7a332e81ffac9ab59a": "4eb01da18d9bc6a192cf73601bf80677",
".git/objects/fd/2ff80ea3ecf4ecddb5325fc92cdb5afa65a719": "360a35519485d012cee5dd7cb53a9670",
".git/objects/fd/c0e44df713c022c57df363a8f4c6f87b606890": "4a750879529b9ec7da5818865e3d1411",
".git/refs/heads/master": "1d72e8cd2b8f439aea291a6cd8536532",
".git/refs/remotes/origin/master": "1d72e8cd2b8f439aea291a6cd8536532",
"assets/AssetManifest.json": "0ae393857c5b1f8ec8e6a49600477fec",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/images/cict_logo.png": "86ae12863d23f1a0c69409d062d9f607",
"assets/FontManifest.json": "53e98fbd50f4332b5e60670efcee3ec7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7c75012c9e54865c503681db19a2b007",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "86ae12863d23f1a0c69409d062d9f607",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/cict-logo.png": "86ae12863d23f1a0c69409d062d9f607",
"index.html": "d0235644048477a42e7149b58334ea6e",
"/": "d0235644048477a42e7149b58334ea6e",
"main.dart.js": "ef92236a1404b593fd64eb0a5000740f",
"manifest.json": "581fb0d99b50aa3b4898bba7a3d8d7d7",
"version.json": "63e9e41cb45ad45229cc1b9dd3ca6b0c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
