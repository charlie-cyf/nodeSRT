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
/**
* Get uppy instance IDs for which state is stored.
*/
function findUppyInstances() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"findUppyInstances","fileName":"${__filename}","paramsNumber":0},`);

  var instances = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if ((/^uppyState:/).test(key)) {
      instances.push(key.slice(('uppyState:').length));
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"findUppyInstances"},');

  return instances;
    SRTlib.send('{"type":"FUNCTIONEND","function":"findUppyInstances","paramsNumber":0},');

}
/**
* Try to JSON-parse a string, return null on failure.
*/
function maybeParse(str) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"maybeParse","fileName":"${__filename}","paramsNumber":1},`);

  try {
        SRTlib.send('{"type":"FUNCTIONEND","function":"maybeParse"},');

    return JSON.parse(str);
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"maybeParse"},');

    return null;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"maybeParse","paramsNumber":1},');

}
var cleanedUp = false;
module.exports = (function () {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  function MetaDataStore(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"MetaDataStore","fileName":"${__filename}","paramsNumber":1},`);

    this.opts = _extends({
      // 24 hours
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = "uppyState:" + opts.storeName;
    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"MetaDataStore","paramsNumber":1},');

  }
  /**
  *
  */
  var _proto = MetaDataStore.prototype;
  _proto.load = function load() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.load.load","fileName":"${__filename}","paramsNumber":0},`);

    var savedState = localStorage.getItem(this.name);
    if (!savedState) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.load.load"},');

      return null;
    }
    var data = maybeParse(savedState);
    if (!data) return null;
    // without `expires`.
    if (!data.metadata) {
      this.save(data);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.load.load"},');

      return data;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.load.load"},');

    return data.metadata;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.load.load"},');

  };
  _proto.save = function save(metadata) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.save.save","fileName":"${__filename}","paramsNumber":1},`);

    var expires = Date.now() + this.opts.expires;
    var state = JSON.stringify({
      metadata: metadata,
      expires: expires
    });
    localStorage.setItem(this.name, state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.save.save"},');

  };
  /**
  * Remove all expired state.
  */
  MetaDataStore.cleanup = function cleanup() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.MetaDataStore.cleanup.cleanup2","fileName":"${__filename}","paramsNumber":0},`);

    var instanceIDs = findUppyInstances();
    var now = Date.now();
    instanceIDs.forEach(function (id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.MetaDataStore.cleanup.cleanup","fileName":"${__filename}","paramsNumber":1},`);

      var data = localStorage.getItem("uppyState:" + id);
      if (!data) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.MetaDataStore.cleanup.cleanup"},');

        return null;
      }
      var obj = maybeParse(data);
      if (!obj) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.MetaDataStore.cleanup.cleanup"},');

        return null;
      }
      if (obj.expires && obj.expires < now) {
        localStorage.removeItem("uppyState:" + id);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.MetaDataStore.cleanup.cleanup"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.MetaDataStore.cleanup.cleanup2"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return MetaDataStore;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})();
