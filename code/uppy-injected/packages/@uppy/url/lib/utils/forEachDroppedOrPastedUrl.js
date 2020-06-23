var SRTlib = require('SRT-util');
var toArray = require('@uppy/utils/lib/toArray');
module.exports = function forEachDroppedOrPastedUrl(dataTransfer, isDropOrPaste, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl3","fileName":"${__filename}","paramsNumber":3},`);

  var items = toArray(dataTransfer.items);
  var urlItems;
  switch (isDropOrPaste) {
    case 'paste':
      {
        var atLeastOneFileIsDragged = items.some(function (item) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged"},');

          return item.kind === 'file';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.atLeastOneFileIsDragged"},');

        });
        if (atLeastOneFileIsDragged) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl3"},');

          return;
        } else {
          urlItems = items.filter(function (item) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems"},');

            return item.kind === 'string' && item.type === 'text/plain';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems"},');

          });
        }
        break;
      }
    case 'drop':
      {
        urlItems = items.filter(function (item) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl.urlItems2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems2"},');

          return item.kind === 'string' && item.type === 'text/uri-list';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl.urlItems2"},');

        });
        break;
      }
    default:
      {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl3"},');

        throw new Error("isDropOrPaste must be either 'drop' or 'paste', but it's " + isDropOrPaste);
      }
  }
  urlItems.forEach(function (item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl2","fileName":"${__filename}","paramsNumber":1},`);

    item.getAsString(function (urlString) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl"},');

      return callback(urlString);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl3"},');

};
