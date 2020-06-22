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
function findUppyInstances() {
    SRTlib.send(`{ "anonymous": false, "function": "findUppyInstances", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  var instances = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
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
var cleanedUp = false;
module.exports = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function MetaDataStore(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MetaDataStore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = _extends({
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = "uppyState:" + opts.storeName;
    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }
        SRTlib.send('], "end": "MetaDataStore"},');

  }
  var _proto = MetaDataStore.prototype;
  _proto.load = function load() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.load.load", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var savedState = localStorage.getItem(this.name);
    if (!savedState) {
            SRTlib.send('], "end": "module.exports._proto.load.load"},');

      return null;
    }
    var data = maybeParse(savedState);
    if (!data) {
            SRTlib.send('], "end": "module.exports._proto.load.load"},');

      return null;
    }
    if (!data.metadata) {
      this.save(data);
            SRTlib.send('], "end": "module.exports._proto.load.load"},');

      return data;
    }
        SRTlib.send('], "end": "module.exports._proto.load.load"},');

    return data.metadata;
        SRTlib.send('], "end": "module.exports._proto.load.load"},');

  };
  _proto.save = function save(metadata) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.save.save", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var expires = Date.now() + this.opts.expires;
    var state = JSON.stringify({
      metadata: metadata,
      expires: expires
    });
    localStorage.setItem(this.name, state);
        SRTlib.send('], "end": "module.exports._proto.save.save"},');

  };
  MetaDataStore.cleanup = function cleanup() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.MetaDataStore.cleanup.cleanup2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var instanceIDs = findUppyInstances();
    var now = Date.now();
    instanceIDs.forEach(function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.MetaDataStore.cleanup.cleanup", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var data = localStorage.getItem("uppyState:" + id);
      if (!data) {
                SRTlib.send('], "end": "module.exports.MetaDataStore.cleanup.cleanup"},');

        return null;
      }
      var obj = maybeParse(data);
      if (!obj) {
                SRTlib.send('], "end": "module.exports.MetaDataStore.cleanup.cleanup"},');

        return null;
      }
      if (obj.expires && obj.expires < now) {
        localStorage.removeItem("uppyState:" + id);
      }
            SRTlib.send('], "end": "module.exports.MetaDataStore.cleanup.cleanup"},');

    });
        SRTlib.send('], "end": "module.exports.MetaDataStore.cleanup.cleanup2"},');

  };
    SRTlib.send('], "end": "module.exports"},');

  return MetaDataStore;
    SRTlib.send('], "end": "module.exports"},');

})();
