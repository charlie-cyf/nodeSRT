function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var io = requireSocketIo;

var Emitter = require('component-emitter');

var has = require('@uppy/utils/lib/hasProperty');

var parseUrl = require('./parseUrl');

var socketIo;

function requireSocketIo() {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"requireSocketIo\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

  if (!socketIo) {
    socketIo = require('socket.io-client');
  }

  SRTlib.send("]},");
  return socketIo;
  SRTlib.send("]},");
}

var ASSEMBLY_UPLOADING = 'ASSEMBLY_UPLOADING';
var ASSEMBLY_EXECUTING = 'ASSEMBLY_EXECUTING';
var ASSEMBLY_COMPLETED = 'ASSEMBLY_COMPLETED';
var statusOrder = [ASSEMBLY_UPLOADING, ASSEMBLY_EXECUTING, ASSEMBLY_COMPLETED];

function isStatus(status, test) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"isStatus\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  SRTlib.send("]},");
  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
  SRTlib.send("]},");
}

var TransloaditAssembly = /*#__PURE__*/function (_Emitter) {
  _inheritsLoose(TransloaditAssembly, _Emitter);

  function TransloaditAssembly(assembly) {
    var _this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    _this = _Emitter.call(this) || this;
    _this.status = assembly;
    _this.socket = null;
    _this.pollInterval = null;
    _this.closed = false;
    SRTlib.send("]},");
    return _this;
  }

  var _proto = TransloaditAssembly.prototype;

  _proto.connect = function connect() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly.connect\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    this._connectSocket();

    this._beginPolling();

    SRTlib.send("]},");
  };

  _proto._onFinished = function _onFinished() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly._onFinished\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.emit('finished');
    this.close();
    SRTlib.send("]},");
  };

  _proto._connectSocket = function _connectSocket() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly._connectSocket\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var parsed = parseUrl(this.status.websocket_url);
    var socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      socket.emit('assembly_connect', {
        id: _this2.status.assembly_id
      });

      _this2.emit('connect');

      SRTlib.send("]},");
    });
    socket.on('error', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      socket.disconnect();
      _this2.socket = null;
      SRTlib.send("]},");
    });
    socket.on('assembly_finished', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this2._onFinished();

      SRTlib.send("]},");
    });
    socket.on('assembly_upload_finished', function (file) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this2.emit('upload', file);

      _this2.status.uploads.push(file);

      SRTlib.send("]},");
    });
    socket.on('assembly_uploading_finished', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this2.emit('executing');

      SRTlib.send("]},");
    });
    socket.on('assembly_upload_meta_data_extracted', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this2.emit('metadata');

      _this2._fetchStatus({
        diff: false
      });

      SRTlib.send("]},");
    });
    socket.on('assembly_result_finished', function (stepName, result) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

      _this2.emit('result', stepName, result);

      if (!_this2.status.results[stepName]) {
        _this2.status.results[stepName] = [];
      }

      _this2.status.results[stepName].push(result);

      SRTlib.send("]},");
    });
    socket.on('assembly_error', function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this2._onError(err);

      _this2._fetchStatus({
        diff: false
      });

      SRTlib.send("]},");
    });
    this.socket = socket;
    SRTlib.send("]},");
  };

  _proto._onError = function _onError(err) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly._onError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.emit('error', _extends(new Error(err.message), err));
    SRTlib.send("]},");
  };

  _proto._beginPolling = function _beginPolling() {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly._beginPolling\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.pollInterval = setInterval(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      if (!_this3.socket || !_this3.socket.connected) {
        _this3._fetchStatus();
      }

      SRTlib.send("]},");
    }, 2000);
    SRTlib.send("]},");
  };

  _proto._fetchStatus = function _fetchStatus(_temp) {
    var _this4 = this;

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$diff = _ref.diff,
        diff = _ref$diff === void 0 ? true : _ref$diff;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly._fetchStatus\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send("]},");
    return fetch(this.status.assembly_ssl_url).then(function (response) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return response.json();
      SRTlib.send("]},");
    }).then(function (status) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey11\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (_this4.closed) {
        SRTlib.send("]},");
        return;
      }

      _this4.emit('status', status);

      if (diff) {
        _this4.updateStatus(status);
      } else {
        _this4.status = status;
      }

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto.update = function update() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly.update\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
    return this._fetchStatus({
      diff: true
    });
    SRTlib.send("]},");
  };

  _proto.updateStatus = function updateStatus(next) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly.updateStatus\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    this._diffStatus(this.status, next);

    this.status = next;
    SRTlib.send("]},");
  };

  _proto._diffStatus = function _diffStatus(prev, next) {
    var _this5 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly._diffStatus\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var prevStatus = prev.ok;
    var nextStatus = next.ok;

    if (next.error && !prev.error) {
      SRTlib.send("]},");
      return this._onError(next);
    }

    var nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);

    if (nowExecuting) {
      this.emit('executing');
    }

    Object.keys(next.uploads).filter(function (upload) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return !has(prev.uploads, upload);
      SRTlib.send("]},");
    }).map(function (upload) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey13\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return next.uploads[upload];
      SRTlib.send("]},");
    }).forEach(function (upload) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey14\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this5.emit('upload', upload);

      SRTlib.send("]},");
    });

    if (nowExecuting) {
      this.emit('metadata');
    }

    Object.keys(next.results).forEach(function (stepName) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey18\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var nextResults = next.results[stepName];
      var prevResults = prev.results[stepName];
      nextResults.filter(function (n) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey16\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        SRTlib.send("]},");
        return !prevResults || !prevResults.some(function (p) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey15\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          SRTlib.send("]},");
          return p.id === n.id;
          SRTlib.send("]},");
        });
        SRTlib.send("]},");
      }).forEach(function (result) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey17\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this5.emit('result', stepName, result);

        SRTlib.send("]},");
      });
      SRTlib.send("]},");
    });

    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }

    SRTlib.send("]},");
  };

  _proto.close = function close() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditAssembly.close\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.closed = true;

    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }

    clearInterval(this.pollInterval);
    SRTlib.send("]},");
  };

  return TransloaditAssembly;
}(Emitter);

module.exports = TransloaditAssembly;