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
  SRTlib.send("{ \"anonymous\": false, \"function\": \"migrateExpiration\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var request = store.openCursor();

  request.onsuccess = function (event) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var cursor = event.target.result;

    if (!cursor) {
      SRTlib.send('], "end": "emptyKey"},');
      return;
    }

    var entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
    SRTlib.send('], "end": "emptyKey"},');
  };

  SRTlib.send('], "end": "migrateExpiration"},');
}

function connect(dbName) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"connect\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var request = indexedDB.open(dbName, DB_VERSION);
  SRTlib.send('], "end": "connect"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    request.onupgradeneeded = function (event) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        resolve(db);
        SRTlib.send('], "end": "emptyKey2"},');
      };

      SRTlib.send('], "end": "emptyKey3"},');
    };

    request.onsuccess = function (event) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      resolve(event.target.result);
      SRTlib.send('], "end": "emptyKey4"},');
    };

    request.onerror = reject;
    SRTlib.send('], "end": "emptyKey5"},');
  });
  SRTlib.send('], "end": "connect"},');
}

function waitForRequest(request) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"waitForRequest\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send('], "end": "waitForRequest"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    request.onsuccess = function (event) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      resolve(event.target.result);
      SRTlib.send('], "end": "emptyKey6"},');
    };

    request.onerror = reject;
    SRTlib.send('], "end": "emptyKey7"},');
  });
  SRTlib.send('], "end": "waitForRequest"},');
}

var cleanedUp = false;

var IndexedDBStore = /*#__PURE__*/function () {
  function IndexedDBStore(opts) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.opts = _extends({
      dbName: DB_NAME,
      storeName: 'default',
      expires: DEFAULT_EXPIRY,
      maxFileSize: 10 * 1024 * 1024,
      maxTotalSize: 300 * 1024 * 1024
    }, opts);
    this.name = this.opts.storeName;

    var createConnection = function createConnection() {
      SRTlib.send("{ \"anonymous\": false, \"function\": \"createConnection\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      SRTlib.send('], "end": "createConnection"},');
      return connect(_this.opts.dbName);
      SRTlib.send('], "end": "createConnection"},');
    };

    if (!cleanedUp) {
      cleanedUp = true;
      this.ready = IndexedDBStore.cleanup().then(createConnection, createConnection);
    } else {
      this.ready = createConnection();
    }

    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = IndexedDBStore.prototype;

  _proto.key = function key(fileID) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.key\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "key"},');
    return this.name + "!" + fileID;
    SRTlib.send('], "end": "key"},');
  };

  _proto.list = function list() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.list\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "list"},');
    return this.ready.then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').getAll(IDBKeyRange.only(_this2.name));
      SRTlib.send('], "end": "emptyKey8"},');
      return waitForRequest(request);
      SRTlib.send('], "end": "emptyKey8"},');
    }).then(function (files) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var result = {};
      files.forEach(function (file) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        result[file.fileID] = file.data;
        SRTlib.send('], "end": "emptyKey9"},');
      });
      SRTlib.send('], "end": "emptyKey10"},');
      return result;
      SRTlib.send('], "end": "emptyKey10"},');
    });
    SRTlib.send('], "end": "list"},');
  };

  _proto.get = function get(fileID) {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.get\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "get"},');
    return this.ready.then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey11\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var request = transaction.objectStore(STORE_NAME).get(_this3.key(fileID));
      SRTlib.send('], "end": "emptyKey11"},');
      return waitForRequest(request);
      SRTlib.send('], "end": "emptyKey11"},');
    }).then(function (result) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey12"},');
      return {
        id: result.data.fileID,
        data: result.data.data
      };
      SRTlib.send('], "end": "emptyKey12"},');
    });
    SRTlib.send('], "end": "get"},');
  };

  _proto.getSize = function getSize() {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.getSize\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "getSize"},');
    return this.ready.then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey16\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').openCursor(IDBKeyRange.only(_this4.name));
      SRTlib.send('], "end": "emptyKey16"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey15\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
        var size = 0;

        request.onsuccess = function (event) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey13\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          var cursor = event.target.result;

          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }

          SRTlib.send('], "end": "emptyKey13"},');
        };

        request.onerror = function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey14\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          reject(new Error('Could not retrieve stored blobs size'));
          SRTlib.send('], "end": "emptyKey14"},');
        };

        SRTlib.send('], "end": "emptyKey15"},');
      });
      SRTlib.send('], "end": "emptyKey16"},');
    });
    SRTlib.send('], "end": "getSize"},');
  };

  _proto.put = function put(file) {
    var _this5 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.put\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (file.data.size > this.opts.maxFileSize) {
      SRTlib.send('], "end": "put"},');
      return Promise.reject(new Error('File is too big to store.'));
    }

    SRTlib.send('], "end": "put"},');
    return this.getSize().then(function (size) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey17\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (size > _this5.opts.maxTotalSize) {
        SRTlib.send('], "end": "emptyKey17"},');
        return Promise.reject(new Error('No space left'));
      }

      SRTlib.send('], "end": "emptyKey17"},');
      return _this5.ready;
      SRTlib.send('], "end": "emptyKey17"},');
    }).then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey18\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).add({
        id: _this5.key(file.id),
        fileID: file.id,
        store: _this5.name,
        expires: Date.now() + _this5.opts.expires,
        data: file.data
      });
      SRTlib.send('], "end": "emptyKey18"},');
      return waitForRequest(request);
      SRTlib.send('], "end": "emptyKey18"},');
    });
    SRTlib.send('], "end": "put"},');
  };

  _proto.delete = function _delete(fileID) {
    var _this6 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.delete\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "delete"},');
    return this.ready.then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey19\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).delete(_this6.key(fileID));
      SRTlib.send('], "end": "emptyKey19"},');
      return waitForRequest(request);
      SRTlib.send('], "end": "emptyKey19"},');
    });
    SRTlib.send('], "end": "delete"},');
  };

  IndexedDBStore.cleanup = function cleanup() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"IndexedDBStore.cleanup\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "cleanup"},');
    return connect(DB_NAME).then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey22\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
      SRTlib.send('], "end": "emptyKey22"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey21\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

        request.onsuccess = function (event) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey20\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          var cursor = event.target.result;

          if (cursor) {
            var entry = cursor.value;
            console.log('[IndexedDBStore] Deleting record', entry.fileID, 'of size', prettierBytes(entry.data.size), '- expired on', new Date(entry.expires));
            cursor.delete();
            cursor.continue();
          } else {
            resolve(db);
          }

          SRTlib.send('], "end": "emptyKey20"},');
        };

        request.onerror = reject;
        SRTlib.send('], "end": "emptyKey21"},');
      });
      SRTlib.send('], "end": "emptyKey22"},');
    }).then(function (db) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey23\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      db.close();
      SRTlib.send('], "end": "emptyKey23"},');
    });
    SRTlib.send('], "end": "cleanup"},');
  };

  return IndexedDBStore;
}();

IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;