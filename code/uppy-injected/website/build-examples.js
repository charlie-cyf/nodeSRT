/**
* build-examples.js
* --------
* Searches for each example's `js/app.es6` file.
* Creates a new watchify instance for each `app.es6`.
* Changes to Uppy's source will trigger rebundling.
*
* Run as:
*
* build-examples.js               # to build all examples one-off
* build-examples.js watch         # to keep rebuilding examples with an internal watchify
* build-examples.js <path>        # to build just one example app.es6
* build-examples.js <path> <path> # to build just one example app.es6 to a specific location
*
* Note:
* Since each example is dependent on Uppy's source,
* changing one source file causes the 'file changed'
* notification to fire multiple times. To stop this,
* files are added to a 'muted' Set that is checked
* before announcing a changed file.  It's removed from
* the Set when it has been bundled.
*/
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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useSourcePackages","fileName":"${__filename}","paramsNumber":1},`);

  b._bresolve = (id, opts, cb) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

    bresolve(id, opts, (err, result, pkg) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":3},`);

      if (err) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        return cb(err);
      }
      if ((/packages\/@uppy\/.*?\/lib\//).test(result)) {
        result = result.replace(/packages\/@uppy\/(.*?)\/lib\//, 'packages/@uppy/$1/src/');
      }
      cb(err, result, pkg);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

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
// Instead of 'watch', build-examples.js can also take a path as cli argument.
// In this case we'll only bundle the specified path/pattern
if (!watchifyEnabled && process.argv[2]) {
  srcPattern = process.argv[2];
  if (process.argv[3]) {
    dstPattern = process.argv[3];
  }
}
// Find each app.es6 file with glob.
glob(srcPattern, (err, files) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":2},`);

  if (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    throw new Error(err);
  }
  if (watchifyEnabled) {
    console.log('--> Watching examples..');
  }
  const muted = new Set();
  // Create a new watchify instance for each file.
  files.forEach(file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    const b = browserify(file, {
      cache: {},
      packageCache: {},
      debug: true,
      plugin: browserifyPlugins
    });
    // Aliasing for using `require('uppy')`, etc.
    b.transform(babelify, {
      root: path.join(__dirname, '..')
    }).transform(aliasify, {
      aliases: {
        '@uppy': `./${path.relative(process.cwd(), path.join(__dirname, '../packages/@uppy'))}`
      }
    });
    // Listeners for changes, errors, and completion.
    b.on('update', bundle).on('error', onError).on('file', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

      // When file completes, unmute it.
      muted.delete(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    });
    // Call bundle() manually to start watch processes.
    bundle();
    /**
    * Creates bundle and writes it to static and public folders.
    * Changes to
    *
    * @param  {[type]} ids [description]
    * @returns {[type]}     [description]
    */
    function bundle(ids = []) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"bundle","fileName":"${__filename}","paramsNumber":1},`);

      ids.forEach(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

        if (!muted.has(id)) {
          console.info(chalk.cyan('change:'), path.relative(process.cwd(), id));
          muted.add(id);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      });
      const exampleName = path.basename(path.dirname(file));
      const output = dstPattern.replace('**', exampleName);
      const parentDir = path.dirname(output);
      mkdirp.sync(parentDir);
      console.info(chalk.grey(`⏳ building: ${path.relative(process.cwd(), file)}`));
      b.bundle().on('error', onError).pipe(createStream(output)).on('finish', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

        console.info(chalk.green(`✓ built: ${path.relative(process.cwd(), file)}`));
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"bundle","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

});
/**
* Logs to console and shows desktop notification on error.
* Calls `this.emit(end)` to stop bundling.
*
* @param  {object} err Error object
*/
function onError(err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onError","fileName":"${__filename}","paramsNumber":1},`);

  console.error(chalk.red('✗ error:'), chalk.red(err.message));
  notifier.notify({
    title: 'Build failed:',
    message: err.message
  });
  this.emit('end');
  // When running without watch, process.exit(1) on error
  if (!watchifyEnabled) {
    process.exit(1);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"onError","paramsNumber":1},');

}
