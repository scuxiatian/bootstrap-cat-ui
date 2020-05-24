<template>
  <div class="container">
    <cat-button @click="isCollapse = !isCollapse">{{ isCollapse ? '展开' : '折叠' }}</cat-button>
    <cat-menu default-active="2"
      :collapse="isCollapse">
      <cat-submenu index="1">
        <template slot="title">
          <i class="cat-icon-location"></i>
          <span>导航一</span>
        </template>
        <cat-menu-item-group title="分组一">
          <cat-menu-item index="2-1">选项1</cat-menu-item>
          <cat-menu-item index="2-2">选项2</cat-menu-item>
        </cat-menu-item-group>
        <cat-menu-item-group>
          <span slot="title">分组二</span>
          <cat-menu-item index="2-3">选项3</cat-menu-item>
        </cat-menu-item-group>
        <cat-submenu index="2-4">
          <template slot="title">选项4</template>
          <cat-menu-item index="2-4-1">选项1</cat-menu-item>
        </cat-submenu>
      </cat-submenu>
      <cat-menu-item index="2">
        <i class="cat-icon-menu"></i>
        <span slot="title">导航二</span>
      </cat-menu-item>
      <cat-menu-item index="3">
        <i class="cat-icon-document"></i>
        <span slot="title">导航三</span>
      </cat-menu-item>
      <cat-menu-item index="4">
        <i class="cat-icon-setting"></i>
        <span slot="title">导航四</span>
      </cat-menu-item>
    </cat-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style scoped>
.container {
  width: 250px;
}
.cat-menu {
  margin-top: 10px;
}
</style>
