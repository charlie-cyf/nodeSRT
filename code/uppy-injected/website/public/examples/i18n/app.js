var SRTlib = require('SRT-util');
(function () {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function r(e, n, t) {
        SRTlib.send(`{ "anonymous": false, "function": "r", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function o(i, f) {
            SRTlib.send(`{ "anonymous": false, "function": "o", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) {
                        SRTlib.send("]},");

            return c(i, !0);
          }
          if (u) {
                        SRTlib.send("]},");

            return u(i, !0);
          }
          var a = new Error("Cannot find module '" + i + "'");
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw (a.code = "MODULE_NOT_FOUND", a);
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
                    SRTlib.send(`{ "anonymous": true, "function": "e.i.call", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var n = e[i][1][r];
                    SRTlib.send("]},");

          return o(n || r);
                    SRTlib.send("]},");

        }, p, p.exports, r, e, n, t);
      }
            SRTlib.send("]},");

      return n[i].exports;
            SRTlib.send("]},");

    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        SRTlib.send("]},");

    return o;
        SRTlib.send("]},");

  }
    SRTlib.send("]},");

  return r;
    SRTlib.send("]},");

})()({
  1: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        SRTlib.send("]},");

  }, {}]
}, {}, [1]);
