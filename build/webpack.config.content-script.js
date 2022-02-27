const webpackCommon = require('./webpack.config.common');

module.exports = {
  ...webpackCommon,
  entry: {
    'content-script': './src/content-script.ts'
  },
  plugins: []
}
