var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = 'production';

var webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: '#source-map',
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[id].[chunkhash:8].js'
    },
    module: {
    },
    optimization: {
        minimize: true,
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true,
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: './pages/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
})

module.exports = webpackConfig
