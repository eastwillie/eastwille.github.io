const {
  NODE_ENV,
  BASE_URL,
  DEV_ID,
  DEV_KEY,
} = process.env;

const isDevelopment = NODE_ENV === 'development';
const API = isDevelopment ? '/dev' : '';
const publicPath = BASE_URL;
const config = {
  ASR: {
    DEV_ID,
    DEV_KEY,
  },
};

export default {
  isDevelopment,
  API,
  publicPath,
  config,
};
