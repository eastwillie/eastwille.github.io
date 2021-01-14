import AIUIcon from '@/assets/images/icon/nav/AIU.png';

export default {
  path: 'aiu',
  component: () => import('@/views/pages/AIServices/AIU/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: false,
    icon: AIUIcon,
    navName: 'automatic image understanding',
    intro: 'Giving the ability of processing massive images into your able hands.',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/pages/AIServices/AIU/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: false,
        navName: 'introduction',
      },
    },
  ],
};
