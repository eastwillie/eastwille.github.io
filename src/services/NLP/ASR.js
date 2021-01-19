import CONSTS from '@/libs/constants';
import { getTimestamp } from '@/libs/date';
import { generateSignatureSHA256 } from '@/libs/hash';

const generateConfig = ({
  lang,
  aue = CONSTS.ASR.AUE,
  sampleRate = CONSTS.ASR.SAMPLE_RATE,
}) => ({
  audioConfig: {
    aue,
    sampleRate,
  },
  speechConfig: {
    lang,
  },
});

const ws = new WeakMap();
const config = new WeakMap();
const signature = new WeakMap();

class ASRService {
  constructor() {
    ws.set(this, new WebSocket());

    const timestamp = getTimestamp({ format: 'seconds' });
    const toHash = `${CONSTS.ASR.DEV_ID}${timestamp}`;
    const sha256signature = generateSignatureSHA256(CONSTS.ASR.DEV_KEY, toHash);

    signature.set(this, sha256signature);
  }

  setConfig({ lang, aue, sampleRate } = {}) {
    if (!lang) return;

    config.set(this, generateConfig({ lang, aue, sampleRate }));
  }

  cleanSession() {
    ws.get(this).send(CONSTS.ASR.STOP_COMMAND);
  }
}

export default ASRService;
