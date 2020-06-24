function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var prettierBytes = require('@transloadit/prettier-bytes');

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
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    var cursor = event.target.result;

    if (!cursor) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
      return;
    }

    var entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
  };

  SRTlib.send('{"type":"FUNCTIONEND","function":"migrateExpiration","paramsNumber":1},');
}

function connect(dbName) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"connect\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var request = indexedDB.open(dbName, DB_VERSION);
  SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

    request.onupgradeneeded = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
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
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        resolve(db);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
      };

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
    };

    request.onsuccess = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      resolve(event.target.result);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
    };

    request.onerror = reject;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"connect","paramsNumber":1},');
}

function waitForRequest(request) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"waitForRequest\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey7\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

    request.onsuccess = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      resolve(event.target.result);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
    };

    request.onerror = reject;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey8\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').getAll(IDBKeyRange.only(_this2.name));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
    }).then(function (files) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey10\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var result = {};
      files.forEach(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey9\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        result[file.fileID] = file.data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
      return result;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');
  };

  _proto.get = function get(fileID) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"get\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey11\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var request = transaction.objectStore(STORE_NAME).get(_this3.key(fileID));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
    }).then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey12\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
      return {
        id: result.data.fileID,
        data: result.data.data
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');
  };

  _proto.getSize = function getSize() {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getSize\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey16\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').openCursor(IDBKeyRange.only(_this4.name));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey15\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
        var size = 0;

        request.onsuccess = function (event) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey13\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var cursor = event.target.result;

          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
        };

        request.onerror = function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey14\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          reject(new Error('Could not retrieve stored blobs size'));
          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');
        };

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');
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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey17\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (size > _this5.opts.maxTotalSize) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');
        return Promise.reject(new Error('No space left'));
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');
      return _this5.ready;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');
    }).then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey18\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).add({
        id: _this5.key(file.id),
        fileID: file.id,
        store: _this5.name,
        expires: Date.now() + _this5.opts.expires,
        data: file.data
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');
  };

  _proto.delete = function _delete(fileID) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"delete\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
    return this.ready.then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey19\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).delete(_this6.key(fileID));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');
      return waitForRequest(request);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
  };

  IndexedDBStore.cleanup = function cleanup() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cleanup\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"IndexedDBStore\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');
    return connect(DB_NAME).then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey22\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey21\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

        request.onsuccess = function (event) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey20\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var cursor = event.target.result;

          if (cursor) {
            var entry = cursor.value;
            console.log('[IndexedDBStore] Deleting record', entry.fileID, 'of size', prettierBytes(entry.data.size), '- expired on', new Date(entry.expires));
            cursor.delete();
            cursor.continue();
          } else {
            resolve(db);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey20"},');
        };

        request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');
    }).then(function (db) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey23\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      db.close();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');
  };

  return IndexedDBStore;
}();

IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;