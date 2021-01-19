const {
  NODE_ENV,
  BASE_URL,
  ASR_DEV_ID: DEV_ID,
  ASR_DEV_KEY: DEV_KEY,
  ASR_SAMPLE_RATE: SAMPLE_RATE,
  ASR_AUE: AUE,
  ASR_URL: URL,
  ASR_STOP_COMMAND: STOP_COMMAND,
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
