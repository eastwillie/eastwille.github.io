const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/dev': {
        target: 'http://example.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev': '',
        },
      },
    },
  },
  transpileDependencies: [
    // 'vue-echarts',
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
  },
};
