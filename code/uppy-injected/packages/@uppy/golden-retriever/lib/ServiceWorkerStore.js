const SRTlib = require('SRT-util');

var isSupported = typeof navigator !== 'undefined' && ('serviceWorker' in navigator);
function waitForServiceWorker() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"waitForServiceWorker","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker"},');

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

    if (!isSupported) {
      reject(new Error('Unsupported'));
    } else if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.navigator.serviceWorker.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.navigator.serviceWorker.addEventListener"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker","paramsNumber":0},');

}
var ServiceWorkerStore = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore","fileName":"${__filename}","paramsNumber":0},`);

  function ServiceWorkerStore(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ServiceWorkerStore","fileName":"${__filename}","paramsNumber":1},`);

    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore","paramsNumber":1},');

  }
  var _proto = ServiceWorkerStore.prototype;
  _proto.list = function list() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.list","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
    var defer = {};
    var promise = new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.list.list.promise.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      defer.resolve = resolve;
      defer.reject = reject;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.list.list.promise.NewExpression"},');

    });
    console.log('Loading stored blobs from Service Worker');
    var onMessage = function onMessage(event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onMessage","fileName":"${__filename}","paramsNumber":1},`);

      if (event.data.store !== _this.name) {
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
    this.ready.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.list.list.ready.then","fileName":"${__filename}","paramsNumber":0},`);

      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: _this.name
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.list.list.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.list"},');

    return promise;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.list"},');

  };
  _proto.put = function put(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.put","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.put"},');

    return this.ready.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.put.put.ReturnStatement.ready.then","fileName":"${__filename}","paramsNumber":0},`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: _this2.name,
        file: file
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.put.put.ReturnStatement.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.put"},');

  };
  _proto.delete = function _delete(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.delete","fileName":"${__filename}","paramsNumber":1},`);

    var _this3 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.delete"},');

    return this.ready.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore._proto.delete._delete.ReturnStatement.ready.then","fileName":"${__filename}","paramsNumber":0},`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: _this3.name,
        fileID: fileID
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.delete._delete.ReturnStatement.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore._proto.delete"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore"},');

  return ServiceWorkerStore;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore"},');

})();
ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;
