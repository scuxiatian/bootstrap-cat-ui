<template>
  <view-page title="NavMenu 导航菜单" desc="为网站提供导航功能的菜单。">
    <show-box :config="menuTopConfig">
      <menu-top></menu-top>
    </show-box>
    <show-box :config="menuTopConfig">
      <menu-aside></menu-aside>
    </show-box>
  </view-page>
</template>

<script>
import MenuTop from './components/MenuTop'
import MenuAside from './components/MenuAside'
import code from './code'

export default {
  name: 'MenuApi',
  components: {
    MenuTop,
    MenuAside
  },
  data () {
    return {
      menuTopConfig: {
        title: '顶栏',
        desc: '适用广泛的基础用法。',
        code: code.topCode,
        codeDesc: '导航菜单默认为垂直模式，通过 mode 属性可以使导航菜单变更为水平模式。另外，在菜单中通过 submenu 组件可以生成二级菜单。Menu 还提供了 background-color 、text-color 和 active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。'
      }
    }
  }
}
</script>
