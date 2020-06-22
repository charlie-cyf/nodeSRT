var SRTlib = require('SRT-util');
const querystring = require('querystring');
const MEDIA_TYPES = Object.freeze({
  video: 'VIDEO',
  carousel: 'CAROUSEL_ALBUM',
  image: 'IMAGE'
});
const isVideo = item => {
    SRTlib.send(`{ "anonymous": false, "function": "isVideo", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "isVideo"},');

  return item.media_type === MEDIA_TYPES.video;
    SRTlib.send('], "end": "isVideo"},');

};
exports.isFolder = _ => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey"},');

  return false;
    SRTlib.send('], "end": "emptyKey"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey2"},');

  return isVideo(item) ? item.thumbnail_url : item.media_url;
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const newItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (isVideo(subItem)) {
            SRTlib.send('], "end": "emptyKey4"},');

      return;
    }
    if (subItem.media_type === MEDIA_TYPES.carousel) {
      subItem.children.data.forEach(i => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (isVideo(i)) {
                    SRTlib.send('], "end": "emptyKey3"},');

          return;
        }
        newItems.push(i);
                SRTlib.send('], "end": "emptyKey3"},');

      });
    } else {
      newItems.push(subItem);
    }
        SRTlib.send('], "end": "emptyKey4"},');

  });
    SRTlib.send('], "end": "emptyKey5"},');

  return newItems;
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.getItemName = (item, index) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const ext = isVideo(item) ? 'mp4' : 'jpeg';
    SRTlib.send('], "end": "emptyKey6"},');

  return `Instagram ${item.timestamp}${index}.${ext}`;
    SRTlib.send('], "end": "emptyKey6"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey7"},');

  return isVideo(item) ? 'video/mp4' : 'image/jpeg';
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

  return item.id;
    SRTlib.send('], "end": "emptyKey9"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey10"},');

  return item.timestamp;
    SRTlib.send('], "end": "emptyKey10"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey11"},');

  return exports.getItemIcon(item);
    SRTlib.send('], "end": "emptyKey11"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send('], "end": "emptyKey12"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send('], "end": "emptyKey12"},');

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send('], "end": "emptyKey12"},');

};
