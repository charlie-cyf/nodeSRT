var SRTlib = require('SRT-util');

var _require = require('../components/icons'),
    iconFile = _require.iconFile,
    iconText = _require.iconText,
    iconImage = _require.iconImage,
    iconAudio = _require.iconAudio,
    iconVideo = _require.iconVideo,
    iconPDF = _require.iconPDF,
    iconArchive = _require.iconArchive;

module.exports = function getIconByMime(fileType) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getIconByMime\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var defaultChoice = {
    color: '#838999',
    icon: iconFile()
  };

  if (!fileType) {
    SRTlib.send('], "end": "module.exports.getIconByMime"},');
    return defaultChoice;
  }

  var fileTypeGeneral = fileType.split('/')[0];
  var fileTypeSpecific = fileType.split('/')[1];

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

  var archiveTypes = ['zip', 'x-7z-compressed', 'x-rar-compressed', 'x-gtar', 'x-apple-diskimage', 'x-diskcopy'];

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