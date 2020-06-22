var SRTlib = require('SRT-util');
const {iconFile, iconText, iconImage, iconAudio, iconVideo, iconPDF, iconArchive} = require('../components/icons');
module.exports = function getIconByMime(fileType) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getIconByMime", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const defaultChoice = {
    color: '#838999',
    icon: iconFile()
  };
  if (!fileType) {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return defaultChoice;
  }
  const fileTypeGeneral = fileType.split('/')[0];
  const fileTypeSpecific = fileType.split('/')[1];
  if (fileTypeGeneral === 'text') {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return {
      color: '#5a5e69',
      icon: iconText()
    };
  }
  if (fileTypeGeneral === 'image') {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return {
      color: '#686de0',
      icon: iconImage()
    };
  }
  if (fileTypeGeneral === 'audio') {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return {
      color: '#068dbb',
      icon: iconAudio()
    };
  }
  if (fileTypeGeneral === 'video') {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return {
      color: '#19af67',
      icon: iconVideo()
    };
  }
  if (fileTypeGeneral === 'application' && fileTypeSpecific === 'pdf') {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return {
      color: '#e25149',
      icon: iconPDF()
    };
  }
  const archiveTypes = ['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-gtar', 'x-apple-diskimage', 'x-diskcopy'];
  if (fileTypeGeneral === 'application' && archiveTypes.indexOf(fileTypeSpecific) !== -1) {
        SRTlib.send('], "end": "module.exports.getIconByMime"},');

    return {
      color: '#00C469',
      icon: iconArchive()
    };
  }
    SRTlib.send('], "end": "module.exports.getIconByMime"},');

  return defaultChoice;
    SRTlib.send('], "end": "module.exports.getIconByMime"},');

};
