var SRTlib = require('SRT-util');
const io = requireSocketIo;
const Emitter = require('component-emitter');
const has = require('@uppy/utils/lib/hasProperty');
const parseUrl = require('./parseUrl');
let socketIo;
function requireSocketIo() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"requireSocketIo","fileName":"${__filename}","paramsNumber":0},`);

  if (!socketIo) {
    socketIo = require('socket.io-client');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"requireSocketIo"},');

  return socketIo;
    SRTlib.send('{"type":"FUNCTIONEND","function":"requireSocketIo","paramsNumber":0},');

}
const ASSEMBLY_UPLOADING = 'ASSEMBLY_UPLOADING';
const ASSEMBLY_EXECUTING = 'ASSEMBLY_EXECUTING';
const ASSEMBLY_COMPLETED = 'ASSEMBLY_COMPLETED';
const statusOrder = [ASSEMBLY_UPLOADING, ASSEMBLY_EXECUTING, ASSEMBLY_COMPLETED];
function isStatus(status, test) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isStatus","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus"},');

  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus","paramsNumber":2},');

}
class TransloaditAssembly extends Emitter {
  constructor(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    super();
    this.status = assembly;
    this.socket = null;
    this.pollInterval = null;
    this.closed = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  connect() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connect","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this._connectSocket();
    this._beginPolling();
        SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');

  }
  _onFinished() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onFinished","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.emit('finished');
    this.close();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onFinished"},');

  }
  _connectSocket() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_connectSocket","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    const parsed = parseUrl(this.status.websocket_url);
    const socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

      socket.emit('assembly_connect', {
        id: this.status.assembly_id
      });
      this.emit('connect');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
    socket.on('error', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

      socket.disconnect();
      this.socket = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
    socket.on('assembly_finished', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

      this._onFinished();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    });
    socket.on('assembly_upload_finished', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

      this.emit('upload', file);
      this.status.uploads.push(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
    socket.on('assembly_uploading_finished', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

      this.emit('executing');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    });
    socket.on('assembly_upload_meta_data_extracted', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

      this.emit('metadata');
      this._fetchStatus({
        diff: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
    socket.on('assembly_result_finished', (stepName, result) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":2},`);

      this.emit('result', stepName, result);
      if (!this.status.results[stepName]) {
        this.status.results[stepName] = [];
      }
      this.status.results[stepName].push(result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    });
    socket.on('assembly_error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

      this._onError(err);
      this._fetchStatus({
        diff: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
    this.socket = socket;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_connectSocket"},');

  }
  _onError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onError","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.emit('error', Object.assign(new Error(err.message), err));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');

  }
  _beginPolling() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_beginPolling","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.pollInterval = setInterval(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":0},`);

      if (!this.socket || !this.socket.connected) {
        this._fetchStatus();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    }, 2000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_beginPolling"},');

  }
  _fetchStatus({diff = true} = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_fetchStatus","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_fetchStatus"},');

    return fetch(this.status.assembly_ssl_url).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    }).then(status => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

      if (this.closed) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

        return;
      }
      this.emit('status', status);
      if (diff) {
        this.updateStatus(status);
      } else {
        this.status = status;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_fetchStatus"},');

  }
  update() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"update","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

    return this._fetchStatus({
      diff: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

  }
  updateStatus(next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateStatus","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this._diffStatus(this.status, next);
    this.status = next;
        SRTlib.send('{"type":"FUNCTIONEND","function":"updateStatus"},');

  }
  _diffStatus(prev, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_diffStatus","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    const prevStatus = prev.ok;
    const nextStatus = next.ok;
    if (next.error && !prev.error) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_diffStatus"},');

      return this._onError(next);
    }
    const nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);
    if (nowExecuting) {
      this.emit('executing');
    }
    Object.keys(next.uploads).filter(upload => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

      return !has(prev.uploads, upload);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    }).map(upload => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

      return next.uploads[upload];
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    }).forEach(upload => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":1},`);

      this.emit('upload', upload);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

    });
    if (nowExecuting) {
      this.emit('metadata');
    }
    Object.keys(next.results).forEach(stepName => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey18","fileName":"${__filename}","paramsNumber":1},`);

      const nextResults = next.results[stepName];
      const prevResults = prev.results[stepName];
      nextResults.filter(n => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

        return !prevResults || !prevResults.some(p => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

          return p.id === n.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

      }).forEach(result => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":1},`);

        this.emit('result', stepName, result);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

    });
    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_diffStatus"},');

  }
  close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"close","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.closed = true;
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    clearInterval(this.pollInterval);
        SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');

  }
}
module.exports = TransloaditAssembly;
