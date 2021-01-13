import NLPIcon from '@/assets/images/icon/nav/NLP.png';

export default {
  path: 'nlp',
  name: 'natural language processing',
  component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
  meta: {
    keepAlive: false,
    showNav: true,
    showSlideMenu: false,
    icon: NLPIcon,
    intro: 'Empowering your advanced NLP based applications with simple API calls.',
  },
  children: [
    {
      path: 'document-classification',
      name: 'document classification',
      component: () => import('@/views/pages/AIServices/NLP/DocumentClassification/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: true,
      },
    },
    {
      path: 'introduction',
      name: 'introduction',
      component: () => import('@/views/pages/AIServices/NLP/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        showNav: true,
        showSlideMenu: false,
      },
    },
  ],
};
