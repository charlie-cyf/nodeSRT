const SRTlib = require("SRTutil");

const io = requireSocketIo;

const Emitter = require("component-emitter");

const has = require("@uppy/utils/lib/hasProperty");

const parseUrl = require("./parseUrl");

const NetworkError = require("@uppy/utils/lib/NetworkError");

const fetchWithNetworkError = require("@uppy/utils/lib/fetchWithNetworkError"); // Lazy load socket.io to avoid a console error
// in IE 10 when the Transloadit plugin is not used.
// (The console.error call comes from `buffer`. I
// think we actually don't use that part of socket.io
// at all…)


let socketIo;

function requireSocketIo() {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"requireSocketIo","fileName":"/src/Assembly.js","paramsNumber":0},`);

  if (!socketIo) {
    socketIo = require("socket.io-client");
  }

  SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"requireSocketIo\"},");
  return socketIo;
  SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"requireSocketIo\",\"paramsNumber\":0},");
}

const ASSEMBLY_UPLOADING = "ASSEMBLY_UPLOADING";
const ASSEMBLY_EXECUTING = "ASSEMBLY_EXECUTING";
const ASSEMBLY_COMPLETED = "ASSEMBLY_COMPLETED";
const statusOrder = [ASSEMBLY_UPLOADING, ASSEMBLY_EXECUTING, ASSEMBLY_COMPLETED];
/**
 * Check that an assembly status is equal to or larger than some desired status.
 * It checks for things that are larger so that a comparison like this works,
 * when the old assembly status is UPLOADING but the new is FINISHED:
 *
 * !isStatus(oldStatus, ASSEMBLY_EXECUTING) && isStatus(newState, ASSEMBLY_EXECUTING)
 *
 * …so that we can emit the 'executing' event even if the execution step was so
 * fast that we missed it.
 */

function isStatus(status, test) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isStatus","fileName":"/src/Assembly.js","paramsNumber":2},`);
  SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"isStatus\"},");
  return statusOrder.indexOf(status) >= statusOrder.indexOf(test);
  SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"isStatus\",\"paramsNumber\":2},");
}

class TransloaditAssembly extends Emitter {
  constructor(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    super(); // The current assembly status.

    this.status = assembly; // The socket.io connection.

    this.socket = null; // The interval timer for full status updates.

    this.pollInterval = null; // Whether this assembly has been closed (finished or errored)

    this.closed = false;
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"constructor\"},");
  }

  connect() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connect","fileName":"/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this._connectSocket();

    this._beginPolling();

    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"connect\"},");
  }

  _onFinished() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onFinished","fileName":"/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    this.emit("finished");
    this.close();
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_onFinished\"},");
  }

  _connectSocket() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_connectSocket","fileName":"/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    const parsed = parseUrl(this.status.websocket_url);
    const socket = io().connect(parsed.origin, {
      transports: ["websocket"],
      path: parsed.pathname
    });
    socket.on("connect", () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"/src/Assembly.js","paramsNumber":0},`);
      socket.emit("assembly_connect", {
        id: this.status.assembly_id
      });
      this.emit("connect");
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on\"},");
    });
    socket.on("connect_failed", () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###2","fileName":"/src/Assembly.js","paramsNumber":0},`);

      this._onError(new NetworkError("Transloadit Socket.io connection error"));

      this.socket = null;
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###2\"},");
    });
    socket.on("error", () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###3","fileName":"/src/Assembly.js","paramsNumber":0},`);
      socket.disconnect();
      this.socket = null;
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###3\"},");
    });
    socket.on("assembly_finished", () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###4","fileName":"/src/Assembly.js","paramsNumber":0},`);

      this._onFinished();

      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###4\"},");
    });
    socket.on("assembly_upload_finished", file => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###5","fileName":"/src/Assembly.js","paramsNumber":1},`);
      this.emit("upload", file);
      this.status.uploads.push(file);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###5\"},");
    });
    socket.on("assembly_uploading_finished", () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###6","fileName":"/src/Assembly.js","paramsNumber":0},`);
      this.emit("executing");
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###6\"},");
    });
    socket.on("assembly_upload_meta_data_extracted", () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###7","fileName":"/src/Assembly.js","paramsNumber":0},`);
      this.emit("metadata");

      this._fetchStatus({
        diff: false
      });

      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###7\"},");
    });
    socket.on("assembly_result_finished", (stepName, result) => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###8","fileName":"/src/Assembly.js","paramsNumber":2},`);
      this.emit("result", stepName, result);

      if (!this.status.results[stepName]) {
        this.status.results[stepName] = [];
      }

      this.status.results[stepName].push(result);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###8\"},");
    });
    socket.on("assembly_error", err => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###9","fileName":"/src/Assembly.js","paramsNumber":1},`);

      this._onError(err); // Refetch for updated status code


      this._fetchStatus({
        diff: false
      });

      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"socket.on###9\"},");
    });
    this.socket = socket;
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_connectSocket\"},");
  }

  _onError(err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onError","fileName":"/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    this.emit("error", Object.assign(new Error(err.message), err));
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_onError\"},");
  }
  /**
   * Begin polling for assembly status changes. This sends a request to the
   * assembly status endpoint every so often, if the socket is not connected.
   * If the socket connection fails or takes a long time, we won't miss any
   * events.
   */


  _beginPolling() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_beginPolling","fileName":"/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    this.pollInterval = setInterval(() => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"pollInterval.setInterval","fileName":"/src/Assembly.js","paramsNumber":0},`);

      if (!this.socket || !this.socket.connected) {
        this._fetchStatus();
      }

      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"pollInterval.setInterval\"},");
    }, 2000);
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_beginPolling\"},");
  }
  /**
   * Reload assembly status. Useful if the socket doesn't work.
   *
   * Pass `diff: false` to avoid emitting diff events, instead only emitting
   * 'status'.
   */


  _fetchStatus({
    diff = true
  } = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_fetchStatus","fileName":"/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_fetchStatus\"},");
    return fetchWithNetworkError(this.status.assembly_ssl_url).then(response => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then","fileName":"/src/Assembly.js","paramsNumber":1},`);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then\"},");
      return response.json();
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then\"},");
    }).then(status => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then","fileName":"/src/Assembly.js","paramsNumber":1},`);
      if (this.closed) return;
      this.emit("status", status);

      if (diff) {
        this.updateStatus(status);
      } else {
        this.status = status;
      }

      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then\"},");
    }).catch(err => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fetchWithNetworkError.then.then.catch","fileName":"/src/Assembly.js","paramsNumber":1},`);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"ReturnStatement.fetchWithNetworkError.then.then.catch\"},");
      return this._onError(err);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"ReturnStatement.fetchWithNetworkError.then.then.catch\"},");
    });
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_fetchStatus\"},");
  }

  update() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"update","fileName":"/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"update\"},");
    return this._fetchStatus({
      diff: true
    });
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"update\"},");
  }
  /**
   * Update this assembly's status with a full new object. Events will be
   * emitted for status changes, new files, and new results.
   *
   * @param {object} next The new assembly status object.
   */


  updateStatus(next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateStatus","fileName":"/src/Assembly.js","paramsNumber":1,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    this._diffStatus(this.status, next);

    this.status = next;
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"updateStatus\"},");
  }
  /**
   * Diff two assembly statuses, and emit the events necessary to go from `prev`
   * to `next`.
   *
   * @param {object} prev The previous assembly status.
   * @param {object} next The new assembly status.
   */


  _diffStatus(prev, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_diffStatus","fileName":"/src/Assembly.js","paramsNumber":2,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    const prevStatus = prev.ok;
    const nextStatus = next.ok;

    if (next.error && !prev.error) {
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_diffStatus\"},");
      return this._onError(next);
    } // Desired emit order:
    //  - executing
    //  - (n × upload)
    //  - metadata
    //  - (m × result)
    //  - finished
    // The below checks run in this order, that way even if we jump from
    // UPLOADING straight to FINISHED all the events are emitted as expected.


    const nowExecuting = isStatus(nextStatus, ASSEMBLY_EXECUTING) && !isStatus(prevStatus, ASSEMBLY_EXECUTING);

    if (nowExecuting) {
      // Without WebSockets, this is our only way to tell if uploading finished.
      // Hence, we emit this just before the 'upload's and before the 'metadata'
      // event for the most intuitive ordering, corresponding to the _usual_
      // ordering (if not guaranteed) that you'd get on the WebSocket.
      this.emit("executing");
    } // Find new uploaded files.


    Object.keys(next.uploads).filter(upload => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter","fileName":"/src/Assembly.js","paramsNumber":1},`);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter\"},");
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_diffStatus\"},");
      return !has(prev.uploads, upload);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.filter.map.forEach.Object.keys.filter.map.Object.keys.filter\"},");
    }).map(upload => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.filter.map.forEach.Object.keys.filter.map","fileName":"/src/Assembly.js","paramsNumber":1},`);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.filter.map.forEach.Object.keys.filter.map\"},");
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_diffStatus\"},");
      return next.uploads[upload];
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.filter.map.forEach.Object.keys.filter.map\"},");
    }).forEach(upload => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.filter.map.forEach","fileName":"/src/Assembly.js","paramsNumber":1},`);
      this.emit("upload", upload);
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.filter.map.forEach\"},");
    });

    if (nowExecuting) {
      this.emit("metadata");
    } // Find new results.


    Object.keys(next.results).forEach(stepName => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/src/Assembly.js","paramsNumber":1},`);
      const nextResults = next.results[stepName];
      const prevResults = prev.results[stepName];
      nextResults.filter(n => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nextResults.filter.forEach.nextResults.filter","fileName":"/src/Assembly.js","paramsNumber":1},`);
        SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"nextResults.filter.forEach.nextResults.filter\"},");
        SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.forEach\"},");
        SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_diffStatus\"},");
        return !prevResults || !prevResults.some(p => {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"prevResults.some","fileName":"/src/Assembly.js","paramsNumber":1},`);
          SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"prevResults.some\"},");
          return p.id === n.id;
          SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"prevResults.some\"},");
        });
        SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"nextResults.filter.forEach.nextResults.filter\"},");
      }).forEach(result => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"nextResults.filter.forEach","fileName":"/src/Assembly.js","paramsNumber":1},`);
        this.emit("result", stepName, result);
        SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"nextResults.filter.forEach\"},");
      });
      SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"Object.keys.forEach\"},");
    });

    if (isStatus(nextStatus, ASSEMBLY_COMPLETED) && !isStatus(prevStatus, ASSEMBLY_COMPLETED)) {
      this.emit("finished");
    }

    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"_diffStatus\"},");
  }
  /**
   * Stop updating this assembly.
   */


  close() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"close","fileName":"/src/Assembly.js","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);
    this.closed = true;

    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }

    clearInterval(this.pollInterval);
    SRTlib.send("{\"type\":\"FUNCTIONEND\",\"function\":\"close\"},");
  }

}

module.exports = TransloaditAssembly;