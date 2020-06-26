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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return isVideo(item) ? item.thumbnail_url : item.media_url;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

  const newItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    // exclude videos because of bug https://developers.facebook.com/support/bugs/801145630390846/
    // @todo remove this clause when bug is fixed
    if (isVideo(subItem)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      return;
    }
    if (subItem.media_type === MEDIA_TYPES.carousel) {
      subItem.children.data.forEach(i => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

        // exclude videos because of bug https://developers.facebook.com/support/bugs/801145630390846/
        // @todo remove this clause when bug is fixed
        if (isVideo(i)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

          return;
        }
        newItems.push(i);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      });
    } else {
      newItems.push(subItem);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return newItems;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.getItemName = (item, index) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":2},`);

  const ext = isVideo(item) ? 'mp4' : 'jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  // adding index, so the name is unique
  return `Instagram ${item.timestamp}${index}.${ext}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  return isVideo(item) ? 'video/mp4' : 'image/jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  return item.timestamp;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  return exports.getItemIcon(item);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":3},`);

  if (!data.paging || !data.paging.cursors) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    return null;
  }
  const query = Object.assign({}, currentQuery, {
    cursor: data.paging.cursors.after
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  return `${currentPath || ''}?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

};
