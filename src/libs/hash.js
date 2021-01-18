import { sha256 } from 'js-sha256';

export const generateSignature = (secret, message) => sha256.hmac(secret, message);

export default {
  generateSignature,
};
