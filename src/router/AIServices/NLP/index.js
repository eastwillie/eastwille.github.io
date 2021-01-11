export default [
    {
        path: 'nlp/index',
        component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: true,
            canBack: false,
            showSlideMenu: false,

        },
    },
    {
        path: 'nlp/document-classification',
        component: () => import('@/views/pages/AIServices/NLP/DocumentClassification/Index.vue'),
        meta: {
            keepAlive: false,
            auth: false,
            showNav: true,
            canBack: false,
            showSlideMenu: true,
        },
    },
];
