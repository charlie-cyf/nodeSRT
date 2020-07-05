const SRTlib = require('SRT-util');

var toArray = require('@uppy/utils/lib/toArray');
module.exports = function forEachDroppedOrPastedUrl(dataTransfer, isDropOrPaste, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":3},`);

  var items = toArray(dataTransfer.items);
  var urlItems;
  switch (isDropOrPaste) {
    case 'paste':
      {
        var atLeastOneFileIsDragged = items.some(function (item) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged.items.some","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged.items.some"},');

          return item.kind === 'file';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged.items.some"},');

        });
        if (atLeastOneFileIsDragged) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

          return;
        } else {
          urlItems = items.filter(function (item) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter"},');

            return item.kind === 'string' && item.type === 'text/plain';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter"},');

          });
        }
        break;
      }
    case 'drop':
      {
        urlItems = items.filter(function (item) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter2"},');

          return item.kind === 'string' && item.type === 'text/uri-list';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.items.filter2"},');

        });
        break;
      }
    default:
      {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

        throw new Error("isDropOrPaste must be either 'drop' or 'paste', but it's " + isDropOrPaste);
      }
  }
  urlItems.forEach(function (item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach","fileName":"${__filename}","paramsNumber":1},`);

    item.getAsString(function (urlString) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach.item.getAsString","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach.item.getAsString"},');

      return callback(urlString);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach.item.getAsString"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
