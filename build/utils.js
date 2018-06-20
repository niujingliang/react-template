var path = require('path')
var config = require('../config')

function isProduction() {
    return process.env.NODE_ENV === 'production'
}

// 解析相当于根节点的路径
exports.resolvePath = function (dir) {
    return path.join(__dirname, '..', dir)
}

exports.assetsPath = function (_path) {
    var assetsSubDirectory = isProduction()
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function () {
    return [{
        loader: "style-loader"
    },
    {
        loader: "css-loader",
        options: {
            minimize: isProduction(),
            modules: true,
            localIdentName: isProduction() ? '[path][name]__[local]--[hash:base64:5]' : '[path][name]'
        }
    }]
}
