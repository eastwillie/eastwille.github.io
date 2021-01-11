export default {
    path: '/services',
    component: () => import('@/views/pages/AIServices/Index.vue'),
    meta: {
        keepAlive: false,
        auth: false,
        showNav: true,
        canBack: false,
    },
    children: [
        {
            path: 'nlp',
            component: () => import('@/views/pages/AIServices/NLP/Index.vue'),
            meta: {
                keepAlive: false,
                auth: false,
                showNav: true,
                canBack: false,
            },
        },
    ],
};
