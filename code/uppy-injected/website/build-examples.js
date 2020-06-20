var SRTlib = require('SRT-util');
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
    SRTlib.send(`{ "anonymous": false, "function": "useSourcePackages", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  b._bresolve = (id, opts, cb) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    bresolve(id, opts, (err, result, pkg) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (err) {
                SRTlib.send("]},");

        return cb(err);
      }
      if ((/packages\/@uppy\/.*?\/lib\//).test(result)) {
        result = result.replace(/packages\/@uppy\/(.*?)\/lib\//, 'packages/@uppy/$1/src/');
      }
      cb(err, result, pkg);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

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
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (err) throw new Error(err);
  if (watchifyEnabled) {
    console.log('--> Watching examples..');
  }
  const muted = new Set();
  files.forEach(file => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      muted.delete(file);
            SRTlib.send("]},");

    });
    bundle();
    function bundle(ids = []) {
            SRTlib.send(`{ "anonymous": false, "function": "bundle", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      ids.forEach(id => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!muted.has(id)) {
          console.info(chalk.cyan('change:'), path.relative(process.cwd(), id));
          muted.add(id);
        }
                SRTlib.send("]},");

      });
      const exampleName = path.basename(path.dirname(file));
      const output = dstPattern.replace('**', exampleName);
      const parentDir = path.dirname(output);
      mkdirp.sync(parentDir);
      console.info(chalk.grey(`⏳ building: ${path.relative(process.cwd(), file)}`));
      b.bundle().on('error', onError).pipe(createStream(output)).on('finish', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        console.info(chalk.green(`✓ built: ${path.relative(process.cwd(), file)}`));
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

});
function onError(err) {
    SRTlib.send(`{ "anonymous": false, "function": "onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  console.error(chalk.red('✗ error:'), chalk.red(err.message));
  notifier.notify({
    title: 'Build failed:',
    message: err.message
  });
  this.emit('end');
  if (!watchifyEnabled) {
    process.exit(1);
  }
    SRTlib.send("]},");

}
