import { RecordRTCPromisesHandler } from 'recordrtc';

const stream = new WeakMap();
const recorder = new WeakMap();

export default class AudioService {
  async enableMic({
    streamListener,
    desiredSampRate,
    timeSlice = 1000,
    audioBitsPerSecond = 128000,
  } = {}) {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    stream.set(this, mediaStream);

    const mediaRecorder = new RecordRTCPromisesHandler(mediaStream, {
      type: 'audio',
      timeSlice,
      desiredSampRate,
      audioBitsPerSecond,
      ondataavailable: streamListener,
    });

    mediaRecorder.startRecording();

    recorder.set(this, mediaRecorder);
  }

  disableMic() {
    stream.get(this).getTracks()[0].stop();

    return recorder.get(this).stopRecording();
  }
}
