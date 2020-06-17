var SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (item.remoteItem) {
        SRTlib.send("]},");

    return !!item.remoteItem.folder;
  }
    SRTlib.send("]},");

  return !!item.folder;
    SRTlib.send("]},");

};
exports.getItemSize = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.size;
    SRTlib.send("]},");

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return exports.isFolder(item) ? 'folder' : exports.getItemThumbnailUrl(item);
    SRTlib.send("]},");

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.value;
    SRTlib.send("]},");

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.name || '';
    SRTlib.send("]},");

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.file ? item.file.mimeType : null;
    SRTlib.send("]},");

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (item.remoteItem) {
        SRTlib.send("]},");

    return item.remoteItem.id;
  }
    SRTlib.send("]},");

  return item.id;
    SRTlib.send("]},");

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  let query = `?driveId=${item.parentReference.driveId}`;
  if (item.remoteItem) {
    query = `?driveId=${item.remoteItem.parentReference.driveId}`;
  }
    SRTlib.send("]},");

  return exports.getItemId(item) + query;
    SRTlib.send("]},");

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.lastModifiedDateTime;
    SRTlib.send("]},");

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.thumbnails[0] ? item.thumbnails[0].medium.url : null;
    SRTlib.send("]},");

};
exports.getNextPagePath = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!data['@odata.nextLink']) {
        SRTlib.send("]},");

    return null;
  }
  const query = {
    cursor: querystring.parse(data['@odata.nextLink']).$skiptoken
  };
    SRTlib.send("]},");

  return `?${querystring.stringify(query)}`;
    SRTlib.send("]},");

};
