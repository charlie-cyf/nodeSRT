var SRTlib = require('SRT-util');
const toArray = require('@uppy/utils/lib/toArray');
module.exports = function forEachDroppedOrPastedUrl(dataTransfer, isDropOrPaste, callback) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.forEachDroppedOrPastedUrl","fileName":"${__filename}","paramsNumber":3},`);

  const items = toArray(dataTransfer.items);
  let urlItems;
  switch (isDropOrPaste) {
    case 'paste':
      {
        const atLeastOneFileIsDragged = items.some(item => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

          return item.kind === 'file';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        });
        if (atLeastOneFileIsDragged) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl"},');

          return;
        } else {
          urlItems = items.filter(item => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

            return item.kind === 'string' && item.type === 'text/plain';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

          });
        }
        break;
      }
    case 'drop':
      {
        urlItems = items.filter(item => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

          return item.kind === 'string' && item.type === 'text/uri-list';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        });
        break;
      }
    default:
      {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl"},');

        throw new Error(`isDropOrPaste must be either 'drop' or 'paste', but it's ${isDropOrPaste}`);
      }
  }
  urlItems.forEach(item => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    item.getAsString(urlString => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      return callback(urlString);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forEachDroppedOrPastedUrl"},');

};
