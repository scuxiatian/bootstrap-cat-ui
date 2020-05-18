<template>
  <div>
    <cat-row>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row align="center">
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row align="end">
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4" align="center"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4" align="end"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
  </div>
</template>

<style scoped>
  .cat-row {
    margin: 10px 0;
    min-height: 108px;
    background: #e5e9f2;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
