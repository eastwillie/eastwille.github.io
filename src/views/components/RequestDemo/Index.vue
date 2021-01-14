<template>
  <div class="request-demo-container">
    <button
      class="request-demo"
      :class="{'border-gradient': $props.borderGradient}"
      :style="style"
    >
      {{ $t(`button['request demo']`) }}
    </button>
  </div>
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
    style() {
      const { border, backgroundColor, borderGradient } = this.$props;

      return {
        border: borderGradient ? '' : border,
        backgroundColor,
        backgroundImage: borderGradient && `linear-gradient(${backgroundColor}, ${backgroundColor}), ${borderGradient}`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.request-demo-container {
  padding: 0.2rem;
  background-color: linear-gradient(99.89deg, #3B72FF 42.58%, #6C23F5 109.64%);
}

.request-demo {
  height: 0.6rem;
  width: 2rem;
  border-radius: 6px !important;
  font-family: 'Montserrat';
  font-size: 0.18rem;
  color: white;
  text-transform: capitalize;
}
</style>
