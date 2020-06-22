var SRTlib = require('SRT-util');
const isSupported = typeof navigator !== 'undefined' && ('serviceWorker' in navigator);
function waitForServiceWorker() {
    SRTlib.send(`{ "anonymous": false, "function": "waitForServiceWorker", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "waitForServiceWorker"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!isSupported) {
      reject(new Error('Unsupported'));
    } else if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve();
                SRTlib.send('], "end": "emptyKey"},');

      });
    }
        SRTlib.send('], "end": "emptyKey2"},');

  });
    SRTlib.send('], "end": "waitForServiceWorker"},');

}
class ServiceWorkerStore {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "ServiceWorkerStore.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
        SRTlib.send('], "end": "constructor"},');

  }
  list() {
        SRTlib.send(`{ "anonymous": false, "function": "ServiceWorkerStore.list", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const defer = {};
    const promise = new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      defer.resolve = resolve;
      defer.reject = reject;
            SRTlib.send('], "end": "emptyKey3"},');

    });
    console.log('Loading stored blobs from Service Worker');
    const onMessage = event => {
            SRTlib.send(`{ "anonymous": false, "function": "onMessage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (event.data.store !== this.name) {
                SRTlib.send('], "end": "onMessage"},');

        return;
      }
      switch (event.data.type) {
        case 'uppy/ALL_FILES':
          defer.resolve(event.data.files);
          navigator.serviceWorker.removeEventListener('message', onMessage);
          break;
      }
            SRTlib.send('], "end": "onMessage"},');

    };
    this.ready.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: this.name
      });
            SRTlib.send('], "end": "emptyKey4"},');

    });
        SRTlib.send('], "end": "list"},');

    return promise;
        SRTlib.send('], "end": "list"},');

  }
  put(file) {
        SRTlib.send(`{ "anonymous": false, "function": "ServiceWorkerStore.put", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "put"},');

    return this.ready.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: this.name,
        file: file
      });
            SRTlib.send('], "end": "emptyKey5"},');

    });
        SRTlib.send('], "end": "put"},');

  }
  delete(fileID) {
        SRTlib.send(`{ "anonymous": false, "function": "ServiceWorkerStore.delete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "delete"},');

    return this.ready.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: this.name,
        fileID: fileID
      });
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "delete"},');

  }
}
ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;
