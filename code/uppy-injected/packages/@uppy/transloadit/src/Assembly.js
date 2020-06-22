var SRTlib = require('SRT-util');
const io = requireSocketIo;
const Emitter = require('component-emitter');
const has = require('@uppy/utils/lib/hasProperty');
const parseUrl = require('./parseUrl');
let socketIo;
function requireSocketIo() {
    SRTlib.send(`{ "anonymous": false, "function": "requireSocketIo", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (!socketIo) {
    socketIo = require('socket.io-client');
  }
    SRTlib.send('], "end": "requireSocketIo"},');

  return socketIo;
    SRTlib.send('], "end": "requireSocketIo"},');

}
const ASSEMBLY_UPLOADING = 'ASSEMBLY_UPLOADING';
const ASSEMBLY_EXECUTING = 'ASSEMBLY_EXECUTING';
const ASSEMBLY_COMPLETED = 'ASSEMBLY_COMPLETED';
const statusOrder = [ASSEMBLY_UPLOADING, ASSEMBLY_EXECUTING, ASSEMBLY_COMPLETED];
function isStatus(status, test) {
    SRTlib.send(`{ "anonymous": false, "function": "isStatus", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "isStatus"},');

  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
    SRTlib.send('], "end": "isStatus"},');

}
class TransloaditAssembly extends Emitter {
  constructor(assembly) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super();
    this.status = assembly;
    this.socket = null;
    this.pollInterval = null;
    this.closed = false;
        SRTlib.send('], "end": "constructor"},');

  }
  connect() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly.connect", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._connectSocket();
    this._beginPolling();
        SRTlib.send('], "end": "connect"},');

  }
  _onFinished() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly._onFinished", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.emit('finished');
    this.close();
        SRTlib.send('], "end": "_onFinished"},');

  }
  _connectSocket() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly._connectSocket", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const parsed = parseUrl(this.status.websocket_url);
    const socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      socket.emit('assembly_connect', {
        id: this.status.assembly_id
      });
      this.emit('connect');
            SRTlib.send('], "end": "emptyKey"},');

    });
    socket.on('error', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      socket.disconnect();
      this.socket = null;
            SRTlib.send('], "end": "emptyKey2"},');

    });
    socket.on('assembly_finished', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this._onFinished();
            SRTlib.send('], "end": "emptyKey3"},');

    });
    socket.on('assembly_upload_finished', file => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.emit('upload', file);
      this.status.uploads.push(file);
            SRTlib.send('], "end": "emptyKey4"},');

    });
    socket.on('assembly_uploading_finished', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.emit('executing');
            SRTlib.send('], "end": "emptyKey5"},');

    });
    socket.on('assembly_upload_meta_data_extracted', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.emit('metadata');
      this._fetchStatus({
        diff: false
      });
            SRTlib.send('], "end": "emptyKey6"},');

    });
    socket.on('assembly_result_finished', (stepName, result) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.emit('result', stepName, result);
      if (!this.status.results[stepName]) {
        this.status.results[stepName] = [];
      }
      this.status.results[stepName].push(result);
            SRTlib.send('], "end": "emptyKey7"},');

    });
    socket.on('assembly_error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
      this._fetchStatus({
        diff: false
      });
            SRTlib.send('], "end": "emptyKey8"},');

    });
    this.socket = socket;
        SRTlib.send('], "end": "_connectSocket"},');

  }
  _onError(err) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly._onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.emit('error', Object.assign(new Error(err.message), err));
        SRTlib.send('], "end": "_onError"},');

  }
  _beginPolling() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly._beginPolling", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.pollInterval = setInterval(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!this.socket || !this.socket.connected) {
        this._fetchStatus();
      }
            SRTlib.send('], "end": "emptyKey9"},');

    }, 2000);
        SRTlib.send('], "end": "_beginPolling"},');

  }
  _fetchStatus({diff = true} = {}) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly._fetchStatus", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "_fetchStatus"},');

    return fetch(this.status.assembly_ssl_url).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey10"},');

      return response.json();
            SRTlib.send('], "end": "emptyKey10"},');

    }).then(status => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (this.closed) {
                SRTlib.send('], "end": "emptyKey11"},');

        return;
      }
      this.emit('status', status);
      if (diff) {
        this.updateStatus(status);
      } else {
        this.status = status;
      }
            SRTlib.send('], "end": "emptyKey11"},');

    });
        SRTlib.send('], "end": "_fetchStatus"},');

  }
  update() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly.update", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "update"},');

    return this._fetchStatus({
      diff: true
    });
        SRTlib.send('], "end": "update"},');

  }
  updateStatus(next) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly.updateStatus", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._diffStatus(this.status, next);
    this.status = next;
        SRTlib.send('], "end": "updateStatus"},');

  }
  _diffStatus(prev, next) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly._diffStatus", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const prevStatus = prev.ok;
    const nextStatus = next.ok;
    if (next.error && !prev.error) {
            SRTlib.send('], "end": "_diffStatus"},');

      return this._onError(next);
    }
    const nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);
    if (nowExecuting) {
      this.emit('executing');
    }
    Object.keys(next.uploads).filter(upload => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey12"},');

      return !has(prev.uploads, upload);
            SRTlib.send('], "end": "emptyKey12"},');

    }).map(upload => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey13"},');

      return next.uploads[upload];
            SRTlib.send('], "end": "emptyKey13"},');

    }).forEach(upload => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.emit('upload', upload);
            SRTlib.send('], "end": "emptyKey14"},');

    });
    if (nowExecuting) {
      this.emit('metadata');
    }
    Object.keys(next.results).forEach(stepName => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const nextResults = next.results[stepName];
      const prevResults = prev.results[stepName];
      nextResults.filter(n => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "emptyKey16"},');

        return !prevResults || !prevResults.some(p => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "emptyKey15"},');

          return p.id === n.id;
                    SRTlib.send('], "end": "emptyKey15"},');

        });
                SRTlib.send('], "end": "emptyKey16"},');

      }).forEach(result => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.emit('result', stepName, result);
                SRTlib.send('], "end": "emptyKey17"},');

      });
            SRTlib.send('], "end": "emptyKey18"},');

    });
    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }
        SRTlib.send('], "end": "_diffStatus"},');

  }
  close() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditAssembly.close", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.closed = true;
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    clearInterval(this.pollInterval);
        SRTlib.send('], "end": "close"},');

  }
}
module.exports = TransloaditAssembly;
