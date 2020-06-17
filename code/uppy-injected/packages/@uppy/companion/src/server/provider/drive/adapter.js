var SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  for (const item of data.files) {
    if (item.ownedByMe && item.permissions) {
      for (const permission of item.permissions) {
        if (permission.role === 'owner') {
                    SRTlib.send("]},");

          return permission.emailAddress;
        }
      }
    }
  }
    SRTlib.send("]},");

};
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.mimeType === 'application/vnd.google-apps.folder' || exports.isSharedDrive(item);
    SRTlib.send("]},");

};
exports.getItemSize = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return parseInt(item.size, 10);
    SRTlib.send("]},");

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (exports.isSharedDrive(item)) {
    const size = '=w16-h16-n';
    const sizeParamRegex = /=[-whncsp0-9]*$/;
        SRTlib.send("]},");

    return item.backgroundImageLink.match(sizeParamRegex) ? item.backgroundImageLink.replace(sizeParamRegex, size) : `${item.backgroundImageLink}${size}`;
  }
  if (item.thumbnailLink && !item.mimeType.startsWith('application/vnd.google')) {
    const smallerThumbnailLink = item.thumbnailLink.replace('s220', 's40');
        SRTlib.send("]},");

    return smallerThumbnailLink;
  }
    SRTlib.send("]},");

  return item.iconLink;
    SRTlib.send("]},");

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const allowedGSuiteTypes = ['application/vnd.google-apps.document', 'application/vnd.google-apps.drawing', 'application/vnd.google-apps.script', 'application/vnd.google-apps.spreadsheet', 'application/vnd.google-apps.presentation'];
    SRTlib.send("]},");

  return item.files.filter(i => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return exports.isFolder(i) || !exports.isGsuiteFile(i.mimeType) || allowedGSuiteTypes.includes(i.mimeType);
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const extensionMaps = {
    'application/vnd.google-apps.document': '.docx',
    'application/vnd.google-apps.drawing': '.png',
    'application/vnd.google-apps.script': '.json',
    'application/vnd.google-apps.spreadsheet': '.xlsx',
    'application/vnd.google-apps.presentation': '.ppt'
  };
  const extension = extensionMaps[item.mimeType];
  if (extension && item.name && !item.name.endsWith(extension)) {
        SRTlib.send("]},");

    return item.name + extension;
  }
    SRTlib.send("]},");

  return item.name ? item.name : '/';
    SRTlib.send("]},");

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (exports.isGsuiteFile(item.mimeType)) {
        SRTlib.send("]},");

    return exports.getGsuiteExportType(item.mimeType);
  }
    SRTlib.send("]},");

  return item.mimeType;
    SRTlib.send("]},");

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.id;
    SRTlib.send("]},");

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.id;
    SRTlib.send("]},");

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.modifiedTime;
    SRTlib.send("]},");

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.thumbnailLink;
    SRTlib.send("]},");

};
exports.isSharedDrive = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.kind === 'drive#drive';
    SRTlib.send("]},");

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!data.nextPageToken) {
        SRTlib.send("]},");

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.nextPageToken
  });
    SRTlib.send("]},");

  return `${currentPath}?${querystring.stringify(query)}`;
    SRTlib.send("]},");

};
exports.isGsuiteFile = mimeType => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return mimeType && mimeType.startsWith('application/vnd.google');
    SRTlib.send("]},");

};
exports.getGsuiteExportType = mimeType => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const typeMaps = {
    'application/vnd.google-apps.document': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.google-apps.drawing': 'image/png',
    'application/vnd.google-apps.script': 'application/vnd.google-apps.script+json',
    'application/vnd.google-apps.spreadsheet': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.google-apps.presentation': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  };
    SRTlib.send("]},");

  return typeMaps[mimeType] || 'application/pdf';
    SRTlib.send("]},");

};
