const SRTlib = require('SRT-util');

const createStream = require('fs').createWriteStream;
const glob = require('multi-glob').glob;
const chalk = require('chalk');
const path = require('path');
const mkdirp = require('mkdirp');
const notifier = require('node-notifier');
const babelify = require('babelify');
const aliasify = require('aliasify');
const browserify = require('browserify');
const watchify = require('watchify');
const bresolve = require('browser-resolve');
function useSourcePackages(b) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useSourcePackages","fileName":"/website/build-examples.js","paramsNumber":1},`);

  b._bresolve = (id, opts, cb) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"b._bresolve","fileName":"/website/build-examples.js","paramsNumber":3},`);

    bresolve(id, opts, (err, result, pkg) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"bresolve","fileName":"/website/build-examples.js","paramsNumber":3},`);

      if (err) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"bresolve"},');

        return cb(err);
      }
      if ((/packages\/@uppy\/.*?\/lib\//).test(result)) {
        result = result.replace(/packages\/@uppy\/(.*?)\/lib\//, 'packages/@uppy/$1/src/');
      }
      cb(err, result, pkg);
            SRTlib.send('{"type":"FUNCTIONEND","function":"bresolve"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"b._bresolve"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"useSourcePackages","paramsNumber":1},');

}
const webRoot = __dirname;
let srcPattern = `${webRoot}/src/examples/**/app.es6`;
let dstPattern = `${webRoot}/public/examples/**/app.js`;
const watchifyEnabled = process.argv[2] === 'watch';
const browserifyPlugins = [useSourcePackages];
if (watchifyEnabled) {
  browserifyPlugins.push(watchify);
}
if (!watchifyEnabled && process.argv[2]) {
  srcPattern = process.argv[2];
  if (process.argv[3]) {
    dstPattern = process.argv[3];
  }
}
glob(srcPattern, (err, files) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"glob","fileName":"/website/build-examples.js","paramsNumber":2},`);

  if (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"glob"},');

    throw new Error(err);
  }
  if (watchifyEnabled) {
    console.log('--> Watching examples..');
  }
  const muted = new Set();
  files.forEach(file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"/website/build-examples.js","paramsNumber":1},`);

    const b = browserify(file, {
      cache: {},
      packageCache: {},
      debug: true,
      plugin: browserifyPlugins
    });
    b.transform(babelify, {
      root: path.join(__dirname, '..')
    }).transform(aliasify, {
      aliases: {
        '@uppy': `./${path.relative(process.cwd(), path.join(__dirname, '../packages/@uppy'))}`
      }
    });
    b.on('update', bundle).on('error', onError).on('file', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"b.on.on.on","fileName":"/website/build-examples.js","paramsNumber":1},`);

      muted.delete(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"b.on.on.on"},');

    });
    bundle();
    function bundle(ids = []) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"bundle","fileName":"/website/build-examples.js","paramsNumber":1},`);

      ids.forEach(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ids.forEach","fileName":"/website/build-examples.js","paramsNumber":1},`);

        if (!muted.has(id)) {
          console.info(chalk.cyan('change:'), path.relative(process.cwd(), id));
          muted.add(id);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ids.forEach"},');

      });
      const exampleName = path.basename(path.dirname(file));
      const output = dstPattern.replace('**', exampleName);
      const parentDir = path.dirname(output);
      mkdirp.sync(parentDir);
      console.info(chalk.grey(`⏳ building: ${path.relative(process.cwd(), file)}`));
      b.bundle().on('error', onError).pipe(createStream(output)).on('finish', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"b.bundle.on.pipe.on","fileName":"/website/build-examples.js","paramsNumber":0},`);

        console.info(chalk.green(`✓ built: ${path.relative(process.cwd(), file)}`));
                SRTlib.send('{"type":"FUNCTIONEND","function":"b.bundle.on.pipe.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"bundle","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"glob"},');

});
function onError(err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onError","fileName":"/website/build-examples.js","paramsNumber":1},`);

  console.error(chalk.red('✗ error:'), chalk.red(err.message));
  notifier.notify({
    title: 'Build failed:',
    message: err.message
  });
  this.emit('end');
  if (!watchifyEnabled) {
    process.exit(1);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"onError","paramsNumber":1},');

}
