const SRTlib = require('SRTutil');
function _extends() {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"/lib/Assembly.js","paramsNumber":0},`);
  _extends = Object.assign || (function (target) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"/lib/Assembly.js","paramsNumber":1},`);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
    return target;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
  return _extends.apply(this, arguments);
  SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');
}
function _inheritsLoose(subClass, superClass) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"/lib/Assembly.js","paramsNumber":2},`);
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
  SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');
}
var io = requireSocketIo;
var Emitter = require('component-emitter');
var has = require('@uppy/utils/lib/hasProperty');
var parseUrl = require('./parseUrl');
var socketIo;
function requireSocketIo() {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"requireSocketIo","fileName":"/lib/Assembly.js","paramsNumber":0},`);
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
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isStatus","fileName":"/lib/Assembly.js","paramsNumber":2},`);
  SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus"},');
  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
  SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus","paramsNumber":2},');
}
var TransloaditAssembly = (function (_Emitter) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly","fileName":"/lib/Assembly.js","paramsNumber":1},`);
  _inheritsLoose(TransloaditAssembly, _Emitter);
  function TransloaditAssembly(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"TransloaditAssembly","fileName":"/lib/Assembly.js","paramsNumber":1},`);
    var _this;
    _this = _Emitter.call(this) || this;
    _this.status = assembly;
    _this.socket = null;
    _this.pollInterval = null;
    _this.closed = false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
    return _this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly","paramsNumber":1},');
  }
  var _proto = TransloaditAssembly.prototype;
  _proto.connect = function connect() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto.connect","fileName":"/lib/Assembly.js","paramsNumber":0},`);
    this._connectSocket();
    this._beginPolling();
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto.connect"},');
  };
  _proto._onFinished = function _onFinished() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._onFinished","fileName":"/lib/Assembly.js","paramsNumber":0},`);
    this.emit('finished');
    this.close();
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._onFinished"},');
  };
  _proto._connectSocket = function _connectSocket() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket","fileName":"/lib/Assembly.js","paramsNumber":0},`);
    var _this2 = this;
    var parsed = parseUrl(this.status.websocket_url);
    var socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on","fileName":"/lib/Assembly.js","paramsNumber":0},`);
      socket.emit('assembly_connect', {
        id: _this2.status.assembly_id
      });
      _this2.emit('connect');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on"},');
    });
    socket.on('error', function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###2","fileName":"/lib/Assembly.js","paramsNumber":0},`);
      socket.disconnect();
      _this2.socket = null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###2"},');
    });
    socket.on('assembly_finished', function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###3","fileName":"/lib/Assembly.js","paramsNumber":0},`);
      _this2._onFinished();
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###3"},');
    });
    socket.on('assembly_upload_finished', function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###4","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      _this2.emit('upload', file);
      _this2.status.uploads.push(file);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###4"},');
    });
    socket.on('assembly_uploading_finished', function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###5","fileName":"/lib/Assembly.js","paramsNumber":0},`);
      _this2.emit('executing');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###5"},');
    });
    socket.on('assembly_upload_meta_data_extracted', function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###6","fileName":"/lib/Assembly.js","paramsNumber":0},`);
      _this2.emit('metadata');
      _this2._fetchStatus({
        diff: false
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###6"},');
    });
    socket.on('assembly_result_finished', function (stepName, result) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###7","fileName":"/lib/Assembly.js","paramsNumber":2},`);
      _this2.emit('result', stepName, result);
      if (!_this2.status.results[stepName]) {
        _this2.status.results[stepName] = [];
      }
      _this2.status.results[stepName].push(result);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###7"},');
    });
    socket.on('assembly_error', function (err) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###8","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      _this2._onError(err);
      _this2._fetchStatus({
        diff: false
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket._connectSocket.socket.on###8"},');
    });
    this.socket = socket;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._connectSocket"},');
  };
  _proto._onError = function _onError(err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._onError","fileName":"/lib/Assembly.js","paramsNumber":1},`);
    this.emit('error', _extends(new Error(err.message), err));
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._onError"},');
  };
  _proto._beginPolling = function _beginPolling() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._beginPolling","fileName":"/lib/Assembly.js","paramsNumber":0},`);
    var _this3 = this;
    this.pollInterval = setInterval(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._beginPolling._beginPolling.pollInterval.setInterval","fileName":"/lib/Assembly.js","paramsNumber":0},`);
      if (!_this3.socket || !_this3.socket.connected) {
        _this3._fetchStatus();
      }
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._beginPolling._beginPolling.pollInterval.setInterval"},');
    }, 2000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._beginPolling"},');
  };
  _proto._fetchStatus = function _fetchStatus(_temp) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._fetchStatus","fileName":"/lib/Assembly.js","paramsNumber":1},`);
    var _this4 = this;
    var _ref = _temp === void 0 ? {} : _temp, _ref$diff = _ref.diff, diff = _ref$diff === void 0 ? true : _ref$diff;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._fetchStatus"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
    return fetch(this.status.assembly_ssl_url).then(function (response) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._fetchStatus._fetchStatus.ReturnStatement.fetch.then.then.fetch.then","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._fetchStatus._fetchStatus.ReturnStatement.fetch.then.then.fetch.then"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._fetchStatus._fetchStatus.ReturnStatement.fetch.then.then.fetch.then"},');
    }).then(function (status) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._fetchStatus._fetchStatus.ReturnStatement.fetch.then.then","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      if (_this4.closed) return;
      _this4.emit('status', status);
      if (diff) {
        _this4.updateStatus(status);
      } else {
        _this4.status = status;
      }
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._fetchStatus._fetchStatus.ReturnStatement.fetch.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._fetchStatus"},');
  };
  _proto.update = function update() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto.update","fileName":"/lib/Assembly.js","paramsNumber":0},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto.update"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
    return this._fetchStatus({
      diff: true
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto.update"},');
  };
  _proto.updateStatus = function updateStatus(next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto.updateStatus","fileName":"/lib/Assembly.js","paramsNumber":1},`);
    this._diffStatus(this.status, next);
    this.status = next;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto.updateStatus"},');
  };
  _proto._diffStatus = function _diffStatus(prev, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus","fileName":"/lib/Assembly.js","paramsNumber":2},`);
    var _this5 = this;
    var prevStatus = prev.ok;
    var nextStatus = next.ok;
    if (next.error && !prev.error) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
      return this._onError(next);
    }
    var nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);
    if (nowExecuting) {
      this.emit('executing');
    }
    Object.keys(next.uploads).filter(function (upload) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
      return !has(prev.uploads, upload);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter"},');
    }).map(function (upload) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach.Object.keys.filter.map","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach.Object.keys.filter.map"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
      return next.uploads[upload];
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach.Object.keys.filter.map"},');
    }).forEach(function (upload) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      _this5.emit('upload', upload);
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.filter.map.forEach"},');
    });
    if (nowExecuting) {
      this.emit('metadata');
    }
    Object.keys(next.results).forEach(function (stepName) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach","fileName":"/lib/Assembly.js","paramsNumber":1},`);
      var nextResults = next.results[stepName];
      var prevResults = prev.results[stepName];
      nextResults.filter(function (n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach.nextResults.filter","fileName":"/lib/Assembly.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach.nextResults.filter"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
        return !prevResults || !prevResults.some(function (p) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach.nextResults.filter.ReturnStatement.prevResults.some","fileName":"/lib/Assembly.js","paramsNumber":1},`);
          SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach.nextResults.filter.ReturnStatement.prevResults.some"},');
          return p.id === n.id;
          SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach.nextResults.filter.ReturnStatement.prevResults.some"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach.nextResults.filter"},');
      }).forEach(function (result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach","fileName":"/lib/Assembly.js","paramsNumber":1},`);
        _this5.emit('result', stepName, result);
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach.nextResults.filter.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus._diffStatus.Object.keys.forEach"},');
    });
    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto._diffStatus"},');
  };
  _proto.close = function close() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditAssembly._proto.close","fileName":"/lib/Assembly.js","paramsNumber":0},`);
    this.closed = true;
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    clearInterval(this.pollInterval);
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly._proto.close"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
  return TransloaditAssembly;
  SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditAssembly"},');
})(Emitter);
module.exports = TransloaditAssembly;
