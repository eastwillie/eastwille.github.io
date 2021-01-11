import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            path: '/home',
        },
    },
    {
        path: '/home',
        name: 'index',
        component: () => import('@/views/pages/homePage/Index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: true,
            canBack: false,
        },
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: () => import('@/views/pages/PageNotFound/Index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: false,
            canBack: false,
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;
