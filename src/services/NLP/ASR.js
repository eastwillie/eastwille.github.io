import CONSTS from '@/libs/constants';
import { getTimestamp } from '@/libs/date';
import { parseJSON, isObject } from '@/libs/object';
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

const deconstructReponse = (response) => {
  try {
    const keyString = response.substring(0, response.indexOf(':'));
    const dataString = response.substring(response.indexOf(':') + 1).trim();

    return { [keyString]: JSON.parse(dataString) };
  } catch (ex) {
    return response;
  }
};

const generateWebSocketURL = (devId, timestamp, signature) => `${ASR_CONFIG.URL}/${devId}/${timestamp}/${signature}`;

const ws = new WeakMap();
const config = new WeakMap();
const callback = new WeakMap();
const listener = new WeakMap();
const open = new WeakMap();

class AutomaticSpeechRecognition {
  constructor({ onOpen, onResponse, onConnectionClose } = {}) {
    const timestamp = getTimestamp({ format: 'seconds' });
    const toHash = `${ASR_CONFIG.DEV_ID}${timestamp}`;
    const sha256signature = generateSignatureSHA256(ASR_CONFIG.DEV_KEY, toHash);
    const connection = generateWebSocketURL(ASR_CONFIG.DEV_ID, timestamp, sha256signature);
    const socket = new WebSocket(connection);
    socket.onmessage = this.onResponse;
    socket.onopen = this.onOpen;

    ws.set(this, socket);
    open.set(this, onOpen);
    listener.set(this, onResponse);
    callback.set(this, onConnectionClose);
  }

  // TODO:: check the documentation if it is required to close the connections first before changing languages.
  setConfig = ({ lang, aue, sampleRate } = {}) => {
    if (!lang) return;

    config.set(this, generateConfig({ lang, aue, sampleRate }));
  }

  cleanSession = () => {
    const socket = ws.get(this);

    if (!socket) return;

    socket.send(ASR_CONFIG.STOP_COMMAND);

    const onClose = callback.get(this);

    if (!onClose) return;

    onClose();
  }

  sendAudioData = (blob) => {
    const socket = ws.get(this);

    if (!socket) return;

    socket.send(blob);
  }

  onOpen = () => {
    const onOpen = open.get(this);

    if (!onOpen) return;

    onOpen(this);
  }

  onResponse = (response) => {
    let data = parseJSON(response.data);

    if (!isObject(data)) data = deconstructReponse(data);

    if (!isObject(data)) return null;

    const onClose = callback.get(this);

    if (data.CANCELLED) return onClose && onClose();

    const onResponse = listener.get(this);

    if (!onResponse) return null;

    onResponse(data);

    return null;
  }

  get sampleRate() {
    const settings = config.get(this);

    if (!settings || settings.audioConfig) return null;

    return settings.audioConfig.sampleRate;
  }
}

export default AutomaticSpeechRecognition;
