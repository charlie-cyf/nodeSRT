/**
* Takes a file object and turns it into fileID, by converting file.name to lowercase,
* removing extra characters and adding type, size and lastModified
*
* @param {object} file
* @returns {string} the fileID
*/
const SRTlib = require('SRT-util');

module.exports = function generateFileID(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  // It's tempting to do `[items].filter(Boolean).join('-')` here, but that
  // is slower! simple string concatenation is fast
  let id = 'uppy';
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
function encodeFilename(name) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encodeFilename","fileName":"${__filename}","paramsNumber":1},`);

  let suffix = '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"encodeFilename"},');

  return name.replace(/[^A-Z0-9]/ig, character => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.name.replace","fileName":"${__filename}","paramsNumber":1},`);

    suffix += '-' + encodeCharacter(character);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.name.replace"},');

    return '/';
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.name.replace"},');

  }) + suffix;
    SRTlib.send('{"type":"FUNCTIONEND","function":"encodeFilename","paramsNumber":1},');

}
function encodeCharacter(character) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encodeCharacter","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"encodeCharacter"},');

  return character.charCodeAt(0).toString(32);
    SRTlib.send('{"type":"FUNCTIONEND","function":"encodeCharacter","paramsNumber":1},');

}
