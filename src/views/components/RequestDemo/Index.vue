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

  variant: "header" | "footer"

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
    background: $background-primary;
  }

  &.footer {
    border: 1px solid transparent;
    background: $background-footer;
    background-image: linear-gradient($background-footer, $background-footer), $button-footer-gradient;
    // .border-gradient doesn't seem to work - hence, explicitly defining properties
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
}
</style>
