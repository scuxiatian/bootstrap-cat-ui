<template>
  <cat-row>
    <cat-col :span="12">
      <h3>默认颜色</h3>
      <cat-menu default-active="2"
        @open="handleOpen"
        @close="handleClose">
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
            <cat-menu-item index="2-4">选项4</cat-menu-item>
          </cat-menu-item-group>
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
    </cat-col>
    <cat-col :span="12">
      <h3>自定义颜色</h3>
      <cat-menu default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
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
            <cat-menu-item index="2-4">选项4</cat-menu-item>
          </cat-menu-item-group>
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
    </cat-col>
  </cat-row>
</template>

<script>
export default {
  methods: {
    handleOpen (index, indexPath) {
      console.log(index, indexPath)
    },
    handleClose (index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>

<style scoped>
.cat-col {
  padding-left: 100px;
}
.cat-menu {
  width: 200px;
  height: 400px;
}
</style>
