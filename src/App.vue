<template>
    <div id="app">
        <app-navigation v-if="$route.meta.showNav" />
        <div id="view-container">
            <div id="content">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" />
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" />
            </div>
            <app-footer />
        </div>
    </div>
</template>
<script>
import AppNavigation from '@/views/components/AppNavigation/Index.vue';
import AppFooter from '@/views/components/AppFooter/Index.vue';

export default {
    components: {
        AppNavigation,
        AppFooter,
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
    font-size: 0.2rem;
    font-family: Lato,Helvetica Neue,Helvetica,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
  }

  #view-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  #content {
    display: flex;
    flex-grow: 1;
  }
</style>
