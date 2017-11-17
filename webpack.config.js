const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* 
    * devtool：生成 source maps ，方便调试
    * 1.source-map : 单独文件，减慢打包速度，但生成的文件功能最全；
    * 2.cheap-module-source-map: 单独文件，速度相对块，不带列映射；
    * 3.eval-source-map: 使用 eval 不生成单独文件，功能完整，不能再生产阶段使用；
    * 4.cheap-moudule-eval-source-map: 速度最快，无文件，和生成的 js 同行显示。
    */
    devtool: 'eval-source-map', // 生成 source maps
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle-[hash].js'
    },
    /*
    * devServer: 构建本地服务器
    */
    devServer: { 
        contentBase: "./public", // 不设置默认根目录服务器，设置则代理对应文件夹
        historyApiFallback: true, // 不跳转页面，所有跳转指向 index.html
        inline: true, // 开启你梦寐以求的实时刷新；
        port: "8080" // 默认监听端口。
    },
    /*
    * module: 用来配置 webpack loader
    */
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, // 用以匹配 loaders 所处理的文件， 必须
                use: {
                    loader: "babel-loader" // loader 的名称，必须
                },
                exclude: /node_modules/ // 忽略的文件，可选
                // include: '', // 必须处理的文件， 可选
                // query: ''    // 提供额外的设置选项， 可选
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true // modules 为真时 css-loader 加载的文件仅对当前模块可用。
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" // new 一个插件实例，并传入相关参数。
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}