const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
/**
* Add a `results` key to the upload result data, containing all Transloadit Assembly results.
*/
class TransloaditResultsPlugin extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"TransloaditResultsPlugin","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'modifier';
    this.id = this.opts.id || 'TransloaditResultsPlugin';
    this._afterUpload = this._afterUpload.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditResultsPlugin","superClass":"Plugin"}},`);

    this.uppy.addPostProcessor(this._afterUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_afterUpload","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"TransloaditResultsPlugin","superClass":"Plugin"}},`);

    const {currentUploads} = this.uppy.getState();
    const {result} = currentUploads[uploadID];
    const assemblies = result && Array.isArray(result.transloadit) ? result.transloadit : [];
    // Merge the assembly.results[*] arrays and add `stepName` and
    // `assemblyId` properties.
    const assemblyResults = [];
    assemblies.forEach(assembly => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"assemblies.forEach","fileName":"${__filename}","paramsNumber":1},`);

      Object.keys(assembly.results).forEach(stepName => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

        const results = assembly.results[stepName];
        results.forEach(result => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"results.forEach","fileName":"${__filename}","paramsNumber":1},`);

          assemblyResults.push({
            ...result,
            assemblyId: assembly.assembly_id,
            stepName
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"results.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"assemblies.forEach"},');

    });
    this.uppy.addResultData(uploadID, {
      results: assemblyResults
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_afterUpload"},');

  }
}
module.exports = TransloaditResultsPlugin;
