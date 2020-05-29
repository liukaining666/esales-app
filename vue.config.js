const CompressionWebpackPlugin = require("compression-webpack-plugin");
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
const path = require("path");
const Timestamp = new Date().getTime();
module.exports = {
  publicPath: "/",
  outputDir: "../dist",
  css: {
    extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
  },
  configureWebpack: (config) => {
    // webpack 配置
    if (process.env.ENV === "production") {
      // 打包拆分依赖文件
      Object.assign(config, {
        output: {
          ...config.output,
          filename: `js/[name].${Timestamp}.js`,
          chunkFilename: `js/[name].${Timestamp}.js`,
        },
      });

      // 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
      config.plugins.push(
          new CompressionWebpackPlugin({
            filename: `[path].gz[query]`,
            algorithm: "gzip",
            test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
            threshold: 10240,
            deleteOriginalAssets: true, //删除源文件
            minRatio: 0.8,
          }),
          new SkeletonWebpackPlugin({
            webpackConfig: {
              entry: {
                app: path.join(__dirname, "./src/utils/skeleton.js"),
              },
            },
            minimize: true,
            quiet: true,
          })
      );
    }
  },
  devServer: {
    disableHostCheck: true,
      proxy: "http://testn.longscs.com", //  production
      //proxy: "http://10.1.19.106:8099", //王 production
      //proxy: "http://10.1.19.127:8090", //韩 production
  },
  productionSourceMap: false,
};
