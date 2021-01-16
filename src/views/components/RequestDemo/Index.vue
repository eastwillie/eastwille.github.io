<template>
  <button
    class="btn-action request-demo"
    :class="classes"
    :style="style"
  >
    {{ $t(`button['request demo']`) }}
  </button>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    border: {
      type: String,
      default: '1px solid',
    },
    borderGradient: {
      type: String,
      default: 'none',
    },
  },
  computed: {
    classes() {
      return { 'border-gradient': this.$props.borderGradient !== 'none' };
    },
    actualBorder() {
      const { border, backgroundColor, borderGradient } = this.$props;

      if (!borderGradient || borderGradient === 'none') return { border };

      return {
        backgroundImage: borderGradient && `linear-gradient(${backgroundColor}, ${backgroundColor}), ${borderGradient}`,
      };
    },
    style() {
      const { backgroundColor } = this.$props;

      return {
        backgroundColor,
        ...this.actualBorder,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.request-demo {
  padding: 0;
  width: 2rem;
}
</style>
