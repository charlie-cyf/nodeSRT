const SRTlib = require('SRT-util');

import * as Expo from 'expo';
function selectImageWithExpo(options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectImageWithExpo","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"selectImageWithExpo"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

    return Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL).then(isAllowed => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Expo.Permissions.askAsync.then","fileName":"${__filename}","paramsNumber":1},`);

      if (!isAllowed) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.Permissions.askAsync.then"},');

        return reject(new Error('Permissions denied'));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.Permissions.askAsync.then"},');

      return Expo.ImagePicker.launchImageLibraryAsync(options).then(result => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Expo.ImagePicker.launchImageLibraryAsync.then","fileName":"${__filename}","paramsNumber":1},`);

        if (!result.cancelled) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.ImagePicker.launchImageLibraryAsync.then"},');

          return resolve(result);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.ImagePicker.launchImageLibraryAsync.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.Permissions.askAsync.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"selectImageWithExpo","paramsNumber":1},');

}
export default selectImageWithExpo;
