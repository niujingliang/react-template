var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsSubDirectory: 'static',
  },
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
  }
}
