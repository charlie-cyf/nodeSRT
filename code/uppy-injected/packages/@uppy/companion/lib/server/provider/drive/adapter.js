var SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  for (const item of data.files) {
    if (item.ownedByMe && item.permissions) {
      for (const permission of item.permissions) {
        if (permission.role === 'owner') {
                    SRTlib.send('], "end": "emptyKey"},');

          return permission.emailAddress;
        }
      }
    }
  }
    SRTlib.send('], "end": "emptyKey"},');

};
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey2"},');

  return item.mimeType === 'application/vnd.google-apps.folder' || exports.isSharedDrive(item);
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey3"},');

  return parseInt(item.size, 10);
    SRTlib.send('], "end": "emptyKey3"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (exports.isSharedDrive(item)) {
    const size = '=w16-h16-n';
    const sizeParamRegex = /=[-whncsp0-9]*$/;
        SRTlib.send('], "end": "emptyKey4"},');

    return item.backgroundImageLink.match(sizeParamRegex) ? item.backgroundImageLink.replace(sizeParamRegex, size) : `${item.backgroundImageLink}${size}`;
  }
  if (item.thumbnailLink && !item.mimeType.startsWith('application/vnd.google')) {
    const smallerThumbnailLink = item.thumbnailLink.replace('s220', 's40');
        SRTlib.send('], "end": "emptyKey4"},');

    return smallerThumbnailLink;
  }
    SRTlib.send('], "end": "emptyKey4"},');

  return item.iconLink;
    SRTlib.send('], "end": "emptyKey4"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const allowedGSuiteTypes = ['application/vnd.google-apps.document', 'application/vnd.google-apps.drawing', 'application/vnd.google-apps.script', 'application/vnd.google-apps.spreadsheet', 'application/vnd.google-apps.presentation'];
    SRTlib.send('], "end": "emptyKey6"},');

  return item.files.filter(i => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey5"},');

    return exports.isFolder(i) || !exports.isGsuiteFile(i.mimeType) || allowedGSuiteTypes.includes(i.mimeType);
        SRTlib.send('], "end": "emptyKey5"},');

  });
    SRTlib.send('], "end": "emptyKey6"},');

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
        SRTlib.send('], "end": "emptyKey7"},');

    return item.name + extension;
  }
    SRTlib.send('], "end": "emptyKey7"},');

  return item.name ? item.name : '/';
    SRTlib.send('], "end": "emptyKey7"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (exports.isGsuiteFile(item.mimeType)) {
        SRTlib.send('], "end": "emptyKey8"},');

    return exports.getGsuiteExportType(item.mimeType);
  }
    SRTlib.send('], "end": "emptyKey8"},');

  return item.mimeType;
    SRTlib.send('], "end": "emptyKey8"},');

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey9"},');

  return item.id;
    SRTlib.send('], "end": "emptyKey9"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey10"},');

  return item.id;
    SRTlib.send('], "end": "emptyKey10"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey11"},');

  return item.modifiedTime;
    SRTlib.send('], "end": "emptyKey11"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey12"},');

  return item.thumbnailLink;
    SRTlib.send('], "end": "emptyKey12"},');

};
exports.isSharedDrive = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey13"},');

  return item.kind === 'drive#drive';
    SRTlib.send('], "end": "emptyKey13"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!data.nextPageToken) {
        SRTlib.send('], "end": "emptyKey14"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.nextPageToken
  });
    SRTlib.send('], "end": "emptyKey14"},');

  return `${currentPath}?${querystring.stringify(query)}`;
    SRTlib.send('], "end": "emptyKey14"},');

};
exports.isGsuiteFile = mimeType => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey15"},');

  return mimeType && mimeType.startsWith('application/vnd.google');
    SRTlib.send('], "end": "emptyKey15"},');

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
    SRTlib.send('], "end": "emptyKey16"},');

  return typeMaps[mimeType] || 'application/pdf';
    SRTlib.send('], "end": "emptyKey16"},');

};
