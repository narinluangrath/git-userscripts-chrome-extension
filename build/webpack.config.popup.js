const webpackCommon = require('./webpack.config.common');

module.exports = {
  ...webpackCommon,
  entry: {
    popup: './src/popup.tsx'
  },
}
