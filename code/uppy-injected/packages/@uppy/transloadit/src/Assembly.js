const SRTlib = require('SRT-util');

const io = requireSocketIo;
const Emitter = require('component-emitter');
const has = require('@uppy/utils/lib/hasProperty');
const parseUrl = require('./parseUrl');
const NetworkError = require('@uppy/utils/lib/NetworkError');
const fetchWithNetworkError = require('@uppy/utils/lib/fetchWithNetworkError');
let socketIo;
function requireSocketIo() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"requireSocketIo","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isStatus","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus"},');

  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isStatus","paramsNumber":2},');

}
class TransloaditAssembly extends Emitter {
  constructor(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    super();
    this.status = assembly;
    this.socket = null;
    this.pollInterval = null;
    this.closed = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  connect() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connect","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this._connectSocket();
    this._beginPolling();
        SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');

  }
  _onFinished() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onFinished","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.emit('finished');
    this.close();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onFinished"},');

  }
  _connectSocket() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_connectSocket","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    const parsed = parseUrl(this.status.websocket_url);
    const socket = io().connect(parsed.origin, {
      transports: ['websocket'],
      path: parsed.pathname
    });
    socket.on('connect', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      socket.emit('assembly_connect', {
        id: this.status.assembly_id
      });
      this.emit('connect');
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

    });
    socket.on('connect_failed', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###2","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      this._onError(new NetworkError('Transloadit Socket.io connection error'));
      this.socket = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');

    });
    socket.on('error', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###3","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      socket.disconnect();
      this.socket = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###3"},');

    });
    socket.on('assembly_finished', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###4","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      this._onFinished();
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###4"},');

    });
    socket.on('assembly_upload_finished', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###5","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

      this.emit('upload', file);
      this.status.uploads.push(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###5"},');

    });
    socket.on('assembly_uploading_finished', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###6","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      this.emit('executing');
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###6"},');

    });
    socket.on('assembly_upload_meta_data_extracted', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###7","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      this.emit('metadata');
      this._fetchStatus({
        diff: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###7"},');

    });
    socket.on('assembly_result_finished', (stepName, result) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###8","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":2},`);

      this.emit('result', stepName, result);
      if (!this.status.results[stepName]) {
        this.status.results[stepName] = [];
      }
      this.status.results[stepName].push(result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###8"},');

    });
    socket.on('assembly_error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###9","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

      this._onError(err);
      this._fetchStatus({
        diff: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###9"},');

    });
    this.socket = socket;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_connectSocket"},');

  }
  _onError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onError","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.emit('error', Object.assign(new Error(err.message), err));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');

  }
  _beginPolling() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_beginPolling","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this.pollInterval = setInterval(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"pollInterval.setInterval","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0},`);

      if (!this.socket || !this.socket.connected) {
        this._fetchStatus();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"pollInterval.setInterval"},');

    }, 2000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_beginPolling"},');

  }
  _fetchStatus({diff = true} = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_fetchStatus","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_fetchStatus"},');

    return fetchWithNetworkError(this.status.assembly_ssl_url).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then"},');

    }).then(status => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

      if (this.closed) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

        return;
      }
      this.emit('status', status);
      if (diff) {
        this.updateStatus(status);
      } else {
        this.status = status;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fetchWithNetworkError.then.then.catch","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetchWithNetworkError.then.then.catch"},');

      return this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fetchWithNetworkError.then.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_fetchStatus"},');

  }
  update() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"update","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

    return this._fetchStatus({
      diff: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"update"},');

  }
  updateStatus(next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateStatus","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this._diffStatus(this.status, next);
    this.status = next;
        SRTlib.send('{"type":"FUNCTIONEND","function":"updateStatus"},');

  }
  _diffStatus(prev, next) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_diffStatus","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":2,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter"},');

      return !has(prev.uploads, upload);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter"},');

    }).map(upload => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.filter.map.forEach.Object.keys.filter.map","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map"},');

      return next.uploads[upload];
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach.Object.keys.filter.map"},');

    }).forEach(upload => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.filter.map.forEach","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

      this.emit('upload', upload);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.filter.map.forEach"},');

    });
    if (nowExecuting) {
      this.emit('metadata');
    }
    Object.keys(next.results).forEach(stepName => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

      const nextResults = next.results[stepName];
      const prevResults = prev.results[stepName];
      nextResults.filter(n => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nextResults.filter.forEach.nextResults.filter","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"nextResults.filter.forEach.nextResults.filter"},');

        return !prevResults || !prevResults.some(p => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"prevResults.some","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"prevResults.some"},');

          return p.id === n.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"prevResults.some"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"nextResults.filter.forEach.nextResults.filter"},');

      }).forEach(result => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nextResults.filter.forEach","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":1},`);

        this.emit('result', stepName, result);
                SRTlib.send('{"type":"FUNCTIONEND","function":"nextResults.filter.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

    });
    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit('finished');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_diffStatus"},');

  }
  close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"close","fileName":"/packages/@uppy/transloadit/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

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
