const SRTlib = require('SRT-util');

const fs = require('fs');
const path = require('path');
const {PassThrough} = require('stream');
const browserify = require('browserify');
const babelify = require('babelify');
const minify = require('minify-stream');
const disc = require('disc');
const outputPath = path.join(__dirname, '../website/src/disc.html');
function minifyify(filename) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"minifyify","fileName":"${__filename}","paramsNumber":1},`);

  if (filename.endsWith('.js')) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"minifyify"},');

    return minify({
      sourceMap: false,
      toplevel: true,
      compress: {
        unsafe: true
      }
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"minifyify"},');

  return new PassThrough();
    SRTlib.send('{"type":"FUNCTIONEND","function":"minifyify","paramsNumber":1},');

}
const bundler = browserify(path.join(__dirname, '../packages/uppy/index.js'), {
  fullPaths: true,
  standalone: 'Uppy'
});
bundler.transform(babelify);
bundler.transform(minifyify, {
  global: true
});
bundler.bundle().pipe(disc()).pipe(prepend('---\nlayout: false\n---\n')).pipe(fs.createWriteStream(outputPath)).on('error', err => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"bundler.bundle.pipe.pipe.pipe.on","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"bundler.bundle.pipe.pipe.pipe.on"},');

  throw err;
    SRTlib.send('{"type":"FUNCTIONEND","function":"bundler.bundle.pipe.pipe.pipe.on"},');

});
function prepend(text) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"prepend","fileName":"${__filename}","paramsNumber":1},`);

  const stream = new PassThrough();
  stream.write(text);
    SRTlib.send('{"type":"FUNCTIONEND","function":"prepend"},');

  return stream;
    SRTlib.send('{"type":"FUNCTIONEND","function":"prepend","paramsNumber":1},');

}
