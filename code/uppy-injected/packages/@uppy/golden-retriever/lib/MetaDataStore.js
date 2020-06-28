function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
* Get uppy instance IDs for which state is stored.
*/
var SRTlib = require('SRT-util');

function findUppyInstances() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"findUppyInstances\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
  var instances = [];

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    if (/^uppyState:/.test(key)) {
      instances.push(key.slice('uppyState:'.length));
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
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"maybeParse\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

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

module.exports = /*#__PURE__*/function () {
  function MetaDataStore(opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MetaDataStore\"}},");
    this.opts = _extends({
      // 24 hours
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = "uppyState:" + opts.storeName;

    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = MetaDataStore.prototype;

  _proto.load = function load() {
    /**
    *
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"load\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MetaDataStore\"}},");
    var savedState = localStorage.getItem(this.name);

    if (!savedState) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');
      return null;
    }

    var data = maybeParse(savedState);

    if (!data) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');
      return null;
    } // Upgrade pre-0.20.0 uppyState: it used to be just a flat object,
    // without `expires`.


    if (!data.metadata) {
      this.save(data);
      SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');
      return data;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');
    return data.metadata;
    SRTlib.send('{"type":"FUNCTIONEND","function":"load"},');
  };

  _proto.save = function save(metadata) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"save\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MetaDataStore\"}},");
    var expires = Date.now() + this.opts.expires;
    var state = JSON.stringify({
      metadata: metadata,
      expires: expires
    });
    localStorage.setItem(this.name, state);
    SRTlib.send('{"type":"FUNCTIONEND","function":"save"},');
  };

  MetaDataStore.cleanup = function cleanup() {
    /**
    * Remove all expired state.
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cleanup\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MetaDataStore\"}},");
    var instanceIDs = findUppyInstances();
    var now = Date.now();
    instanceIDs.forEach(function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.instanceIDs.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var data = localStorage.getItem("uppyState:" + id);

      if (!data) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.instanceIDs.forEach"},');
        return null;
      }

      var obj = maybeParse(data);

      if (!obj) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.instanceIDs.forEach"},');
        return null;
      }

      if (obj.expires && obj.expires < now) {
        localStorage.removeItem("uppyState:" + id);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.instanceIDs.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup"},');
  };

  return MetaDataStore;
}();