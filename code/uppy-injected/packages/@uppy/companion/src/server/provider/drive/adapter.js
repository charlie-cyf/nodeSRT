const SRTlib = require('SRT-util');

const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getUsername","fileName":"${__filename}","paramsNumber":1},`);

  for (const item of data.files) {
    if (item.ownedByMe && item.permissions) {
      for (const permission of item.permissions) {
        if (permission.role === 'owner') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getUsername"},');

          return permission.emailAddress;
        }
      }
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getUsername"},');

};
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isFolder","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

  return item.mimeType === 'application/vnd.google-apps.folder' || exports.isSharedDrive(item);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSize","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSize"},');

  return parseInt(item.size, 10);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSize"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemIcon","fileName":"${__filename}","paramsNumber":1},`);

  if (exports.isSharedDrive(item)) {
    const size = '=w16-h16-n';
    const sizeParamRegex = /=[-whncsp0-9]*$/;
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

    return item.backgroundImageLink.match(sizeParamRegex) ? item.backgroundImageLink.replace(sizeParamRegex, size) : `${item.backgroundImageLink}${size}`;
  }
  if (item.thumbnailLink && !item.mimeType.startsWith('application/vnd.google')) {
    const smallerThumbnailLink = item.thumbnailLink.replace('s220', 's40');
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

    return smallerThumbnailLink;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

  return item.iconLink;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSubList","fileName":"${__filename}","paramsNumber":1},`);

  const allowedGSuiteTypes = ['application/vnd.google-apps.document', 'application/vnd.google-apps.drawing', 'application/vnd.google-apps.script', 'application/vnd.google-apps.spreadsheet', 'application/vnd.google-apps.presentation'];
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

  return item.files.filter(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.item.files.filter","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.item.files.filter"},');

    return exports.isFolder(i) || !exports.isGsuiteFile(i.mimeType) || allowedGSuiteTypes.includes(i.mimeType);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.item.files.filter"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemName","fileName":"${__filename}","paramsNumber":1},`);

  const extensionMaps = {
    'application/vnd.google-apps.document': '.docx',
    'application/vnd.google-apps.drawing': '.png',
    'application/vnd.google-apps.script': '.json',
    'application/vnd.google-apps.spreadsheet': '.xlsx',
    'application/vnd.google-apps.presentation': '.ppt'
  };
  const extension = extensionMaps[item.mimeType];
  if (extension && item.name && !item.name.endsWith(extension)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

    return item.name + extension;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

  return item.name ? item.name : '/';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getMimeType","fileName":"${__filename}","paramsNumber":1},`);

  if (exports.isGsuiteFile(item.mimeType)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

    return exports.getGsuiteExportType(item.mimeType);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

  return item.mimeType;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemId","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemRequestPath","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemModifiedDate","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

  return item.modifiedTime;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemThumbnailUrl","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

  return item.thumbnailLink;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

};
exports.isSharedDrive = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isSharedDrive","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isSharedDrive"},');

  return item.kind === 'drive#drive';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isSharedDrive"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getNextPagePath","fileName":"${__filename}","paramsNumber":3},`);

  if (!data.nextPageToken) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.nextPageToken
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

  return `${currentPath}?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

};
exports.isGsuiteFile = mimeType => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isGsuiteFile","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isGsuiteFile"},');

  return mimeType && mimeType.startsWith('application/vnd.google');
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isGsuiteFile"},');

};
exports.getGsuiteExportType = mimeType => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getGsuiteExportType","fileName":"${__filename}","paramsNumber":1},`);

  const typeMaps = {
    'application/vnd.google-apps.document': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.google-apps.drawing': 'image/png',
    'application/vnd.google-apps.script': 'application/vnd.google-apps.script+json',
    'application/vnd.google-apps.spreadsheet': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.google-apps.presentation': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getGsuiteExportType"},');

  return typeMaps[mimeType] || 'application/pdf';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getGsuiteExportType"},');

};
