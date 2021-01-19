import Vue from 'vue';
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
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

let pageLoaderInstance; // page loader instance variable
router.beforeEach((to, from, next) => {
  // starting page loader
  pageLoaderInstance = Loading.service({
    fullscreen: true,
    lock: true,
    spinner: 'i-rodin-loader', // TODO : Need to change loader icon once the gif is ready from designer end
    background: 'rgba(255, 255, 255, 0.3)',
  });

  // TODO : Need to implement auth guard logic when API is ready.
  next();
});

router.afterEach(() => {
  pageLoaderInstance.close(); // closing page loader
});

export default router;
