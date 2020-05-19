<template>
  <div class="icon-container">
    <span class="inline-icon">
      <i class="icon fa fa-edit"></i>
      <i class="icon cat-icon-share"></i>
      <i class="icon cat-icon-delete"></i>
    </span>
    <cat-button type="primary" icon="cat-icon-search">搜索</cat-button>
  </div>
</template>

<script>
export default {
  name: 'IconUse'
}
</script>

<style scoped>
.icon {
  margin: 5px 40px 5px 0;
}
.icon-container {
  font-size: 25px;
}
</style>
