import axios from 'axios';

const $axios = axios.create({
  timeout: 1000 * 20,
});
export default $axios;
