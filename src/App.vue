<template>
  <div id="app">
    <app-bar v-if="$route.meta.showNav" />
    <div class="view-container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import AppBar from './views/layout/AppBar.vue';

export default {
    components: {
        'app-bar': AppBar,
    },
};

</script>

<style lang="scss">
  @import "assets/css/reset";
  @import "assets/css/public";
  @import "assets/css/overwite";
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    font-size: 0.16rem;
    font-family: Lato,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
  }
</style>
