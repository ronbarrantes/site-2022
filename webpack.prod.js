/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const common = require('./webpack.config')
// const plugins = common.plugins

module.exports = merge(common, {

  mode: 'production',
  devtool: undefined,
  devServer: undefined,
  watch: false,
  output: {
    filename: '[name].js',
    // publicPath: '/public',
    // path: '/',
  },
})