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