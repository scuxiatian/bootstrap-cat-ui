<template>
  <div>
    <div class="demo-input-size">
      <cat-input
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input1">
      </cat-input>
      <cat-input
        size="medium"
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input2">
      </cat-input>
      <cat-input
        size="small"
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input3">
      </cat-input>
      <cat-input
        size="mini"
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input4">
      </cat-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>

<style scoped>
.demo-input-size .cat-input {
    vertical-align: top;
    margin: 0 10px 10px 0;
}
.cat-input {
    width: 180px;
}
</style>
