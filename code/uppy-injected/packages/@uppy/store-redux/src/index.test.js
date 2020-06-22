var SRTlib = require('SRT-util');
const ReduxStore = require('./index');
const Redux = require('redux');
describe('ReduxStore', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "ReduxStore", "fileName": "${__filename}", "calls" : [`);

  function createStore(reducers = {}) {
    const reducer = Redux.combineReducers(Object.assign({}, reducers, {
      uppy: ReduxStore.reducer
    }));
    return Redux.createStore(reducer);
  }
  it('can be created with or without new', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "ReduxStore", "testName": "can%20be%20created%20with%20or%20without%20new", "fileName": "${__filename}", "calls" : [`);

    const r = createStore();
    let store = ReduxStore({
      store: r
    });
    expect(typeof store).toBe('object');
    store = new ReduxStore({
      store: r
    });
    expect(typeof store).toBe('object');
        SRTlib.send('], "end": "test-can%20be%20created%20with%20or%20without%20new"},');
    SRTlib.endLogger();

  });
  it('merges in state using `setState`', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "ReduxStore", "testName": "merges%20in%20state%20using%20%60setState%60", "fileName": "${__filename}", "calls" : [`);

    const r = createStore();
    const store = ReduxStore({
      store: r
    });
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

        SRTlib.send(`{ "testSuite": "ReduxStore", "testName": "notifies%20subscriptions%20when%20state%20changes", "fileName": "${__filename}", "calls" : [`);

    let expected = [];
    let calls = 0;
    function listener(prevState, nextState, patch) {
      calls++;
      expect([prevState, nextState, patch]).toEqual(expected);
    }
    const r = createStore();
    const store = ReduxStore({
      store: r
    });
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
  it('fires `subscribe` if state is modified externally (eg redux devtools)', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "ReduxStore", "testName": "fires%20%60subscribe%60%20if%20state%20is%20modified%20externally%20%28eg%20redux%20devtools%29", "fileName": "${__filename}", "calls" : [`);

    const reducer = Redux.combineReducers({
      uppy: ReduxStore.reducer
    });
    const r = Redux.createStore((state, action) => {
      if (action.type === 'SET') return action.payload;
      return reducer(state, action);
    });
    let expected = [];
    let calls = 0;
    function listener(prevState, nextState, patch) {
      calls++;
      expect([prevState, nextState, patch]).toEqual(expected);
    }
    const store = ReduxStore({
      store: r
    });
    store.subscribe(listener);
    expected = [{}, {
      a: 1
    }, {
      a: 1
    }];
    store.setState({
      a: 1
    });
    expected = [{
      a: 1
    }, {
      b: 2
    }, {
      b: 2
    }];
    r.dispatch({
      type: 'SET',
      payload: {
        uppy: {
          [store._id]: {
            b: 2
          }
        }
      }
    });
    expect(calls).toBe(2);
        SRTlib.send('], "end": "test-fires%20%60subscribe%60%20if%20state%20is%20modified%20externally%20%28eg%20redux%20devtools%29"},');
    SRTlib.endLogger();

  });
  it('can mount in a custom state key', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "ReduxStore", "testName": "can%20mount%20in%20a%20custom%20state%20key", "fileName": "${__filename}", "calls" : [`);

    const reducer = Redux.combineReducers({
      hello: ReduxStore.reducer
    });
    const r = Redux.createStore(reducer);
    const store = ReduxStore({
      store: r,
      id: 'world',
      selector: state => state.hello.world
    });
    store.setState({
      a: 1
    });
    expect(r.getState()).toEqual({
      hello: {
        world: {
          a: 1
        }
      }
    });
        SRTlib.send('], "end": "test-can%20mount%20in%20a%20custom%20state%20key"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
