export default [
  {
    path: '/solutions',
    component: () => import('@/views/pages/Solutions/Index'),
  },
  {
    path: '/solutions/:industry',
    props: true,
    component: () => import('@/views/pages/Solutions/SolutionsPage/Index'),
  },
];
