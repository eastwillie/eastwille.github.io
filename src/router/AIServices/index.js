import NLP from './NLP/index';
import AIU from './AIU/index';

export default {
  path: '/services',
  component: () => import('@/views/pages/AIServices/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
  },
  children: [
    NLP,
    AIU,
  ],
};
