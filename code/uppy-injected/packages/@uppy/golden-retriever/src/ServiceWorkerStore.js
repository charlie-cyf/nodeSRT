var SRTlib = require('SRT-util');
const isSupported = typeof navigator !== 'undefined' && ('serviceWorker' in navigator);
function waitForServiceWorker() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"waitForServiceWorker","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

    if (!isSupported) {
      reject(new Error('Unsupported'));
    } else if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker","paramsNumber":0},');

}
class ServiceWorkerStore {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ServiceWorkerStore"}},`);

    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  list() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ServiceWorkerStore"}},`);

    const defer = {};
    const promise = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":2},`);

      defer.resolve = resolve;
      defer.reject = reject;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    });
    console.log('Loading stored blobs from Service Worker');
    const onMessage = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onMessage","fileName":"${__filename}","paramsNumber":1},`);

      if (event.data.store !== this.name) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"onMessage"},');

        return;
      }
      switch (event.data.type) {
        case 'uppy/ALL_FILES':
          defer.resolve(event.data.files);
          navigator.serviceWorker.removeEventListener('message', onMessage);
          break;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"onMessage"},');

    };
    this.ready.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: this.name
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return promise;
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  put(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"put","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ServiceWorkerStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

    return this.ready.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: this.name,
        file: file
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

  }
  delete(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"delete","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ServiceWorkerStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

    return this.ready.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: this.name,
        fileID: fileID
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

  }
}
ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;