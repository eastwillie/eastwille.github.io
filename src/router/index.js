import Vue from 'vue';
import VueRouter from 'vue-router';
import AIServices from './AIServices';
import Solutions from './Solutions';

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
      showNav: true,
    },
  },
  AIServices,
  ...Solutions,
  {
    path: '*',
    component: () => import('@/views/pages/PageNotFound/Index.vue'),
    meta: {
      keepAlive: false,
      showNav: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
