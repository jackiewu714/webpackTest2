/**
 * webpack-dev-server node.js API方式启动脚本
 * Created by WuLiangzhi on 2017/6/2.
 */

var config = require('./webpack.config.inline.node.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', "webpack/hot/dev-server");
config.entry.index.unshift('webpack-dev-server/client?http://localhost:8080/', "webpack/hot/dev-server");
// config.entry.test.unshift('webpack-dev-server/client?http://localhost:8080/', "webpack/hot/dev-server");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase : './dist/',
    publicPath : '/assets/',
    hot : true  //启用热模块替换
});

server.listen(8080, '0.0.0.0');

console.log('listen at http://0.0.0.0:8080');