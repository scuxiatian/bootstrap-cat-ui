<template>
  <div>
    <div class="demo-input-suffix">
      属性方式：
      <cat-input
        placeholder="请选择日期"
        suffix-icon="cat-icon-date"
        v-model="input1">
      </cat-input>
      <cat-input
        placeholder="请输入内容"
        prefix-icon="cat-icon-search"
        v-model="input2">
      </cat-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <cat-input
        placeholder="请选择日期"
        v-model="input3">
        <i slot="suffix" class="cat-input__icon cat-icon-date"></i>
      </cat-input>
      <cat-input
        placeholder="请输入内容"
        v-model="input4">
        <i slot="prefix" class="cat-input__icon cat-icon-search"></i>
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
.demo-input-suffix {
  margin-top: 15px;
}
.cat-input {
  position: relative;
  display: inline-block;
  width: 180px;
  margin-right: 15px;
}
</style>
