var SRTlib = require('SRT-util');
const sass = require('node-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const chalk = require('chalk');
const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const resolve = require('resolve');
const mkdirp = promisify(require('mkdirp'));
const glob = promisify(require('glob'));
const renderScss = promisify(sass.render);
const writeFile = promisify(fs.writeFile);
const cwd = process.cwd();
function handleErr(err) {
    SRTlib.send(`{ "anonymous": false, "function": "handleErr", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  console.error(chalk.red('✗ Error:'), chalk.red(err.message));
    SRTlib.send("]},");

}
async function compileCSS() {
    SRTlib.send(`{ "anonymous": false, "function": "compileCSS", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const files = await glob('packages/{,@uppy/}*/src/style.scss');
  for (const file of files) {
    const scssResult = await renderScss({
      file,
      importedFiles: new Set(),
      importer(url, from, done) {
                SRTlib.send(`{ "anonymous": true, "function": "scssResult.renderScss.importer", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        resolve(url, {
          basedir: path.dirname(from),
          filename: from,
          extensions: ['.scss']
        }, (err, res) => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (err) {
                        SRTlib.send("]},");

            return done(err);
          }
          res = fs.realpathSync(res);
          if (this.options.importedFiles.has(res)) {
                        SRTlib.send("]},");

            return done({
              contents: ''
            });
          }
          this.options.importedFiles.add(res);
          done({
            file: res
          });
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }
    });
    const postcssResult = await postcss([autoprefixer]).process(scssResult.css, {
      from: file
    });
    postcssResult.warnings().forEach(function (warn) {
            SRTlib.send(`{ "anonymous": true, "function": "forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      console.warn(warn.toString());
            SRTlib.send("]},");

    });
    const outdir = path.join(path.dirname(file), '../dist');
    let outfile = path.join(outdir, 'style.css');
    if (outdir.includes(path.normalize('packages/uppy/'))) {
      outfile = path.join(outdir, 'uppy.css');
    } else if (outdir.includes(path.normalize('packages/@uppy/robodog/'))) {
      outfile = path.join(outdir, 'robodog.css');
    }
    await mkdirp(outdir);
    await writeFile(outfile, postcssResult.css);
    console.info(chalk.green('✓ Built Uppy CSS:'), chalk.magenta(path.relative(cwd, outfile)));
    const minifiedResult = await postcss([cssnano({
      safe: true
    })]).process(postcssResult.css, {
      from: outfile
    });
    minifiedResult.warnings().forEach(function (warn) {
            SRTlib.send(`{ "anonymous": true, "function": "forEach2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      console.warn(warn.toString());
            SRTlib.send("]},");

    });
    await writeFile(outfile.replace(/\.css$/, '.min.css'), minifiedResult.css);
    console.info(chalk.green('✓ Minified Bundle CSS:'), chalk.magenta(path.relative(cwd, outfile).replace(/\.css$/, '.min.css')));
  }
    SRTlib.send("]},");

}
compileCSS().then(() => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  console.info(chalk.yellow('✓ CSS Bundles 🎉'));
    SRTlib.send("]},");

}, handleErr);
