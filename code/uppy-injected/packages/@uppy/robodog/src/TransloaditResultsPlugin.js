var SRTlib = require('SRT-util');
const {Plugin} = require('@uppy/core');
class TransloaditResultsPlugin extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditResultsPlugin.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.type = 'modifier';
    this.id = this.opts.id || 'TransloaditResultsPlugin';
    this._afterUpload = this._afterUpload.bind(this);
        SRTlib.send('], "end": "constructor"},');

  }
  install() {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditResultsPlugin.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.addPostProcessor(this._afterUpload);
        SRTlib.send('], "end": "install"},');

  }
  _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditResultsPlugin._afterUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const {currentUploads} = this.uppy.getState();
    const {result} = currentUploads[uploadID];
    const assemblies = result && Array.isArray(result.transloadit) ? result.transloadit : [];
    const assemblyResults = [];
    assemblies.forEach(assembly => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      Object.keys(assembly.results).forEach(stepName => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        const results = assembly.results[stepName];
        results.forEach(result => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          assemblyResults.push({
            ...result,
            assemblyId: assembly.assembly_id,
            stepName
          });
                    SRTlib.send('], "end": "emptyKey"},');

        });
                SRTlib.send('], "end": "emptyKey2"},');

      });
            SRTlib.send('], "end": "emptyKey3"},');

    });
    this.uppy.addResultData(uploadID, {
      results: assemblyResults
    });
        SRTlib.send('], "end": "_afterUpload"},');

  }
}
module.exports = TransloaditResultsPlugin;
