var SRTlib = require('SRT-util');
const isSupported = typeof navigator !== 'undefined' && ('serviceWorker' in navigator);
function waitForServiceWorker() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

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
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
class ServiceWorkerStore {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
        SRTlib.send("]},");

  }
  list() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const defer = {};
    const promise = new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      defer.resolve = resolve;
      defer.reject = reject;
            SRTlib.send("]},");

    });
    console.log('Loading stored blobs from Service Worker');
    const onMessage = event => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (event.data.store !== this.name) {
                SRTlib.send("]},");

        return;
      }
      switch (event.data.type) {
        case 'uppy/ALL_FILES':
          defer.resolve(event.data.files);
          navigator.serviceWorker.removeEventListener('message', onMessage);
          break;
      }
            SRTlib.send("]},");

    };
    this.ready.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: this.name
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return promise;
        SRTlib.send("]},");

  }
  put(file) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.ready.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: this.name,
        file: file
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  delete(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.ready.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: this.name,
        fileID: fileID
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
}
ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;
