var SRTlib = require('SRT-util');
exports.isFolder = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey"},');

  return false;
    SRTlib.send('], "end": "emptyKey"},');

};
exports.getItemIcon = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!item.images) {
        SRTlib.send('], "end": "emptyKey2"},');

    return 'video';
  }
    SRTlib.send('], "end": "emptyKey2"},');

  return item.images.low_resolution.url;
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.getItemSubList = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const subItems = [];
  item.data.forEach(subItem => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (subItem.carousel_media) {
      subItem.carousel_media.forEach((i, index) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        const newSubItem = Object.assign({}, i, {
          id: subItem.id,
          created_time: subItem.created_time,
          carousel_id: index
        });
        subItems.push(newSubItem);
                SRTlib.send('], "end": "emptyKey3"},');

      });
    } else {
      subItems.push(subItem);
    }
        SRTlib.send('], "end": "emptyKey4"},');

  });
    SRTlib.send('], "end": "emptyKey5"},');

  return subItems;
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.getItemName = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send('], "end": "emptyKey6"},');

    return `Instagram ${name}${item.carousel_id ? ' ' + item.carousel_id : ''}.${ext}`;
  }
    SRTlib.send('], "end": "emptyKey6"},');

  return '';
    SRTlib.send('], "end": "emptyKey6"},');

};
exports.getMimeType = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey7"},');

  return item.type === 'video' ? 'video/mp4' : 'image/jpeg';
    SRTlib.send('], "end": "emptyKey7"},');

};
exports.getItemId = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey8"},');

  return `${item.id}${item.carousel_id || ''}`;
    SRTlib.send('], "end": "emptyKey8"},');

};
exports.getItemRequestPath = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const suffix = isNaN(item.carousel_id) ? '' : `?carousel_id=${item.carousel_id}`;
    SRTlib.send('], "end": "emptyKey9"},');

  return `${item.id}${suffix}`;
    SRTlib.send('], "end": "emptyKey9"},');

};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey10"},');

  return item.created_time;
    SRTlib.send('], "end": "emptyKey10"},');

};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey11"},');

  return item.images ? item.images.thumbnail.url : null;
    SRTlib.send('], "end": "emptyKey11"},');

};
exports.getNextPagePath = data => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const items = exports.getItemSubList(data);
  if (items.length) {
        SRTlib.send('], "end": "emptyKey12"},');

    return `recent?cursor=${exports.getItemId(items[items.length - 1])}`;
  }
    SRTlib.send('], "end": "emptyKey12"},');

};
