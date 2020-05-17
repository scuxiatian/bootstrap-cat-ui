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

export default {
  baseCode,
  gutterCode,
  offsetCode
}
