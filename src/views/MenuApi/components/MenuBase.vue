<template>
  <cat-menu mode="horizontal" @select="handleSelect">
    <cat-menu-item index="1">处理中心</cat-menu-item>
    <cat-sub-menu index="2">
      <template slot="title">我的工作台</template>
      <cat-menu-item index="2-1">选项1</cat-menu-item>
      <cat-menu-item index="2-2" disabled>选项2</cat-menu-item>
      <cat-menu-item index="2-3">选项3</cat-menu-item>
      <cat-sub-menu index="2-4">
        <template slot="title">选项4</template>
        <cat-menu-item index="2-4-1">选项1</cat-menu-item>
        <cat-menu-item index="2-4-2">选项2</cat-menu-item>
        <cat-menu-item index="2-4-3">选项3</cat-menu-item>
      </cat-sub-menu>
    </cat-sub-menu>
    <cat-menu-item index="3" disabled>消息中心</cat-menu-item>
    <cat-menu-item index="4">订单管理</cat-menu-item>
  </cat-menu>
</template>

<script>
export default {
  methods: {
    handleSelect (index) {
      console.log(index)
    }
  }
}
</script>
