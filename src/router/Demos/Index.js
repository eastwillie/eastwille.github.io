import NLP from './NLP/Index';

export default {
    path: '/demos',
    component: () => import('@/views/pages/Demos/Index.vue'),
    children: [
        NLP,
    ],
};
