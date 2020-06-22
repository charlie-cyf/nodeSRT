var SRTlib = require('SRT-util');
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
    SRTlib.send(`{ "anonymous": false, "function": "getSources", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const dependencies = {
    core: ['provider-views']
  };
  const globPath = path.join(__dirname, '..', 'packages', '@uppy', pluginName, 'lib', '**', '*.js');
  let contents = glob.sync(globPath).map(file => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey"},');

    return fs.readFileSync(file, 'utf-8');
        SRTlib.send('], "end": "emptyKey"},');

  });
  if (dependencies[pluginName]) {
    dependencies[pluginName].forEach(addPlugin => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      contents = contents.concat(getSources(addPlugin));
            SRTlib.send('], "end": "emptyKey2"},');

    });
  }
    SRTlib.send('], "end": "getSources"},');

  return contents;
    SRTlib.send('], "end": "getSources"},');

}
function buildPluginsList() {
    SRTlib.send(`{ "anonymous": false, "function": "buildPluginsList", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey3"},');

      },
      getItem: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey4"},');

      }
    };
    global.window = {
      indexedDB: {
        open: () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "emptyKey5"},');

          return {};
                    SRTlib.send('], "end": "emptyKey5"},');

        }
      }
    };
    global.document = {
      createElement: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey6"},');

        return {
          style: {}
        };
                SRTlib.send('], "end": "emptyKey6"},');

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
                            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "emptyKey7"},');

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
                SRTlib.send('], "end": "buildPluginsList"},');

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
    SRTlib.send('], "end": "buildPluginsList"},');

  return {
    plugins,
    sources
  };
    SRTlib.send('], "end": "buildPluginsList"},');

}
function addLocaleToPack(plugin, pluginName) {
    SRTlib.send(`{ "anonymous": false, "function": "addLocaleToPack", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
    SRTlib.send('], "end": "addLocaleToPack"},');

}
function checkForUnused(fileContents, pluginName, localePack) {
    SRTlib.send(`{ "anonymous": false, "function": "checkForUnused", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const buff = fileContents.join('\n');
  for (const key in localePack) {
    const regPat = new RegExp(`(i18n|i18nArray)\\([^\\)]*['\`"]${key}['\`"]`, 'g');
    if (!buff.match(regPat)) {
      console.error(`⚠ defaultLocale key: ${chalk.magenta(key)} not used in plugin: ${chalk.cyan(pluginName)}`);
    }
  }
    SRTlib.send('], "end": "checkForUnused"},');

}
function sortObjectAlphabetically(obj, sortFunc) {
    SRTlib.send(`{ "anonymous": false, "function": "sortObjectAlphabetically", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "sortObjectAlphabetically"},');

  return Object.keys(obj).sort(sortFunc).reduce(function (result, key) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.sort.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    result[key] = obj[key];
        SRTlib.send('], "end": "ReturnStatement.sort.reduce"},');

    return result;
        SRTlib.send('], "end": "ReturnStatement.sort.reduce"},');

  }, {});
    SRTlib.send('], "end": "sortObjectAlphabetically"},');

}
function createTypeScriptLocale(plugin, pluginName) {
    SRTlib.send(`{ "anonymous": false, "function": "createTypeScriptLocale", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const allowedStringTypes = Object.keys(plugin.defaultLocale.strings).map(key => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey8"},');

    return `  | '${key}'`;
        SRTlib.send('], "end": "emptyKey8"},');

  }).join('\n');
  const pluginClassName = pluginName === 'core' ? 'Core' : plugin.id;
  const localePath = path.join(__dirname, '..', 'packages', '@uppy', pluginName, 'types', 'generatedLocale.d.ts');
  const localeTypes = 'import Uppy = require(\'@uppy/core\')\n' + '\n' + `type ${pluginClassName}Locale = Uppy.Locale` + '<\n' + allowedStringTypes + '\n' + '>\n' + '\n' + `export = ${pluginClassName}Locale\n`;
  fs.writeFileSync(localePath, localeTypes);
    SRTlib.send('], "end": "createTypeScriptLocale"},');

}
function build() {
    SRTlib.send(`{ "anonymous": false, "function": "build", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
    SRTlib.send('], "end": "build"},');

}
function test() {
    SRTlib.send(`{ "anonymous": false, "function": "test", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const leadingLocaleName = 'en_US';
  const followerLocales = {};
  const followerValues = {};
  const localePackagePath = path.join(__dirname, '..', 'packages', '@uppy', 'locales', 'src', '*.js');
  glob.sync(localePackagePath).forEach(localePath => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const localeName = path.basename(localePath, '.js');
    if (localeName === 'es_GL') {
            SRTlib.send('], "end": "emptyKey9"},');

      return;
    }
    followerValues[localeName] = require(localePath).strings;
    followerLocales[localeName] = Object.keys(followerValues[localeName]);
        SRTlib.send('], "end": "emptyKey9"},');

  });
  const leadingLocale = followerLocales[leadingLocaleName];
  const leadingValues = followerValues[leadingLocaleName];
  delete followerLocales[leadingLocaleName];
  const warnings = [];
  const fatals = [];
  for (const followerName in followerLocales) {
    const followerLocale = followerLocales[followerName];
    const missing = leadingLocale.filter(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey10"},');

      return !followerLocale.includes(key);
            SRTlib.send('], "end": "emptyKey10"},');

    });
    const excess = followerLocale.filter(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey11"},');

      return !leadingLocale.includes(key);
            SRTlib.send('], "end": "emptyKey11"},');

    });
    missing.forEach(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      let value = leadingValues[key];
      if (typeof value === 'object') {
        value = value[Object.keys(value)[0]];
      }
      warnings.push(`${chalk.cyan(followerName)} locale has missing string: '${chalk.red(key)}' that is present in ${chalk.cyan(leadingLocaleName)} with value: ${chalk.yellow(leadingValues[key])}`);
            SRTlib.send('], "end": "emptyKey12"},');

    });
    excess.forEach(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      fatals.push(`${chalk.cyan(followerName)} locale has excess string: '${chalk.yellow(key)}' that is not present in ${chalk.cyan(leadingLocaleName)}. `);
            SRTlib.send('], "end": "emptyKey13"},');

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
    SRTlib.send('], "end": "test"},');

}
