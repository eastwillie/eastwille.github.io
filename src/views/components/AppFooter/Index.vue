<template>
  <footer id="app-footer">
    <div class="try-rodin">
      <div class="try-rodin-content">
        <span class="try-rodin-heading">Try Rodin</span>
        <span class="try-rodin-description">Try Rodin</span>
      </div>
      <request-demo
        background-color="#1B134C"
        border-gradient="radial-gradient(circle at top left, #3B72FF 42.58%, #6C23F5 109.64%)"
      />
    </div>
  </footer>
</template>

<script>
import RequestDemo from '@/views/components/RequestDemo/Index.vue';

export default {
  components: {
    RequestDemo,
  },
};
</script>

<style lang="scss" scoped>
#app-footer {
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.86rem;
  border-top: 1px solid #D3D3D3;
  background: #1B134C;
  color: white;

  .try-rodin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
