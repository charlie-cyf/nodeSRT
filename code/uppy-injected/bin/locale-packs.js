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
    // because 'provider-views' doesn't have its own locale, it uses Core's defaultLocale
    core: ['provider-views']
  };
  const globPath = path.join(__dirname, '..', 'packages', '@uppy', pluginName, 'lib', '**', '*.js');
  let contents = glob.sync(globPath).map(file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return fs.readFileSync(file, 'utf-8');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  if (dependencies[pluginName]) {
    dependencies[pluginName].forEach(addPlugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

      contents = contents.concat(getSources(addPlugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSources"},');

  return contents;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSources","paramsNumber":1},');

}
function buildPluginsList() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildPluginsList","fileName":"${__filename}","paramsNumber":0},`);

  // Go over all uppy plugins, check if they are constructors
  // and instanciate them, check for defaultLocale property,
  // then add to plugins object
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
    // A few hacks to emulate browser environment because e.g.:
    // GoldenRetrieves calls upon MetaDataStore in the constructor, which uses localStorage
    // @TODO Consider rewriting constructors so they don't make imperative calls that rely on
    // browser environment (OR: just keep this browser mocking, if it's only causing issues for this script, it doesn't matter)
    global.location = {
      protocol: 'https'
    };
    global.navigator = {
      userAgent: ''
    };
    global.localStorage = {
      key: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      },
      getItem: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      }
    };
    global.window = {
      indexedDB: {
        open: () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

          return {};
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

        }
      }
    };
    global.document = {
      createElement: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

        return {
          style: {}
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

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
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.sort.reduce","fileName":"${__filename}","paramsNumber":2},`);

    result[key] = obj[key];
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.sort.reduce"},');

    return result;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.sort.reduce"},');

  }, {});
    SRTlib.send('{"type":"FUNCTIONEND","function":"sortObjectAlphabetically","paramsNumber":2},');

}
function createTypeScriptLocale(plugin, pluginName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createTypeScriptLocale","fileName":"${__filename}","paramsNumber":2},`);

  const allowedStringTypes = Object.keys(plugin.defaultLocale.strings).map(key => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    return `  | '${key}'`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

    const localeName = path.basename(localePath, '.js');
    // we renamed the es_GL → gl_ES locale, and kept the old name
    // for backwards-compat, see https://github.com/transloadit/uppy/pull/1929
    if (localeName === 'es_GL') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

      return;
    }
    // Builds array with items like: 'uploadingXFiles'
    // We do not check nested items because different languages may have different amounts of plural forms.
    followerValues[localeName] = require(localePath).strings;
    followerLocales[localeName] = Object.keys(followerValues[localeName]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  });
  // Take aside our leading locale: en_US
  const leadingLocale = followerLocales[leadingLocaleName];
  const leadingValues = followerValues[leadingLocaleName];
  delete followerLocales[leadingLocaleName];
  // Compare all follower Locales (RU, DE, etc) with our leader en_US
  const warnings = [];
  const fatals = [];
  for (const followerName in followerLocales) {
    const followerLocale = followerLocales[followerName];
    const missing = leadingLocale.filter(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      return !followerLocale.includes(key);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
    const excess = followerLocale.filter(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

      return !leadingLocale.includes(key);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    });
    missing.forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

      // Items missing are a non-fatal warning because we don't want CI to bum out over all languages
      // as soon as we add some English
      let value = leadingValues[key];
      if (typeof value === 'object') {
        // For values with plural forms, just take the first one right now
        value = value[Object.keys(value)[0]];
      }
      warnings.push(`${chalk.cyan(followerName)} locale has missing string: '${chalk.red(key)}' that is present in ${chalk.cyan(leadingLocaleName)} with value: ${chalk.yellow(leadingValues[key])}`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
    excess.forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

      // Items in excess are a fatal because we should clean up follower languages once we remove English strings
      fatals.push(`${chalk.cyan(followerName)} locale has excess string: '${chalk.yellow(key)}' that is not present in ${chalk.cyan(leadingLocaleName)}. `);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

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
