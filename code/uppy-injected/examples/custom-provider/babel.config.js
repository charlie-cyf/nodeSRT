const SRTlib = require('SRT-util');

module.exports = api => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/examples/custom-provider/babel.config.js","paramsNumber":1},`);

  api.env('test');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return {
    presets: [['@babel/preset-env', {
      modules: false,
      loose: true
    }]],
    plugins: [['@babel/plugin-transform-react-jsx', {
      pragma: 'h'
    }]].filter(Boolean)
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
