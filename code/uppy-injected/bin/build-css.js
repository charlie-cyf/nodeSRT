const SRTlib = require('SRT-util');

const sass = require('node-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const safeImportant = require('postcss-safe-important')
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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleErr","fileName":"${__filename}","paramsNumber":1},`);

  console.error(chalk.red('✗ Error:'), chalk.red(err.message));
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleErr","paramsNumber":1},');

}
async function compileCSS() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"compileCSS","fileName":"${__filename}","paramsNumber":0},`);

  const files = await glob('packages/{,@uppy/}*/src/style.scss');
  for (const file of files) {
    const scssResult = await renderScss({
      file,
      importedFiles: new Set(),
      importer(url, from, done) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"scssResult.renderScss.importer","fileName":"${__filename}","paramsNumber":3},`);

        resolve(url, {
          basedir: path.dirname(from),
          filename: from,
          extensions: ['.scss']
        }, (err, res) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"scssResult.renderScss.importer.resolve","fileName":"${__filename}","paramsNumber":2},`);

          if (err) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"scssResult.renderScss.importer.resolve"},');

            return done(err);
          }
          res = fs.realpathSync(res);
          if (this.options.importedFiles.has(res)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"scssResult.renderScss.importer.resolve"},');

            return done({
              contents: ''
            });
          }
          this.options.importedFiles.add(res);
          done({
            file: res
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"scssResult.renderScss.importer.resolve"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"scssResult.renderScss.importer"},');

      }
    });
    const postcssResult = await postcss([autoprefixer]).process(scssResult.css, {
      from: file
    });
    postcssResult.warnings().forEach(function (warn) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"postcssResult.warnings.forEach","fileName":"${__filename}","paramsNumber":1},`);

      console.warn(warn.toString());
            SRTlib.send('{"type":"FUNCTIONEND","function":"postcssResult.warnings.forEach"},');

    });
    const outdir = path.join(path.dirname(file), '../dist');
    // Save the `uppy` package's CSS as `uppy.css`,
    // `@uppy/robodog` as `robodog.css`,
    // the rest as `style.css`.
    // const outfile = path.join(outdir, outdir.includes(path.normalize('packages/uppy/')) ? 'uppy.css' : 'style.css')
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"minifiedResult.warnings.forEach","fileName":"${__filename}","paramsNumber":1},`);

      console.warn(warn.toString());
            SRTlib.send('{"type":"FUNCTIONEND","function":"minifiedResult.warnings.forEach"},');

    });
    await writeFile(outfile.replace(/\.css$/, '.min.css'), minifiedResult.css);
    console.info(chalk.green('✓ Minified Bundle CSS:'), chalk.magenta(path.relative(cwd, outfile).replace(/\.css$/, '.min.css')));
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"compileCSS","paramsNumber":0},');

}
compileCSS().then(() => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"compileCSS.then","fileName":"${__filename}","paramsNumber":0},`);

  console.info(chalk.yellow('✓ CSS Bundles 🎉'));
    SRTlib.send('{"type":"FUNCTIONEND","function":"compileCSS.then"},');

}, handleErr);
