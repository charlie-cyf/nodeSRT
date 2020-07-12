const SRTlib = require('SRT-util');

const prettyBytes = require('@uppy/utils/lib/prettyBytes');
const indexedDB = typeof window !== 'undefined' && (window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB);
const isSupported = !!indexedDB;
const DB_NAME = 'uppy-blobs';
const STORE_NAME = 'files';
const DEFAULT_EXPIRY = 24 * 60 * 60 * 1000;
const DB_VERSION = 3;
function migrateExpiration(store) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"migrateExpiration","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

  const request = store.openCursor();
  request.onsuccess = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onsuccess","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

    const cursor = event.target.result;
    if (!cursor) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess"},');

      return;
    }
    const entry = cursor.value;
    entry.expires = Date.now() + DEFAULT_EXPIRY;
    cursor.update(entry);
        SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"migrateExpiration","paramsNumber":1},');

}
function connect(dbName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connect","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

  const request = indexedDB.open(dbName, DB_VERSION);
    SRTlib.send('{"type":"FUNCTIONEND","function":"connect"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":2},`);

    request.onupgradeneeded = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onupgradeneeded","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"transaction.oncomplete","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":0},`);

        resolve(db);
                SRTlib.send('{"type":"FUNCTIONEND","function":"transaction.oncomplete"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"request.onupgradeneeded"},');

    };
    request.onsuccess = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onsuccess###2","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      resolve(event.target.result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###2"},');

    };
    request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"connect","paramsNumber":1},');

}
function waitForRequest(request) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"waitForRequest","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression###2","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":2},`);

    request.onsuccess = event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onsuccess###3","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      resolve(event.target.result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###3"},');

    };
    request.onerror = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression###2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"waitForRequest","paramsNumber":1},');

}
let cleanedUp = false;
class IndexedDBStore {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

    this.opts = Object.assign({
      dbName: DB_NAME,
      storeName: 'default',
      expires: DEFAULT_EXPIRY,
      maxFileSize: 10 * 1024 * 1024,
      maxTotalSize: 300 * 1024 * 1024
    }, opts);
    this.name = this.opts.storeName;
    const createConnection = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createConnection","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":0},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"key","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"key"},');

    return `${this.name}!${fileID}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"key"},');

  }
  list() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":0,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then.then.ready.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('store').getAll(IDBKeyRange.only(this.name));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then"},');

    }).then(files => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const result = {};
      files.forEach(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

        result[file.fileID] = file.data;
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  get(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"get","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then.then.ready.then###2","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const request = transaction.objectStore(STORE_NAME).get(this.key(fileID));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then###2"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then.ready.then###2"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then.then###2","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then###2"},');

      return {
        id: result.data.fileID,
        data: result.data.data
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

  }
  getSize() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSize","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":0,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('store').openCursor(IDBKeyRange.only(this.name));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression###3","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":2},`);

        let size = 0;
        request.onsuccess = event => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onsuccess###4","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

          const cursor = event.target.result;
          if (cursor) {
            size += cursor.value.data.size;
            cursor.continue();
          } else {
            resolve(size);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"request.onsuccess###4"},');

        };
        request.onerror = () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onerror","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":0},`);

          reject(new Error('Could not retrieve stored blobs size'));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"request.onerror"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression###3"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getSize"},');

  }
  put(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"put","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

    if (file.data.size > this.opts.maxFileSize) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

      return Promise.reject(new Error('File is too big to store.'));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

    return this.getSize().then(size => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.getSize.then.then.getSize.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      if (size > this.opts.maxTotalSize) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then.getSize.then"},');

        return Promise.reject(new Error('No space left'));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then.getSize.then"},');

      return this.ready;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then.getSize.then"},');

    }).then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.getSize.then.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const request = transaction.objectStore(STORE_NAME).add({
        id: this.key(file.id),
        fileID: file.id,
        store: this.name,
        expires: Date.now() + this.opts.expires,
        data: file.data
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getSize.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"put"},');

  }
  delete(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"delete","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

    return this.ready.then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ready.then###2","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const request = transaction.objectStore(STORE_NAME).delete(this.key(fileID));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then###2"},');

      return waitForRequest(request);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ready.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

  }
  static cleanup() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanup","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":0,"classInfo":{"className":"IndexedDBStore"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');

    return connect(DB_NAME).then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.connect.then.then.connect.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.index('expires').openCursor(IDBKeyRange.upperBound(Date.now()));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.connect.then.then.connect.then"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression###4","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":2},`);

        request.onsuccess = event => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.onsuccess###5","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

          const cursor = event.target.result;
          if (cursor) {
            const entry = cursor.value;
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

    }).then(db => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.connect.then.then","fileName":"/packages/@uppy/golden-retriever/src/IndexedDBStore.js","paramsNumber":1},`);

      db.close();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.connect.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');

  }
}
IndexedDBStore.isSupported = isSupported;
module.exports = IndexedDBStore;
