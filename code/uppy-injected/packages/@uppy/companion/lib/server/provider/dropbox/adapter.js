var SRTlib = require('SRT-util');
const mime = require('mime-types');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return data.user_email;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return item['.tag'] === 'folder';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return item.size;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  return item['.tag'];
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return item.entries;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  return item.name || '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  return mime.lookup(exports.getItemName(item)) || null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  return encodeURIComponent(item.path_lower);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  return item.server_modified;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  return `/dropbox/thumbnail/${exports.getItemRequestPath(item)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

  if (!data.has_more) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    return null;
  }
  const query = {
    cursor: data.cursor
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  return `?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

};
