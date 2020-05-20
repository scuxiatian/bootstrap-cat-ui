<template>
  <div>
    <cat-button-group>
      <cat-button type="primary" icon="cat-icon-arrow-left">上一页</cat-button>
      <cat-button type="primary">下一页<i class="cat-icon-arrow-right cat-icon--right"></i></cat-button>
    </cat-button-group>
    <cat-button-group>
      <cat-button type="primary" icon="fa fa-edit"></cat-button>
      <cat-button type="primary" icon="fa fa-share-alt"></cat-button>
      <cat-button type="primary" icon="fa fa-trash-o"></cat-button>
    </cat-button-group>
  </div>
</template>

<style scoped>
.cat-button-group {
  margin-right: 20px;
}
</style>
