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
  },
  {
    path: 'link',
    name: 'LinkApi',
    component: () => import('@/views/LinkApi'),
    meta: {
      title: '链接'
    }
  },
  {
    path: 'menu',
    name: 'MenuApi',
    component: () => import('@/views/MenuApi'),
    meta: {
      title: '导航菜单'
    }
  }
]

export default subRoutes
