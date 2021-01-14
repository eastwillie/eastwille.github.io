import NLPIcon from '@/assets/images/icons/nav/NLP.svg';

export default {
  path: 'nlp',
  component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: false,
    icon: NLPIcon,
    navName: 'natural language processing',
    intro: 'Empowering your advanced NLP based applications with simple API calls.',
  },
  children: [
    {
      path: 'document-classification',
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
      component: () => import('@/views/pages/AIServices/NLP/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: false,
        navName: 'introduction',
      },
    },
  ],
};
