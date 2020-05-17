<template>
  <div>
    <cat-row>
      <cat-col><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row>
      <cat-col><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col><div class="grid-content bg-purple"></div></cat-col>
      <cat-col><div class="grid-content bg-purple-light"></div></cat-col>
    </cat-row>
    <cat-row>
      <cat-col><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col><div class="grid-content bg-purple"></div></cat-col>
      <cat-col><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col><div class="grid-content bg-purple"></div></cat-col>
    </cat-row>
    <cat-row>
      <cat-col><div class="grid-content bg-purple-dark"></div></cat-col>
      <cat-col :span="7"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col><div class="grid-content bg-purple-light"></div></cat-col>
    </cat-row>
  </div>
</template>

<style scoped>
  .cat-row {
    margin: 10px 0;
  }
  .bg-purple-dark {
    background: #99a9bf;
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
