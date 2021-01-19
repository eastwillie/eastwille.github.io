import { sha256 } from 'js-sha256';

export const generateSignatureSHA256 = (secret, message) => sha256.hmac(secret, message);

export default {
  generateSignatureSHA256,
};
