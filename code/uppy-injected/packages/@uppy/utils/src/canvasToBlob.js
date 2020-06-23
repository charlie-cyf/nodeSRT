var SRTlib = require('SRT-util');
const dataURItoBlob = require('./dataURItoBlob');
module.exports = function canvasToBlob(canvas, type, quality) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.canvasToBlob","fileName":"${__filename}","paramsNumber":3},`);

  if (canvas.toBlob) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob"},');

    return new Promise(resolve => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

      canvas.toBlob(resolve, type, quality);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob"},');

  return Promise.resolve().then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return dataURItoBlob(canvas.toDataURL(type, quality), {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob"},');

};
