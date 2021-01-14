<template>
  <footer
    id="app-footer"
    class="container"
  >
    <div class="try-rodin">
      <div class="try-rodin-content">
        <h2 class="font-800">
          Try Rodin
        </h2>
        <br>
        <p class="font-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
  border-top: 1px solid #D3D3D3;
  background: #1B134C;
  color: white;
  padding-top: 0.2rem;
  padding-bottom: 0.12rem;

  .try-rodin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid #FFFFFF20;

    .try-rodin-content {
      width: 42%;
    }
  }
}
</style>
