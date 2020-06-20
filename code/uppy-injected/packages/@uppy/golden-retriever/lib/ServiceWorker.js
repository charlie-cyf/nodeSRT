var SRTlib = require('SRT-util');
var fileCache = Object.create(null);
function getCache(name) {
    SRTlib.send(`{ "anonymous": false, "function": "getCache", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!fileCache[name]) {
    fileCache[name] = Object.create(null);
  }
    SRTlib.send("]},");

  return fileCache[name];
    SRTlib.send("]},");

}
self.addEventListener('install', function (event) {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  console.log('Installing Uppy Service Worker...');
  event.waitUntil(Promise.resolve().then(function () {
        SRTlib.send(`{ "anonymous": true, "function": "then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return self.skipWaiting();
        SRTlib.send("]},");

  }));
    SRTlib.send("]},");

});
self.addEventListener('activate', function (event) {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  event.waitUntil(self.clients.claim());
    SRTlib.send("]},");

});
function sendMessageToAllClients(msg) {
    SRTlib.send(`{ "anonymous": false, "function": "sendMessageToAllClients", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  clients.matchAll().then(function (clients) {
        SRTlib.send(`{ "anonymous": true, "function": "then3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    clients.forEach(function (client) {
            SRTlib.send(`{ "anonymous": true, "function": "then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      client.postMessage(msg);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
function addFile(store, file) {
    SRTlib.send(`{ "anonymous": false, "function": "addFile", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  getCache(store)[file.id] = file.data;
  console.log('Added file blob to service worker cache:', file.data);
    SRTlib.send("]},");

}
function removeFile(store, fileID) {
    SRTlib.send(`{ "anonymous": false, "function": "removeFile", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  delete getCache(store)[fileID];
  console.log('Removed file blob from service worker cache:', fileID);
    SRTlib.send("]},");

}
function getFiles(store) {
    SRTlib.send(`{ "anonymous": false, "function": "getFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  sendMessageToAllClients({
    type: 'uppy/ALL_FILES',
    store: store,
    files: getCache(store)
  });
    SRTlib.send("]},");

}
self.addEventListener('message', function (event) {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  switch (event.data.type) {
    case 'uppy/ADD_FILE':
      addFile(event.data.store, event.data.file);
      break;
    case 'uppy/REMOVE_FILE':
      removeFile(event.data.store, event.data.fileID);
      break;
    case 'uppy/GET_FILES':
      getFiles(event.data.store);
      break;
  }
    SRTlib.send("]},");

});
