var SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return !!item.type;
    SRTlib.send("]},");

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (exports.isFolder(item)) {
        SRTlib.send("]},");

    return 'folder';
  }
    SRTlib.send("]},");

  return exports.sortImages(item.images)[0].source;
    SRTlib.send("]},");

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.data;
    SRTlib.send("]},");

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.name || `${item.id} ${item.created_time}`;
    SRTlib.send("]},");

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return exports.isFolder(item) ? null : 'image/jpeg';
    SRTlib.send("]},");

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return `${item.id}`;
    SRTlib.send("]},");

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return `${item.id}`;
    SRTlib.send("]},");

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.created_time;
    SRTlib.send("]},");

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return exports.isFolder(item) ? null : exports.sortImages(item.images)[0].source;
    SRTlib.send("]},");

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send("]},");

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send("]},");

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send("]},");

};
exports.sortImages = images => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return images.slice().sort((a, b) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return a.width - b.width;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
