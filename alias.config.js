// This file is no use for coding.
// If you are using WebStorm or PHPStorm, you can set webpack config to this file to remove IDE path alert.
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
};
