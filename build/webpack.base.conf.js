var config = require('../config')
var utils = require('./utils');

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: {
        app: './src/app.js',
        app1: './src/app1.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': utils.resolvePath('src')
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                },
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [utils.resolvePath('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.css$/,
                use: utils.cssLoaders()
            },
            {
                test: /\.less/,
                use: utils.cssLoaders().concat({
                    loader: 'less-loader'
                })
            }
        ]
    }
}
