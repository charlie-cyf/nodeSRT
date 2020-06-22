var SRTlib = require('SRT-util');
const mime = require('mime-types');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey"},');

  return data.user_email;
    SRTlib.send('], "end": "emptyKey"},');

};
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey2"},');

  return item['.tag'] === 'folder';
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey3"},');

  return item.size;
    SRTlib.send('], "end": "emptyKey3"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey4"},');

  return item['.tag'];
    SRTlib.send('], "end": "emptyKey4"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey5"},');

  return item.entries;
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey6"},');

  return item.name || '';
    SRTlib.send('], "end": "emptyKey6"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey7"},');

  return mime.lookup(exports.getItemName(item)) || null;
    SRTlib.send('], "end": "emptyKey7"},');

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey8"},');

  return item.id;
    SRTlib.send('], "end": "emptyKey8"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey9"},');

  return encodeURIComponent(item.path_lower);
    SRTlib.send('], "end": "emptyKey9"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey10"},');

  return item.server_modified;
    SRTlib.send('], "end": "emptyKey10"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey11"},');

  return `/dropbox/thumbnail/${exports.getItemRequestPath(item)}`;
    SRTlib.send('], "end": "emptyKey11"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!data.has_more) {
        SRTlib.send('], "end": "emptyKey12"},');

    return null;
  }
  const query = {
    cursor: data.cursor
  };
    SRTlib.send('], "end": "emptyKey12"},');

  return `?${querystring.stringify(query)}`;
    SRTlib.send('], "end": "emptyKey12"},');

};
