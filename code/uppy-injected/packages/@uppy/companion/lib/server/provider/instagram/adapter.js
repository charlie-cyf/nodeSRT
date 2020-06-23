var SRTlib = require('SRT-util');
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

  if (!item.images) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return 'video';
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return item.images.low_resolution.url;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

  const subItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    if (subItem.carousel_media) {
      subItem.carousel_media.forEach((i, index) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":2},`);

        const newSubItem = Object.assign({}, i, {
          id: subItem.id,
          created_time: subItem.created_time,
          carousel_id: index
        });
        subItems.push(newSubItem);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      });
    } else {
      subItems.push(subItem);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  return subItems;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    return `Instagram ${name}${item.carousel_id ? ' ' + item.carousel_id : ''}.${ext}`;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  return '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  return item.type === 'video' ? 'video/mp4' : 'image/jpeg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  return `${item.id}${item.carousel_id || ''}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

  const suffix = isNaN(item.carousel_id) ? '' : `?carousel_id=${item.carousel_id}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  return `${item.id}${suffix}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  return item.created_time;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  return item.images ? item.images.thumbnail.url : null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

  const items = exports.getItemSubList(data);
  if (items.length) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    return `recent?cursor=${exports.getItemId(items[items.length - 1])}`;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

};
