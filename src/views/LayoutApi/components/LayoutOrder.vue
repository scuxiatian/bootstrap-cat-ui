<template>
  <cat-row :gutter="5">
    <cat-col :span="6" :push="18"><div class="grid-content bg-purple">1</div></cat-col>
    <cat-col :span="12" :pull="6"><div class="grid-content bg-purple">2</div></cat-col>
    <cat-col :span="6" :pull="6"><div class="grid-content bg-purple">3</div></cat-col>
  </cat-row>
</template>

<style scoped>
  .cat-row {
    margin: 10px 0;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 36px;
  }
</style>
