import VCAIcon from '@/assets/images/icons/nav/VCA.svg';
import VCAIconCompact from '@/assets/images/icons/nav/VCA_compact.svg';

export default {
  path: 'vca',
  name: 'services_vca',
  component: () => import('@/views/pages/AIServices/VCA/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSidebar: true,
    icon: VCAIcon,
    iconCompact: VCAIconCompact,
    navName: 'video content analysis',
    intro: 'Unlocking video content analysis capabilities based on cutting-edge deep learning models.',
  },
  children: [
    {
      path: 'introduction',
      name: 'services_vca_intro',
      component: () => import('@/views/pages/AIServices/VCA/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSidebar: true,
        navName: 'introduction',
      },
    },
  ],
};
