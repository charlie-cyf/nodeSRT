const SRTlib = require('SRT-util');

exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.isFolder","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.isFolder"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemIcon","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

  if (!item.images) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

    return 'video';
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

  return item.images.low_resolution.url;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemIcon"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemSubList","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

  const subItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"item.data.forEach","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

    if (subItem.carousel_media) {
      subItem.carousel_media.forEach((i, index) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"subItem.carousel_media.forEach","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":2},`);

        const newSubItem = Object.assign({}, i, {
          id: subItem.id,
          created_time: subItem.created_time,
          carousel_id: index
        });
        subItems.push(newSubItem);
                SRTlib.send('{"type":"FUNCTIONEND","function":"subItem.carousel_media.forEach"},');

      });
    } else {
      subItems.push(subItem);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"item.data.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

  return subItems;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemSubList"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemName","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

  if (item && item.created_time) {
    const ext = item.type === 'video' ? 'mp4' : 'jpeg';
    const date = new Date(item.created_time * 1000);
    const name = date.toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

    return `Instagram ${name}${item.carousel_id ? ' ' + item.carousel_id : ''}.${ext}`;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

  return '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemName"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getMimeType","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

  return item.type === 'video' ? 'video/mp4' : 'image/jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getMimeType"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemId","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

  return `${item.id}${item.carousel_id || ''}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemId"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemRequestPath","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

  const suffix = isNaN(item.carousel_id) ? '' : `?carousel_id=${item.carousel_id}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

  return `${item.id}${suffix}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemRequestPath"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemModifiedDate","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

  return item.created_time;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemModifiedDate"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getItemThumbnailUrl","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

  return item.images ? item.images.thumbnail.url : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getItemThumbnailUrl"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getNextPagePath","fileName":"/packages/@uppy/companion/src/server/provider/instagram/adapter.js","paramsNumber":1},`);

  const items = exports.getItemSubList(data);
  if (items.length) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

    return `recent?cursor=${exports.getItemId(items[items.length - 1])}`;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getNextPagePath"},');

};
