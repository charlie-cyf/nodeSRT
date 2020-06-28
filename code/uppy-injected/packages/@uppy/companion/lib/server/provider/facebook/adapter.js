const SRTlib = require('SRT-util');

const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isFolder","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

  return !!item.type;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemIcon","fileName":"${__filename}","paramsNumber":1},`);

  if (exports.isFolder(item)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

    return 'folder';
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

  return exports.sortImages(item.images)[0].source;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSubList","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

  return item.data;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemName","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

  return item.name || `${item.id} ${item.created_time}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getMimeType","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

  return exports.isFolder(item) ? null : 'image/jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemId","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

  return `${item.id}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemRequestPath","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

  return `${item.id}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemModifiedDate","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

  return item.created_time;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemThumbnailUrl","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

  return exports.isFolder(item) ? null : exports.sortImages(item.images)[0].source;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getNextPagePath","fileName":"${__filename}","paramsNumber":3},`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

};
exports.sortImages = images => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.sortImages","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.sortImages"},');

  // sort in ascending order of dimension
  return images.slice().sort((a, b) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.images.slice.sort","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.images.slice.sort"},');

    return a.width - b.width;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.images.slice.sort"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.sortImages"},');

};
