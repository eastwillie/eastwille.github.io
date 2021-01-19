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
        <run-button
          :on-click="onClick"
          :disabled="loading || runDisabled"
        />
      </div>
      <div class="column">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
import RunButton from '@/views/components/Services/RunButton/Index.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ServiceTemplate',
  components: { RunButton },
  props: {
    run: {
      type: Function,
      required: true,
    },
    runSuccess: {
      type: Function,
      default: () => {},
    },
    runError: {
      type: Function,
      default: () => {},
    },
    runDisabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      storeErrors: 'STORE_ERRORS',
    }),
    async onClick() {
      try {
        await this.runSuccess(await this.run());
      } catch (e) {
        this.storeErrors(e);
        this.runError();
      }
    },
  },
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
