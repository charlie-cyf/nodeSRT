const SRTlib = require('SRT-util');

import * as Expo from 'expo';
import base64 from 'base64-js';
export default function getTusFileReader(file, chunkSize, cb) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getTusFileReader","fileName":"${__filename}","paramsNumber":3},`);

  Expo.FileSystem.getInfoAsync(file.uri, {
    size: true
  }).then(info => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Expo.FileSystem.getInfoAsync.then.catch.Expo.FileSystem.getInfoAsync.then","fileName":"${__filename}","paramsNumber":1},`);

    cb(null, new TusFileReader(file, info.size));
        SRTlib.send('{"type":"FUNCTIONEND","function":"Expo.FileSystem.getInfoAsync.then.catch.Expo.FileSystem.getInfoAsync.then"},');

  }).catch(cb);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getTusFileReader","paramsNumber":3},');

}
class TusFileReader {
  constructor(file, size) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"TusFileReader"}},`);

    this.file = file;
    this.size = size;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  slice(start, end, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"slice","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"TusFileReader"}},`);

    end = Math.min(end, this.size);
    const options = {
      encoding: Expo.FileSystem.EncodingTypes.Base64,
      length: end - start,
      position: start
    };
    Expo.FileSystem.readAsStringAsync(this.file.uri, options).then(data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Expo.FileSystem.readAsStringAsync.then.catch.Expo.FileSystem.readAsStringAsync.then","fileName":"${__filename}","paramsNumber":1},`);

      cb(null, base64.toByteArray(data));
            SRTlib.send('{"type":"FUNCTIONEND","function":"Expo.FileSystem.readAsStringAsync.then.catch.Expo.FileSystem.readAsStringAsync.then"},');

    }).catch(cb);
        SRTlib.send('{"type":"FUNCTIONEND","function":"slice"},');

  }
  close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"close","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TusFileReader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');

  }
}
