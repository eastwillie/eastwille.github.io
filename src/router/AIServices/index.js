import NLP from './NLP/index';
import VCA from './VCA/index';
import AIU from './AIU/index';
import ASA from './ASA/index';

export default {
  path: '/services',
  name: 'services',
  component: () => import('@/views/pages/AIServices/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: true,
  },
  children: [
    NLP,
    VCA,
    AIU,
    ASA,
  ],
};
