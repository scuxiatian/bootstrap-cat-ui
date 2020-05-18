const subRoutes = [
  {
    path: 'layout',
    name: 'LayoutApi',
    component: () => import('@/views/LayoutApi'),
    meta: {
      title: '栅格布局'
    }
  },
  {
    path: 'icon',
    name: 'IconApi',
    component: () => import('@/views/IconApi'),
    meta: {
      title: '图标'
    }
  },
  {
    path: 'button',
    name: 'ButtonApi',
    component: () => import('@/views/ButtonApi'),
    meta: {
      title: '按钮'
    }
  }
]

export default subRoutes
