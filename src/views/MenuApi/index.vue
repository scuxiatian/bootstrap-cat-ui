<template>
  <view-page title="NavMenu 导航菜单" desc="为网站提供导航功能的菜单。">
    <show-box :config="menuTopConfig">
      <menu-top></menu-top>
    </show-box>
    <show-box :config="menuAsideConfig">
      <menu-aside></menu-aside>
    </show-box>
    <show-box :config="menuCollapseConfig">
      <menu-collapse></menu-collapse>
    </show-box>
    <show-table title="Menu" :data="menuAttributes"></show-table>
    <show-table title="Menu" type="methods" :data="menuMethods"></show-table>
    <show-table title="Menu" type="events" :data="menuEvents"></show-table>
    <show-table title="SubMenu" :data="submenuAttributes"></show-table>
    <show-table title="Menu-Item" :data="menuItemAttributes"></show-table>
    <show-table title="Menu-Group" :data="menuGroupAttributes"></show-table>
  </view-page>
</template>

<script>
import MenuTop from './components/MenuTop'
import MenuAside from './components/MenuAside'
import MenuCollapse from './components/MenuCollapse'
import code from './code'

export default {
  name: 'MenuApi',
  components: {
    MenuTop,
    MenuAside,
    MenuCollapse
  },
  data () {
    return {
      menuTopConfig: {
        title: '顶栏',
        desc: '适用广泛的基础用法。',
        code: code.topCode,
        codeDesc: '导航菜单默认为垂直模式，通过 mode 属性可以使导航菜单变更为水平模式。另外，在菜单中通过 submenu 组件可以生成二级菜单。Menu 还提供了 background-color 、text-color 和 active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。'
      },
      menuAsideConfig: {
        title: '侧栏',
        desc: '垂直菜单，可内嵌子菜单。',
        code: code.asideCode,
        codeDesc: 'cat-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。'
      },
      menuCollapseConfig: {
        title: '折叠',
        code: code.collapseCode
      },
      menuAttributes: [
        ['mode', '模式', 'string', 'horizontal / vertical', 'vertical'],
        ['collapse', '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）', 'boolean', '—', 'false'],
        ['background-color', '菜单的背景色（仅支持 hex 格式）', 'string', '—', '#ffffff'],
        ['text-color', '菜单的文字颜色（仅支持 hex 格式）', 'string', '—', '#303133'],
        ['active-text-color', '当前激活菜单的文字颜色（仅支持 hex 格式）', 'string', '—', '#409EFF'],
        ['default-active', '当前激活菜单的 index', 'string', '—', '—'],
        ['default-openeds', '当前打开的 sub-menu 的 index 的数组', 'Array', '—', '—'],
        ['unique-opened', '是否只保持一个子菜单的展开', 'boolean', '—', 'false'],
        ['menu-trigger', '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)', 'string', 'hover / click', 'hover'],
        ['router', '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转', 'boolean', '—', 'false'],
        ['collapse-transition', '是否开启折叠动画', 'boolean', '—', 'true']
      ],
      menuMethods: [
        ['open', '展开指定的 sub-menu', 'index: 需要打开的 sub-menu 的 index'],
        ['close', '收起指定的 sub-menu', 'index: 需要收起的 sub-menu 的 index']
      ],
      menuEvents: [
        ['select', '菜单激活回调', 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path'],
        ['open', 'sub-menu 展开的回调', 'index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path'],
        ['close', 'sub-menu 收起的回调', 'index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path']
      ],
      submenuAttributes: [
        ['index', '唯一标志', 'string/null', '—', 'null'],
        ['popper-class', '弹出菜单的自定义类名', 'string', '—', '—'],
        ['show-timeout', '展开 sub-menu 的延时', 'number', '—', '300'],
        ['hide-timeout', '收起 sub-menu 的延时', 'number', '—', '300'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['popper-append-to-body', '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性', 'boolean', '—', '一级子菜单：true / 非一级子菜单：false']
      ],
      menuItemAttributes: [
        ['index', '唯一标志', 'string', '—', '—'],
        ['route', 'Vue Router 路径对象', 'Object', '—', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false']
      ],
      menuGroupAttributes: [
        ['title', '分组标题', 'string', '—', '—']
      ]
    }
  }
}
</script>
