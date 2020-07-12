const SRTlib = require('SRT-util');

const mime = require('mime-types');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getUsername","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getUsername"},');

  return data.user_email;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getUsername"},');

};
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isFolder","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

  return item['.tag'] === 'folder';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSize","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSize"},');

  return item.size;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSize"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemIcon","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

  return item['.tag'];
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSubList","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

  return item.entries;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemName","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

  return item.name || '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getMimeType","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

  return mime.lookup(exports.getItemName(item)) || null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemId","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemRequestPath","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

  return encodeURIComponent(item.path_lower);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemModifiedDate","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

  return item.server_modified;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemThumbnailUrl","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

  return `/dropbox/thumbnail/${exports.getItemRequestPath(item)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getNextPagePath","fileName":"/packages/@uppy/companion/lib/server/provider/dropbox/adapter.js","paramsNumber":1},`);

  if (!data.has_more) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

    return null;
  }
  const query = {
    cursor: data.cursor
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

  return `?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

};
