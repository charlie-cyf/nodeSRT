var SRTlib = require('SRT-util');
var isSupported = typeof navigator !== 'undefined' && ('serviceWorker' in navigator);
function waitForServiceWorker() {
    SRTlib.send(`{ "anonymous": false, "function": "waitForServiceWorker", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!isSupported) {
      reject(new Error('Unsupported'));
    } else if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', function () {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.navigator.serviceWorker.addEventListener", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve();
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
var ServiceWorkerStore = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function ServiceWorkerStore(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "ServiceWorkerStore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
        SRTlib.send("]},");

  }
  var _proto = ServiceWorkerStore.prototype;
  _proto.list = function list() {
        SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.list.list", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this = this;
    var defer = {};
    var promise = new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.list.list.promise", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      defer.resolve = resolve;
      defer.reject = reject;
            SRTlib.send("]},");

    });
    console.log('Loading stored blobs from Service Worker');
    var onMessage = function onMessage(event) {
            SRTlib.send(`{ "anonymous": false, "function": "onMessage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (event.data.store !== _this.name) {
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
    this.ready.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.list.list.ready.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: _this.name
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return promise;
        SRTlib.send("]},");

  };
  _proto.put = function put(file) {
        SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.put.put", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
        SRTlib.send("]},");

    return this.ready.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.put.put.ReturnStatement.ready.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: _this2.name,
        file: file
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.delete = function _delete(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.delete._delete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
        SRTlib.send("]},");

    return this.ready.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "ServiceWorkerStore._proto.delete._delete.ReturnStatement.ready.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: _this3.name,
        fileID: fileID
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return ServiceWorkerStore;
    SRTlib.send("]},");

})();
ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;
