<template>
  <view-page title="NavMenu 导航菜单" desc="为网站提供导航功能的菜单。">
    <show-box>
      <menu-base></menu-base>
    </show-box>
  </view-page>
</template>

<script>
import MenuBase from './components/MenuBase'

export default {
  name: 'MenuApi',
  components: {
    MenuBase
  }
}
</script>
