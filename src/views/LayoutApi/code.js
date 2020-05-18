const baseCode = `
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
`

const gutterCode = `
<cat-row :gutter="50">
  <cat-col><div class="grid-content bg-purple"></div></cat-col>
  <cat-col><div class="grid-content bg-purple"></div></cat-col>
  <cat-col><div class="grid-content bg-purple"></div></cat-col>
  <cat-col><div class="grid-content bg-purple"></div></cat-col>
</cat-row>

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
`
const offsetCode = `
<cat-row :gutter="20">
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3" :offset="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>
<cat-row :gutter="20">
  <cat-col :span="3" :offset="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3" :offset="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>
<cat-row :gutter="20">
  <cat-col :span="6" :offset="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>

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
`

const orderCode = `
<cat-row :gutter="5">
  <cat-col><div class="grid-content bg-purple">1</div></cat-col>
  <cat-col :order="12"><div class="grid-content bg-purple">2</div></cat-col>
  <cat-col :order="1"><div class="grid-content bg-purple">3</div></cat-col>
  <cat-col :order="6"><div class="grid-content bg-purple">4</div></cat-col>
</cat-row>

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
`

const justifyCode = `
<cat-row>
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple-light"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>
<cat-row justify="center">
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple-light"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>
<cat-row justify="end">
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple-light"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>
<cat-row justify="between">
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple-light"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>
<cat-row justify="around">
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple-light"></div></cat-col>
  <cat-col :span="3"><div class="grid-content bg-purple"></div></cat-col>
</cat-row>

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
`

const alignCode = `
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
`

const responsiveCode = `
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
`

export default {
  baseCode,
  gutterCode,
  offsetCode,
  orderCode,
  justifyCode,
  alignCode,
  responsiveCode
}
