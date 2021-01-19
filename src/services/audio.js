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
    const mediaStream = stream.get(this);

    if (!mediaStream) return Promise.reject(new Error('Audio Listener is not enabled!'));

    const tracks = mediaStream.getTracks();

    if (!tracks || tracks.length === 0) return Promise.reject(new Error('No Media Track to stop!'));

    tracks.foreach((track) => track.stop());

    return recorder.get(this).stopRecording();
  }
}
