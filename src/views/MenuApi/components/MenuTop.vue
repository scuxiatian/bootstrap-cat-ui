<template>
  <div>
    <cat-menu mode="horizontal"
      default-active="1"
      @select="handleSelect">
      <cat-menu-item index="1">处理中心</cat-menu-item>
      <cat-submenu index="2">
        <template slot="title">我的工作台</template>
          <cat-menu-item index="2-1">选项1</cat-menu-item>
          <cat-menu-item index="2-2">选项2</cat-menu-item>
          <cat-menu-item index="2-3">选项3</cat-menu-item>
        <cat-submenu index="2-4">
          <template slot="title">选项4</template>
          <cat-menu-item index="2-4-1">选项1</cat-menu-item>
          <cat-menu-item index="2-4-2">选项2</cat-menu-item>
          <cat-menu-item index="2-4-3">选项3</cat-menu-item>
        </cat-submenu>
      </cat-submenu>
      <cat-menu-item index="3" disabled>消息中心</cat-menu-item>
      <cat-menu-item index="4">订单管理</cat-menu-item>
    </cat-menu>
    <cat-menu mode="horizontal"
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect">
      <cat-menu-item index="1">处理中心</cat-menu-item>
      <cat-submenu index="2">
        <template slot="title">我的工作台</template>
        <cat-menu-item index="2-1">选项1</cat-menu-item>
        <cat-menu-item index="2-2">选项2</cat-menu-item>
        <cat-menu-item index="2-3">选项3</cat-menu-item>
        <cat-submenu index="2-4">
          <template slot="title">选项4</template>
          <cat-menu-item index="2-4-1">选项1</cat-menu-item>
          <cat-menu-item index="2-4-2">选项2</cat-menu-item>
          <cat-menu-item index="2-4-3">选项3</cat-menu-item>
        </cat-submenu>
      </cat-submenu>
      <cat-menu-item index="3" disabled>消息中心</cat-menu-item>
      <cat-menu-item index="4">订单管理</cat-menu-item>
    </cat-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect (index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>

<style scoped>
.cat-menu {
  margin-top: 20px;
}
</style>
