const SRTlib = require('SRT-util');

const toArray = require('@uppy/utils/lib/toArray');
module.exports = function forEachDroppedOrPastedUrl(dataTransfer, isDropOrPaste, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/url/src/utils/forEachDroppedOrPastedUrl.js","paramsNumber":3},`);

  const items = toArray(dataTransfer.items);
  let urlItems;
  switch (isDropOrPaste) {
    case 'paste':
      {
        const atLeastOneFileIsDragged = items.some(item => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged.items.some","fileName":"/packages/@uppy/url/src/utils/forEachDroppedOrPastedUrl.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged.items.some"},');

          return item.kind === 'file';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged.items.some"},');

        });
        if (atLeastOneFileIsDragged) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

          return;
        } else {
          urlItems = items.filter(item => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter","fileName":"/packages/@uppy/url/src/utils/forEachDroppedOrPastedUrl.js","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter"},');

            return item.kind === 'string' && item.type === 'text/plain';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter"},');

          });
        }
        break;
      }
    case 'drop':
      {
        urlItems = items.filter(item => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter###2","fileName":"/packages/@uppy/url/src/utils/forEachDroppedOrPastedUrl.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter###2"},');

          return item.kind === 'string' && item.type === 'text/uri-list';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter###2"},');

        });
        break;
      }
    default:
      {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

        throw new Error(`isDropOrPaste must be either 'drop' or 'paste', but it's ${isDropOrPaste}`);
      }
  }
  urlItems.forEach(item => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach","fileName":"/packages/@uppy/url/src/utils/forEachDroppedOrPastedUrl.js","paramsNumber":1},`);

    item.getAsString(urlString => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"item.getAsString","fileName":"/packages/@uppy/url/src/utils/forEachDroppedOrPastedUrl.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"item.getAsString"},');

      return callback(urlString);
            SRTlib.send('{"type":"FUNCTIONEND","function":"item.getAsString"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
