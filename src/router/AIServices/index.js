import NLP from './NLP/index';

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
        ...NLP,
    ],
};
