const SRTlib = require('SRT-util');

function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
var prettierBytes = require('@transloadit/prettier-bytes');
var indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
var isSupported = !!indexedDB;
var DB_NAME = 'uppy-blobs';
var STORE_NAME = 'files';
var DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
var DB_VERSION = 3;
function migrateExpiration(store) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"migrateExpiration","fileName":"${__filename}","paramsNumber":1},`);

  var request = store.openCursor();
  request.onsuccess = function (event) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onsuccess","fileName":"${__filename}","paramsNumber":1},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connect","fileName":"${__filename}","paramsNumber":1},`);

  var request = indexedDB.open(dbName, DB_VERSION);
    SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

    request.onupgradeneeded = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.request.onupgradeneeded","fileName":"${__filename}","paramsNumber":1},`);

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.request.onupgradeneeded.transaction.oncomplete","fileName":"${__filename}","paramsNumber":0},`);

        resolve(db);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.request.onupgradeneeded.transaction.oncomplete"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.request.onupgradeneeded"},');

    };
    request.onsuccess = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.request.onsuccess","fileName":"${__filename}","paramsNumber":1},`);

      resolve(event.target.result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.request.onsuccess"},');

    };
    request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"connect","paramsNumber":1},');

}
function waitForRequest(request) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"waitForRequest","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest"},');

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression2","fileName":"${__filename}","paramsNumber":2},`);

    request.onsuccess = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.request.onsuccess2","fileName":"${__filename}","paramsNumber":1},`);

      resolve(event.target.result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.request.onsuccess2"},');

    };
    request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest","paramsNumber":1},');

}
var cleanedUp = false;
var IndexedDBStore = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore","fileName":"${__filename}","paramsNumber":0},`);

  function IndexedDBStore(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"IndexedDBStore","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createConnection","fileName":"${__filename}","paramsNumber":0},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore","paramsNumber":1},');

  }
  var _proto = IndexedDBStore.prototype;
  _proto.key = function key(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.key","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.key"},');

    return this.name + "!" + fileID;
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.key"},');

  };
  _proto.list = function list() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.list","fileName":"${__filename}","paramsNumber":0},`);

    var _this2 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then","fileName":"${__filename}","paramsNumber":1},`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').getAll(IDBKeyRange.only(_this2.name));
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.ready.then"},');

    }).then(function (files) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then","fileName":"${__filename}","paramsNumber":1},`);

      var result = {};
      files.forEach(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.files.forEach","fileName":"${__filename}","paramsNumber":1},`);

        result[file.fileID] = file.data;
                SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then.files.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list.list.ReturnStatement.ready.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.list"},');

  };
  _proto.get = function get(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.get","fileName":"${__filename}","paramsNumber":1},`);

    var _this3 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.get"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then","fileName":"${__filename}","paramsNumber":1},`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var request = transaction.objectStore(STORE_NAME).get(_this3.key(fileID));
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then.ready.then"},');

    }).then(function (result) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then"},');

      return {
        id: result.data.fileID,
        data: result.data.data
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.get.get.ReturnStatement.ready.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.get"},');

  };
  _proto.getSize = function getSize() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.getSize","fileName":"${__filename}","paramsNumber":0},`);

    var _this4 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then","fileName":"${__filename}","paramsNumber":1},`);

      var transaction = db.transaction([STORE_NAME], 'readonly');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('store').openCursor(IDBKeyRange.only(_this4.name));
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then"},');

      return new Promise(function (resolve, reject) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

        var size = 0;
        request.onsuccess = function (event) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.NewExpression.request.onsuccess","fileName":"${__filename}","paramsNumber":1},`);

          var cursor = event.target.result;
          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.NewExpression.request.onsuccess"},');

        };
        request.onerror = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.NewExpression.request.onerror","fileName":"${__filename}","paramsNumber":0},`);

          reject(new Error('Could not retrieve stored blobs size'));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.NewExpression.request.onerror"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then.ReturnStatement.NewExpression"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize.getSize.ReturnStatement.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.getSize"},');

  };
  _proto.put = function put(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.put","fileName":"${__filename}","paramsNumber":1},`);

    var _this5 = this;
    if (file.data.size > this.opts.maxFileSize) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put"},');

      return Promise.reject(new Error('File is too big to store.'));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put"},');

    return this.getSize().then(function (size) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then","fileName":"${__filename}","paramsNumber":1},`);

      if (size > _this5.opts.maxTotalSize) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then"},');

        return Promise.reject(new Error('No space left'));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then"},');

      return _this5.ready;
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then.getSize.then"},');

    }).then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then","fileName":"${__filename}","paramsNumber":1},`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).add({
        id: _this5.key(file.id),
        fileID: file.id,
        store: _this5.name,
        expires: Date.now() + _this5.opts.expires,
        data: file.data
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put.put.ReturnStatement.getSize.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.put"},');

  };
  _proto.delete = function _delete(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.delete","fileName":"${__filename}","paramsNumber":1},`);

    var _this6 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.delete"},');

    return this.ready.then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then","fileName":"${__filename}","paramsNumber":1},`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var request = transaction.objectStore(STORE_NAME).delete(_this6.key(fileID));
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.delete._delete.ReturnStatement.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore._proto.delete"},');

  };
  IndexedDBStore.cleanup = function cleanup() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.IndexedDBStore.cleanup","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup"},');

    return connect(DB_NAME).then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then","fileName":"${__filename}","paramsNumber":1},`);

      var transaction = db.transaction([STORE_NAME], 'readwrite');
      var store = transaction.objectStore(STORE_NAME);
      var request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then"},');

      return new Promise(function (resolve, reject) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

        request.onsuccess = function (event) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then.ReturnStatement.NewExpression.request.onsuccess","fileName":"${__filename}","paramsNumber":1},`);

          var cursor = event.target.result;
          if (cursor) {
            var entry = cursor.value;
            console.log('[IndexedDBStore] Deleting record', entry.fileID, 'of size', prettierBytes(entry.data.size), '- expired on', new Date(entry.expires));
            cursor.delete();
            cursor.continue();
          } else {
            resolve(db);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then.ReturnStatement.NewExpression.request.onsuccess"},');

        };
        request.onerror = reject;
                SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then.ReturnStatement.NewExpression"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then.connect.then"},');

    }).then(function (db) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then","fileName":"${__filename}","paramsNumber":1},`);

      db.close();
            SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup.cleanup.ReturnStatement.connect.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.IndexedDBStore.cleanup"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore"},');

  return IndexedDBStore;
    SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore"},');

})();
IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;
