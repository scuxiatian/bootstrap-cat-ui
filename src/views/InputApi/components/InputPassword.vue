<template>
  <cat-input placeholder="请输入内容" v-model="input" show-password></cat-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.cat-input {
  width: 180px;
}
</style>
