<template>
  <div>
    <cat-row type="flex">
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row type="flex" align="middle">
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row type="flex" align="bottom">
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="4"><div class="grid-content bg-purple"></div></cat-col>
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
