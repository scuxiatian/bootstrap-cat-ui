<template>
  <cat-row :gutter="50">
    <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
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
  }
</style>
