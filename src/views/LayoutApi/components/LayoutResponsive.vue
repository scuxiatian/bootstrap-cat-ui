<template>
  <div>
    <cat-row :gutter="5">
      <cat-col :xs="12" :sm="4" :md="6" :lg="6" :xl="5"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :xs="4" :sm="10" :md="4" :lg="5" :xl="4"><div class="grid-content bg-purple-light"></div></cat-col>
      <cat-col :xs="4" :sm="5" :md="8" :lg="1" :xl="12"><div class="grid-content bg-purple"></div></cat-col>
      <cat-col :xs="4" :sm="5" :md="6" :lg="12" :xl="3"><div class="grid-content bg-purple-light"></div></cat-col>
    </cat-row>
    <cat-row :gutter="5">
      <cat-col :lg="{ span: 6, offset: 0, push: 18 }"><div class="grid-content bg-purple">1</div></cat-col>
      <cat-col :lg="{ span: 6, offset: 0, pull: 6 }"><div class="grid-content bg-purple-light">2</div></cat-col>
      <cat-col :lg="{ span: 6, offset: 6, pull: 6 }"><div class="grid-content bg-purple">3</div></cat-col>
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
