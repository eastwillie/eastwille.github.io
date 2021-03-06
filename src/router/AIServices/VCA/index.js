import VCAIcon from '@/assets/images/icons/nav/VCA.svg';

export default {
  path: 'vca',
  component: () => import('@/views/pages/AIServices/VCA/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: false,
    icon: VCAIcon,
    navName: 'video content analysis',
    intro: 'Unlocking video content analysis capabilities based on cutting-edge deep learning models.',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/pages/AIServices/VCA/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: false,
        navName: 'introduction',
      },
    },
  ],
};
