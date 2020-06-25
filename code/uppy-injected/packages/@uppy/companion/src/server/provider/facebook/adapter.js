const SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return !!item.type;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

  if (exports.isFolder(item)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return 'folder';
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return exports.sortImages(item.images)[0].source;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return item.data;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  return item.name || `${item.id} ${item.created_time}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return exports.isFolder(item) ? null : 'image/jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  return `${item.id}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  return `${item.id}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  return item.created_time;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  return exports.isFolder(item) ? null : exports.sortImages(item.images)[0].source;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":3},`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

};
exports.sortImages = images => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  // sort in ascending order of dimension
  return images.slice().sort((a, b) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    return a.width - b.width;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

};
