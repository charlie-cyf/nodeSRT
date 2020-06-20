var SRTlib = require('SRT-util');
const querystring = require('querystring');
const MEDIA_TYPES = Object.freeze({
  video: 'VIDEO',
  carousel: 'CAROUSEL_ALBUM',
  image: 'IMAGE'
});
const isVideo = item => {
    SRTlib.send(`{ "anonymous": false, "function": "isVideo", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.media_type === MEDIA_TYPES.video;
    SRTlib.send("]},");

};
exports.isFolder = _ => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return false;
    SRTlib.send("]},");

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return isVideo(item) ? item.thumbnail_url : item.media_url;
    SRTlib.send("]},");

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const newItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (isVideo(subItem)) {
            SRTlib.send("]},");

      return;
    }
    if (subItem.media_type === MEDIA_TYPES.carousel) {
      subItem.children.data.forEach(i => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (isVideo(i)) {
                    SRTlib.send("]},");

          return;
        }
        newItems.push(i);
                SRTlib.send("]},");

      });
    } else {
      newItems.push(subItem);
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return newItems;
    SRTlib.send("]},");

};
exports.getItemName = (item, index) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const ext = isVideo(item) ? 'mp4' : 'jpeg';
    SRTlib.send("]},");

  return `Instagram ${item.timestamp}${index}.${ext}`;
    SRTlib.send("]},");

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return isVideo(item) ? 'video/mp4' : 'image/jpeg';
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

  return item.id;
    SRTlib.send("]},");

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return item.timestamp;
    SRTlib.send("]},");

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return exports.getItemIcon(item);
    SRTlib.send("]},");

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
