var SRTlib = require('SRT-util');
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var uuid = require('uuid');
var webRoot = path.dirname(path.dirname(__dirname));
var browserifyScript = webRoot + '/build-examples.js';
function parseExamplesBrowserify(data, options, callback) {
    SRTlib.send(`{ "anonymous": false, "function": "parseExamplesBrowserify", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!data || !data.path) {
        SRTlib.send('], "end": "parseExamplesBrowserify"},');

    return callback(null);
  }
  if (!data.path.match(/\/examples\//)) {
    callback(null, data.text);
  }
  var slug = uuid.v4();
  var tmpFile = '/tmp/' + slug + '.js';
  var cmd = 'node ' + browserifyScript + ' ' + data.path + ' ' + tmpFile + ' --colors';
  exec(cmd, function (err, stdout, stderr) {
        SRTlib.send(`{ "anonymous": true, "function": "exec2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (err) {
            SRTlib.send('], "end": "exec2"},');

      return callback(err);
    }
    hexo.log.i('hexo-renderer-uppyexamples: ' + stdout.trim());
    fs.readFile(tmpFile, 'utf-8', function (err, bundledJS) {
            SRTlib.send(`{ "anonymous": true, "function": "exec", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
                SRTlib.send('], "end": "exec"},');

        return callback(err);
      }
      bundledJS = bundledJS.replace(/<(?!=)/g, ' < ');
      callback(null, bundledJS);
            SRTlib.send('], "end": "exec"},');

    });
        SRTlib.send('], "end": "exec2"},');

  });
    SRTlib.send('], "end": "parseExamplesBrowserify"},');

}
hexo.extend.renderer.register('es6', 'js', parseExamplesBrowserify);
