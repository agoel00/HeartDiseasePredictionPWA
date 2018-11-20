
var CACHE_NAME = 'heart-v1';
//new
var urlsToCache = [
  '/',
  'css/component.css',
  'css/default.css',
  'css/loader.css',
  'css/test.css',
  'js/custom.js',
  'js/nlform.js',
  'js/modernizr.custom.js',
  'manifest.json',
  'favicon.ico',
  'fonts/nlicons/nlicons.dev.svg',
  'fonts/nlicons/nlicons.eot',
  'fonts/nlicons/nlicons.svg',
  'fonts/nlicons/nlicons.ttf',
  'fonts/nlicons/nlicons.woff',
  'fonts/codropsicons/codropsicons.eot',
  'fonts/codropsicons/codropsicons.svg',
  'fonts/codropsicons/codropsicons.ttf',
  'fonts/codropsicons/codropsicons.woff'
];


self.addEventListener('install', function (event) {
  console.log("installing")
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).then(function () {
          console.log('All resources have been fetched and cached.');
        });
      })
      .catch(err => console.log(err))
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);

    })
    .catch(err => console.log(err))
  );

});