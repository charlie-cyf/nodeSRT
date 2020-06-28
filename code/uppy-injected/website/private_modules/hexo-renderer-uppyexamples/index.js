const SRTlib = require('SRT-util');

// We listen for hexo changes on *.es6 extensions.
// We fire our own build-examples.js and tell it which example to build -
// that script then writes temporary js files
// which we return via the callback.
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var uuid = require('uuid');
var webRoot = path.dirname(path.dirname(__dirname));
var browserifyScript = webRoot + '/build-examples.js';
function parseExamplesBrowserify(data, options, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"parseExamplesBrowserify","fileName":"${__filename}","paramsNumber":3},`);

  if (!data || !data.path) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"parseExamplesBrowserify"},');

    return callback(null);
  }
  if (!data.path.match(/\/examples\//)) {
    callback(null, data.text);
  }
  // var slug    = data.path.replace(/[^a-zA-Z0-9\_\.]/g, '-')
  var slug = uuid.v4();
  var tmpFile = '/tmp/' + slug + '.js';
  var cmd = 'node ' + browserifyScript + ' ' + data.path + ' ' + tmpFile + ' --colors';
  // hexo.log.i('hexo-renderer-uppyexamples: change detected in examples. running: ' + cmd);
  exec(cmd, function (err, stdout, stderr) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exec","fileName":"${__filename}","paramsNumber":3},`);

    if (err) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"exec"},');

      return callback(err);
    }
    hexo.log.i('hexo-renderer-uppyexamples: ' + stdout.trim());
    fs.readFile(tmpFile, 'utf-8', function (err, bundledJS) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exec.fs.readFile","fileName":"${__filename}","paramsNumber":2},`);

      if (err) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"exec.fs.readFile"},');

        return callback(err);
      }
      // hexo.log.i('hexo-renderer-uppyexamples: read: ' + tmpFile);
      // @TODO remove this hack
      // once this is resolved: https://github.com/hexojs/hexo/issues/1663
      // bundledJS = bundledJS.replace(/</g, ' < ');
      bundledJS = bundledJS.replace(/<(?!=)/g, ' < ');
      callback(null, bundledJS);
            SRTlib.send('{"type":"FUNCTIONEND","function":"exec.fs.readFile"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"exec"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"parseExamplesBrowserify","paramsNumber":3},');

}
hexo.extend.renderer.register('es6', 'js', parseExamplesBrowserify);
