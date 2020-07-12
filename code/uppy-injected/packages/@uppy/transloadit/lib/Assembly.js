function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var io = requireSocketIo;

var Emitter = require('component-emitter');

var has = require('@uppy/utils/lib/hasProperty');

var parseUrl = require('./parseUrl');

var socketIo;

function requireSocketIo() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"requireSocketIo\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");

  if (!socketIo) {
    socketIo = require('socket.io-client');
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"requireSocketIo"},');
  return socketIo;
  SRTlib.send('{"type":"FUNCTIONEND","function":"requireSocketIo","paramsNumber":0},');
}

var ASSEMBLY_UPLOADING = 'ASSEMBLY_UPLOADING';
var ASSEMBLY_EXECUTING = 'ASSEMBLY_EXECUTING';
var ASSEMBLY_COMPLETED = 'ASSEMBLY_COMPLETED';
var statusOrder = [ASSEMBLY_UPLOADING, ASSEMBLY_EXECUTING, ASSEMBLY_COMPLETED];

function isStatus(status, test) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isStatus\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus"},');
  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
  SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus","paramsNumber":2},');
}

var TransloaditAssembly = /*#__PURE__*/function (_Emitter) {
  _inheritsLoose(TransloaditAssembly, _Emitter);

  function TransloaditAssembly(assembly) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    _this = _Emitter.call(this) || this;
    _this.status = assembly;
    _this.socket = null;
    _this.pollInterval = null;
    _this.closed = false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = TransloaditAssembly.prototype;

  _proto.connect = function connect() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"connect\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");

    this._connectSocket();

    this._beginPolling();

    SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');
  };

  _proto._onFinished = function _onFinished() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onFinished\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    this.emit('finished');
    this.close();
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onFinished"},');
  };

  _proto._connectSocket = function _connectSocket() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_connectSocket\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    var parsed = parseUrl(this.status.websocket_url);
    var socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");
      socket.emit('assembly_connect', {
        id: _this2.status.assembly_id
      });

      _this2.emit('connect');

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
    });
    socket.on('error', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###2\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");
      socket.disconnect();
      _this2.socket = null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');
    });
    socket.on('assembly_finished', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###3\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");

      _this2._onFinished();

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###3"},');
    });
    socket.on('assembly_upload_finished', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###4\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");

      _this2.emit('upload', file);

      _this2.status.uploads.push(file);

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###4"},');
    });
    socket.on('assembly_uploading_finished', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###5\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");

      _this2.emit('executing');

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###5"},');
    });
    socket.on('assembly_upload_meta_data_extracted', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###6\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");

      _this2.emit('metadata');

      _this2._fetchStatus({
        diff: false
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###6"},');
    });
    socket.on('assembly_result_finished', function (stepName, result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###7\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":2},");

      _this2.emit('result', stepName, result);

      if (!_this2.status.results[stepName]) {
        _this2.status.results[stepName] = [];
      }

      _this2.status.results[stepName].push(result);

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###7"},');
    });
    socket.on('assembly_error', function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###8\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");

      _this2._onError(err);

      _this2._fetchStatus({
        diff: false
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###8"},');
    });
    this.socket = socket;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_connectSocket"},');
  };

  _proto._onError = function _onError(err) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onError\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    this.emit('error', _extends(new Error(err.message), err));
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');
  };

  _proto._beginPolling = function _beginPolling() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_beginPolling\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    this.pollInterval = setInterval(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"pollInterval.setInterval\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0},");

      if (!_this3.socket || !_this3.socket.connected) {
        _this3._fetchStatus();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"pollInterval.setInterval"},');
    }, 2000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_beginPolling"},');
  };

  _proto._fetchStatus = function _fetchStatus(_temp) {
    var _this4 = this;

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$diff = _ref.diff,
        diff = _ref$diff === void 0 ? true : _ref$diff;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_fetchStatus\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_fetchStatus"},');
    return fetch(this.status.assembly_ssl_url).then(function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.fetch.then.then.fetch.then\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetch.then.then.fetch.then"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetch.then.then.fetch.then"},');
    }).then(function (status) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.fetch.then.then\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");

      if (_this4.closed) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetch.then.then"},');
        return;
      }

      _this4.emit('status', status);

      if (diff) {
        _this4.updateStatus(status);
      } else {
        _this4.status = status;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetch.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_fetchStatus"},');
  };

  _proto.update = function update() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"update\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');
    return this._fetchStatus({
      diff: true
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');
  };

  _proto.updateStatus = function updateStatus(next) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"updateStatus\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");

    this._diffStatus(this.status, next);

    this.status = next;
    SRTlib.send('{"type":"FUNCTIONEND","function":"updateStatus"},');
  };

  _proto._diffStatus = function _diffStatus(prev, next) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_diffStatus\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    var prevStatus = prev.ok;
    var nextStatus = next.ok;

    if (next.error && !prev.error) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_diffStatus"},');
      return this._onError(next);
    }

    var nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);

    if (nowExecuting) {
      this.emit('executing');
    }

    Object.keys(next.uploads).filter(function (upload) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter"},');
      return !has(prev.uploads, upload);
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter"},');
    }).map(function (upload) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.filter.map.forEach.Object.keys.filter.map\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map"},');
      return next.uploads[upload];
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map"},');
    }).forEach(function (upload) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.filter.map.forEach\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");

      _this5.emit('upload', upload);

      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach"},');
    });

    if (nowExecuting) {
      this.emit('metadata');
    }

    Object.keys(next.results).forEach(function (stepName) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");
      var nextResults = next.results[stepName];
      var prevResults = prev.results[stepName];
      nextResults.filter(function (n) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"nextResults.filter.forEach.nextResults.filter\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"nextResults.filter.forEach.nextResults.filter"},');
        return !prevResults || !prevResults.some(function (p) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"prevResults.some\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"prevResults.some"},');
          return p.id === n.id;
          SRTlib.send('{"type":"FUNCTIONEND","function":"prevResults.some"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"nextResults.filter.forEach.nextResults.filter"},');
      }).forEach(function (result) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"nextResults.filter.forEach\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":1},");

        _this5.emit('result', stepName, result);

        SRTlib.send('{"type":"FUNCTIONEND","function":"nextResults.filter.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');
    });

    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_diffStatus"},');
  };

  _proto.close = function close() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"close\",\"fileName\":\"/packages/@uppy/transloadit/src/Assembly.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditAssembly\",\"superClass\":\"Emitter\"}},");
    this.closed = true;

    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }

    clearInterval(this.pollInterval);
    SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');
  };

  return TransloaditAssembly;
}(Emitter);

module.exports = TransloaditAssembly;