const SRTlib = require('SRT-util');

const glob = require('glob');
const Uppy = require('../packages/@uppy/core');
const chalk = require('chalk');
const path = require('path');
const stringifyObject = require('stringify-object');
const fs = require('fs');
const uppy = Uppy();
let localePack = {};
const plugins = {};
const sources = {};
console.warn('\n--> Make sure to run `npm run build:lib` for this locale script to work properly. ');
const mode = process.argv[2];
if (mode === 'build') {
  build();
} else if (mode === 'test') {
  test();
} else {
  throw new Error("First argument must be either 'build' or 'test'");
}
function getSources(pluginName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSources","fileName":"${__filename}","paramsNumber":1},`);

  const dependencies = {
    core: ['provider-views']
  };
  const globPath = path.join(__dirname, '..', 'packages', '@uppy', pluginName, 'lib', '**', '*.js');
  let contents = glob.sync(globPath).map(file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"contents.glob.sync.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"contents.glob.sync.map"},');

    return fs.readFileSync(file, 'utf-8');
        SRTlib.send('{"type":"FUNCTIONEND","function":"contents.glob.sync.map"},');

  });
  if (dependencies[pluginName]) {
    dependencies[pluginName].forEach(addPlugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"dependencies.pluginName.forEach","fileName":"${__filename}","paramsNumber":1},`);

      contents = contents.concat(getSources(addPlugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"dependencies.pluginName.forEach"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSources"},');

  return contents;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSources","paramsNumber":1},');

}
function buildPluginsList() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildPluginsList","fileName":"${__filename}","paramsNumber":0},`);

  const packagesGlobPath = path.join(__dirname, '..', 'packages', '@uppy', '*', 'package.json');
  const files = glob.sync(packagesGlobPath);
  console.log('--> Checked plugins could be instantiated and have defaultLocale in them:\n');
  for (const file of files) {
    const dirName = path.dirname(file);
    const pluginName = path.basename(dirName);
    if (pluginName === 'locales' || pluginName === 'react-native') {
      continue;
    }
    const Plugin = require(dirName);
    let plugin;
    global.location = {
      protocol: 'https'
    };
    global.navigator = {
      userAgent: ''
    };
    global.localStorage = {
      key: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"global.localStorage.key","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"global.localStorage.key"},');

      },
      getItem: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"global.localStorage.getItem","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"global.localStorage.getItem"},');

      }
    };
    global.window = {
      indexedDB: {
        open: () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"global.window.indexedDB.open","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"global.window.indexedDB.open"},');

          return {};
                    SRTlib.send('{"type":"FUNCTIONEND","function":"global.window.indexedDB.open"},');

        }
      }
    };
    global.document = {
      createElement: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"global.document.createElement","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"global.document.createElement"},');

        return {
          style: {}
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"global.document.createElement"},');

      }
    };
    try {
      if (pluginName === 'provider-views') {
        plugin = new Plugin(plugins['drag-drop'], {
          companionPattern: '',
          companionUrl: 'https://companion.uppy.io'
        });
      } else if (pluginName === 'store-redux') {
        plugin = new Plugin({
          store: {
            dispatch: () => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"plugin.NewExpression.store.dispatch","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"plugin.NewExpression.store.dispatch"},');

            }
          }
        });
      } else {
        plugin = new Plugin(uppy, {
          companionPattern: '',
          companionUrl: 'https://companion.uppy.io',
          params: {
            auth: {
              key: 'x'
            }
          }
        });
      }
    } catch (err) {
      if (err.message !== 'Plugin is not a constructor') {
        console.error(`--> While trying to instantiate plugin: ${pluginName}, this error was thrown: `);
                SRTlib.send('{"type":"FUNCTIONEND","function":"buildPluginsList"},');

        throw err;
      }
    }
    if (plugin && plugin.defaultLocale) {
      console.log(`[x] Check plugin: ${pluginName}`);
      plugins[pluginName] = plugin;
      sources[pluginName] = getSources(pluginName);
    } else {
      console.log(`[ ] Check plugin: ${pluginName}`);
    }
  }
  console.log('');
    SRTlib.send('{"type":"FUNCTIONEND","function":"buildPluginsList"},');

  return {
    plugins,
    sources
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"buildPluginsList","paramsNumber":0},');

}
function addLocaleToPack(plugin, pluginName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addLocaleToPack","fileName":"${__filename}","paramsNumber":2},`);

  const localeStrings = plugin.defaultLocale.strings;
  for (const key in localeStrings) {
    const valueInPlugin = JSON.stringify(localeStrings[key]);
    const valueInPack = JSON.stringify(localePack[key]);
    if ((key in localePack) && valueInPlugin !== valueInPack) {
      console.error(`⚠ Plugin ${chalk.magenta(pluginName)} has a duplicate key: ${chalk.magenta(key)}`);
      console.error(`  Value in plugin: ${chalk.cyan(valueInPlugin)}`);
      console.error(`  Value in pack  : ${chalk.yellow(valueInPack)}`);
      console.error();
    }
    localePack[key] = localeStrings[key];
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"addLocaleToPack","paramsNumber":2},');

}
function checkForUnused(fileContents, pluginName, localePack) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"checkForUnused","fileName":"${__filename}","paramsNumber":3},`);

  const buff = fileContents.join('\n');
  for (const key in localePack) {
    const regPat = new RegExp(`(i18n|i18nArray)\\([^\\)]*['\`"]${key}['\`"]`, 'g');
    if (!buff.match(regPat)) {
      console.error(`⚠ defaultLocale key: ${chalk.magenta(key)} not used in plugin: ${chalk.cyan(pluginName)}`);
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"checkForUnused","paramsNumber":3},');

}
function sortObjectAlphabetically(obj, sortFunc) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sortObjectAlphabetically","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"sortObjectAlphabetically"},');

  return Object.keys(obj).sort(sortFunc).reduce(function (result, key) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Object.keys.sort.reduce","fileName":"${__filename}","paramsNumber":2},`);

    result[key] = obj[key];
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.sort.reduce"},');

    return result;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.sort.reduce"},');

  }, {});
    SRTlib.send('{"type":"FUNCTIONEND","function":"sortObjectAlphabetically","paramsNumber":2},');

}
function createTypeScriptLocale(plugin, pluginName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createTypeScriptLocale","fileName":"${__filename}","paramsNumber":2},`);

  const allowedStringTypes = Object.keys(plugin.defaultLocale.strings).map(key => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"allowedStringTypes.Object.keys.map.join.Object.keys.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"allowedStringTypes.Object.keys.map.join.Object.keys.map"},');

    return `  | '${key}'`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"allowedStringTypes.Object.keys.map.join.Object.keys.map"},');

  }).join('\n');
  const pluginClassName = pluginName === 'core' ? 'Core' : plugin.id;
  const localePath = path.join(__dirname, '..', 'packages', '@uppy', pluginName, 'types', 'generatedLocale.d.ts');
  const localeTypes = 'import Uppy = require(\'@uppy/core\')\n' + '\n' + `type ${pluginClassName}Locale = Uppy.Locale` + '<\n' + allowedStringTypes + '\n' + '>\n' + '\n' + `export = ${pluginClassName}Locale\n`;
  fs.writeFileSync(localePath, localeTypes);
    SRTlib.send('{"type":"FUNCTIONEND","function":"createTypeScriptLocale","paramsNumber":2},');

}
function build() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"build","fileName":"${__filename}","paramsNumber":0},`);

  const {plugins, sources} = buildPluginsList();
  for (const pluginName in plugins) {
    addLocaleToPack(plugins[pluginName], pluginName);
  }
  for (const pluginName in plugins) {
    createTypeScriptLocale(plugins[pluginName], pluginName);
  }
  localePack = sortObjectAlphabetically(localePack);
  for (const pluginName in sources) {
    checkForUnused(sources[pluginName], pluginName, sortObjectAlphabetically(plugins[pluginName].defaultLocale.strings));
  }
  const prettyLocale = stringifyObject(localePack, {
    indent: '  ',
    singleQuotes: true,
    inlineCharacterLimit: 12
  });
  const localeTemplatePath = path.join(__dirname, '..', 'packages', '@uppy', 'locales', 'template.js');
  const template = fs.readFileSync(localeTemplatePath, 'utf-8');
  const finalLocale = template.replace('en_US.strings = {}', 'en_US.strings = ' + prettyLocale);
  const localePackagePath = path.join(__dirname, '..', 'packages', '@uppy', 'locales', 'src', 'en_US.js');
  fs.writeFileSync(localePackagePath, finalLocale, 'utf-8');
  console.log(`✅ Written '${localePackagePath}'`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"build","paramsNumber":0},');

}
function test() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"test","fileName":"${__filename}","paramsNumber":0},`);

  const leadingLocaleName = 'en_US';
  const followerLocales = {};
  const followerValues = {};
  const localePackagePath = path.join(__dirname, '..', 'packages', '@uppy', 'locales', 'src', '*.js');
  glob.sync(localePackagePath).forEach(localePath => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"glob.sync.forEach","fileName":"${__filename}","paramsNumber":1},`);

    const localeName = path.basename(localePath, '.js');
    if (localeName === 'es_GL') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"glob.sync.forEach"},');

      return;
    }
    followerValues[localeName] = require(localePath).strings;
    followerLocales[localeName] = Object.keys(followerValues[localeName]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"glob.sync.forEach"},');

  });
  const leadingLocale = followerLocales[leadingLocaleName];
  const leadingValues = followerValues[leadingLocaleName];
  delete followerLocales[leadingLocaleName];
  const warnings = [];
  const fatals = [];
  for (const followerName in followerLocales) {
    const followerLocale = followerLocales[followerName];
    const missing = leadingLocale.filter(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"missing.leadingLocale.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"missing.leadingLocale.filter"},');

      return !followerLocale.includes(key);
            SRTlib.send('{"type":"FUNCTIONEND","function":"missing.leadingLocale.filter"},');

    });
    const excess = followerLocale.filter(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"excess.followerLocale.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"excess.followerLocale.filter"},');

      return !leadingLocale.includes(key);
            SRTlib.send('{"type":"FUNCTIONEND","function":"excess.followerLocale.filter"},');

    });
    missing.forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"missing.forEach","fileName":"${__filename}","paramsNumber":1},`);

      let value = leadingValues[key];
      if (typeof value === 'object') {
        value = value[Object.keys(value)[0]];
      }
      warnings.push(`${chalk.cyan(followerName)} locale has missing string: '${chalk.red(key)}' that is present in ${chalk.cyan(leadingLocaleName)} with value: ${chalk.yellow(leadingValues[key])}`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"missing.forEach"},');

    });
    excess.forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"excess.forEach","fileName":"${__filename}","paramsNumber":1},`);

      fatals.push(`${chalk.cyan(followerName)} locale has excess string: '${chalk.yellow(key)}' that is not present in ${chalk.cyan(leadingLocaleName)}. `);
            SRTlib.send('{"type":"FUNCTIONEND","function":"excess.forEach"},');

    });
  }
  if (warnings.length) {
    console.error('--> Locale warnings: ');
    console.error(warnings.join('\n'));
    console.error('');
  }
  if (fatals.length) {
    console.error('--> Locale fatal warnings: ');
    console.error(fatals.join('\n'));
    console.error('');
    process.exit(1);
  }
  if (!warnings.length && !fatals.length) {
    console.log(`--> All locale strings have matching keys ${chalk.green(': )')}`);
    console.log('');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"test","paramsNumber":0},');

}
