// extract-text-webpack-plugin，让webpack可以输出css格式的文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
var webpack = require("webpack");
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "../src/main.js",
    output: {
        path: __dirname + "../dist",
        // filename
        // 作用一：在使用WebpackDevServer插件热更新时需要用到
        // 作用二：打包所有页面入口都用到的js
        filename: "js/bundle.js",
        chunkFilename: "js/[name].chunk.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', 
            filename: 'js/common.js'
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        })
    ]
};