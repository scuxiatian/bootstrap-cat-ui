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
    path: 'radio',
    name: 'RadioApi',
    component: () => import('@/views/RadioApi'),
    meta: {
      title: 'Radio 单选框',
      group: 1
    }
  },
  {
    path: 'checkbox',
    name: 'CheckboxApi',
    component: () => import('@/views/CheckboxApi'),
    meta: {
      title: 'Checkbox 多选框',
      group: 1
    }
  },
  {
    path: 'input',
    name: 'InputApi',
    component: () => import('@/views/InputApi'),
    meta: {
      title: 'Input 输入框',
      group: 1
    }
  },
  {
    path: 'inputNumber',
    name: 'inputNumberApi',
    component: () => import('@/views/InputNumberApi'),
    meta: {
      title: 'InputNumber 计数器',
      group: 1
    }
  },
  {
    path: 'table',
    name: 'TableApi',
    component: () => import('@/views/TableApi'),
    meta: {
      title: 'Table 表格',
      group: 2
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
  },
  {
    path: 'tooltip',
    name: 'TooltipApi',
    component: () => import('@/views/TooltipApi'),
    meta: {
      title: '文字提示',
      group: 5
    }
  },
  {
    path: 'popover',
    name: 'PopoverApi',
    component: () => import('@/views/PopoverApi'),
    meta: {
      title: '弹出框',
      group: 5
    }
  }
]

export default subRoutes
