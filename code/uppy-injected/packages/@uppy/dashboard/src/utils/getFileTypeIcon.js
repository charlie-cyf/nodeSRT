const SRTlib = require('SRT-util');

const {iconFile, iconText, iconImage, iconAudio, iconVideo, iconPDF, iconArchive} = require('../components/icons');
module.exports = function getIconByMime(fileType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  const defaultChoice = {
    color: '#838999',
    icon: iconFile()
  };
  if (!fileType) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return defaultChoice;
  }
  const fileTypeGeneral = fileType.split('/')[0];
  const fileTypeSpecific = fileType.split('/')[1];
  if (fileTypeGeneral === 'text') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      color: '#5a5e69',
      icon: iconText()
    };
  }
  if (fileTypeGeneral === 'image') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      color: '#686de0',
      icon: iconImage()
    };
  }
  if (fileTypeGeneral === 'audio') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      color: '#068dbb',
      icon: iconAudio()
    };
  }
  if (fileTypeGeneral === 'video') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      color: '#19af67',
      icon: iconVideo()
    };
  }
  if (fileTypeGeneral === 'application' && fileTypeSpecific === 'pdf') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      color: '#e25149',
      icon: iconPDF()
    };
  }
  const archiveTypes = ['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-gtar', 'x-apple-diskimage', 'x-diskcopy'];
  if (fileTypeGeneral === 'application' && archiveTypes.indexOf(fileTypeSpecific) !== -1) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      color: '#00C469',
      icon: iconArchive()
    };
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return defaultChoice;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
