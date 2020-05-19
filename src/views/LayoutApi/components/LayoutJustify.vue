<template>
  <div>
    <cat-row type="flex">
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row type="flex" justify="center">
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row type="flex" justify="end">
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row type="flex" justify="space-between">
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row type="flex" justify="space-around">
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :span="6"><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
  </div>
</template>

<style scoped>
  .cat-row {
    margin: 10px 0;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
