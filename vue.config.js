const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/dev': {
        target: 'https://rodin.g42.ai',
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
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/variables.scss";
                         @import "@/assets/css/mixins.scss";`,
      },
    },
  },
};
