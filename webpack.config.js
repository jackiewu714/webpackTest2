/**
 * Created by WuLiangzhi on 2017/6/1.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    //配置生成Source Maps，选择合适的选项
    devtool : 'eval-source-map',
    //页面入口文件配置
    entry : {
        index : './src/js/index.js',
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        test: ['./src/js/test1.js', './src/js/test2.js']
    },
    //入口文件输出配置
    output : {
        path : path.resolve(__dirname, './dist/js/'),
        publicPath : '/assets/',
        filename : '[name].js'
    },
    module : {
        //加载器配置
        loaders : [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    },
    //插件项
    plugins : [
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('common'),
        //使用ProvidePlugin加载使用频率高的模块
        new webpack.ProvidePlugin({
            $: "webpack-zepto"
        })/*,
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin()*/
    ],
    //构建本地服务器
    // devServer: {
    //     contentBase : './dist', //本地服务器所加载的页面所在的目录
    //     port : '8888', //监听端口，如果省略，默认为”8080“
    //     // colors : true, //终端中输出结果为彩色
    //     historyApiFallback : true, //不跳转
    //     inline : true //实时刷新
    // }
};
