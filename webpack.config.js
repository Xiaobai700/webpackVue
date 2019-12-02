const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : {
        index : './src/index.js'
    },
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist'),
        publicPath : '/'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    },
    resolve : {
        alias : {
            vue : 'vue/dist/vue.js'
        }
    },
    plugins : [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title : 'vue+webpack模块化开发简例',
            filename : 'index.html',
            template : './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './dist',//用来指定被访问html页面所在目录
        watchContentBase : true,
        compress : true,
        inline:true,
        port : 8088,
        hot : true,
        open : true,
    }

}
