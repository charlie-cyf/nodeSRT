const SRTlib = require('SRT-util');
const prettierBytes = require('@transloadit/prettier-bytes');
const indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
const isSupported = !!indexedDB;
const DB_NAME = 'uppy-blobs';
// maybe have a thumbnail store in the future
const STORE_NAME = 'files';
// 24 hours
const DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
const DB_VERSION = 3;
// Set default `expires` dates on existing stored blobs.
function migrateExpiration(store) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"migrateExpiration","fileName":"${__filename}","paramsNumber":1},`);

  const request = store.openCursor();
  request.onsuccess = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    const cursor = event.target.result;
    if (!cursor) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      return;
    }
    const entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"migrateExpiration","paramsNumber":1},');

}
function connect(dbName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connect","fileName":"${__filename}","paramsNumber":1},`);

  const request = indexedDB.open(dbName, DB_VERSION);
    SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":2},`);

    request.onupgradeneeded = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

      const db = event.target.result;
      const transaction = event.currentTarget.transaction;
      if (event.oldVersion < 2) {
        // Added in v2: DB structure changed to a single shared object store
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id'
        });
        store.createIndex('store', 'store', {
          unique: false
        });
      }
      if (event.oldVersion < 3) {
        // Added in v3
        const store = transaction.objectStore(STORE_NAME);
        store.createIndex('expires', 'expires', {
          unique: false
        });
        migrateExpiration(store);
      }
      transaction.oncomplete = () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

        resolve(db);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    };
    request.onsuccess = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

      resolve(event.target.result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    };
    request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"connect","paramsNumber":1},');

}
function waitForRequest(request) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"waitForRequest","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":2},`);

    request.onsuccess = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      resolve(event.target.result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    };
    request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest","paramsNumber":1},');

}
let cleanedUp = false;
class IndexedDBStore {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

    this.opts = Object.assign({
      dbName: DB_NAME,
      storeName: 'default',
      // 24 hours
      expires: DEFAULT_EXPIRY,
      // 10 MB
      maxFileSize: 10 * 1024 * 1024,
      // 300 MB
      maxTotalSize: 300 * 1024 * 1024
    }, opts);
    this.name = this.opts.storeName;
    const createConnection = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createConnection","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"createConnection"},');

      return connect(this.opts.dbName);
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
  key(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"key","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"key"},');

    return `${this.name}!${fileID}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"key"},');

  }
  list() {
    /**
    * List all file blobs currently in the store.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('store').getAll(IDBKeyRange.only(this.name));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    }).then(files => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

      const result = {};
      files.forEach(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

        result[file.fileID] = file.data;
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  get(fileID) {
    /**
    * Get one file blob from the store.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"get","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const request = transaction.objectStore(STORE_NAME).get(this.key(fileID));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

      return {
        id: result.data.fileID,
        data: result.data.data
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

  }
  getSize() {
    /**
    * Get the total size of all stored files.
    *
    * @private
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSize","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('store').openCursor(IDBKeyRange.only(this.name));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":2},`);

        let size = 0;
        request.onsuccess = event => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

          const cursor = event.target.result;
          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

        };
        request.onerror = () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":0},`);

          reject(new Error('Could not retrieve stored blobs size'));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');

  }
  put(file) {
    /**
    * Save a file in the store.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"put","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

    if (file.data.size > this.opts.maxFileSize) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

      return Promise.reject(new Error('File is too big to store.'));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

    return this.getSize().then(size => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":1},`);

      if (size > this.opts.maxTotalSize) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

        return Promise.reject(new Error('No space left'));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

      return this.ready;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

    }).then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey18","fileName":"${__filename}","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const request = transaction.objectStore(STORE_NAME).add({
        id: this.key(file.id),
        fileID: file.id,
        store: this.name,
        expires: Date.now() + this.opts.expires,
        data: file.data
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

  }
  delete(fileID) {
    /**
    * Delete a file blob from the store.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"delete","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey19","fileName":"${__filename}","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const request = transaction.objectStore(STORE_NAME).delete(this.key(fileID));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

  }
  static cleanup() {
    /**
    * Delete all stored blobs that have an expiry date that is before Date.now().
    * This is a static method because it deletes expired blobs from _all_ Uppy instances.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanup","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');

    return connect(DB_NAME).then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey22","fileName":"${__filename}","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey21","fileName":"${__filename}","paramsNumber":2},`);

        request.onsuccess = event => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey20","fileName":"${__filename}","paramsNumber":1},`);

          const cursor = event.target.result;
          if (cursor) {
            const entry = cursor.value;
            console.log('[IndexedDBStore] Deleting record', entry.fileID, 'of size', prettierBytes(entry.data.size), '- expired on', new Date(entry.expires));
            // Ignoring return value … it's not terrible if this goes wrong.
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

    }).then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey23","fileName":"${__filename}","paramsNumber":1},`);

      db.close();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');

  }
}
IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;
