const SRTlib = require('SRT-util');

const querystring = require('querystring');
const MEDIA_TYPES = Object.freeze({
  video: 'VIDEO',
  carousel: 'CAROUSEL_ALBUM',
  image: 'IMAGE'
});
const isVideo = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isVideo","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isVideo"},');

  return item.media_type === MEDIA_TYPES.video;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isVideo"},');

};
exports.isFolder = _ => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isFolder","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemIcon","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

  return isVideo(item) ? item.thumbnail_url : item.media_url;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSubList","fileName":"${__filename}","paramsNumber":1},`);

  const newItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"item.data.forEach","fileName":"${__filename}","paramsNumber":1},`);

    if (subItem.media_type === MEDIA_TYPES.carousel) {
      subItem.children.data.forEach(i => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"subItem.children.data.forEach","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"subItem.children.data.forEach"},');

        return newItems.push(i);
                SRTlib.send('{"type":"FUNCTIONEND","function":"subItem.children.data.forEach"},');

      });
    } else {
      newItems.push(subItem);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"item.data.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

  return newItems;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

};
exports.getItemName = (item, index) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemName","fileName":"${__filename}","paramsNumber":2},`);

  const ext = isVideo(item) ? 'mp4' : 'jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

  return `Instagram ${item.timestamp}${index}.${ext}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getMimeType","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

  return isVideo(item) ? 'video/mp4' : 'image/jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemId","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemRequestPath","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemModifiedDate","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

  return item.timestamp;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemThumbnailUrl","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

  return exports.getItemIcon(item);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getNextPagePath","fileName":"${__filename}","paramsNumber":3},`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

};
