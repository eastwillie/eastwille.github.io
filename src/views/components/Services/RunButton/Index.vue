<template>
  <el-button
    class="run-button"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
  >
    {{ $t('button.run') }}
  </el-button>
</template>

<script>
export default {
  name: 'RunButton',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .run-button {
  }
</style>
