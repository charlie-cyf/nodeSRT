var SRTlib = require('SRT-util');

var toArray = require('@uppy/utils/lib/toArray');

module.exports = function forEachDroppedOrPastedUrl(dataTransfer, isDropOrPaste, callback) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.forEachDroppedOrPastedUrl\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
  var items = toArray(dataTransfer.items);
  var urlItems;

  switch (isDropOrPaste) {
    case 'paste':
      {
        var atLeastOneFileIsDragged = items.some(function (item) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          item.kind === 'file';
          SRTlib.send("]},");
        });

        if (atLeastOneFileIsDragged) {
          SRTlib.send("]},");
          return;
        } else {
          urlItems = items.filter(function (item) {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
            item.kind === 'string' && item.type === 'text/plain';
            SRTlib.send("]},");
          });
        }

        break;
      }

    case 'drop':
      {
        urlItems = items.filter(function (item) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          item.kind === 'string' && item.type === 'text/uri-list';
          SRTlib.send("]},");
        });
        break;
      }

    default:
      {
        throw new Error("isDropOrPaste must be either 'drop' or 'paste', but it's " + isDropOrPaste);
      }
  }

  urlItems.forEach(function (item) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    item.getAsString(function (urlString) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      callback(urlString);
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
};