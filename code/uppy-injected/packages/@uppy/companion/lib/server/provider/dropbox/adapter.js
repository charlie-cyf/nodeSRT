var SRTlib = require('SRT-util');
const mime = require('mime-types');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return data.user_email;
    SRTlib.send("]},");

};
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item['.tag'] === 'folder';
    SRTlib.send("]},");

};
exports.getItemSize = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.size;
    SRTlib.send("]},");

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item['.tag'];
    SRTlib.send("]},");

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.entries;
    SRTlib.send("]},");

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.name || '';
    SRTlib.send("]},");

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return mime.lookup(exports.getItemName(item)) || null;
    SRTlib.send("]},");

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.id;
    SRTlib.send("]},");

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return encodeURIComponent(item.path_lower);
    SRTlib.send("]},");

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.server_modified;
    SRTlib.send("]},");

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return `/dropbox/thumbnail/${exports.getItemRequestPath(item)}`;
    SRTlib.send("]},");

};
exports.getNextPagePath = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!data.has_more) {
        SRTlib.send("]},");

    return null;
  }
  const query = {
    cursor: data.cursor
  };
    SRTlib.send("]},");

  return `?${querystring.stringify(query)}`;
    SRTlib.send("]},");

};
