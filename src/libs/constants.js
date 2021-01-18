// simple global variables store
const isDevelopment = process.env.NODE_ENV === 'development';
const API = isDevelopment ? 'https://rodin.g42.ai' : 'https://rodin.g42.ai';
const publicPath = process.env.BASE_URL;

export default {
  isDevelopment,
  API,
  publicPath,
};
