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
