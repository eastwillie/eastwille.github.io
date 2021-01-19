const {
  NODE_ENV,
  BASE_URL,
  VUE_APP_ASR_DEV_ID: DEV_ID,
  VUE_APP_ASR_DEV_KEY: DEV_KEY,
  VUE_APP_ASR_SAMPLE_RATE: SAMPLE_RATE,
  VUE_APP_ASR_AUE: AUE,
  VUE_APP_ASR_URL: URL,
  VUE_APP_ASR_STOP_COMMAND: STOP_COMMAND,
} = process.env;

const isDevelopment = NODE_ENV === 'development';
const API = isDevelopment ? '/dev' : 'https://rodin.g42.ai';
const publicPath = BASE_URL;
const config = {
  ASR: {
    DEV_ID,
    DEV_KEY,
    SAMPLE_RATE,
    AUE,
    URL,
    STOP_COMMAND,
  },
};

export default {
  isDevelopment,
  API,
  publicPath,
  config,
};
