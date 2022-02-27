const webpackCommon = require('./webpack.config.common');

module.exports = {
  ...webpackCommon,
  entry: {
    background: './src/background.ts'
  },
  plugins: []
}
