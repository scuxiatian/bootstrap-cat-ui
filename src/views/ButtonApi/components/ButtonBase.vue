<template>
  <div>
    <div class="button-row">
      <cat-button>默认按钮</cat-button>
      <cat-button type="primary">主要按钮</cat-button>
      <cat-button type="success">成功按钮</cat-button>
      <cat-button type="danger">危险按钮</cat-button>
      <cat-button type="warning">警告按钮</cat-button>
      <cat-button type="info">信息按钮</cat-button>
    </div>
    <div class="button-row">
      <cat-button plain>朴素按钮</cat-button>
      <cat-button type="primary" plain>主要按钮</cat-button>
      <cat-button type="success" plain>成功按钮</cat-button>
      <cat-button type="danger" plain>危险按钮</cat-button>
      <cat-button type="warning" plain>警告按钮</cat-button>
      <cat-button type="info" plain>信息按钮</cat-button>
    </div>
    <div class="button-row">
      <cat-button round>圆角按钮</cat-button>
      <cat-button type="primary" round>主要按钮</cat-button>
      <cat-button type="success" round>成功按钮</cat-button>
      <cat-button type="danger" round>危险按钮</cat-button>
      <cat-button type="warning" round>警告按钮</cat-button>
      <cat-button type="info" round>信息按钮</cat-button>
    </div>
    <div class="button-row">
      <cat-button circle icon="cat-icon-search"></cat-button>
      <cat-button type="primary" icon="cat-icon-edit" circle></cat-button>
      <cat-button type="success" icon="cat-icon-check" circle></cat-button>
      <cat-button type="danger" icon="cat-icon-message" circle></cat-button>
      <cat-button type="warning" icon="cat-icon-star-off" circle></cat-button>
      <cat-button type="info" icon="cat-icon-delete" circle></cat-button>
    </div>
  </div>
</template>

<style scoped>
  .cat-button {
    margin-right: 5px;
  }
  .button-row {
    margin: 10px;
  }
</style>
