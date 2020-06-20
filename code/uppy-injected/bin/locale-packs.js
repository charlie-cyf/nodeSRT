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

        SRTlib.send("]},");

    return fs.readFileSync(file, 'utf-8');
        SRTlib.send("]},");

  });
  if (dependencies[pluginName]) {
    dependencies[pluginName].forEach(addPlugin => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      contents = contents.concat(getSources(addPlugin));
            SRTlib.send("]},");

    });
  }
    SRTlib.send("]},");

  return contents;
    SRTlib.send("]},");

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

                SRTlib.send("]},");

      },
      getItem: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      }
    };
    global.window = {
      indexedDB: {
        open: () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return {};
                    SRTlib.send("]},");

        }
      }
    };
    global.document = {
      createElement: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return {
          style: {}
        };
                SRTlib.send("]},");

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

                            SRTlib.send("]},");

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
    SRTlib.send("]},");

  return {
    plugins,
    sources
  };
    SRTlib.send("]},");

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
    SRTlib.send("]},");

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
    SRTlib.send("]},");

}
function sortObjectAlphabetically(obj, sortFunc) {
    SRTlib.send(`{ "anonymous": false, "function": "sortObjectAlphabetically", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send("]},");

  return Object.keys(obj).sort(sortFunc).reduce(function (result, key) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.sort.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    result[key] = obj[key];
        SRTlib.send("]},");

    return result;
        SRTlib.send("]},");

  }, {});
    SRTlib.send("]},");

}
function createTypeScriptLocale(plugin, pluginName) {
    SRTlib.send(`{ "anonymous": false, "function": "createTypeScriptLocale", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const allowedStringTypes = Object.keys(plugin.defaultLocale.strings).map(key => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return `  | '${key}'`;
        SRTlib.send("]},");

  }).join('\n');
  const pluginClassName = pluginName === 'core' ? 'Core' : plugin.id;
  const localePath = path.join(__dirname, '..', 'packages', '@uppy', pluginName, 'types', 'generatedLocale.d.ts');
  const localeTypes = 'import Uppy = require(\'@uppy/core\')\n' + '\n' + `type ${pluginClassName}Locale = Uppy.Locale` + '<\n' + allowedStringTypes + '\n' + '>\n' + '\n' + `export = ${pluginClassName}Locale\n`;
  fs.writeFileSync(localePath, localeTypes);
    SRTlib.send("]},");

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
    SRTlib.send("]},");

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
            SRTlib.send("]},");

      return;
    }
    followerValues[localeName] = require(localePath).strings;
    followerLocales[localeName] = Object.keys(followerValues[localeName]);
        SRTlib.send("]},");

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

            SRTlib.send("]},");

      return !followerLocale.includes(key);
            SRTlib.send("]},");

    });
    const excess = followerLocale.filter(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return !leadingLocale.includes(key);
            SRTlib.send("]},");

    });
    missing.forEach(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      let value = leadingValues[key];
      if (typeof value === 'object') {
        value = value[Object.keys(value)[0]];
      }
      warnings.push(`${chalk.cyan(followerName)} locale has missing string: '${chalk.red(key)}' that is present in ${chalk.cyan(leadingLocaleName)} with value: ${chalk.yellow(leadingValues[key])}`);
            SRTlib.send("]},");

    });
    excess.forEach(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      fatals.push(`${chalk.cyan(followerName)} locale has excess string: '${chalk.yellow(key)}' that is not present in ${chalk.cyan(leadingLocaleName)}. `);
            SRTlib.send("]},");

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
    SRTlib.send("]},");

}
