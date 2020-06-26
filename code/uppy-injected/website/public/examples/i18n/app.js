const SRTlib = require('SRT-util');

(function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

  function r(e, n, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":3},`);

    function o(i, f) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":2},`);

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
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"e.i.call","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }, {}]
}, {}, [1]);
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXhhbXBsZXMvaTE4bi9hcHAuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSJdfQ==
