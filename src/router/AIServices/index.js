import NLP from './NLP/index';
import VCA from './VCA/index';
import AIU from './AIU/index';
import ASA from './ASA/index';

export default {
  path: '/services',
  component: () => import('@/views/pages/AIServices/Index.vue'),
  meta: {
    navClassName: 'services',
  },
  children: [
    NLP,
    VCA,
    AIU,
    ASA,
  ],
};
