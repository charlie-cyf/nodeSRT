const SRTlib = require('SRT-util');

import * as Expo from 'expo';
function takePictureWithExpo(options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"takePictureWithExpo","fileName":"/packages/@uppy/react-native/file-picker/takePicture.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"takePictureWithExpo"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"/packages/@uppy/react-native/file-picker/takePicture.js","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

    return Expo.Permissions.askAsync(Expo.Permissions.CAMERA).then(isAllowed => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Expo.Permissions.askAsync.then","fileName":"/packages/@uppy/react-native/file-picker/takePicture.js","paramsNumber":1},`);

      if (!isAllowed) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.Permissions.askAsync.then"},');

        return reject(new Error('Permissions denied'));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.Permissions.askAsync.then"},');

      return Expo.ImagePicker.launchCameraAsync({
        allowsEditing: true
      }).then(result => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Expo.ImagePicker.launchCameraAsync.then","fileName":"/packages/@uppy/react-native/file-picker/takePicture.js","paramsNumber":1},`);

        if (!result.cancelled) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.ImagePicker.launchCameraAsync.then"},');

          return resolve(result);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.ImagePicker.launchCameraAsync.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Expo.Permissions.askAsync.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"takePictureWithExpo","paramsNumber":1},');

}
export default takePictureWithExpo;
