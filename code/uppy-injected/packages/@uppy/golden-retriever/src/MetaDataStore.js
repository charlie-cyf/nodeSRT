const SRTlib = require('SRT-util');

function findUppyInstances() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"findUppyInstances","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":0},`);

  const instances = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if ((/^uppyState:/).test(key)) {
      instances.push(key.slice(('uppyState:').length));
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"findUppyInstances"},');

  return instances;
    SRTlib.send('{"type":"FUNCTIONEND","function":"findUppyInstances","paramsNumber":0},');

}
function maybeParse(str) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"maybeParse","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":1},`);

  try {
        SRTlib.send('{"type":"FUNCTIONEND","function":"maybeParse"},');

    return JSON.parse(str);
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"maybeParse"},');

    return null;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"maybeParse","paramsNumber":1},');

}
let cleanedUp = false;
module.exports = class MetaDataStore {
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":1,"classInfo":{"className":"MetaDataStore"}},`);

    this.opts = Object.assign({
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = `uppyState:${opts.storeName}`;
    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  load() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"load","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":0,"classInfo":{"className":"MetaDataStore"}},`);

    const savedState = localStorage.getItem(this.name);
    if (!savedState) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');

      return null;
    }
    const data = maybeParse(savedState);
    if (!data) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');

      return null;
    }
    if (!data.metadata) {
      this.save(data);
            SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');

      return data;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');

    return data.metadata;
        SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');

  }
  save(metadata) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"save","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":1,"classInfo":{"className":"MetaDataStore"}},`);

    const expires = Date.now() + this.opts.expires;
    const state = JSON.stringify({
      metadata,
      expires
    });
    localStorage.setItem(this.name, state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"save"},');

  }
  static cleanup() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanup","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":0,"classInfo":{"className":"MetaDataStore"}},`);

    const instanceIDs = findUppyInstances();
    const now = Date.now();
    instanceIDs.forEach(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.instanceIDs.forEach","fileName":"/packages/@uppy/golden-retriever/src/MetaDataStore.js","paramsNumber":1},`);

      const data = localStorage.getItem(`uppyState:${id}`);
      if (!data) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.instanceIDs.forEach"},');

        return null;
      }
      const obj = maybeParse(data);
      if (!obj) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.instanceIDs.forEach"},');

        return null;
      }
      if (obj.expires && obj.expires < now) {
        localStorage.removeItem(`uppyState:${id}`);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.instanceIDs.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');

  }
};
