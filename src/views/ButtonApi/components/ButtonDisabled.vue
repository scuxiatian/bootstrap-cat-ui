<template>
  <div>
    <div class="button-row">
      <cat-button disabled>默认按钮</cat-button>
      <cat-button type="primary" disabled>主要按钮</cat-button>
      <cat-button type="success" disabled>成功按钮</cat-button>
      <cat-button type="danger" disabled>危险按钮</cat-button>
      <cat-button type="warning" disabled>警告按钮</cat-button>
      <cat-button type="info" disabled>信息按钮</cat-button>
    </div>
    <div class="button-row">
      <cat-button plain disabled>朴素按钮</cat-button>
      <cat-button type="primary" plain disabled>主要按钮</cat-button>
      <cat-button type="success" plain disabled>成功按钮</cat-button>
      <cat-button type="danger" plain disabled>危险按钮</cat-button>
      <cat-button type="warning" plain disabled>警告按钮</cat-button>
      <cat-button type="info" plain disabled>信息按钮</cat-button>
    </div>
  </div>
</template>

<style scoped>
  .cat-button {
    margin-left: 5px;
  }
  .button-row {
    margin: 10px;
  }
</style>
