const SRTlib = require('SRT-util');

module.exports = {
  plugins: {
    'postcss-inline-svg': {
      path: 'src/images'
    },
    cssnano: {
      safe: true
    }
  }
};
