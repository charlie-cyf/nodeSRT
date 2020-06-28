class TransloaditAssembly extends Emitter {
  _connectSocket() {
    socket.on('connect', () => {
      socket.emit('assembly_connect', {
        id: this.status.assembly_id
      });
      this.emit('connect');

    });
  }
}

const createPromiseToAddFileOrParseDirectory = entry => {
  return new Promise(resolve => {

    // This is a base call
    if (entry.isFile) {
      // Creates a new File object which can be used to read the file.
      entry.file(file => {

        file.relativePath = getRelativePath(entry);
        files.push(file);
        resolve();

      }, error => {

        // Make sure we resolve on error anyway, it's fine if only one file couldn't be read!
        logDropError(error);
        resolve();

      });
      // This is a recursive call
    } else if (entry.isDirectory) {
      const directoryReader = entry.createReader();
      getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
        onSuccess: entries => {

          const promises = entries.map(entry => {

            return createPromiseToAddFileOrParseDirectory(entry);

          });
          Promise.all(promises).then(() => {

            return resolve();

          });

        }
      });
    }

  });

};

Promise.all(promises).then(() => {

  return resolve();

});