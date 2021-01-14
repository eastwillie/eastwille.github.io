<template>
  <div class="solutions-card">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'SolutionsCard',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .solutions-card {
    color: $text-primary;
  }
</style>
