<template>
  <div class="icon-container">
    <span class="inline-icon">
      <i class="fa fa-edit"></i>
      <i class="fa fa-share-alt"></i>
      <i class="fa fa-trash-o"></i>
    </span>
    <cat-button type="primary" icon="search">搜索</cat-button>
  </div>
</template>

<script>
export default {
  name: 'IconUse'
}
</script>

<style scoped>
.inline-icon .fa {
  margin: 5px 40px 5px 0;
}
.icon-container {
  font-size: 25px;
}
</style>
