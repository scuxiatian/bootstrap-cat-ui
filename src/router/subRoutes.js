const subRoutes = [
  {
    path: 'layout',
    name: 'Layout',
    component: () => import('@/views/Layout'),
    meta: {
      title: '栅格布局'
    }
  }
]

export default subRoutes
