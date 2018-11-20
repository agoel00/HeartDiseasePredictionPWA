
var CACHE_NAME = 'heart-v1';
//new
var urlsToCache = [
  'index.html',
  'HeartDiseasePredictionPWA/css/component.css',
  'HeartDiseasePredictionPWA/css/default.css',
  'HeartDiseasePredictionPWA/css/loader.css',
  'HeartDiseasePredictionPWA/css/test.css',
  'HeartDiseasePredictionPWA/js/custom.js',
  'HeartDiseasePredictionPWA/js/nlform.js',
  'HeartDiseasePredictionPWA/js/modernizr.custom.js',
  'HeartDiseasePredictionPWA/manifest.json',
  'HeartDiseasePredictionPWA/favicon.ico',
  'HeartDiseasePredictionPWA/fonts/nlicons/nlicons.dev.svg',
  'HeartDiseasePredictionPWA/fonts/nlicons/nlicons.eot',
  'HeartDiseasePredictionPWA/fonts/nlicons/nlicons.svg',
  'HeartDiseasePredictionPWA/fonts/nlicons/nlicons.ttf',
  'HeartDiseasePredictionPWA/fonts/nlicons/nlicons.woff',
  'HeartDiseasePredictionPWA/fonts/codropsicons/codropsicons.eot',
  'HeartDiseasePredictionPWA/fonts/codropsicons/codropsicons.svg',
  'HeartDiseasePredictionPWA/fonts/codropsicons/codropsicons.ttf',
  'HeartDiseasePredictionPWA/fonts/codropsicons/codropsicons.woff'
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