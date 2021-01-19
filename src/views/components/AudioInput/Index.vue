<template>
  <button
    class="audio-input"
    :class="classes"
    @click="onClick"
  >
    <audio />
  </button>
</template>

<script>
import AudioService from '@/services/audio';
import AutomaticSpeechRecognition, { languages } from '@/services/NLP/ASR';

export default {
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1,
    },
  },
  data() {
    return {
      isActive: false,
      audioService: null,
      asr: new AudioService(),
      speech: '',
    };
  },
  computed: {
    classes() {
      const { isActive } = this;
      const { size } = this.$props;

      return { isActive, [size]: size };
    },
  },
  async beforeDestroy() {
    // clean up here
    if (!this.isActive) return;

    await this.audioService.disableMic();
  },
  mounted() {
    const { onResponse, cleanup } = this;
    const options = { onResponse, onConnectionClose: cleanup };
    const asr = new AutomaticSpeechRecognition(options);
    asr.setConfig({ lang: languages.en });

    this.asr = asr;
  },
  methods: {
    onClick() {
      if (!this.isActive) return this.enableMic();

      return this.disableMic();
    },
    async enableMic() {
      const { asr } = this;

      if (!asr) throw new Error('Automatic Speech Recognition has not been instantiated');

      const options = { streamListener: this.asr.sendAudioData, desiredSampleRate: asr.sampleRate };

      await this.audioService.enableMic(options);

      this.isActive = true;
    },
    async disableMic() {
      const blobURL = await this.audioService.disableMic();

      window.open(blobURL); // temporary - just to test the audio

      this.isActive = false;
    },
    onResponse(data) {
      // do something
      this.speech = JSON.stringify(data);
    },
    cleanup() {

    },
  },
};
</script>

<style lang="scss" scoped>
.audio-input {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;

  &::after {
    content: 'mic_none';
    font-family: Material Icons, sans-serif;
  }

  &.isActive::after {
    content: 'mic';
  }

  &.xs {
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.2rem;
  }
  &.sm {
    width: 0.24rem;
    height: 0.24rem;
    font-size: 0.24rem;
  }
  &.md {
    width: 0.28rem;
    height: 0.28rem;
    font-size: 0.28rem;
  }
  &.lg {
    width: 0.32rem;
    height: 0.32rem;
    font-size: 0.32rem;
  }
  &.xl {
    width: 0.36rem;
    height: 0.36rem;
    font-size: 0.36rem;
  }
}
</style>
