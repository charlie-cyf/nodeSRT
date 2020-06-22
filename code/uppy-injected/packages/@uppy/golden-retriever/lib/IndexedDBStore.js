var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
var prettierBytes = require('@transloadit/prettier-bytes');
var indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
var isSupported = !!indexedDB;
var DB_NAME = 'uppy-blobs';
var STORE_NAME = 'files';
var DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
var DB_VERSION = 3;
function migrateExpiration(store) {
    SRTlib.send(`{ "anonymous": false, "function": "migrateExpiration", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var request = store.openCursor();
  request.onsuccess = function (event) {
        SRTlib.send(`{ "anonymous": true, "function": "request.onsuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var cursor = event.target.result;
    if (!cursor) {
            SRTlib.send('], "end": "request.onsuccess"},');

      return;
    }
    var entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
        SRTlib.send('], "end": "request.onsuccess"},');

  };
    SRTlib.send('], "end": "migrateExpiration"},');

}
function connect(dbName) {
    SRTlib.send(`{ "anonymous": false, "function": "connect", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var request = indexedDB.open(dbName, DB_VERSION);
    SRTlib.send('], "end": "connect"},');

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
                SRTlib.send('], "end": "ReturnStatement.request.onupgradeneeded.transaction.oncomplete"},');

      };
            SRTlib.send('], "end": "ReturnStatement.request.onupgradeneeded"},');

    };
    request.onsuccess = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.onsuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      resolve(event.target.result);
            SRTlib.send('], "end": "ReturnStatement.request.onsuccess"},');

    };
    request.onerror = reject;
        SRTlib.send('], "end": "ReturnStatement"},');

  });
    SRTlib.send('], "end": "connect"},');

}
function waitForRequest(request) {
    SRTlib.send(`{ "anonymous": false, "function": "waitForRequest", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "waitForRequest"},');

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    request.onsuccess = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.onsuccess2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      resolve(event.target.result);
            SRTlib.send('], "end": "ReturnStatement.request.onsuccess2"},');

    };
    request.onerror = reject;
        SRTlib.send('], "end": "ReturnStatement2"},');

  });
    SRTlib.send('], "end": "waitForRequest"},');

}
var cleanedUp = false;
var IndexedDBStore = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function IndexedDBStore(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": false, "function": "createConnection", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send('], "end": "IndexedDBStore"},');

  }
  var _proto = IndexedDBStore.prototype;
  _proto.key = function key(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.key.key", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "IndexedDBStore._proto.key.key"},');

    return this.name + "!" + fileID;
        SRTlib.send('], "end": "IndexedDBStore._proto.key.key"},');

  };
  _proto.list = function list() {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
        SRTlib.send('], "end": "IndexedDBStore._proto.list.list"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').getAll(IDBKeyRange.only(_this2.name));
            SRTlib.send('], "end": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then"},');

    }).then(function (files) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var result = {};
      files.forEach(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        result[file.fileID] = file.data;
                SRTlib.send('], "end": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then"},');

      });
            SRTlib.send('], "end": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then2"},');

      return result;
            SRTlib.send('], "end": "IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then2"},');

    });
        SRTlib.send('], "end": "IndexedDBStore._proto.list.list"},');

  };
  _proto.get = function get(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.get.get", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
        SRTlib.send('], "end": "IndexedDBStore._proto.get.get"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var request = transaction.objectStore(STORE_NAME).get(_this3.key(fileID));
            SRTlib.send('], "end": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then"},');

    }).then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then"},');

      return {
        id: result.data.fileID,
        data: result.data.data
      };
            SRTlib.send('], "end": "IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then"},');

    });
        SRTlib.send('], "end": "IndexedDBStore._proto.get.get"},');

  };
  _proto.getSize = function getSize() {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this4 = this;
        SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').openCursor(IDBKeyRange.only(_this4.name));
            SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then"},');

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
                    SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.request.onsuccess"},');

        };
        request.onerror = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.request.onerror", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          reject(new Error('Could not retrieve stored blobs size'));
                    SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.request.onerror"},');

        };
                SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement"},');

      });
            SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then"},');

    });
        SRTlib.send('], "end": "IndexedDBStore._proto.getSize.getSize"},');

  };
  _proto.put = function put(file) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.put.put", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    if (file.data.size > this.opts.maxFileSize) {
            SRTlib.send('], "end": "IndexedDBStore._proto.put.put"},');

      return Promise.reject(new Error('File is too big to store.'));
    }
        SRTlib.send('], "end": "IndexedDBStore._proto.put.put"},');

    return this.getSize().then(function (size) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (size > _this5.opts.maxTotalSize) {
                SRTlib.send('], "end": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then"},');

        return Promise.reject(new Error('No space left'));
      }
            SRTlib.send('], "end": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then"},');

      return _this5.ready;
            SRTlib.send('], "end": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then"},');

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
            SRTlib.send('], "end": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then"},');

    });
        SRTlib.send('], "end": "IndexedDBStore._proto.put.put"},');

  };
  _proto.delete = function _delete(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.delete._delete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this6 = this;
        SRTlib.send('], "end": "IndexedDBStore._proto.delete._delete"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).delete(_this6.key(fileID));
            SRTlib.send('], "end": "IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then"},');

    });
        SRTlib.send('], "end": "IndexedDBStore._proto.delete._delete"},');

  };
  IndexedDBStore.cleanup = function cleanup() {
        SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup"},');

    return connect(DB_NAME).then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
            SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then"},');

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
                    SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then.ReturnStatement.request.onsuccess"},');

        };
        request.onerror = reject;
                SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then.ReturnStatement"},');

      });
            SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then.then"},');

    }).then(function (db) {
            SRTlib.send(`{ "anonymous": true, "function": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      db.close();
            SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.then.then"},');

    });
        SRTlib.send('], "end": "IndexedDBStore.IndexedDBStore.cleanup.cleanup"},');

  };
    SRTlib.send('], "end": "IndexedDBStore"},');

  return IndexedDBStore;
    SRTlib.send('], "end": "IndexedDBStore"},');

})();
IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;
