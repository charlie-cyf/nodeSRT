var SRTlib = require('SRT-util');
var fs = require('fs');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var babelify = require('babelify');
var tinyify = require('tinyify');
var browserify = require('browserify');
var exorcist = require('exorcist');
var glob = require('glob');
var path = require('path');
function handleErr(err) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  console.error(chalk.red('✗ Error:'), chalk.red(err.message));
    SRTlib.send("]},");

}
function buildBundle(srcFile, bundleFile, {minify = false, standalone = ''} = {}) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  var b = browserify(srcFile, {
    debug: true,
    standalone
  });
  if (minify) {
    b.plugin(tinyify);
  }
  b.transform(babelify);
  b.on('error', handleErr);
    SRTlib.send("]},");

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    b.bundle().pipe(exorcist(bundleFile + '.map')).pipe(fs.createWriteStream(bundleFile), 'utf8').on('error', handleErr).on('finish', function () {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.pipe.pipe.on.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (minify) {
        console.info(chalk.green(`✓ Built Minified Bundle [${standalone}]:`), chalk.magenta(bundleFile));
      } else {
        console.info(chalk.green(`✓ Built Bundle [${standalone}]:`), chalk.magenta(bundleFile));
      }
      resolve();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
mkdirp.sync('./packages/uppy/dist');
mkdirp.sync('./packages/@uppy/robodog/dist');
mkdirp.sync('./packages/@uppy/locales/dist');
const methods = [buildBundle('./packages/uppy/bundle.js', './packages/uppy/dist/uppy.js', {
  standalone: 'Uppy'
}), buildBundle('./packages/uppy/bundle.js', './packages/uppy/dist/uppy.min.js', {
  standalone: 'Uppy',
  minify: true
}), buildBundle('./packages/@uppy/robodog/bundle.js', './packages/@uppy/robodog/dist/robodog.js', {
  standalone: 'Robodog'
}), buildBundle('./packages/@uppy/robodog/bundle.js', './packages/@uppy/robodog/dist/robodog.min.js', {
  standalone: 'Robodog',
  minify: true
})];
const localePackagePath = path.join(__dirname, '..', 'packages', '@uppy', 'locales', 'src', '*.js');
glob.sync(localePackagePath).forEach(localePath => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const localeName = path.basename(localePath, '.js');
  methods.push(buildBundle(`./packages/@uppy/locales/src/${localeName}.js`, `./packages/@uppy/locales/dist/${localeName}.min.js`, {
    minify: true
  }));
    SRTlib.send("]},");

});
Promise.all(methods).then(function () {
    SRTlib.send(`{ "anonymous": true, "function": "then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  console.info(chalk.yellow('✓ JS bundles 🎉'));
    SRTlib.send("]},");

});
