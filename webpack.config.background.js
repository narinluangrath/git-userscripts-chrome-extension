const webpackCommon = require('./webpack.config.common');

module.exports = {
  ...webpackCommon,
  entry: {
    background: './background.ts'
  },
  plugins: []
}
