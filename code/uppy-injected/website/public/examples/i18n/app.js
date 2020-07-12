const SRTlib = require('SRT-util');

(function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"/website/public/examples/i18n/app.js","paramsNumber":0},`);

  function r(e, n, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"/website/public/examples/i18n/app.js","paramsNumber":3},`);

    function o(i, f) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"/website/public/examples/i18n/app.js","paramsNumber":2},`);

      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

            return c(i, !0);
          }
          if (u) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

            return u(i, !0);
          }
          var a = new Error("Cannot find module '" + i + "'");
                    SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

          throw (a.code = "MODULE_NOT_FOUND", a);
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"e.i.call","fileName":"/website/public/examples/i18n/app.js","paramsNumber":1},`);

          var n = e[i][1][r];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"e.i.call"},');

          return o(n || r);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"e.i.call"},');

        }, p, p.exports, r, e, n, t);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

      return n[i].exports;
            SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":2},');

    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return o;
        SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":3},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return r;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

})()({
  1: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey###2","fileName":"/website/public/examples/i18n/app.js","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###2"},');

  }, {}]
}, {}, [1]);
