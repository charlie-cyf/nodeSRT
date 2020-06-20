var SRTlib = require('SRT-util');
const chalk = require('chalk');
const babel = require('@babel/core');
const {promisify} = require('util');
const glob = promisify(require('glob'));
const mkdirp = promisify(require('mkdirp'));
const fs = require('fs');
const path = require('path');
const transformFile = promisify(babel.transformFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);
const SOURCE = 'packages/{*,@uppy/*}/src/**/*.js';
const IGNORE = /\.test\.js$|__mocks__|companion\//;
const META_FILES = ['babel.config.js', 'package.json', 'package-lock.json', 'bin/build-lib.js'];
function lastModified(file) {
    SRTlib.send(`{ "anonymous": false, "function": "lastModified", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return stat(file).then(s => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return s.mtime;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
async function buildLib() {
    SRTlib.send(`{ "anonymous": false, "function": "buildLib", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const metaMtimes = await Promise.all(META_FILES.map(filename => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return lastModified(path.join(__dirname, '..', filename));
        SRTlib.send("]},");

  }));
  const metaMtime = Math.max(...metaMtimes);
  const files = await glob(SOURCE);
  for (const file of files) {
    if (IGNORE.test(file)) continue;
    const libFile = file.replace('/src/', '/lib/');
    if (!process.env.FRESH) {
      const srcMtime = await lastModified(file);
      const libMtime = await lastModified(libFile).catch(() => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return 0;
                SRTlib.send("]},");

      });
      if (srcMtime < libMtime && metaMtime < libMtime) {
        continue;
      }
    }
    const {code, map} = await transformFile(file, {});
    await mkdirp(path.dirname(libFile));
    await Promise.all([writeFile(libFile, code), writeFile(libFile + '.map', JSON.stringify(map))]);
    console.log(chalk.green('Compiled lib:'), chalk.magenta(libFile));
  }
    SRTlib.send("]},");

}
console.log('Using Babel version:', require('@babel/core/package.json').version);
buildLib().catch(err => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  console.error(err.stack);
  process.exit(1);
    SRTlib.send("]},");

});
