var SRTlib = require('SRT-util');
const UppySocket = require('./Socket');
describe('Socket', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Socket", "fileName": "${__filename}", "calls" : [`);

  let webSocketConstructorSpy;
  let webSocketCloseSpy;
  let webSocketSendSpy;
  beforeEach(() => {
    webSocketConstructorSpy = jest.fn();
    webSocketCloseSpy = jest.fn();
    webSocketSendSpy = jest.fn();
    global.WebSocket = class WebSocket {
      constructor(target) {
        webSocketConstructorSpy(target);
      }
      close(args) {
        webSocketCloseSpy(args);
      }
      send(json) {
        webSocketSendSpy(json);
      }
      triggerOpen() {
        this.onopen();
      }
      triggerClose() {
        this.onclose();
      }
    };
  });
  afterEach(() => {
    global.WebSocket = undefined;
  });
  it('should expose a class', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20expose%20a%20class", "fileName": "${__filename}", "calls" : [`);

    expect(UppySocket.name).toEqual('UppySocket');
    expect(new UppySocket({
      target: 'foo'
    }) instanceof UppySocket);
        SRTlib.send(']},');

  });
  it('should setup a new WebSocket', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20setup%20a%20new%20WebSocket", "fileName": "${__filename}", "calls" : [`);

    new UppySocket({
      target: 'foo'
    });
    expect(webSocketConstructorSpy.mock.calls[0][0]).toEqual('foo');
        SRTlib.send(']},');

  });
  it('should send a message via the websocket if the connection is open', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20send%20a%20message%20via%20the%20websocket%20if%20the%20connection%20is%20open", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const webSocketInstance = uppySocket.socket;
    webSocketInstance.triggerOpen();
    uppySocket.send('bar', 'boo');
    expect(webSocketSendSpy.mock.calls.length).toEqual(1);
    expect(webSocketSendSpy.mock.calls[0]).toEqual([JSON.stringify({
      action: 'bar',
      payload: 'boo'
    })]);
        SRTlib.send(']},');

  });
  it('should queue the message for the websocket if the connection is not open', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20queue%20the%20message%20for%20the%20websocket%20if%20the%20connection%20is%20not%20open", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    uppySocket.send('bar', 'boo');
    expect(uppySocket._queued).toEqual([{
      action: 'bar',
      payload: 'boo'
    }]);
    expect(webSocketSendSpy.mock.calls.length).toEqual(0);
        SRTlib.send(']},');

  });
  it('should queue any messages for the websocket if the connection is not open, then send them when the connection is open', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20queue%20any%20messages%20for%20the%20websocket%20if%20the%20connection%20is%20not%20open%2C%20then%20send%20them%20when%20the%20connection%20is%20open", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const webSocketInstance = uppySocket.socket;
    uppySocket.send('bar', 'boo');
    uppySocket.send('moo', 'baa');
    expect(uppySocket._queued).toEqual([{
      action: 'bar',
      payload: 'boo'
    }, {
      action: 'moo',
      payload: 'baa'
    }]);
    expect(webSocketSendSpy.mock.calls.length).toEqual(0);
    webSocketInstance.triggerOpen();
    expect(uppySocket._queued).toEqual([]);
    expect(webSocketSendSpy.mock.calls.length).toEqual(2);
    expect(webSocketSendSpy.mock.calls[0]).toEqual([JSON.stringify({
      action: 'bar',
      payload: 'boo'
    })]);
    expect(webSocketSendSpy.mock.calls[1]).toEqual([JSON.stringify({
      action: 'moo',
      payload: 'baa'
    })]);
        SRTlib.send(']},');

  });
  it('should start queuing any messages when the websocket connection is closed', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20start%20queuing%20any%20messages%20when%20the%20websocket%20connection%20is%20closed", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const webSocketInstance = uppySocket.socket;
    webSocketInstance.triggerOpen();
    uppySocket.send('bar', 'boo');
    expect(uppySocket._queued).toEqual([]);
    webSocketInstance.triggerClose();
    uppySocket.send('bar', 'boo');
    expect(uppySocket._queued).toEqual([{
      action: 'bar',
      payload: 'boo'
    }]);
        SRTlib.send(']},');

  });
  it('should close the websocket when it is force closed', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20close%20the%20websocket%20when%20it%20is%20force%20closed", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const webSocketInstance = uppySocket.socket;
    webSocketInstance.triggerOpen();
    uppySocket.close();
    expect(webSocketCloseSpy.mock.calls.length).toEqual(1);
        SRTlib.send(']},');

  });
  it('should be able to subscribe to messages received on the websocket', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20be%20able%20to%20subscribe%20to%20messages%20received%20on%20the%20websocket", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const webSocketInstance = uppySocket.socket;
    const emitterListenerMock = jest.fn();
    uppySocket.on('hi', emitterListenerMock);
    webSocketInstance.triggerOpen();
    webSocketInstance.onmessage({
      data: JSON.stringify({
        action: 'hi',
        payload: 'ho'
      })
    });
    expect(emitterListenerMock.mock.calls).toEqual([['ho', undefined, undefined, undefined, undefined, undefined]]);
        SRTlib.send(']},');

  });
  it('should be able to emit messages and subscribe to them', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20be%20able%20to%20emit%20messages%20and%20subscribe%20to%20them", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const emitterListenerMock = jest.fn();
    uppySocket.on('hi', emitterListenerMock);
    uppySocket.emit('hi', 'ho');
    uppySocket.emit('hi', 'ho');
    uppySocket.emit('hi', 'off to work we go');
    expect(emitterListenerMock.mock.calls).toEqual([['ho', undefined, undefined, undefined, undefined, undefined], ['ho', undefined, undefined, undefined, undefined, undefined], ['off to work we go', undefined, undefined, undefined, undefined, undefined]]);
        SRTlib.send(']},');

  });
  it('should be able to subscribe to the first event for a particular action', () => {
        SRTlib.send(`{ "testSuite": "Socket", "testName": "should%20be%20able%20to%20subscribe%20to%20the%20first%20event%20for%20a%20particular%20action", "fileName": "${__filename}", "calls" : [`);

    const uppySocket = new UppySocket({
      target: 'foo'
    });
    const emitterListenerMock = jest.fn();
    uppySocket.once('hi', emitterListenerMock);
    uppySocket.emit('hi', 'ho');
    uppySocket.emit('hi', 'ho');
    uppySocket.emit('hi', 'off to work we go');
    expect(emitterListenerMock.mock.calls.length).toEqual(1);
    expect(emitterListenerMock.mock.calls).toEqual([['ho', undefined, undefined, undefined, undefined, undefined]]);
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
