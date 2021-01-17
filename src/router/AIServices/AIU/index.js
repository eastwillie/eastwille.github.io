import AIUIcon from '@/assets/images/icons/nav/AIU.svg';

export default {
  path: 'aiu',
  name: 'services_aiu',
  component: () => import('@/views/pages/AIServices/AIU/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: true,
    icon: AIUIcon,
    navName: 'automatic image understanding',
    intro: 'Giving the ability of processing massive images into your able hands.',
  },
  children: [
    {
      path: 'introduction',
      name: 'services_aiu_intro',
      component: () => import('@/views/pages/AIServices/AIU/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: true,
        navName: 'introduction',
      },
    },
  ],
};
