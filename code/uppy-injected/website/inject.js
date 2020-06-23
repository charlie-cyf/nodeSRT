var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {exec} = require('child_process');
const YAML = require('js-yaml');
const {promisify} = require('util');
const gzipSize = require('gzip-size');
const prettierBytes = require('@transloadit/prettier-bytes');
const browserify = require('browserify');
const touch = require('touch');
const glob = require('glob');
const LocaleCode = require('locale-code');
const webRoot = __dirname;
const uppyRoot = path.join(__dirname, '../packages/uppy');
const robodogRoot = path.join(__dirname, '../packages/@uppy/robodog');
const localesRoot = path.join(__dirname, '../packages/@uppy/locales');
const configPath = path.join(webRoot, '/themes/uppy/_config.yml');
const {version} = require(path.join(uppyRoot, '/package.json'));
const defaultConfig = {
  comment: 'Auto updated by inject.js',
  uppy_version_anchor: '001',
  uppy_version: '0.0.1',
  uppy_bundle_kb_sizes: {},
  config: {}
};
const packages = ['uppy', '@uppy/robodog', '@uppy/react', '@uppy/core', '@uppy/aws-s3', '@uppy/aws-s3-multipart', '@uppy/dashboard', '@uppy/drag-drop', '@uppy/dropbox', '@uppy/file-input', '@uppy/form', '@uppy/golden-retriever', '@uppy/google-drive', '@uppy/informer', '@uppy/instagram', '@uppy/progress-bar', '@uppy/screen-capture', '@uppy/status-bar', '@uppy/thumbnail-generator', '@uppy/transloadit', '@uppy/tus', '@uppy/url', '@uppy/webcam', '@uppy/xhr-upload', '@uppy/store-default', '@uppy/store-redux'];
const excludes = {
  '@uppy/react': ['react']
};
inject().catch(err => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  console.error(err);
  process.exit(1);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

});
async function getMinifiedSize(pkg, name) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMinifiedSize","fileName":"${__filename}","paramsNumber":2},`);

  const b = browserify(pkg);
  const packageJSON = fs.readFileSync(path.join(pkg, 'package.json'));
  const version = JSON.parse(packageJSON).version;
  if (name !== '@uppy/core' && name !== 'uppy') {
    b.exclude('@uppy/core');
    b.exclude('preact');
  }
  if (excludes[name]) {
    b.exclude(excludes[name]);
  }
  b.plugin('tinyify');
  const bundle = await promisify(b.bundle).call(b);
  const gzipped = await gzipSize(bundle);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMinifiedSize"},');

  return {
    minified: bundle.length,
    gzipped,
    version
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMinifiedSize","paramsNumber":2},');

}
async function injectSizes(config) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"injectSizes","fileName":"${__filename}","paramsNumber":1},`);

  console.info(chalk.grey('Generating bundle sizes…'));
  const padTarget = packages.reduce((max, cur) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return Math.max(max, cur.length);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }, 0) + 2;
  const sizesPromise = Promise.all(packages.map(async pkg => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    const result = await getMinifiedSize(path.join(__dirname, '../packages', pkg), pkg);
    console.info(chalk.green(`  ✓ ${pkg}: ${(' ').repeat(padTarget - pkg.length)}` + `${prettierBytes(result.minified)} min`.padEnd(10) + ` / ${prettierBytes(result.gzipped)} gz`));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    return Object.assign(result, {
      prettyMinified: prettierBytes(result.minified),
      prettyGzipped: prettierBytes(result.gzipped)
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  })).then(list => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    const map = {};
    list.forEach((size, i) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":2},`);

      map[packages[i]] = size;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    return map;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
  config.uppy_bundle_kb_sizes = await sizesPromise;
    SRTlib.send('{"type":"FUNCTIONEND","function":"injectSizes","paramsNumber":1},');

}
async function injectBundles() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"injectBundles","fileName":"${__filename}","paramsNumber":0},`);

  const cmds = [`mkdir -p ${path.join(webRoot, '/themes/uppy/source/uppy')}`, `mkdir -p ${path.join(webRoot, '/themes/uppy/source/uppy/locales')}`, `cp -vfR ${path.join(uppyRoot, '/dist/*')} ${path.join(webRoot, '/themes/uppy/source/uppy/')}`, `cp -vfR ${path.join(robodogRoot, '/dist/*')} ${path.join(webRoot, '/themes/uppy/source/uppy/')}`, `cp -vfR ${path.join(localesRoot, '/dist/*')} ${path.join(webRoot, '/themes/uppy/source/uppy/locales')}`].join(' && ');
  const {stdout} = await promisify(exec)(cmds);
  stdout.trim().split('\n').forEach(function (line) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"split.forEach","fileName":"${__filename}","paramsNumber":1},`);

    console.info(chalk.green('✓ injected: '), chalk.grey(line));
        SRTlib.send('{"type":"FUNCTIONEND","function":"split.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"injectBundles","paramsNumber":0},');

}
async function injectGhStars() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"injectGhStars","fileName":"${__filename}","paramsNumber":0},`);

  const opts = {};
  if (('GITHUB_TOKEN' in process.env)) {
    opts.auth = process.env.GITHUB_TOKEN;
  }
  const {Octokit} = require('@octokit/rest');
  const octokit = new Octokit(opts);
  const {headers, data} = await octokit.repos.get({
    owner: 'transloadit',
    repo: 'uppy'
  });
  console.log(`${headers['x-ratelimit-remaining']} requests remaining until we hit GitHub ratelimiter`);
  const dstpath = path.join(webRoot, 'themes', 'uppy', 'layout', 'partials', 'generated_stargazers.ejs');
  fs.writeFileSync(dstpath, String(data.stargazers_count), 'utf-8');
  console.log(`${data.stargazers_count} stargazers written to '${dstpath}'`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"injectGhStars","paramsNumber":0},');

}
async function injectMarkdown() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"injectMarkdown","fileName":"${__filename}","paramsNumber":0},`);

  const sources = {
    '.github/ISSUE_TEMPLATE/integration_help.md': 'src/_template/integration_help.md',
    '.github/CONTRIBUTING.md': 'src/_template/contributing.md'
  };
  for (const src in sources) {
    const dst = sources[src];
    const srcpath = path.join(uppyRoot, `/../../${src}`);
    const dstpath = path.join(webRoot, dst);
    const parts = fs.readFileSync(srcpath, 'utf-8').split(/---\s*\n/);
    if (parts.length >= 3) {
      parts.shift();
      parts.shift();
    }
    let content = `<!-- WARNING! This file was injected. Please edit in "${src}" instead and run "${path.basename(__filename)}" -->\n\n`;
    content += parts.join('---\n');
    fs.writeFileSync(dstpath, content, 'utf-8');
    console.info(chalk.green('✓ injected: '), chalk.grey(srcpath));
  }
  touch(path.join(webRoot, '/src/support.md'));
    SRTlib.send('{"type":"FUNCTIONEND","function":"injectMarkdown","paramsNumber":0},');

}
function injectLocaleList() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"injectLocaleList","fileName":"${__filename}","paramsNumber":0},`);

  const mdTable = [`<!-- WARNING! This file was automatically injected. Please run "${path.basename(__filename)}" to re-generate -->\n\n`, '| %count% Locales | NPM                | CDN                 | Source on GitHub |', '| --------------- | ------------------ | ------------------- | ---------------- |'];
  const mdRows = [];
  const localeList = {};
  const localePackagePath = path.join(localesRoot, 'src', '*.js');
  const localePackageVersion = require(path.join(localesRoot, 'package.json')).version;
  glob.sync(localePackagePath).forEach(localePath => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    const localeName = path.basename(localePath, '.js');
    if (localeName === 'es_GL') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      return;
    }
    let localeNameWithDash = localeName.replace(/_/g, '-');
    const parts = localeNameWithDash.split('-');
    let variant = '';
    if (parts.length > 2) {
      const lang = parts.shift();
      const country = parts.shift();
      variant = parts.join(', ');
      localeNameWithDash = `${lang}-${country}`;
    }
    const languageName = LocaleCode.getLanguageName(localeNameWithDash);
    const countryName = LocaleCode.getCountryName(localeNameWithDash);
    const npmPath = `<code class="raw"><a href="https://www.npmjs.com/package/@uppy/locales">@uppy/locales</a>/lib/${localeName}</code>`;
    const cdnPath = `[\`${localeName}.min.js\`](https://transloadit.edgly.net/releases/uppy/locales/v${localePackageVersion}/${localeName}.min.js)`;
    const githubSource = `[\`${localeName}.js\`](https://github.com/transloadit/uppy/blob/master/packages/%40uppy/locales/src/${localeName}.js)`;
    const mdTableRow = `| ${languageName}<br/> <small>${countryName}</small>${variant ? `<br /><small>(${variant})</small>` : ''} | ${npmPath} | ${cdnPath} | ✏️ ${githubSource} |`;
    mdRows.push(mdTableRow);
    localeList[localeName] = `${languageName} (${countryName}${variant ? ` ${variant}` : ''})`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
  const resultingMdTable = mdTable.concat(mdRows.sort()).join('\n').replace('%count%', mdRows.length);
  const dstpath = path.join(webRoot, 'src', '_template', 'list_of_locale_packs.md');
  const localeListDstPath = path.join(webRoot, 'src', 'examples', 'locale_list.json');
  fs.writeFileSync(dstpath, resultingMdTable, 'utf-8');
  console.info(chalk.green('✓ injected: '), chalk.grey(dstpath));
  fs.writeFileSync(localeListDstPath, JSON.stringify(localeList), 'utf-8');
  console.info(chalk.green('✓ injected: '), chalk.grey(localeListDstPath));
    SRTlib.send('{"type":"FUNCTIONEND","function":"injectLocaleList","paramsNumber":0},');

}
async function readConfig() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"readConfig","fileName":"${__filename}","paramsNumber":0},`);

  try {
    const buf = await promisify(fs.readFile)(configPath, 'utf8');
        SRTlib.send('{"type":"FUNCTIONEND","function":"readConfig"},');

    return YAML.safeLoad(buf);
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"readConfig"},');

    return {};
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"readConfig","paramsNumber":0},');

}
async function inject() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"inject","fileName":"${__filename}","paramsNumber":0},`);

  const config = await readConfig();
  await injectGhStars();
  await injectMarkdown();
  injectLocaleList();
  config.uppy_version = version;
  config.uppy_version_anchor = version.replace(/[^\d]+/g, '');
  await injectSizes(config);
  const saveConfig = Object.assign({}, defaultConfig, config);
  await promisify(fs.writeFile)(configPath, YAML.safeDump(saveConfig), 'utf-8');
  console.info(chalk.green('✓ rewritten: '), chalk.grey(configPath));
  try {
    await injectBundles();
  } catch (error) {
    console.error(chalk.red('x failed to inject: '), chalk.grey('uppy bundle into site, because: ' + error));
    process.exit(1);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"inject","paramsNumber":0},');

}