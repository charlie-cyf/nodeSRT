var SRTlib = require('SRT-util');
function findUppyInstances() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const instances = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if ((/^uppyState:/).test(key)) {
      instances.push(key.slice(('uppyState:').length));
    }
  }
    SRTlib.send("]},");

  return instances;
    SRTlib.send("]},");

}
function maybeParse(str) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  try {
        SRTlib.send("]},");

    return JSON.parse(str);
  } catch (err) {
        SRTlib.send("]},");

    return null;
  }
    SRTlib.send("]},");

}
let cleanedUp = false;
module.exports = class MetaDataStore {
  constructor(opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = Object.assign({
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = `uppyState:${opts.storeName}`;
    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }
        SRTlib.send("]},");

  }
  load() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const savedState = localStorage.getItem(this.name);
    if (!savedState) {
            SRTlib.send("]},");

      return null;
    }
    const data = maybeParse(savedState);
    if (!data) {
            SRTlib.send("]},");

      return null;
    }
    if (!data.metadata) {
      this.save(data);
            SRTlib.send("]},");

      return data;
    }
        SRTlib.send("]},");

    return data.metadata;
        SRTlib.send("]},");

  }
  save(metadata) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const expires = Date.now() + this.opts.expires;
    const state = JSON.stringify({
      metadata,
      expires
    });
    localStorage.setItem(this.name, state);
        SRTlib.send("]},");

  }
  static cleanup() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const instanceIDs = findUppyInstances();
    const now = Date.now();
    instanceIDs.forEach(id => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const data = localStorage.getItem(`uppyState:${id}`);
      if (!data) {
                SRTlib.send("]},");

        return null;
      }
      const obj = maybeParse(data);
      if (!obj) {
                SRTlib.send("]},");

        return null;
      }
      if (obj.expires && obj.expires < now) {
        localStorage.removeItem(`uppyState:${id}`);
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
};
