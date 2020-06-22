var SRTlib = require('SRT-util');
function findUppyInstances() {
    SRTlib.send(`{ "anonymous": false, "function": "findUppyInstances", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const instances = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if ((/^uppyState:/).test(key)) {
      instances.push(key.slice(('uppyState:').length));
    }
  }
    SRTlib.send('], "end": "findUppyInstances"},');

  return instances;
    SRTlib.send('], "end": "findUppyInstances"},');

}
function maybeParse(str) {
    SRTlib.send(`{ "anonymous": false, "function": "maybeParse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  try {
        SRTlib.send('], "end": "maybeParse"},');

    return JSON.parse(str);
  } catch (err) {
        SRTlib.send('], "end": "maybeParse"},');

    return null;
  }
    SRTlib.send('], "end": "maybeParse"},');

}
let cleanedUp = false;
module.exports = class MetaDataStore {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MetaDataStore.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = Object.assign({
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = `uppyState:${opts.storeName}`;
    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }
        SRTlib.send('], "end": "constructor"},');

  }
  load() {
        SRTlib.send(`{ "anonymous": false, "function": "MetaDataStore.load", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const savedState = localStorage.getItem(this.name);
    if (!savedState) {
            SRTlib.send('], "end": "load"},');

      return null;
    }
    const data = maybeParse(savedState);
    if (!data) {
            SRTlib.send('], "end": "load"},');

      return null;
    }
    if (!data.metadata) {
      this.save(data);
            SRTlib.send('], "end": "load"},');

      return data;
    }
        SRTlib.send('], "end": "load"},');

    return data.metadata;
        SRTlib.send('], "end": "load"},');

  }
  save(metadata) {
        SRTlib.send(`{ "anonymous": false, "function": "MetaDataStore.save", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const expires = Date.now() + this.opts.expires;
    const state = JSON.stringify({
      metadata,
      expires
    });
    localStorage.setItem(this.name, state);
        SRTlib.send('], "end": "save"},');

  }
  static cleanup() {
        SRTlib.send(`{ "anonymous": false, "function": "MetaDataStore.cleanup", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const instanceIDs = findUppyInstances();
    const now = Date.now();
    instanceIDs.forEach(id => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const data = localStorage.getItem(`uppyState:${id}`);
      if (!data) {
                SRTlib.send('], "end": "emptyKey"},');

        return null;
      }
      const obj = maybeParse(data);
      if (!obj) {
                SRTlib.send('], "end": "emptyKey"},');

        return null;
      }
      if (obj.expires && obj.expires < now) {
        localStorage.removeItem(`uppyState:${id}`);
      }
            SRTlib.send('], "end": "emptyKey"},');

    });
        SRTlib.send('], "end": "cleanup"},');

  }
};
