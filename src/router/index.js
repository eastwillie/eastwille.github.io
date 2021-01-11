import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/pages/homePage/index.vue'),
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
        component: () => import('../views/solutionsPage/index.vue'),
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
