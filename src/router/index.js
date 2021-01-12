import Vue from 'vue';
import VueRouter from 'vue-router';
import AIServices from './AIServices/index';

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
  {
    path: '/solutions/:industry?',
    name: 'solutions',
    component: () => import('../views/pages/SolutionsPage/Index.vue'),
    meta: {
      keepAlive: false,
      auth: false,
      showNav: true,
      canBack: false,
    },
  },
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
];

const router = new VueRouter({
  routes,
});

export default router;
