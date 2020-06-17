var SRTlib = require('SRT-util');
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("/create-react-app/precache-manifest.6cc24fd30d5266e6dbe57da73130a567.js");
self.addEventListener('message', event => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
    SRTlib.send("]},");

});
workbox.core.clientsClaim();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/create-react-app/index.html"), {
  blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
});
