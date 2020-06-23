var SRTlib = require('SRT-util');
const {createStore, compose, combineReducers, applyMiddleware} = require('redux');
const logger = require('redux-logger').default;
const Uppy = require('@uppy/core');
const uppyReduxStore = require('@uppy/store-redux');
const Dashboard = require('@uppy/dashboard');
const Tus = require('@uppy/tus');
function counter(state = 0, action) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"counter","fileName":"${__filename}","paramsNumber":2},`);

  switch (action.type) {
    case 'INCREMENT':
            SRTlib.send('{"type":"FUNCTIONEND","function":"counter"},');

      return state + 1;
    case 'DECREMENT':
            SRTlib.send('{"type":"FUNCTIONEND","function":"counter"},');

      return state - 1;
    default:
            SRTlib.send('{"type":"FUNCTIONEND","function":"counter"},');

      return state;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"counter","paramsNumber":2},');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getCounter","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"getCounter"},');

  return store.getState().counter;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getCounter","paramsNumber":0},');

}
function render() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0},`);

  valueEl.innerHTML = getCounter().toString();
    SRTlib.send('{"type":"FUNCTIONEND","function":"render","paramsNumber":0},');

}
render();
store.subscribe(render);
document.querySelector('#increment').onclick = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

  store.dispatch({
    type: 'INCREMENT'
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
document.querySelector('#decrement').onclick = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

  store.dispatch({
    type: 'DECREMENT'
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
document.querySelector('#incrementIfOdd').onclick = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

  if (getCounter() % 2 !== 0) {
    store.dispatch({
      type: 'INCREMENT'
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
document.querySelector('#incrementAsync').onclick = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

  setTimeout(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    return store.dispatch({
      type: 'INCREMENT'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  }, 1000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

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
