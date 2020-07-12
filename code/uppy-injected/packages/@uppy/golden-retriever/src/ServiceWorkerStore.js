const SRTlib = require('SRT-util');

const isSupported = typeof navigator !== 'undefined' && ('serviceWorker' in navigator);
function waitForServiceWorker() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"waitForServiceWorker","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":2},`);

    if (!isSupported) {
      reject(new Error('Unsupported'));
    } else if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"navigator.serviceWorker.addEventListener","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"navigator.serviceWorker.addEventListener"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker","paramsNumber":0},');

}
class ServiceWorkerStore {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":1,"classInfo":{"className":"ServiceWorkerStore"}},`);

    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  list() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":0,"classInfo":{"className":"ServiceWorkerStore"}},`);

    const defer = {};
    const promise = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"promise.NewExpression","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":2},`);

      defer.resolve = resolve;
      defer.reject = reject;
            SRTlib.send('{"type":"FUNCTIONEND","function":"promise.NewExpression"},');

    });
    console.log('Loading stored blobs from Service Worker');
    const onMessage = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onMessage","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":1},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ready.then","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":0},`);

      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: this.name
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return promise;
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  put(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"put","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":1,"classInfo":{"className":"ServiceWorkerStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

    return this.ready.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":0},`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: this.name,
        file: file
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

  }
  delete(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"delete","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":1,"classInfo":{"className":"ServiceWorkerStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

    return this.ready.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then###2","fileName":"/packages/@uppy/golden-retriever/src/ServiceWorkerStore.js","paramsNumber":0},`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: this.name,
        fileID: fileID
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

  }
}
ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;
