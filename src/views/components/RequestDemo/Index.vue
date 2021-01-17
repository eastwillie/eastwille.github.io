<template>
  <button
    class="btn-action request-demo"
    :class="classes"
  >
    {{ $t(`button['request demo']`) }}
  </button>
</template>

<script>
/*

  variant: "header" | "panel-dark-bg" | "footer"

*/

export default {
  props: {
    variant: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    actualVariant() {
      const { variant } = this.$props;

      if (variant === 'header') return { header: true };

      if (variant === 'footer') return { footer: true };

      if (variant === 'panel-dark-bg') return { 'panel-dark-bg': true };

      return { default: true };
    },
    classes() {
      return { ...this.actualVariant };
    },
  },
};
</script>

<style lang="scss" scoped>
.request-demo {
  padding: 0;
  width: 2rem;

  &.default {
    border: 1px solid;
    background: transparent;
  }

  &.header {
    background: linear-gradient(100.62deg, #3A71FF 48.27%, rgba(121, 58, 255, 0) 203.77%);
  }

  &.footer {
    border: 1px solid transparent;
    background: $background-footer;
    background-image: linear-gradient($background-footer, $background-footer), $button-footer-gradient;
    // .border-gradient doesn't seem to work - hence, explicitly defining properties
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  &.panel-dark-bg {
    background: linear-gradient(100.62deg, #3A71FF 48.27%, rgba(121, 58, 255, 0) 203.77%);
  }
}
</style>
