<template>
  <div class="icon-container">
    <span class="inline-icon">
      <icon name="edit"></icon>
      <icon name="share-alt"></icon>
      <icon name="trash-o"></icon>
    </span>
    <cat-button type="primary"><icon name="search"></icon> 搜索</cat-button>
  </div>
</template>

<script>
export default {
  name: 'IconUse'
}
</script>

<style scoped>
.inline-icon .icon {
  margin: 5px 40px 5px 0;
}
.icon-container {
  font-size: 25px;
}
</style>
