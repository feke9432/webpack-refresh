# 这里主要记录使用 vue-cli webpack 模板时遇到的问题及解决办法。

1. vue-cli 使用 webpack 生成的模板（之后以模板代替）运行 `npm run build` 后打包生成的文件只能放在根目录，
如果你想改成相对路径，那你需要进行如下修改：  
  修改 config => index.js => assetsPublicPath: './'
![](./md_lib/vue_01.png)
你也可以修改 build => webpack.base.config.js => publicPath : './'
![](./md_lib/vue_02.png)
其实就加个点。。。  
上面只解决文件在 index.html 中引入时的问题，而在实际开发中经常会在 css 中各种引用
图片，比如背景图片啥的，如果你想把它们也变为相对路径，那你需要  
修改 build => utils.js => util.js 里找到ExtractTextPlugin.extract 添加属性 publicPaht: '../../'
![](./md_lib/vue_03.png)