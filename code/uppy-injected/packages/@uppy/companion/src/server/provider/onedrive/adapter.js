var SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (item.remoteItem) {
        SRTlib.send('], "end": "emptyKey"},');

    return !!item.remoteItem.folder;
  }
    SRTlib.send('], "end": "emptyKey"},');

  return !!item.folder;
    SRTlib.send('], "end": "emptyKey"},');

};
exports.getItemSize = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey2"},');

  return item.size;
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey3"},');

  return exports.isFolder(item) ? 'folder' : exports.getItemThumbnailUrl(item);
    SRTlib.send('], "end": "emptyKey3"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey4"},');

  return item.value;
    SRTlib.send('], "end": "emptyKey4"},');

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey5"},');

  return item.name || '';
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey6"},');

  return item.file ? item.file.mimeType : null;
    SRTlib.send('], "end": "emptyKey6"},');

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (item.remoteItem) {
        SRTlib.send('], "end": "emptyKey7"},');

    return item.remoteItem.id;
  }
    SRTlib.send('], "end": "emptyKey7"},');

  return item.id;
    SRTlib.send('], "end": "emptyKey7"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  let query = `?driveId=${item.parentReference.driveId}`;
  if (item.remoteItem) {
    query = `?driveId=${item.remoteItem.parentReference.driveId}`;
  }
    SRTlib.send('], "end": "emptyKey8"},');

  return exports.getItemId(item) + query;
    SRTlib.send('], "end": "emptyKey8"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey9"},');

  return item.lastModifiedDateTime;
    SRTlib.send('], "end": "emptyKey9"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey10"},');

  return item.thumbnails[0] ? item.thumbnails[0].medium.url : null;
    SRTlib.send('], "end": "emptyKey10"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!data['@odata.nextLink']) {
        SRTlib.send('], "end": "emptyKey11"},');

    return null;
  }
  const query = {
    cursor: querystring.parse(data['@odata.nextLink']).$skiptoken
  };
    SRTlib.send('], "end": "emptyKey11"},');

  return `?${querystring.stringify(query)}`;
    SRTlib.send('], "end": "emptyKey11"},');

};
