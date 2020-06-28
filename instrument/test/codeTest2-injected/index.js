const SRTlib = require('SRT-util');

class TransloaditAssembly extends Emitter {
  _connectSocket() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_connectSocket","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TransloaditAssembly","superClass":"Emitter"}},`);

    socket.on('connect', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"${__filename}","paramsNumber":0},`);

      socket.emit('assembly_connect', {
        id: this.status.assembly_id
      });
      this.emit('connect');
            SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_connectSocket"},');

  }
}
const createPromiseToAddFileOrParseDirectory = entry => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromiseToAddFileOrParseDirectory","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

  return new Promise(resolve => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

    // This is a base call
    if (entry.isFile) {
      // Creates a new File object which can be used to read the file.
      entry.file(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"entry.file","fileName":"${__filename}","paramsNumber":1},`);

        file.relativePath = getRelativePath(entry);
        files.push(file);
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"entry.file"},');

      }, error => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"entry.file2","fileName":"${__filename}","paramsNumber":1},`);

        // Make sure we resolve on error anyway, it's fine if only one file couldn't be read!
        logDropError(error);
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"entry.file2"},');

      });
          // This is a recursive call
} else if (entry.isDirectory) {
      const directoryReader = entry.createReader();
      getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
        onSuccess: entries => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getFilesAndDirectoriesFromDirectory.onSuccess","fileName":"${__filename}","paramsNumber":1},`);

          const promises = entries.map(entry => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"promises.entries.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"promises.entries.map"},');

            return createPromiseToAddFileOrParseDirectory(entry);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"promises.entries.map"},');

          });
          Promise.all(promises).then(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.all.then","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then"},');

            return resolve();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"getFilesAndDirectoriesFromDirectory.onSuccess"},');

        }
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

};
Promise.all(promises).then(() => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.all.then2","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then2"},');

  return resolve();
    SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then2"},');

});
