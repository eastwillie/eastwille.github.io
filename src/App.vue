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
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    #app {
        font-family: Montserrat, Helvetica Neue, Helvetica, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        font-size: 0.16rem;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
</style>
