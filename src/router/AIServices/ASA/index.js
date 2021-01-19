import ASAIcon from '@/assets/images/icons/nav/ASA.svg';

export default {
  path: 'asa',
  component: () => import('@/views/pages/AIServices/ASA/Index.vue'),
  meta: {
    icon: ASAIcon,
    navName: 'audio and speech analysis',
    intro: 'Enabling your application both can hear and speak, as smart as it should be.',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/pages/AIServices/ASA/Introduction/Index.vue'),
      meta: {
        hideSlideMenu: true,
        navName: 'introduction',
      },
    },
  ],
};
