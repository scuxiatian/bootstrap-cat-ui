<template>
  <div class="test">
    <cat-row justify="start" :gutter="10">
      <cat-col :span="3">
        <div class="col1">1</div>
      </cat-col>
      <cat-col :span="3" :lg="{span: 5, offset:2, order:12}" :md="{span:1,offset:1}">
        <div class="col2">2</div>
      </cat-col>
      <cat-col :span="1">3</cat-col>
    </cat-row>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style lang="less" scoped>
.test {
  width: 100%;
}
.cat-row {
  height: 600px;
}
.cat-col {
  // border: 1px solid black;
}
.col1 {
  background-color: blue;
}
.col2 {
  background-color: blueviolet;
}
</style>
