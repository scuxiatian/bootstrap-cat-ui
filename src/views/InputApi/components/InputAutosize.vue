<template>
  <div>
    <cat-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea1">
    </cat-input>
    <div style="margin: 20px 0;"></div>
    <cat-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea2">
    </cat-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>

<style scoped>
.cat-textarea {
  width: 400px;
}
</style>
