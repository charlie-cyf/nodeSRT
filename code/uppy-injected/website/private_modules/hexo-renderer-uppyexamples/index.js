const SRTlib = require('SRT-util');

var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var uuid = require('uuid');
var webRoot = path.dirname(path.dirname(__dirname));
var browserifyScript = webRoot + '/build-examples.js';
function parseExamplesBrowserify(data, options, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"parseExamplesBrowserify","fileName":"/website/private_modules/hexo-renderer-uppyexamples/index.js","paramsNumber":3},`);

  if (!data || !data.path) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"parseExamplesBrowserify"},');

    return callback(null);
  }
  if (!data.path.match(/\/examples\//)) {
    callback(null, data.text);
  }
  var slug = uuid.v4();
  var tmpFile = '/tmp/' + slug + '.js';
  var cmd = 'node ' + browserifyScript + ' ' + data.path + ' ' + tmpFile + ' --colors';
  exec(cmd, function (err, stdout, stderr) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exec","fileName":"/website/private_modules/hexo-renderer-uppyexamples/index.js","paramsNumber":3},`);

    if (err) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"exec"},');

      return callback(err);
    }
    hexo.log.i('hexo-renderer-uppyexamples: ' + stdout.trim());
    fs.readFile(tmpFile, 'utf-8', function (err, bundledJS) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exec.fs.readFile","fileName":"/website/private_modules/hexo-renderer-uppyexamples/index.js","paramsNumber":2},`);

      if (err) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"exec.fs.readFile"},');

        return callback(err);
      }
      bundledJS = bundledJS.replace(/<(?!=)/g, ' < ');
      callback(null, bundledJS);
            SRTlib.send('{"type":"FUNCTIONEND","function":"exec.fs.readFile"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"exec"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"parseExamplesBrowserify","paramsNumber":3},');

}
hexo.extend.renderer.register('es6', 'js', parseExamplesBrowserify);
