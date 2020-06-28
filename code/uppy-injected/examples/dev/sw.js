/*globals clients*/
const SRTlib = require('SRT-util');

const fileCache = Object.create(null);
function getCache(name) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getCache","fileName":"${__filename}","paramsNumber":1},`);

  if (!fileCache[name]) {
    fileCache[name] = Object.create(null);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getCache"},');

  return fileCache[name];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getCache","paramsNumber":1},');

}
self.addEventListener('install', event => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"self.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

  console.log('Installing Uppy Service Worker...');
  event.waitUntil(Promise.resolve().then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"event.waitUntil.then","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"event.waitUntil.then"},');

    return self.skipWaiting();
        SRTlib.send('{"type":"FUNCTIONEND","function":"event.waitUntil.then"},');

  }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"self.addEventListener"},');

});
self.addEventListener('activate', event => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"self.addEventListener2","fileName":"${__filename}","paramsNumber":1},`);

  event.waitUntil(self.clients.claim());
    SRTlib.send('{"type":"FUNCTIONEND","function":"self.addEventListener2"},');

});
function sendMessageToAllClients(msg) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sendMessageToAllClients","fileName":"${__filename}","paramsNumber":1},`);

  clients.matchAll().then(clients => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"then","fileName":"${__filename}","paramsNumber":1},`);

    clients.forEach(client => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"clients.forEach","fileName":"${__filename}","paramsNumber":1},`);

      client.postMessage(msg);
            SRTlib.send('{"type":"FUNCTIONEND","function":"clients.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"sendMessageToAllClients","paramsNumber":1},');

}
function addFile(store, file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFile","fileName":"${__filename}","paramsNumber":2},`);

  getCache(store)[file.id] = file.data;
  console.log('Added file blob to service worker cache:', file.data);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addFile","paramsNumber":2},');

}
function removeFile(store, fileID) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeFile","fileName":"${__filename}","paramsNumber":2},`);

  delete getCache(store)[fileID];
  console.log('Removed file blob from service worker cache:', fileID);
    SRTlib.send('{"type":"FUNCTIONEND","function":"removeFile","paramsNumber":2},');

}
function getFiles(store) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getFiles","fileName":"${__filename}","paramsNumber":1},`);

  sendMessageToAllClients({
    type: 'uppy/ALL_FILES',
    store: store,
    files: getCache(store)
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getFiles","paramsNumber":1},');

}
self.addEventListener('message', event => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"self.addEventListener3","fileName":"${__filename}","paramsNumber":1},`);

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"self.addEventListener3"},');

});
