const SRTlib = require('SRT-util');

const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isFolder","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

  if (item.remoteItem) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

    return !!item.remoteItem.folder;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

  return !!item.folder;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSize","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSize"},');

  return item.size;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSize"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemIcon","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

  return exports.isFolder(item) ? 'folder' : exports.getItemThumbnailUrl(item);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSubList","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

  return item.value;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemName","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

  return item.name || '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getMimeType","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

  return item.file ? item.file.mimeType : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemId","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

  if (item.remoteItem) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

    return item.remoteItem.id;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemRequestPath","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

  let query = `?driveId=${item.parentReference.driveId}`;
  if (item.remoteItem) {
    query = `?driveId=${item.remoteItem.parentReference.driveId}`;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

  return exports.getItemId(item) + query;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemModifiedDate","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

  return item.lastModifiedDateTime;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemThumbnailUrl","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

  return item.thumbnails[0] ? item.thumbnails[0].medium.url : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getNextPagePath","fileName":"/packages/@uppy/companion/src/server/provider/onedrive/adapter.js","paramsNumber":1},`);

  if (!data['@odata.nextLink']) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

    return null;
  }
  const query = {
    cursor: querystring.parse(data['@odata.nextLink']).$skiptoken
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

  return `?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

};
