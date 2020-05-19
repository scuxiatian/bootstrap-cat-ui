<template>
  <div class="page-container">
    <h2 class="page-title">NavMenu 导航菜单</h2>
    <h6 class="page-desc">为网站提供导航功能的菜单。</h6>
    <show-box>
      <menu-base></menu-base>
    </show-box>
  </div>
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
