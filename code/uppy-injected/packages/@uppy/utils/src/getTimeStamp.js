/**
* Returns a timestamp in the format of `hours:minutes:seconds`
*/
const SRTlib = require('SRT-util');
module.exports = function getTimeStamp() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getTimeStamp","fileName":"${__filename}","paramsNumber":0},`);

  var date = new Date();
  var hours = pad(date.getHours().toString());
  var minutes = pad(date.getMinutes().toString());
  var seconds = pad(date.getSeconds().toString());
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getTimeStamp"},');

  return hours + ':' + minutes + ':' + seconds;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getTimeStamp"},');

};
/**
* Adds zero to strings shorter than two characters
*/
function pad(str) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pad","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"pad"},');

  return str.length !== 2 ? 0 + str : str;
    SRTlib.send('{"type":"FUNCTIONEND","function":"pad","paramsNumber":1},');

}
