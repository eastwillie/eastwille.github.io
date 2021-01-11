import Vue from 'vue';
import VueRouter from 'vue-router';
import AIServices from './AIServices/Index';
import Demos from './Demos/Index';

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
        component: () => import('@/views/pages/HomePage/Index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: true,
            canBack: false,
        },
    },
    AIServices,
    Demos,
    {
        path: '*',
        component: () => import('@/views/pages/PageNotFound/Index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: false,
            canBack: false,
        },
    },
    {
        path: '/solutions',
        name: 'solutions',
        component: () => import('../views/pages/solutionsPage/index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: true,
            canBack: false,
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;
