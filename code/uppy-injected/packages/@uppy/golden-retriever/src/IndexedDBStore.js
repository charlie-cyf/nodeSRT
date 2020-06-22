var SRTlib = require('SRT-util');
const prettierBytes = require('@transloadit/prettier-bytes');
const indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
const isSupported = !!indexedDB;
const DB_NAME = 'uppy-blobs';
const STORE_NAME = 'files';
const DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
const DB_VERSION = 3;
function migrateExpiration(store) {
    SRTlib.send(`{ "anonymous": false, "function": "migrateExpiration", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const request = store.openCursor();
  request.onsuccess = event => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const cursor = event.target.result;
    if (!cursor) {
            SRTlib.send('], "end": "emptyKey"},');

      return;
    }
    const entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
        SRTlib.send('], "end": "emptyKey"},');

  };
    SRTlib.send('], "end": "migrateExpiration"},');

}
function connect(dbName) {
    SRTlib.send(`{ "anonymous": false, "function": "connect", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const request = indexedDB.open(dbName, DB_VERSION);
    SRTlib.send('], "end": "connect"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    request.onupgradeneeded = event => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const db = event.target.result;
      const transaction = event.currentTarget.transaction;
      if (event.oldVersion < 2) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id'
        });
        store.createIndex('store', 'store', {
          unique: false
        });
      }
      if (event.oldVersion < 3) {
        const store = transaction.objectStore(STORE_NAME);
        store.createIndex('expires', 'expires', {
          unique: false
        });
        migrateExpiration(store);
      }
      transaction.oncomplete = () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve(db);
                SRTlib.send('], "end": "emptyKey2"},');

      };
            SRTlib.send('], "end": "emptyKey3"},');

    };
    request.onsuccess = event => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      resolve(event.target.result);
            SRTlib.send('], "end": "emptyKey4"},');

    };
    request.onerror = reject;
        SRTlib.send('], "end": "emptyKey5"},');

  });
    SRTlib.send('], "end": "connect"},');

}
function waitForRequest(request) {
    SRTlib.send(`{ "anonymous": false, "function": "waitForRequest", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "waitForRequest"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    request.onsuccess = event => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      resolve(event.target.result);
            SRTlib.send('], "end": "emptyKey6"},');

    };
    request.onerror = reject;
        SRTlib.send('], "end": "emptyKey7"},');

  });
    SRTlib.send('], "end": "waitForRequest"},');

}
let cleanedUp = false;
class IndexedDBStore {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = Object.assign({
      dbName: DB_NAME,
      storeName: 'default',
      expires: DEFAULT_EXPIRY,
      maxFileSize: 10 * 1024 * 1024,
      maxTotalSize: 300 * 1024 * 1024
    }, opts);
    this.name = this.opts.storeName;
    const createConnection = () => {
            SRTlib.send(`{ "anonymous": false, "function": "createConnection", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "createConnection"},');

      return connect(this.opts.dbName);
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
  key(fileID) {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.key", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "key"},');

    return `${this.name}!${fileID}`;
        SRTlib.send('], "end": "key"},');

  }
  list() {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.list", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "list"},');

    return this.ready.then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('store').getAll(IDBKeyRange.only(this.name));
            SRTlib.send('], "end": "emptyKey8"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "emptyKey8"},');

    }).then(files => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const result = {};
      files.forEach(file => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        result[file.fileID] = file.data;
                SRTlib.send('], "end": "emptyKey9"},');

      });
            SRTlib.send('], "end": "emptyKey10"},');

      return result;
            SRTlib.send('], "end": "emptyKey10"},');

    });
        SRTlib.send('], "end": "list"},');

  }
  get(fileID) {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.get", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "get"},');

    return this.ready.then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const request = transaction.objectStore(STORE_NAME).get(this.key(fileID));
            SRTlib.send('], "end": "emptyKey11"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "emptyKey11"},');

    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey12"},');

      return {
        id: result.data.fileID,
        data: result.data.data
      };
            SRTlib.send('], "end": "emptyKey12"},');

    });
        SRTlib.send('], "end": "get"},');

  }
  getSize() {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.getSize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "getSize"},');

    return this.ready.then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('store').openCursor(IDBKeyRange.only(this.name));
            SRTlib.send('], "end": "emptyKey16"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        let size = 0;
        request.onsuccess = event => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          const cursor = event.target.result;
          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }
                    SRTlib.send('], "end": "emptyKey13"},');

        };
        request.onerror = () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          reject(new Error('Could not retrieve stored blobs size'));
                    SRTlib.send('], "end": "emptyKey14"},');

        };
                SRTlib.send('], "end": "emptyKey15"},');

      });
            SRTlib.send('], "end": "emptyKey16"},');

    });
        SRTlib.send('], "end": "getSize"},');

  }
  put(file) {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.put", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (file.data.size > this.opts.maxFileSize) {
            SRTlib.send('], "end": "put"},');

      return Promise.reject(new Error('File is too big to store.'));
    }
        SRTlib.send('], "end": "put"},');

    return this.getSize().then(size => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (size > this.opts.maxTotalSize) {
                SRTlib.send('], "end": "emptyKey17"},');

        return Promise.reject(new Error('No space left'));
      }
            SRTlib.send('], "end": "emptyKey17"},');

      return this.ready;
            SRTlib.send('], "end": "emptyKey17"},');

    }).then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const request = transaction.objectStore(STORE_NAME).add({
        id: this.key(file.id),
        fileID: file.id,
        store: this.name,
        expires: Date.now() + this.opts.expires,
        data: file.data
      });
            SRTlib.send('], "end": "emptyKey18"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "emptyKey18"},');

    });
        SRTlib.send('], "end": "put"},');

  }
  delete(fileID) {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.delete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "delete"},');

    return this.ready.then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const request = transaction.objectStore(STORE_NAME).delete(this.key(fileID));
            SRTlib.send('], "end": "emptyKey19"},');

      return waitForRequest(request);
            SRTlib.send('], "end": "emptyKey19"},');

    });
        SRTlib.send('], "end": "delete"},');

  }
  static cleanup() {
        SRTlib.send(`{ "anonymous": false, "function": "IndexedDBStore.cleanup", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "cleanup"},');

    return connect(DB_NAME).then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
            SRTlib.send('], "end": "emptyKey22"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        request.onsuccess = event => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          const cursor = event.target.result;
          if (cursor) {
            const entry = cursor.value;
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

    }).then(db => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      db.close();
            SRTlib.send('], "end": "emptyKey23"},');

    });
        SRTlib.send('], "end": "cleanup"},');

  }
}
IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;
