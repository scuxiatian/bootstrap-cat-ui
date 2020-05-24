const subRoutes = [
  {
    path: 'layout',
    name: 'LayoutApi',
    component: () => import('@/views/LayoutApi'),
    meta: {
      title: 'Layout 栅格布局',
      group: 0
    }
  },
  {
    path: 'icon',
    name: 'IconApi',
    component: () => import('@/views/IconApi'),
    meta: {
      title: 'Icon 图标',
      group: 0
    }
  },
  {
    path: 'button',
    name: 'ButtonApi',
    component: () => import('@/views/ButtonApi'),
    meta: {
      title: 'Button 按钮',
      group: 0
    }
  },
  {
    path: 'link',
    name: 'LinkApi',
    component: () => import('@/views/LinkApi'),
    meta: {
      title: 'Link 链接',
      group: 0
    }
  },
  {
    path: 'table',
    name: 'TableApi',
    component: () => import('@/views/TableApi'),
    meta: {
      title: 'Table 表格',
      group: 3
    }
  },
  {
    path: 'menu',
    name: 'MenuApi',
    component: () => import('@/views/MenuApi'),
    meta: {
      title: '导航菜单',
      group: 4
    }
  }
]

export default subRoutes
