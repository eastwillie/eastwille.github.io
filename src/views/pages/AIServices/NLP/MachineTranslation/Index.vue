<template>
  <div class="machine-translation-page">
    <h2 class="uppercase font-700">
      Machine Translation
    </h2>
    <divider />
    <p>Exchanging amazing contents with a global audience, whatever language they are saying.</p>
    <br>
    <div class="content">
      <div class="form-header">
        <span>From</span>
        <button class="btn-swap" />
        <span>To</span>
      </div>
      <div class="form-content">
        <textarea
          id="from"
          v-model="from"
          name="from"
          rows="10"
        />
        <textarea
          id="to"
          v-model="to"
          name="to"
          rows="10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Divider from '@/views/components/Divider/Index.vue';

export default {
  components: {
    Divider,
  },
  data() {
    return { from: '', to: '' };
  },
};
</script>

<style lang="scss" scoped>
.machine-translation-page {
  display: flex;
  flex-direction: column;
  padding: 0.16rem;
  background: $background-secondary;

  .content {
    background: $foreground-primary;
  }

  .form-header {
    display: flex;
    padding: 0.16rem 0;

    span {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }

  .form-content {
    display: flex;
    gap: 0.12rem;

    > textarea {
      flex-grow: 1;
    }
  }

  .btn-swap {
    border: none;
    background: none;

    &::after {
      content: 'swap_horiz';
      font-size: 0.24rem;
      font-family: 'Material Icons', sans-serif;
    }
  }
}
</style>
