import AIUIcon from '@/assets/images/icons/nav/AIU.svg';

export default {
  path: 'aiu',
  component: () => import('@/views/pages/AIServices/AIU/Index.vue'),
  meta: {
    icon: AIUIcon,
    navName: 'automatic image understanding',
    intro: 'Giving the ability of processing massive images into your able hands.',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/pages/AIServices/AIU/Introduction/Index.vue'),
      meta: {
        hideSlideMenu: true,
        navName: 'introduction',
      },
    },
  ],
};
