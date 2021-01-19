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

const generateWebSocketURL = (devId, timestamp, signature) => `${CONSTS.ASR.URL}/${devId}/${timestamp}/${signature}`;

const ws = new WeakMap();
const config = new WeakMap();
const callback = new WeakMap();
const listener = new WeakMap();

class AutomaticSpeechRecognition {
  constructor({ onResponse, onConnectionClose } = {}) {
    const timestamp = getTimestamp({ format: 'seconds' });
    const toHash = `${CONSTS.ASR.DEV_ID}${timestamp}`;
    const sha256signature = generateSignatureSHA256(CONSTS.ASR.DEV_KEY, toHash);
    const connection = generateWebSocketURL(CONSTS.ASR.DEV_ID, timestamp, sha256signature);
    const socket = new WebSocket(connection);
    socket.onmessage = this.onResponse;

    ws.set(this, socket);
    listener.set(this, onResponse);
    callback.set(this, onConnectionClose);
  }

  setConfig({ lang, aue, sampleRate } = {}) {
    if (!lang) return;

    config.set(this, generateConfig({ lang, aue, sampleRate }));
  }

  cleanSession() {
    const socket = ws.get(this);

    if (!socket) return;

    socket.send(CONSTS.ASR.STOP_COMMAND);

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
}

export default AutomaticSpeechRecognition;
