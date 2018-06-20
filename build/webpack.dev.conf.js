var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('../config')
var baseWebpackConfig = require('./webpack.base.conf')
var utils = require('./utils');

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    // cheap-module-eval-source-map is faster for development
    // devtool: '#cheap-module-eval-source-map',
    devtool: 'eval',
    output: {
        path:  config.build.assetsRoot,
        filename: 'js/[name].js',
        publicPath: config.dev.assetsPublicPath
    },
    module: {
    },
    optimization: {
        minimize: false,
        noEmitOnErrors: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new HtmlWebpackPlugin({
            template: './pages/index.html',
            // title: '',
            filename: 'index.html',
            // chunks: ['main', 'index'],
            inject: true
        }),
        // new FriendlyErrorsPlugin()
    ]
})
