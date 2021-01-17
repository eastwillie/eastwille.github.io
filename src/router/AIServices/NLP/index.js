import NLPIcon from '@/assets/images/icons/nav/NLP.svg';

export default {
  path: 'nlp',
  name: 'services_nlp',
  component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: true,
    icon: NLPIcon,
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
        showSlideMenu: true,
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
        showSlideMenu: true,
        navName: 'introduction',
      },
    },
  ],
};
