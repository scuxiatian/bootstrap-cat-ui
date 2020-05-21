<template>
  <cat-row>
    <cat-col :span="12">
      <h3>默认颜色</h3>
      <cat-menu>
        <cat-submenu index="1">
          <template slot="title">
            <i class="cat-icon-location"></i>
            <span>导航一</span>
          </template>
          <cat-menu-item index="1-1">选项一</cat-menu-item>
          <cat-menu-item index="1-2">选项二</cat-menu-item>
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

<style scoped>
.cat-col {
  text-align: center;
}
</style>
