const SRTlib = require('SRT-util');

const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const createWriteStream = require('fs-write-stream-atomic');
const browserify = require('browserify');
const watchify = require('watchify');
const aliasify = require('aliasify');
const babelify = require('babelify');
const port = process.env.PORT || 8080;
const b = browserify({
  cache: {},
  packageCache: {},
  debug: true,
  entries: path.join(__dirname, './main.js')
});
b.plugin(watchify);
b.transform(babelify);
b.transform(aliasify, {
  aliases: {
    '@uppy': path.join(__dirname, '../../packages/@uppy')
  }
});
function bundle() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"bundle","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"bundle"},');

  return b.bundle((err, data) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.b.bundle.pipe.b.bundle","fileName":"${__filename}","paramsNumber":2},`);

    if (err) console.error(err.stack); else console.log('bundle complete');
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.b.bundle.pipe.b.bundle"},');

  }).pipe(createWriteStream(path.join(__dirname, './bundle.js')));
    SRTlib.send('{"type":"FUNCTIONEND","function":"bundle","paramsNumber":0},');

}
b.on('log', console.log);
b.on('update', bundle);
b.on('error', console.error);
fs.createReadStream(path.join(__dirname, '../../packages/uppy/dist/uppy.min.css')).pipe(fs.createWriteStream(path.join(__dirname, './uppy.min.css')));
console.log('bundling...');
bundle().on('finish', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"bundle.on","fileName":"${__filename}","paramsNumber":0},`);

  // Start the PHP delevopment server.
  spawn('php', ['-S', `localhost:${port}`], {
    stdio: 'inherit'
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"bundle.on"},');

});
