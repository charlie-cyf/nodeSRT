const SRTlib = require('SRT-util');

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("/create-react-app/precache-manifest.45257bf494ba85aa3cb4c622183219a7.js");
self.addEventListener('message', event => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"self.addEventListener","fileName":"/test/endtoend/create-react-app/build/service-worker.js","paramsNumber":1},`);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"self.addEventListener"},');

});
workbox.core.clientsClaim();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/create-react-app/index.html"), {
  blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
});
