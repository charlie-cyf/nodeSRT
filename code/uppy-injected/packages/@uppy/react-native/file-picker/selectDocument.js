const SRTlib = require('SRT-util');

import * as Expo from 'expo';
function selectDocumentWithExpo(options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectDocumentWithExpo","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"selectDocumentWithExpo"},');

  return Expo.DocumentPicker.getDocumentAsync({
    copyToCacheDirectory: false
  }).then(result => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Expo.DocumentPicker.getDocumentAsync.then","fileName":"${__filename}","paramsNumber":1},`);

    if (!result.cancelled && result.type !== 'cancel') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.DocumentPicker.getDocumentAsync.then"},');

      return result;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.DocumentPicker.getDocumentAsync.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"selectDocumentWithExpo","paramsNumber":1},');

}
export default selectDocumentWithExpo;
