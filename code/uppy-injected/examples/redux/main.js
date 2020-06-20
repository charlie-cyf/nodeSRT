var SRTlib = require('SRT-util');
const {createStore, compose, combineReducers, applyMiddleware} = require('redux');
const logger = require('redux-logger').default;
const Uppy = require('@uppy/core');
const uppyReduxStore = require('@uppy/store-redux');
const Dashboard = require('@uppy/dashboard');
const Tus = require('@uppy/tus');
function counter(state = 0, action) {
    SRTlib.send(`{ "anonymous": false, "function": "counter", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  switch (action.type) {
    case {
                SRTlib.send("]},");

        return state + 1;
      }:
      return state + 1;
    case {
                SRTlib.send("]},");

        return state - 1;
      }:
      return state - 1;
    default:
  }
    SRTlib.send("]},");

}
const reducer = combineReducers({
  counter: counter,
  uppy: uppyReduxStore.reducer
});
let enhancer = applyMiddleware(uppyReduxStore.middleware(), logger);
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(reducer, enhancer);
const valueEl = document.querySelector('#value');
function getCounter() {
    SRTlib.send(`{ "anonymous": false, "function": "getCounter", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return store.getState().counter;
    SRTlib.send("]},");

}
function render() {
    SRTlib.send(`{ "anonymous": false, "function": "render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  valueEl.innerHTML = getCounter().toString();
    SRTlib.send("]},");

}
render();
store.subscribe(render);
document.querySelector('#increment').onclick = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  store.dispatch({
    type: 'INCREMENT'
  });
    SRTlib.send("]},");

};
document.querySelector('#decrement').onclick = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  store.dispatch({
    type: 'DECREMENT'
  });
    SRTlib.send("]},");

};
document.querySelector('#incrementIfOdd').onclick = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (getCounter() % 2 !== 0) {
    store.dispatch({
      type: 'INCREMENT'
    });
  }
    SRTlib.send("]},");

};
document.querySelector('#incrementAsync').onclick = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  setTimeout(() => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return store.dispatch({
      type: 'INCREMENT'
    });
        SRTlib.send("]},");

  }, 1000);
    SRTlib.send("]},");

};
const uppy = Uppy({
  id: 'redux',
  store: uppyReduxStore({
    store: store
  }),
  debug: true
});
uppy.use(Dashboard, {
  target: '#app',
  inline: true,
  width: 400
});
uppy.use(Tus, {
  endpoint: 'https://master.tus.io/'
});
window.uppy = uppy;
