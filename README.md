#学习 webpack 笔记

> ## 什么是 webpack ？  
> webpack 可以看做是模块打包机，分析项目结构，将一些浏览器不能运行的模块，打包为
> 浏览器可以识别的 js 文件。

> ## webpack 的工作原理  
> 通过一个给定的主文件，从这个文件开始找到项目中所有的依赖文件，使用 loaders 处理
> 他们，最后打包为一个或多个浏览器可以识别的 js 
> ![来自官网](./md_lib/01.png)

## 初步使用
在全局或局部安装 webpack 后，你可以使用下面格式的命令打包你的代码（不加大括号）
```
webpack { entry file } { destination for bundled file }
```
非全局安装时：
```
node_modules/.bin/webpack { entry file } { destination for bundled file }
```
当然你也可以用配置文件来使用 webpack   
在根目录建立名为 webpack.config.js 的配置文件，内容如下：
```
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```
之后只要运行 webpack 就行（全局和局部一样）

## 开启热刷新
想开启热刷新首先要开启本地服务器，webpack 提供了本地服务器功能块  
安装相应服务器代码：
```
npm install --save-dev webpack-dev-server
```
配置服务器：
```
devServer: { 
    contentBase: "./public", // 不设置默认根目录服务器，设置则代理对应文件夹
    historyApiFallback: true, // 不跳转页面，所有跳转指向 index.html
    inline: true, // 开启你梦寐以求的实时刷新；
    port: "8080" // 默认监听端口。
}
```
> 但此处实时刷新只监测入口文件以及引用的文件。