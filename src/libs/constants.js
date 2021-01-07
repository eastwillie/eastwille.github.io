// simple global variables store
const API = process.env.NODE_ENV === 'development' ? '/dev' : '';
const publicPath = process.env.BASE_URL;

export default {
    API,
    publicPath,
};
