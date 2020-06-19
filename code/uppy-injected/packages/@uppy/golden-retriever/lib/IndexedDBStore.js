var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
var prettierBytes = require('@transloadit/prettier-bytes');
var indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
var isSupported = !!indexedDB;
var DB_NAME = 'uppy-blobs';
var STORE_NAME = 'files';
var DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
var DB_VERSION = 3;
function migrateExpiration(store) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var request = store.openCursor();
  request.onsuccess = function (event) {
        SRTlib.send(`{ "anonymous": true, "function": "request.onsuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var cursor = event.target.result;
    if (!cursor) {
            SRTlib.send("]},");

      return;
    }
    var entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

}
function connect(dbName) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var request = indexedDB.open(dbName, DB_VERSION);
    SRTlib.send("]},");

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    request.onupgradeneeded = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.onupgradeneeded", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.onupgradeneeded.transaction.oncomplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve(db);
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

    };
    request.onsuccess = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.onsuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      resolve(event.target.result);
            SRTlib.send("]},");

    };
    request.onerror = reject;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
function waitForRequest(request) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    request.onsuccess = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.onsuccess2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      resolve(event.target.result);
            SRTlib.send("]},");

    };
    request.onerror = reject;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
var cleanedUp = false;
var IndexedDBStore = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function IndexedDBStore(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    this.opts = _extends({
      dbName: DB_NAME,
      storeName: 'default',
      expires: DEFAULT_EXPIRY,
      maxFileSize: 10 * 1024 * 1024,
      maxTotalSize: 300 * 1024 * 1024
    }, opts);
    this.name = this.opts.storeName;
    var createConnection = function createConnection() {
            SRTlib.send(`{ "anonymous": true, "function": "createConnection.createConnection", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return connect(_this.opts.dbName);
            SRTlib.send("]},");

    };
    if (!cleanedUp) {
      cleanedUp = true;
      this.ready = IndexedDBStore.cleanup().then(createConnection, createConnection);
    } else {
      this.ready = createConnection();
    }
        SRTlib.send("]},");

  }
  var _proto = IndexedDBStore.prototype;
  _proto.key = function key(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.key.key", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.name + "!" + fileID;
        SRTlib.send("]},");

  };
  _proto.list = function list() {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
        SRTlib.send("]},");

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').getAll(IDBKeyRange.only(_this2.name));
            SRTlib.send("]},");

      return waitForRequest(request);
            SRTlib.send("]},");

    }).then(function (files) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var result = {};
      files.forEach(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        result[file.fileID] = file.data;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return result;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.get = function get(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.get.get", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
        SRTlib.send("]},");

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var request = transaction.objectStore(STORE_NAME).get(_this3.key(fileID));
            SRTlib.send("]},");

      return waitForRequest(request);
            SRTlib.send("]},");

    }).then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return {
        id: result.data.fileID,
        data: result.data.data
      };
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.getSize = function getSize() {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this4 = this;
        SRTlib.send("]},");

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').openCursor(IDBKeyRange.only(_this4.name));
            SRTlib.send("]},");

      return new Promise(function (resolve, reject) {
                SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var size = 0;
        request.onsuccess = function (event) {
                    SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.request.onsuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var cursor = event.target.result;
          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }
                    SRTlib.send("]},");

        };
        request.onerror = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.request.onerror", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          reject(new Error('Could not retrieve stored blobs size'));
                    SRTlib.send("]},");

        };
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.put = function put(file) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.put.put", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    if (file.data.size > this.opts.maxFileSize) {
            SRTlib.send("]},");

      return Promise.reject(new Error('File is too big to store.'));
    }
        SRTlib.send("]},");

    return this.getSize().then(function (size) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (size > _this5.opts.maxTotalSize) {
                SRTlib.send("]},");

        return Promise.reject(new Error('No space left'));
      }
            SRTlib.send("]},");

      return _this5.ready;
            SRTlib.send("]},");

    }).then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).add({
        id: _this5.key(file.id),
        fileID: file.id,
        store: _this5.name,
        expires: Date.now() + _this5.opts.expires,
        data: file.data
      });
            SRTlib.send("]},");

      return waitForRequest(request);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.delete = function _delete(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.delete._delete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this6 = this;
        SRTlib.send("]},");

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).delete(_this6.key(fileID));
            SRTlib.send("]},");

      return waitForRequest(request);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  IndexedDBStore.cleanup = function cleanup() {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return connect(DB_NAME).then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
            SRTlib.send("]},");

      return new Promise(function (resolve, reject) {
                SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        request.onsuccess = function (event) {
                    SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then.ReturnStatement.request.onsuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var cursor = event.target.result;
          if (cursor) {
            var entry = cursor.value;
            console.log('[IndexedDBStore] Deleting record', entry.fileID, 'of size', prettierBytes(entry.data.size), '- expired on', new Date(entry.expires));
            cursor.delete();
            cursor.continue();
          } else {
            resolve(db);
          }
                    SRTlib.send("]},");

        };
        request.onerror = reject;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }).then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      db.close();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return IndexedDBStore;
    SRTlib.send("]},");

})();
IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;
