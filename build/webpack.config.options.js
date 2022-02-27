const webpackCommon = require('./webpack.config.common');

module.exports = {
  ...webpackCommon,
  entry: {
    options: './src/options.ts'
  },
}
