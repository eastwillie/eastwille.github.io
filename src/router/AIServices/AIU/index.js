import AIUIcon from '@/assets/images/icon/nav/AIU.png';

export default {
  path: 'aiu',
  name: 'automatic image understanding',
  component: () => import('@/views/pages/AIServices/AIU/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: false,
    icon: AIUIcon,
    intro: 'Giving the ability of processing massive images into your able hands.',
  },
  children: [
    {
      path: 'introduction',
      name: 'introduction',
      component: () => import('@/views/pages/AIServices/AIU/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: false,
      },
    },
  ],
};
