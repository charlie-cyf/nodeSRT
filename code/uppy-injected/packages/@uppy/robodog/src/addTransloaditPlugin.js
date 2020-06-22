var SRTlib = require('SRT-util');
const Transloadit = require('@uppy/transloadit');
const has = require('@uppy/utils/lib/hasProperty');
const TransloaditResults = require('./TransloaditResultsPlugin');
const transloaditOptionNames = ['service', 'waitForEncoding', 'waitForMetadata', 'alwaysRunAssembly', 'importFromUploadURLs', 'signature', 'params', 'fields', 'getAssemblyOptions'];
function addTransloaditPlugin(uppy, opts) {
    SRTlib.send(`{ "anonymous": false, "function": "addTransloaditPlugin", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const transloaditOptions = {};
  transloaditOptionNames.forEach(name => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) transloaditOptions[name] = opts[name];
        SRTlib.send('], "end": "emptyKey"},');

  });
  uppy.use(Transloadit, transloaditOptions);
  if (transloaditOptions.waitForEncoding) {
    uppy.use(TransloaditResults);
  }
    SRTlib.send('], "end": "addTransloaditPlugin"},');

}
module.exports = addTransloaditPlugin;
