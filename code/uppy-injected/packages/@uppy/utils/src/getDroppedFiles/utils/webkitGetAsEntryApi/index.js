const SRTlib = require('SRT-util');

const toArray = require('../../../toArray');
const getRelativePath = require('./getRelativePath');
const getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');
module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi","fileName":"${__filename}","paramsNumber":2},`);

  const files = [];
  const rootPromises = [];
  /**
  * Returns a resolved promise, when :files array is enhanced
  *
  * @param {(FileSystemFileEntry|FileSystemDirectoryEntry)} entry
  * @returns {Promise} - empty promise that resolves when :files is enhanced with a file
  */
  const createPromiseToAddFileOrParseDirectory = entry => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromiseToAddFileOrParseDirectory","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

    return new Promise(resolve => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      // This is a base call
      if (entry.isFile) {
        // Creates a new File object which can be used to read the file.
        entry.file(file => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

          file.relativePath = getRelativePath(entry);
          files.push(file);
          resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        }, error => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

          // Make sure we resolve on error anyway, it's fine if only one file couldn't be read!
          logDropError(error);
          resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

        });
              // This is a recursive call
} else if (entry.isDirectory) {
        const directoryReader = entry.createReader();
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: entries => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

            const promises = entries.map(entry => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

              return createPromiseToAddFileOrParseDirectory(entry);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

            });
            Promise.all(promises).then(() => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

              return resolve();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

          }
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

  };
  // For each dropped item, - make sure it's a file/directory, and start deepening in!
  toArray(dataTransfer.items).forEach(item => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    const entry = item.webkitGetAsEntry();
    // :entry can be null when we drop the url e.g.
    if (entry) {
      rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi"},');

  return Promise.all(rootPromises).then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    return files;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi"},');

};
