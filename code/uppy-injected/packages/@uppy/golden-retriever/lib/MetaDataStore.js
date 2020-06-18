function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

function findUppyInstances() {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
  var instances = [];

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    if (/^uppyState:/.test(key)) {
      instances.push(key.slice('uppyState:'.length));
    }
  }

  SRTlib.send("]},");
  return instances;
  SRTlib.send("]},");
}

function maybeParse(str) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  try {
    SRTlib.send("]},");
    return JSON.parse(str);
  } catch (err) {
    SRTlib.send("]},");
    return null;
  }

  SRTlib.send("]},");
}

var cleanedUp = false;

module.exports = /*#__PURE__*/function () {
  function MetaDataStore(opts) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.opts = _extends({
      expires: 24 * 60 * 60 * 1000
    }, opts);
    this.name = "uppyState:" + opts.storeName;

    if (!cleanedUp) {
      cleanedUp = true;
      MetaDataStore.cleanup();
    }

    SRTlib.send("]},");
  }

  var _proto = MetaDataStore.prototype;

  _proto.load = function load() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var savedState = localStorage.getItem(this.name);

    if (!savedState) {
      SRTlib.send("]},");
      return null;
    }

    var data = maybeParse(savedState);

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
  };

  _proto.save = function save(metadata) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var expires = Date.now() + this.opts.expires;
    var state = JSON.stringify({
      metadata: metadata,
      expires: expires
    });
    localStorage.setItem(this.name, state);
    SRTlib.send("]},");
  };

  MetaDataStore.cleanup = function cleanup() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var instanceIDs = findUppyInstances();
    var now = Date.now();
    instanceIDs.forEach(function (id) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var data = localStorage.getItem("uppyState:" + id);

      if (!data) {
        SRTlib.send("]},");
        return null;
      }

      var obj = maybeParse(data);

      if (!obj) {
        SRTlib.send("]},");
        return null;
      }

      if (obj.expires && obj.expires < now) {
        localStorage.removeItem("uppyState:" + id);
      }

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  return MetaDataStore;
}();