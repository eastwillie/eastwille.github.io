export default {
  path: 'nlp',
  name: 'natural language processing',
  component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
  meta: {
    keepAlive: false,
    auth: false,
    showNav: true,
    canBack: false,
    showSlideMenu: false,

  },
  children: [
    {
      path: 'document-classification',
      name: 'document classification',
      component: () => import('@/views/pages/AIServices/NLP/DocumentClassification/Index.vue'),
      meta: {
        keepAlive: false,
        auth: false,
        showNav: true,
        canBack: false,
        showSlideMenu: true,
      },
    },
    {
      path: 'introduction',
      name: 'see more services',
      component: () => import('@/views/pages/AIServices/NLP/Introduction/Index.vue'),
      meta: {
        keepAlive: false,
        auth: false,
        showNav: true,
        canBack: false,
        showSlideMenu: false,
      },
    },
  ],
};
