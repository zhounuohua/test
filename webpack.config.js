var webpack = require('webpack');
var config = {
    entry: {
        common : ['./src/page/common/index.js'],
        index : ['./src/page/index/index.js'],
        login : ['./src/page/login/index.js'],
    },
    output: {
        path:__dirname +'/dist/',
        filename: 'js/[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })

    ]
}

module.exports = config;