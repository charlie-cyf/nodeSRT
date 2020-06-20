var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const {PassThrough} = require('stream');
const replace = require('replacestream');
const browserify = require('browserify');
const babelify = require('babelify');
const minify = require('minify-stream');
const disc = require('disc');
const outputPath = path.join(__dirname, '../website/src/disc.html');
function minifyify(filename) {
    SRTlib.send(`{ "anonymous": false, "function": "minifyify", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (filename.endsWith('.js')) {
        SRTlib.send("]},");

    return minify({
      sourceMap: false,
      toplevel: true,
      compress: {
        unsafe: true
      }
    });
  }
    SRTlib.send("]},");

  return new PassThrough();
    SRTlib.send("]},");

}
const bundler = browserify(path.join(__dirname, '../packages/uppy/index.js'), {
  fullPaths: true,
  standalone: 'Uppy'
});
bundler.transform(babelify);
bundler.transform(minifyify, {
  global: true
});
bundler.bundle().pipe(disc()).pipe(prepend('---\nlayout: false\n---\n')).pipe(replace('http://', 'https://', {
  limit: 1
})).pipe(fs.createWriteStream(outputPath)).on('error', err => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  throw err;
    SRTlib.send("]},");

    SRTlib.send("]},");

});
function prepend(text) {
    SRTlib.send(`{ "anonymous": false, "function": "prepend", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const stream = new PassThrough();
  stream.write(text);
    SRTlib.send("]},");

  return stream;
    SRTlib.send("]},");

}
