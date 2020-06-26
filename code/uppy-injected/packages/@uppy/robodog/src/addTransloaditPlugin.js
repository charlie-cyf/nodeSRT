const SRTlib = require('SRT-util');

const Transloadit = require('@uppy/transloadit');
const has = require('@uppy/utils/lib/hasProperty');
const TransloaditResults = require('./TransloaditResultsPlugin');
const transloaditOptionNames = ['service', 'waitForEncoding', 'waitForMetadata', 'alwaysRunAssembly', 'importFromUploadURLs', 'signature', 'params', 'fields', 'getAssemblyOptions'];
function addTransloaditPlugin(uppy, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addTransloaditPlugin","fileName":"${__filename}","paramsNumber":2},`);

  const transloaditOptions = {};
  transloaditOptionNames.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, name)) transloaditOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  uppy.use(Transloadit, transloaditOptions);
  // Adds a `results` key to the upload result data containing a flat array of all results from all Assemblies.
  if (transloaditOptions.waitForEncoding) {
    uppy.use(TransloaditResults);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"addTransloaditPlugin","paramsNumber":2},');

}
module.exports = addTransloaditPlugin;
