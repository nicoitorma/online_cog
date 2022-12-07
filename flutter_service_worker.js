'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2178b2fb6fc0e588268e7f5079818407",
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
".git/index": "096028aab40058966c7e8c1364a2f5c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e7af3ec1dd0b7a7aa24fe1ee6f94fab",
".git/logs/refs/heads/master": "0e7af3ec1dd0b7a7aa24fe1ee6f94fab",
".git/logs/refs/remotes/origin/master": "f58519e4c35cc688ff79f9b5cbf666d3",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/8d4087fce8472eec5932e5066aaced1b3849d6": "a8f285128c5bb126e4f2d6dbcee7fe40",
".git/objects/08/1618c4813ce951c3bbe8c4009a37e45ee9f2db": "7cb36249840178e63c9954c67f45fc49",
".git/objects/08/c01286fb99188678775392e094999dd626ad74": "470582bbc89ac928bbe85482452ed5aa",
".git/objects/0a/574dff4b97c0370894463e3c0dd49c85519b01": "671a9b86011d39f3673319a9a5f46eb8",
".git/objects/0e/0d3be7f5aaf0745de0617a2c48f44e0f2a5ee8": "6bb21a3ef520ee1315c8befd294261a6",
".git/objects/13/5e603af50fcaebce790fbc0b76bc7452973cde": "6908b3939a43373edd38a513cbd9627a",
".git/objects/23/8663883a861b2aed327be736fbff981798a435": "0342cddfb4b624cad0c67c267ff4d91e",
".git/objects/26/23761c16adf0006e8f373766bb6bcddcdb6a3a": "bc0e24b5ba1fd0fd9175056308e7744a",
".git/objects/27/3e678d1405d2774c4c1ffab1c0bcf328f1f781": "f40c5a9b015fdcb3ecfc18e225a97d53",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/31/453b78a43a0062969779e9b831518e3c8a38a3": "71629c2551a96734145d72e331382101",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/35/e72b0658c575e7dacfca697adf0892a32d19a2": "a62fbefaa4661f1aa2e526ee41a1c857",
".git/objects/38/151f171ed4c2adcadab212cb816c5a5bfb8a59": "829d6df57e503170e1d1693397069b64",
".git/objects/39/f0f4a882c7ff7e537210c1daae8bd69d516331": "82788e990c8608ece3a01340cf0bfef8",
".git/objects/41/537185be48ff67b46ee6657008c77cc53fd23c": "b14cf520f805d9e5f75d6c5a2b6be3ed",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b4e50d1c1ff08533db469a249981252de1b895": "7652d329eefe2e49b525ab8df10d05a5",
".git/objects/43/bd8c1787d21f3a37ad32dfa86dc172649671c0": "fb89d2b261559fdd710a62340a73d861",
".git/objects/46/2b2384dc4d9d269cb28594378adf8fbc53c88e": "488a50c528dcc13d208e6e6f9bdb2f66",
".git/objects/4c/357bedcc037c474428682c6c3ceb4324748609": "b39c250ab8e091531b02ab9f2eb16dc7",
".git/objects/50/7aa83f5f55a42c7401ddeedbc6577ed805be88": "82d4dcc8a51db92f4d5156a355b553e6",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/56/0e42fb6a1a0b8d7cdae803878ea0853d383fc4": "7b5ad7395a59ec73a5a9da0fc13d066c",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/5c/088cf116a1b14a58a77a10089839fba29f84d9": "8fa028fd952996e6d20e42d379107653",
".git/objects/5d/c37a14edbaad191f258673799e7a7abf248279": "e0ecc4e92c1fb976c2f451e733c92733",
".git/objects/5e/9cb2409a08495396d0d39fcd04171ecd6fc829": "21101f1cfb3d5cdfe74ea12336373746",
".git/objects/60/c1b5ea41e283872bba2a5c2f803f8adf784e64": "6b1c870762da75613d40c028f43735a7",
".git/objects/61/3477ef607e65c6d7c757420e25c64e10348cf4": "2905547867e3c4e25621f791f17d4368",
".git/objects/62/b7ff4ab3fe60293208f90476a9a4c0d3695661": "9d2da46b931d29b47d026c7055487934",
".git/objects/6a/6193a02c91bf4d760db9564bbd1b23a8475e5d": "eba37ecfbb179638daf64047b937e21c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/b39d20361dc02fda93545ca9e282b08a3daf19": "27387158d8361dc8b52146f05205bcea",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/6e/93c46a7751142a0684ea12458da1bb585eb2ab": "c3052092d30eb6a83dd8fc6d089e4c96",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/95748cc92e21ab915c91975eca5e3dae8e29a8": "a98efa9d4d0b7ee3af8eabe843d2f6a8",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/86/05eb979bde3ccf5b6c4b00409805494baa45df": "c25c6025e8dd184ba1eb05ecf3c24373",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/0b64f42a9b840d037319c9c7c6bb472c6c79a2": "9815b8408211e952054095bc40f61aeb",
".git/objects/98/e773b91a2f0c366a75e53171a996a9d13bca7d": "8e2fe1c704b24b7f93317c7c77dae7db",
".git/objects/9b/46de9571ca152f72d941acc01b480984b8b031": "c403d2fc0728a7e93426f475d91db2fa",
".git/objects/9c/790cc08d855b921ba9f6b9f7b484551a0c6e5a": "826e404771e1b276a053bfa566551259",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/dfded78dd714444def6258d3edd03ac360c869": "c24c341b653328b483d3342ccbe616ff",
".git/objects/a7/e64d25103452416d9a1bae41a656a05b12cb8e": "9d22337c773702e1d6c02304346d511a",
".git/objects/a9/1ff9cacf3608494247e62417be197debc7863e": "bc1a62414000ef44432ee9e597a9538e",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b6/db8760b490076418ff89037abab85cfc7c1dee": "fc218bdcf77f13a56ed05949d4b2b13d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/7ab2beeaacd9c02e06773ad17f00072e6b9ed2": "f0092577dd8553070bb178d71196e7b2",
".git/objects/c5/adf92d4a29514b52f399655917bfdf079515ad": "732605f6a92f76690c18101c7de2f4ce",
".git/objects/c5/f76cbe00cd6575688cd9984ed2d0b0d1b86afe": "c8eda8bfe9a407bfbf40f215152837aa",
".git/objects/c7/60cfcb0269294d1afb0798f87c9108af33fc92": "32e56bd747513616e02c45bbfd358195",
".git/objects/ce/1103158c638b796735fee8d1946899f7d09b4f": "b22ae2fd8a80e00401e7e1b8ddb8c7e9",
".git/objects/d1/91c1d40cdbb874ff5f8a6ff2bccb98962b3188": "b3fc39ce8d39936a8c3db4df3ca07092",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f1/346dca0974efef4c5ba54ccffa81e248e4bc32": "c409bd0e40aa5f7529305de0c5d26003",
".git/objects/f8/4a5d717cd3c0d21c357b382789c3c4736ab8e8": "dcc9da4b8015e19d84c8589b7690df4c",
".git/objects/f9/b1adede7ebca23bcdc502c801da749aec209c5": "e99deeb61b4ecde30a18e3a1e3022d0f",
".git/objects/fb/400db5b098ebd4f9c34e7a332e81ffac9ab59a": "4eb01da18d9bc6a192cf73601bf80677",
".git/objects/fd/2ff80ea3ecf4ecddb5325fc92cdb5afa65a719": "360a35519485d012cee5dd7cb53a9670",
".git/refs/heads/master": "efce9cd0869e4819af8a323486459360",
".git/refs/remotes/origin/master": "efce9cd0869e4819af8a323486459360",
"assets/AssetManifest.json": "0ae393857c5b1f8ec8e6a49600477fec",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/images/cict_logo.png": "86ae12863d23f1a0c69409d062d9f607",
"assets/FontManifest.json": "53e98fbd50f4332b5e60670efcee3ec7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "45dbf649bef1be3fc9c73205b0340724",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc49bb0d95098e6c3d304c0c3090808e",
"/": "cc49bb0d95098e6c3d304c0c3090808e",
"main.dart.js": "eeafdb3e399b1d4f6f63f8786b61f721",
"manifest.json": "0bfd00bb3cdd247e99310aa1b0225ebc",
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
