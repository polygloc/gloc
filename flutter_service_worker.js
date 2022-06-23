'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "dd6df6e28b6a61d2a5800ac8ed0164b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "e59aaac5206c577c84619f6d60e0e1e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73a037d4c65ba2366a5259ab89dd08ca",
".git/logs/refs/heads/main": "73a037d4c65ba2366a5259ab89dd08ca",
".git/logs/refs/remotes/origin/HEAD": "73a037d4c65ba2366a5259ab89dd08ca",
".git/objects/pack/pack-3e60de4cfaa2447e4f867a901508caa7490bdf2f.idx": "5c3d4c4028b98cbe11f2a29147bd4980",
".git/objects/pack/pack-3e60de4cfaa2447e4f867a901508caa7490bdf2f.pack": "fb1bf549ffac64481cfc7c669dab1ff1",
".git/packed-refs": "12ca23a2ba86f94f7576ae30f12086f6",
".git/refs/heads/main": "1936a71d23ccdf7cc8be3c442d7de8ec",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.json": "de455ef7b218c201120715d4acec79ff",
"assets/FontManifest.json": "16f23eee2eae7c858147d63229b100b7",
"assets/fonts/IBMPlexMono-Bold.ttf": "8d845e99f40a0312b2fa5456ec2715f4",
"assets/fonts/IBMPlexMono-BoldItalic.ttf": "c5b18cd6cc1c711ef3f9ed751c654e70",
"assets/fonts/IBMPlexMono-ExtraLight.ttf": "841e72382166517a4202b48366535883",
"assets/fonts/IBMPlexMono-ExtraLightItalic.ttf": "03f57ef1d39d1239295acefca6410474",
"assets/fonts/IBMPlexMono-Italic.ttf": "8e20c649021a471485cec1825313e1e0",
"assets/fonts/IBMPlexMono-Light.ttf": "73b54309d040298a9b15f95fa4fa8ecd",
"assets/fonts/IBMPlexMono-LightItalic.ttf": "b31107cb2a4591184786ee9a0b12e39a",
"assets/fonts/IBMPlexMono-Medium.ttf": "430e5f70f90b7ec17babdbe67973e09f",
"assets/fonts/IBMPlexMono-MediumItalic.ttf": "9c5f68b04eb9b2fada964f4b201a77a3",
"assets/fonts/IBMPlexMono-Regular.ttf": "ad8e1092caf681575136f0af4d864927",
"assets/fonts/IBMPlexMono-SemiBold.ttf": "558ac0449d93f45ea12684460d32fe28",
"assets/fonts/IBMPlexMono-SemiBoldItalic.ttf": "2b7fb2a409a9c695c0550274efc6b44f",
"assets/fonts/IBMPlexMono-Thin.ttf": "ed77badab5f772cb9d64a418d7d5a90b",
"assets/fonts/IBMPlexMono-ThinItalic.ttf": "b3c8ede3d28b8dffca037755fd6128f4",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/arduino-original.svg": "6d59ba92c7457b20b65d594bbde1e630",
"assets/images/bash-original.svg": "1e36264dbc2d407bce305b1eec3d4b46",
"assets/images/bazel-icon.svg": "56e32390f1715643b4e20fed5503e25d",
"assets/images/biztalk-services.svg": "2f56efab66989793f8b2b0d5ca8d339d",
"assets/images/c-original.svg": "7984f1f99e00b58e6402c5624e1dc298",
"assets/images/cake.svg": "62a1e762679fe53e8fff890aa6afbd7f",
"assets/images/clojure-original.svg": "034dfd4a003b2bd609f1519b7c058f49",
"assets/images/clojurescript-original.svg": "aaf1cbbcbae81b51acfe555818ae29a6",
"assets/images/cmake-icon.svg": "404c593e5c0eb588a90f911fa900bcd3",
"assets/images/coffee.svg": "50cc8f18faa5833ac05bfcfc49f958d0",
"assets/images/coldfusion.svg": "a87088b6db3453f8446ee9767abb129f",
"assets/images/cplusplus-original.svg": "951e0f370482b5861bb0744ddb24ae70",
"assets/images/crystal-original.svg": "db41f1159978a31fdd677f69f4f0ff43",
"assets/images/csharp-original.svg": "ec7be0a3500b106a4e451fd951e1c717",
"assets/images/css3-original.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/images/csv.svg": "332350268dfbd858de5c81d3a57b9ffc",
"assets/images/cu.svg": "24896445110706e21b3a18942a584374",
"assets/images/cucumber-plain.svg": "4397829aa1d5b3c27a0f6bc3b2c6132c",
"assets/images/d.svg": "6141a1ce1e003ddd0bbb6b13145cd6c5",
"assets/images/dart-original.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/images/default.svg": "923a80fa698700f4c8cfdded1699f3d6",
"assets/images/docker-original.svg": "1380befa46d4027b411bc47b093424a9",
"assets/images/ejs.svg": "2e00633666528c7ecd56109d8c5faaa5",
"assets/images/elixir-original.svg": "dc5e47f5c026d9a15c63d2e7d17e2364",
"assets/images/elm-original.svg": "cb6e974d26e4c5047cd9c829b3161f7e",
"assets/images/erlang-original.svg": "b39ba127e268dd652a1707f26557d410",
"assets/images/fsharp-original.svg": "155830dedf851e1ab97b872046dcb67b",
"assets/images/go-original.svg": "693a515fdec70377113418f09150889c",
"assets/images/godot-original.svg": "7f662044b29f162df1ef99f635e05085",
"assets/images/gradle-plain.svg": "7a25105251604f755b21fbd8cd79899a",
"assets/images/grails-original.svg": "2cbcf58085a385ff1f67d5189e67f614",
"assets/images/graphql-plain.svg": "6ec4ebfc8814a9a0f2825ee7b8e18da0",
"assets/images/groovy-original.svg": "beed3d310abb1453f853c2153d73ab5c",
"assets/images/haml.svg": "054bc5889a66cda6ea609a9e29710705",
"assets/images/handlebars-original.svg": "3730792cdd49b256a588906008e5e5e7",
"assets/images/haskell-original.svg": "74c8bb7666d6f241c82c541fc595ed87",
"assets/images/haxe-original.svg": "f7e4697711c7b974559af0e1eb4bf237",
"assets/images/html5-original.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/images/java-original.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/images/javascript-original.svg": "0c1f700da144243c526f252e59362138",
"assets/images/jinja.svg": "8b60159f3d919db11359686937ea78ab",
"assets/images/json-icon.svg": "131ab4869e0dee516fd81f6c52628e3f",
"assets/images/julia-original.svg": "7910b23c09b1c780c3419bad38a8bf73",
"assets/images/jupyter-original.svg": "437a667d0681cf2c68b192a9759d1af8",
"assets/images/kotlin-original.svg": "de7470a212dd66ae80be4d61a5be3050",
"assets/images/less-plain-wordmark.svg": "2c6a9039f32a70986f97e042871a8670",
"assets/images/liquid.svg": "27664c59d867fab2863e91d32934fac4",
"assets/images/lua-original.svg": "78b9cdd8a5f79e940530a74a461c8e72",
"assets/images/makefile.svg": "ba010924f9234f9f555b46fdb336d50d",
"assets/images/markdown-original.svg": "b338f1fab50f26efac0b9d9e5a8af066",
"assets/images/matlab-original.svg": "627b0fa3c148c31981200c618da6a9f9",
"assets/images/maven.svg": "27db5b34d5d5c23992e86ef51c150275",
"assets/images/mustache.svg": "d25af777edecaef04ecf620078d66b17",
"assets/images/nim.svg": "36c476cef8ca1403b80e280acdb353ba",
"assets/images/nixos-original.svg": "f39dcad4c0c8855059ab260d56faf5d7",
"assets/images/objectivec-plain.svg": "611b22eba29c734d9947e2d2127398ce",
"assets/images/ocaml-original.svg": "fa9a5765de6815708d30c7001a278158",
"assets/images/oracle-original.svg": "33a051a56a009fffda29be3873c09a14",
"assets/images/perl-original.svg": "14d43ca3f847b425b09f5fc5eb43f09f",
"assets/images/php-original.svg": "5f4952d85d434b7d00b7c493e3b79f97",
"assets/images/powershell.svg": "96c6c51a1dfec3c69dc4981af853a88d",
"assets/images/prolog.svg": "4b4e0231a59575203b8af88704e19e99",
"assets/images/pug-icon.svg": "28680628c53b3ade40dcca0236ae3f97",
"assets/images/purescript.svg": "8c091faee77fd7abc1d35b40a36b8b3e",
"assets/images/python-original.svg": "19816abc24d61b6c0cf28814ba9394ab",
"assets/images/qt-original.svg": "653a3544c3d79ecfa8f0eaa68258c305",
"assets/images/r-original.svg": "23fa57a99c4d3698d7140dda67f98917",
"assets/images/reasonml.svg": "1923d7aca8ea1468fe28d2c711d312c7",
"assets/images/rescript.svg": "9fd40239d47ca47e446fd41f2c3cf827",
"assets/images/ruby-original.svg": "a9982b573baaa385cfa842477a6445c2",
"assets/images/rust-plain.svg": "24e429e11d88faea3d7ec69dcb7fac80",
"assets/images/sass-original.svg": "73682a7d388de609573d1df94de83b8b",
"assets/images/scala-original.svg": "0fdeb739eef430c1dcc22aacf0c6dd58",
"assets/images/slim.svg": "152ddb95259414c7bcaa6e6a0bad990d",
"assets/images/smarty.svg": "9a4639781cd90eecff1d00a175d7b967",
"assets/images/sql.svg": "560ce161df0c6e27b4f663de26d2c8e4",
"assets/images/stylus-original.svg": "6a949167a95d7574dd4b1a9dd3a9f326",
"assets/images/svelte-original.svg": "13f43031052b426632509053d760d7f7",
"assets/images/svg.svg": "944be812e1b10e4a8d4bef7ddee079e3",
"assets/images/swift-original.svg": "714948ba4cf994b64135be84ced494e2",
"assets/images/tex.svg": "5734b2a1be7182c9617b3671a324b1a7",
"assets/images/twig.svg": "f6272ed051296226ee722960c552ebad",
"assets/images/typescript-original.svg": "c06d3c068de68e5654d05552e26e3452",
"assets/images/unity-original.svg": "eea51334d5837ef647568ef368fa28ab",
"assets/images/vala.svg": "0f5acb7d4e3cc80fab4a2b6d5a405063",
"assets/images/vim-original.svg": "c33981748e3bc0ed724e24c7ae61134e",
"assets/images/visualstudio-plain.svg": "87037c0c0b43c10ef05b40dfd701c5b3",
"assets/images/vuejs-original.svg": "72d93ebdd9d9cdd1c1e81073aff06b79",
"assets/images/webassembly.svg": "288929622270af730b7bb6203e35ea91",
"assets/images/windows8-original.svg": "4d393b61f83737aa2c1d67ea66ecacce",
"assets/images/xml-icon.svg": "17c53bb45d46cf4447bd7127337f1f81",
"assets/images/yaml.svg": "83f7c07a6c05aea693636b7609a628ad",
"assets/images/zig-original.svg": "3d13c507e21731bde20770ec4d288323",
"assets/NOTICES": "76d2fa3006c9f38eb7b21f97235633b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "36afebe3b901716200adbbf3dccf9202",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8e2d5c18f8eddab486f6cd9bd61d9119",
"/": "8e2d5c18f8eddab486f6cd9bd61d9119",
"LICENSE": "c131ee3adb05e5ade442e825aba2cd72",
"main.dart.js": "b6e35265d52b9bc6315baee1af1abae7",
"manifest.json": "748b2bdaa8be695f5e2095ee7208d56a",
"version.json": "50bc99a5210fa8f3930a4a7f94d23c5b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
