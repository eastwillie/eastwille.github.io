import NLPIcon from '@/assets/images/icons/nav/NLP.svg';
import NLPIconCompact from '@/assets/images/icons/nav/NLP_compact.svg';

export default {
  path: 'nlp',
  name: 'services_nlp',
  component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSidebar: true,
    icon: NLPIcon,
    iconCompact: NLPIconCompact,
    navName: 'natural language processing',
    intro: 'Empowering your advanced NLP based applications with simple API calls.',
  },
  children: [
    {
      path: 'document-classification',
      name: 'services_nlp_document',
      component: () => import('@/views/pages/AIServices/NLP/DocumentClassification/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSidebar: true,
        navName: 'document classification',
      },
    },
    {
      path: 'introduction',
      name: 'services_nlp_intro',
      component: () => import('@/views/pages/AIServices/NLP/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSidebar: true,
        navName: 'introduction',
      },
    },
  ],
};
