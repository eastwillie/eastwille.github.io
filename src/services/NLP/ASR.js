import CONSTS from '@/libs/constants';
import { getTimestamp } from '@/libs/date';
import { generateSignatureSHA256 } from '@/libs/hash';

const ASR_CONFIG = CONSTS.config.ASR;

export const languages = {
  en: 'ENGLISH',
};

const generateConfig = ({
  lang,
  aue = ASR_CONFIG.AUE,
  sampleRate = ASR_CONFIG.SAMPLE_RATE,
}) => ({
  audioConfig: {
    aue,
    sampleRate,
  },
  speechConfig: {
    lang,
  },
});

const generateWebSocketURL = (devId, timestamp, signature) => `${ASR_CONFIG.URL}/${devId}/${timestamp}/${signature}`;

const ws = new WeakMap();
const config = new WeakMap();
const callback = new WeakMap();
const listener = new WeakMap();

class AutomaticSpeechRecognition {
  constructor({ onResponse, onConnectionClose } = {}) {
    const timestamp = getTimestamp({ format: 'seconds' });
    const toHash = `${ASR_CONFIG.DEV_ID}${timestamp}`;
    const sha256signature = generateSignatureSHA256(ASR_CONFIG.DEV_KEY, toHash);
    const connection = generateWebSocketURL(ASR_CONFIG.DEV_ID, timestamp, sha256signature);
    const socket = new WebSocket(connection);
    socket.onmessage = this.onResponse;

    ws.set(this, socket);
    listener.set(this, onResponse);
    callback.set(this, onConnectionClose);
  }

  // TODO:: check the documentation if it is required to close the connections first before changing languages.
  setConfig({ lang, aue, sampleRate } = {}) {
    if (!lang) return;

    config.set(this, generateConfig({ lang, aue, sampleRate }));
  }

  cleanSession() {
    const socket = ws.get(this);

    if (!socket) return;

    socket.send(ASR_CONFIG.STOP_COMMAND);

    const onClose = callback.get(this);

    if (!onClose) return;

    onClose();
  }

  sendAudioData(blob) {
    const socket = ws.get(this);

    if (!socket) return;

    socket.send(blob);
  }

  onResponse(message) {
    const onResponse = listener.get(this);

    if (!onResponse) return;

    const data = JSON.parse(message.data);

    onResponse(data);
  }

  get sampleRate() {
    const settings = config.get(this);

    if (!settings || settings.audioConfig) return null;

    return settings.audioConfig.sampleRate;
  }
}

export default AutomaticSpeechRecognition;
