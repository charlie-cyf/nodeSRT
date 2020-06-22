var SRTlib = require('SRT-util');
module.exports = function generateFileID(file) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.generateFileID", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var id = 'uppy';
  if (typeof file.name === 'string') {
    id += '-' + encodeFilename(file.name.toLowerCase());
  }
  if (file.type !== undefined) {
    id += '-' + file.type;
  }
  if (file.meta && typeof file.meta.relativePath === 'string') {
    id += '-' + encodeFilename(file.meta.relativePath.toLowerCase());
  }
  if (file.data.size !== undefined) {
    id += '-' + file.data.size;
  }
  if (file.data.lastModified !== undefined) {
    id += '-' + file.data.lastModified;
  }
    SRTlib.send('], "end": "module.exports.generateFileID"},');

  return id;
    SRTlib.send('], "end": "module.exports.generateFileID"},');

};
function encodeFilename(name) {
    SRTlib.send(`{ "anonymous": false, "function": "encodeFilename", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var suffix = '';
    SRTlib.send('], "end": "encodeFilename"},');

  return name.replace(/[^A-Z0-9]/ig, function (character) {
        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    suffix += '-' + encodeCharacter(character);
        SRTlib.send('], "end": "ReturnStatement"},');

    return '/';
        SRTlib.send('], "end": "ReturnStatement"},');

  }) + suffix;
    SRTlib.send('], "end": "encodeFilename"},');

}
function encodeCharacter(character) {
    SRTlib.send(`{ "anonymous": false, "function": "encodeCharacter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "encodeCharacter"},');

  return character.charCodeAt(0).toString(32);
    SRTlib.send('], "end": "encodeCharacter"},');

}
