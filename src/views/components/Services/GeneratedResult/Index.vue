<template>
  <div class="generated-result">
    <h5 class="title">
      {{ $t('services.generatedResult.title') }}
    </h5>
    <div class="subtitle">
      {{ $t('services.generatedResult.subtitle', [serviceName]) }}
    </div>
    <div class="result">
      <div v-if="loading">
        Loading...
      </div>
      <slot v-else>
        {{ $t('services.generatedResult.placeholder') }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneratedResult',
  props: {
    serviceName: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .generated-result {
    .result {
      padding: 0.2rem;
      background-color: $background-secondary;
    }
  }
</style>
