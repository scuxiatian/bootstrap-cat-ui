<template>
  <div>
    <cat-row :gutter="5">
      <cat-col :span="1" :sm="2" :md="3" :lg="4" :xl="3"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="2" :sm="3" :md="4" :lg="1" :xl="3"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :span="3" :sm="4" :md="1" :lg="2" :xl="3"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :span="4" :sm="1" :md="2" :lg="3" :xl="3"><div class="grid-content bg-purple-light"></div></cat-col>
    </cat-row>
    <cat-row :gutter="5">
      <cat-col :span="1" :md="{ span: 2, offset: 0, order: 4 }"><div class="grid-content bg-purple">1</div></cat-col>
      <cat-col :span="2" :md="{ span: 2, offset: 1, order: 3 }"><div class="grid-content bg-purple-light">2</div></cat-col>
      <cat-col :span="3" :md="{ span: 2, offset: 0, order: 2 }"><div class="grid-content bg-purple">3</div></cat-col>
      <cat-col :span="4" :md="{ span: 2, offset: 1, order: 1 }"><div class="grid-content bg-purple-light">4</div></cat-col>
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
    line-height: 36px;
    text-align: center;
  }
</style>
