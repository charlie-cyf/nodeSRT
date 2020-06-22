var SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey"},');

  return !!item.type;
    SRTlib.send('], "end": "emptyKey"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (exports.isFolder(item)) {
        SRTlib.send('], "end": "emptyKey2"},');

    return 'folder';
  }
    SRTlib.send('], "end": "emptyKey2"},');

  return exports.sortImages(item.images)[0].source;
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey3"},');

  return item.data;
    SRTlib.send('], "end": "emptyKey3"},');

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey4"},');

  return item.name || `${item.id} ${item.created_time}`;
    SRTlib.send('], "end": "emptyKey4"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey5"},');

  return exports.isFolder(item) ? null : 'image/jpeg';
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey6"},');

  return `${item.id}`;
    SRTlib.send('], "end": "emptyKey6"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey7"},');

  return `${item.id}`;
    SRTlib.send('], "end": "emptyKey7"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey8"},');

  return item.created_time;
    SRTlib.send('], "end": "emptyKey8"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey9"},');

  return exports.isFolder(item) ? null : exports.sortImages(item.images)[0].source;
    SRTlib.send('], "end": "emptyKey9"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send('], "end": "emptyKey10"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send('], "end": "emptyKey10"},');

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send('], "end": "emptyKey10"},');

};
exports.sortImages = images => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey12"},');

  return images.slice().sort((a, b) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "emptyKey11"},');

    return a.width - b.width;
        SRTlib.send('], "end": "emptyKey11"},');

  });
    SRTlib.send('], "end": "emptyKey12"},');

};
