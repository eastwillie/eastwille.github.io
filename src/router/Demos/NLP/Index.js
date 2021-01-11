export default {
    path: 'nlp',
    component: () => import('@/views/pages/Demos/NLP/Index.vue'),
    children: [
        {
            path: 'document-classification',
            component: () => import('@/views/pages/Demos/NLP/DocumentClassification/Index.vue'),
            meta: {
                keepAlive: false,
                auth: false,
                showNav: true,
                canBack: false,
            },
        },
    ],
};
