var SRTlib = require('SRT-util');
const io = requireSocketIo;
const Emitter = require('component-emitter');
const has = require('@uppy/utils/lib/hasProperty');
const parseUrl = require('./parseUrl');
let socketIo;
function requireSocketIo() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (!socketIo) {
    socketIo = require('socket.io-client');
  }
    SRTlib.send("]},");

  return socketIo;
    SRTlib.send("]},");

}
const ASSEMBLY_UPLOADING = 'ASSEMBLY_UPLOADING';
const ASSEMBLY_EXECUTING = 'ASSEMBLY_EXECUTING';
const ASSEMBLY_COMPLETED = 'ASSEMBLY_COMPLETED';
const statusOrder = [ASSEMBLY_UPLOADING, ASSEMBLY_EXECUTING, ASSEMBLY_COMPLETED];
function isStatus(status, test) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send("]},");

  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
    SRTlib.send("]},");

}
class TransloaditAssembly extends Emitter {
  constructor(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super();
    this.status = assembly;
    this.socket = null;
    this.pollInterval = null;
    this.closed = false;
        SRTlib.send("]},");

  }
  connect() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._connectSocket();
    this._beginPolling();
        SRTlib.send("]},");

  }
  _onFinished() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.emit('finished');
    this.close();
        SRTlib.send("]},");

  }
  _connectSocket() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const parsed = parseUrl(this.status.websocket_url);
    const socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      socket.emit('assembly_connect', {
        id: this.status.assembly_id
      });
      this.emit('connect');
            SRTlib.send("]},");

    });
    socket.on('error', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      socket.disconnect();
      this.socket = null;
            SRTlib.send("]},");

    });
    socket.on('assembly_finished', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this._onFinished();
            SRTlib.send("]},");

    });
    socket.on('assembly_upload_finished', file => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.emit('upload', file);
      this.status.uploads.push(file);
            SRTlib.send("]},");

    });
    socket.on('assembly_uploading_finished', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.emit('executing');
            SRTlib.send("]},");

    });
    socket.on('assembly_upload_meta_data_extracted', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.emit('metadata');
      this._fetchStatus({
        diff: false
      });
            SRTlib.send("]},");

    });
    socket.on('assembly_result_finished', (stepName, result) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.emit('result', stepName, result);
      if (!this.status.results[stepName]) {
        this.status.results[stepName] = [];
      }
      this.status.results[stepName].push(result);
            SRTlib.send("]},");

    });
    socket.on('assembly_error', err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
      this._fetchStatus({
        diff: false
      });
            SRTlib.send("]},");

    });
    this.socket = socket;
        SRTlib.send("]},");

  }
  _onError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.emit('error', Object.assign(new Error(err.message), err));
        SRTlib.send("]},");

  }
  _beginPolling() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.pollInterval = setInterval(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!this.socket || !this.socket.connected) {
        this._fetchStatus();
      }
            SRTlib.send("]},");

    }, 2000);
        SRTlib.send("]},");

  }
  _fetchStatus({diff = true} = {}) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return fetch(this.status.assembly_ssl_url).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    }).then(status => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (this.closed) {
                SRTlib.send("]},");

        return;
      }
      this.emit('status', status);
      if (diff) {
        this.updateStatus(status);
      } else {
        this.status = status;
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  update() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this._fetchStatus({
      diff: true
    });
        SRTlib.send("]},");

  }
  updateStatus(next) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._diffStatus(this.status, next);
    this.status = next;
        SRTlib.send("]},");

  }
  _diffStatus(prev, next) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const prevStatus = prev.ok;
    const nextStatus = next.ok;
    if (next.error && !prev.error) {
            SRTlib.send("]},");

      return this._onError(next);
    }
    const nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);
    if (nowExecuting) {
      this.emit('executing');
    }
    Object.keys(next.uploads).filter(upload => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      !has(prev.uploads, upload);
            SRTlib.send("]},");

    }).map(upload => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      next.uploads[upload];
            SRTlib.send("]},");

    }).forEach(upload => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.emit('upload', upload);
            SRTlib.send("]},");

    });
    if (nowExecuting) {
      this.emit('metadata');
    }
    Object.keys(next.results).forEach(stepName => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey27", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const nextResults = next.results[stepName];
      const prevResults = prev.results[stepName];
      nextResults.filter(n => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        !prevResults || !prevResults.some(p => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey24", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          p.id === n.id;
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }).forEach(result => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.emit('result', stepName, result);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }
        SRTlib.send("]},");

  }
  close() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.closed = true;
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    clearInterval(this.pollInterval);
        SRTlib.send("]},");

  }
}
module.exports = TransloaditAssembly;
