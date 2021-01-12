<template>
    <div id="app">
        <app-navigation v-if="$route.meta.showNav" />
        <div id="view-container">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
        <app-footer />
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
        font-family: Lato, Helvetica Neue, Helvetica, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        font-size: 0.16rem;
        -webkit-font-smoothing: antialiased;
    }
</style>
