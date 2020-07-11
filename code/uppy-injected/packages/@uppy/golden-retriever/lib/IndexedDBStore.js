function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var prettyBytes = require('@uppy/utils/lib/prettyBytes');

var indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
var isSupported = !!indexedDB;
var DB_NAME = 'uppy-blobs';
var STORE_NAME = 'files';
var DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
var DB_VERSION = 3;

function migrateExpiration(store) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"migrateExpiration\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var request = store.openCursor();

  request.onsuccess = function (event) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onsuccess\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    var cursor = event.target.result;

    if (!cursor) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess"},');
      return;
    }

    var entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
    SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess"},');
  };

  SRTlib.send('{"type":"FUNCTIONEND","function":"migrateExpiration","paramsNumber":1},');
}

function connect(dbName) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"connect\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var request = indexedDB.open(dbName, DB_VERSION);
  SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

    request.onupgradeneeded = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onupgradeneeded\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var db = event.target.result;
      var transaction = event.currentTarget.transaction;

      if (event.oldVersion < 2) {
        var store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id'
        });
        store.createIndex('store', 'store', {
          unique: false
        });
      }

      if (event.oldVersion < 3) {
        var _store = transaction.objectStore(STORE_NAME);

        _store.createIndex('expires', 'expires', {
          unique: false
        });

        migrateExpiration(_store);
      }

      transaction.oncomplete = function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"transaction.oncomplete\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        resolve(db);
        SRTlib.send('{"type":"FUNCTIONEND","function":"transaction.oncomplete"},');
      };

      SRTlib.send('{"type":"FUNCTIONEND","function":"request.onupgradeneeded"},');
    };

    request.onsuccess = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onsuccess###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      resolve(event.target.result);
      SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###2"},');
    };

    request.onerror = reject;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"connect","paramsNumber":1},');
}

function waitForRequest(request) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"waitForRequest\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

    request.onsuccess = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onsuccess###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      resolve(event.target.result);
      SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###3"},');
    };

    request.onerror = reject;
    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression###2"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest","paramsNumber":1},');
}

var cleanedUp = false;

var IndexedDBStore = /*#__PURE__*/function () {
  function IndexedDBStore(opts) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    this.opts = _extends({
      dbName: DB_NAME,
      storeName: 'default',
      expires: DEFAULT_EXPIRY,
      maxFileSize: 10 * 1024 * 1024,
      maxTotalSize: 300 * 1024 * 1024
    }, opts);
    this.name = this.opts.storeName;

    var createConnection = function createConnection() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createConnection\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');
      return connect(_this.opts.dbName);
      SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');
    };

    if (!cleanedUp) {
      cleanedUp = true;
      this.ready = IndexedDBStore.cleanup().then(createConnection, createConnection);
    } else {
      this.ready = createConnection();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = IndexedDBStore.prototype;

  _proto.key = function key(fileID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"key\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"key"},');
    return this.name + "!" + fileID;
    SRTlib.send('{"type":"FUNCTIONEND","function":"key"},');
  };

  _proto.list = function list() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"list\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then.then.ready.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').getAll(IDBKeyRange.only(_this2.name));
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then"},');
    }).then(function (files) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var result = {};
      files.forEach(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        result[file.fileID] = file.data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then"},');
      return result;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
  };

  _proto.get = function get(fileID) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"get\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then.then.ready.then###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var request = transaction.objectStore(STORE_NAME).get(_this3.key(fileID));
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then###2"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then###2"},');
    }).then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then.then###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then###2"},');
      return {
        id: result.data.fileID,
        data: result.data.data
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');
  };

  _proto.getSize = function getSize() {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getSize\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').openCursor(IDBKeyRange.only(_this4.name));
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
        var size = 0;

        request.onsuccess = function (event) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onsuccess###4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var cursor = event.target.result;

          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###4"},');
        };

        request.onerror = function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onerror\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          reject(new Error('Could not retrieve stored blobs size'));
          SRTlib.send('{"type":"FUNCTIONEND","function":"request.onerror"},');
        };

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression###3"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');
  };

  _proto.put = function put(file) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"put\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");

    if (file.data.size > this.opts.maxFileSize) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');
      return Promise.reject(new Error('File is too big to store.'));
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');
    return this.getSize().then(function (size) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.getSize.then.then.getSize.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (size > _this5.opts.maxTotalSize) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then.getSize.then"},');
        return Promise.reject(new Error('No space left'));
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then.getSize.then"},');
      return _this5.ready;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then.getSize.then"},');
    }).then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.getSize.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).add({
        id: _this5.key(file.id),
        fileID: file.id,
        store: _this5.name,
        expires: Date.now() + _this5.opts.expires,
        data: file.data
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');
  };

  _proto.delete = function _delete(fileID) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"delete\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.ready.then###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).delete(_this6.key(fileID));
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then###2"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
  };

  IndexedDBStore.cleanup = function cleanup() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cleanup\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');
    return connect(DB_NAME).then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.connect.then.then.connect.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.connect.then.then.connect.then"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression###4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

        request.onsuccess = function (event) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"request.onsuccess###5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var cursor = event.target.result;

          if (cursor) {
            var entry = cursor.value;
            console.log('[IndexedDBStore] Deleting record', entry.fileID, 'of size', prettyBytes(entry.data.size), '- expired on', new Date(entry.expires));
            cursor.delete();
            cursor.continue();
          } else {
            resolve(db);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###5"},');
        };

        request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression###4"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.connect.then.then.connect.then"},');
    }).then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.connect.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      db.close();
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.connect.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');
  };

  return IndexedDBStore;
}();

IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;