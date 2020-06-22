var SRTlib = require('SRT-util');
const DefaultStore = require('./index');
describe('DefaultStore', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "DefaultStore", "fileName": "${__filename}", "calls" : [`);

  it('can be created with or without new', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "DefaultStore", "testName": "can%20be%20created%20with%20or%20without%20new", "fileName": "${__filename}", "calls" : [`);

    let store = DefaultStore();
    expect(typeof store).toBe('object');
    store = new DefaultStore();
    expect(typeof store).toBe('object');
        SRTlib.send('], "end": "test-can%20be%20created%20with%20or%20without%20new"},');
    SRTlib.endLogger();

  });
  it('merges in state using `setState`', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "DefaultStore", "testName": "merges%20in%20state%20using%20%60setState%60", "fileName": "${__filename}", "calls" : [`);

    const store = DefaultStore();
    expect(store.getState()).toEqual({});
    store.setState({
      a: 1,
      b: 2
    });
    expect(store.getState()).toEqual({
      a: 1,
      b: 2
    });
    store.setState({
      b: 3
    });
    expect(store.getState()).toEqual({
      a: 1,
      b: 3
    });
        SRTlib.send('], "end": "test-merges%20in%20state%20using%20%60setState%60"},');
    SRTlib.endLogger();

  });
  it('notifies subscriptions when state changes', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "DefaultStore", "testName": "notifies%20subscriptions%20when%20state%20changes", "fileName": "${__filename}", "calls" : [`);

    let expected = [];
    let calls = 0;
    function listener(prevState, nextState, patch) {
      calls++;
      expect([prevState, nextState, patch]).toEqual(expected);
    }
    const store = DefaultStore();
    store.subscribe(listener);
    expected = [{}, {
      a: 1,
      b: 2
    }, {
      a: 1,
      b: 2
    }];
    store.setState({
      a: 1,
      b: 2
    });
    expected = [{
      a: 1,
      b: 2
    }, {
      a: 1,
      b: 3
    }, {
      b: 3
    }];
    store.setState({
      b: 3
    });
    expect(calls).toBe(2);
        SRTlib.send('], "end": "test-notifies%20subscriptions%20when%20state%20changes"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
