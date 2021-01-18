<template>
  <div class="service-template">
    <div class="info">
      <h1 class="header">
        <slot name="header" />
      </h1>
      <div class="subheader">
        <slot name="subheader" />
      </div>
    </div>
    <div class="table">
      <div class="column">
        <slot name="left" />
      </div>
      <div class="column">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceTemplate',
};
</script>

<style lang="scss" scoped>
  .service-template {
    background: $background-secondary;

    .info {
      margin: 0.2rem;
      padding: 0.2rem;
      background: $background-white;
    }

    .header {
    }

    .subheader {

    }

    .table {
      display: flex;
      margin: 0.2rem;
      padding: 0.2rem;
      background: $background-white;
    }

    .column {
      flex: 1;
    }
  }
</style>
