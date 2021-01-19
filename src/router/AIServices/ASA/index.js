import ASAIcon from '@/assets/images/icons/nav/ASA.svg';

export default {
  path: 'asa',
  name: 'services_asa',
  component: () => import('@/views/pages/AIServices/ASA/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSidebar: true,
    icon: ASAIcon,
    navName: 'audio and speech analysis',
    intro: 'Enabling your application both can hear and speak, as smart as it should be.',
  },
  children: [
    {
      path: 'introduction',
      name: 'services_asa_intro',
      component: () => import('@/views/pages/AIServices/ASA/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSidebar: true,
        navName: 'introduction',
      },
    },
  ],
};
