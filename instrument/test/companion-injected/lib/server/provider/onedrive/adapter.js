const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  if (item.remoteItem) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return !!item.remoteItem.folder;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return !!item.folder;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return item.size;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return exports.isFolder(item) ? 'folder' : exports.getItemThumbnailUrl(item);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  return item.value;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return item.name || '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  return item.file ? item.file.mimeType : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

  if (item.remoteItem) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    return item.remoteItem.id;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

  let query = `?driveId=${item.parentReference.driveId}`;
  if (item.remoteItem) {
    query = `?driveId=${item.remoteItem.parentReference.driveId}`;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  return exports.getItemId(item) + query;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  return item.lastModifiedDateTime;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  return item.thumbnails[0] ? item.thumbnails[0].medium.url : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

  if (!data['@odata.nextLink']) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    return null;
  }
  const query = {
    cursor: querystring.parse(data['@odata.nextLink']).$skiptoken
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  return `?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

};
