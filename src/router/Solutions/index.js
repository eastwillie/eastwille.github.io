export default [
  {
    path: '/solutions',
    component: () => import('@/views/pages/Solutions/Index'),
    meta: {
      keepAlive: false,
      showNav: true,
    },
  },
  {
    path: '/solutions/:industry',
    props: true,
    component: () => import('@/views/pages/Solutions/SolutionsPage/Index'),
    meta: {
      keepAlive: false,
      showNav: true,
    },
  },
];
