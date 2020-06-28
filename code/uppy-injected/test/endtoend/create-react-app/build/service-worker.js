/**
* Welcome to your Workbox-powered service worker!
*
* You'll need to register this file in your web app and you should
* disable HTTP caching for this file too.
* See https://goo.gl/nhQhGp
*
* The rest of the code is auto-generated. Please don't update this file
* directly; instead, make changes to your Workbox build configuration
* and re-run your build process.
* See https://goo.gl/2aRDsh
*/
const SRTlib = require('SRT-util');

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("/create-react-app/precache-manifest.45257bf494ba85aa3cb4c622183219a7.js");
self.addEventListener('message', event => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"self.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"self.addEventListener"},');

});
workbox.core.clientsClaim();
/**
* The workboxSW.precacheAndRoute() method efficiently caches and responds to
* requests for URLs in the manifest.
* See https://goo.gl/S9QRab
*/
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/create-react-app/index.html"), {
  blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
});
