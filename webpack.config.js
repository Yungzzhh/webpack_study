const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

console.log('process.env.NODE_ENV=', process.env.NODE_ENV)

const config = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true, // 打包前清空输出目录，相当于clean-webpack-plugin插件的作用,webpack5新增。
    /* 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到library 
     library: {
      name: "[name]",//整个库向外暴露的变量名
      type: "window"//库暴露的方式
    }*/
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // 匹配哪些文件
        test: /\.(s[ac]|c)ss$/i,
        // 使用哪些loader进行处理。执行顺序，从右至左，从下至上
        use: [
          // 创建style标签，将js中的样式资源（就是css-loader转化成的字符串）拿过来，添加到页面head标签生效
          // "style-loader",
          MiniCssExtractPlugin.loader,
          // 将css文件变成commonjs一个模块加载到js中，里面的内容是样式字符串
          "css-loader",
          "postcss-loader",
          "sass-loader"
          // {
          //   // css 兼容处理 postcss，注意需要在package.json配置browserslist
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       ident: "postcss",
          //       // postcss-preset-env插件：帮postcss找到package.json中的browserslist配置，根据配置加载指定的兼容性样式
          //       plugins: [require("postcss-preset-env")()],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.js$/,
        // 注意需要在package.json配置browserslist，否则babel-loader不生效
        // js兼容处理 babel
        loader: "babel-loader", // 规则只使用一个loader时推荐写法
        options: {
          presets: [
            [
              "@babel/preset-env", // 预设：指示babel做怎么样的兼容处理
              // {
              //   useBuiltIns: "usage", //按需加载
              //   corejs: {
              //     version: "2", //3不行，版本过高
              //   },
              //   targets: "defaults",
              // },
            ],
          ],
        },
      },
      /* 
      Webpack5.0新增资源模块(asset module)，它是一种模块类型，允许使用资源文件（字体，图标等）而无需配置额外 loader。支持以下四个配置
      asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
      asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
      asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
      asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
      */
      // Webpack4使用file-loader实现
      {
        test: /\.(eot|svg|ttf|woff|)$/,
        type: "asset/resource",
        generator: {
          // 输出文件位置以及文件名
          filename: "fonts/[name][ext]",
        },
      },
      // Webpack4使用url-loader实现
      {
        //处理图片资源
        test: /\.(jpg|png|gif|)$/,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          filename: "images/[name][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //超过10kb不转base64
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ // 添加插件
      filename: '[name].[hash:8].css'
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, //端口号
    hot: true, //HMR
    open:true  // 是否自动打开浏览器
  }
}

module.exports = (env, argv) => {
  console.log(`argv.mode= `, argv.mode); //打印mode值，可以通过不同模式修改config配置
  return config;
};
