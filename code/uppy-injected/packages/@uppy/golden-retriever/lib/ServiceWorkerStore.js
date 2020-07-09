var SRTlib = require('SRT-util');

var isSupported = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;

function waitForServiceWorker() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"waitForServiceWorker\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

    if (!isSupported) {
      reject(new Error('Unsupported'));
    } else if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"navigator.serviceWorker.addEventListener\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"navigator.serviceWorker.addEventListener"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"waitForServiceWorker","paramsNumber":0},');
}

var ServiceWorkerStore = /*#__PURE__*/function () {
  function ServiceWorkerStore(opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ServiceWorkerStore\"}},");
    this.ready = waitForServiceWorker();
    this.name = opts.storeName;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = ServiceWorkerStore.prototype;

  _proto.list = function list() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"list\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ServiceWorkerStore\"}},");
    var defer = {};
    var promise = new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"promise.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      defer.resolve = resolve;
      defer.reject = reject;
      SRTlib.send('{"type":"FUNCTIONEND","function":"promise.NewExpression"},');
    });
    console.log('Loading stored blobs from Service Worker');

    var onMessage = function onMessage(event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onMessage\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ready.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      navigator.serviceWorker.addEventListener('message', onMessage);
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/GET_FILES',
        store: _this.name
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ready.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
    return promise;
    SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
  };

  _proto.put = function put(file) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"put\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ServiceWorkerStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');
    return this.ready.then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/ADD_FILE',
        store: _this2.name,
        file: file
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');
  };

  _proto.delete = function _delete(fileID) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"delete\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ServiceWorkerStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
    return this.ready.then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      navigator.serviceWorker.controller.postMessage({
        type: 'uppy/REMOVE_FILE',
        store: _this3.name,
        fileID: fileID
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
  };

  return ServiceWorkerStore;
}();

ServiceWorkerStore.isSupported = isSupported;
module.exports = ServiceWorkerStore;