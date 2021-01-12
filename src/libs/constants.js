// simple global variables store
const isDevelopment = process.env.NODE_ENV === 'development';
const API = isDevelopment ? '/dev' : '';
const publicPath = process.env.BASE_URL;

export default {
  isDevelopment,
  API,
  publicPath,
};
