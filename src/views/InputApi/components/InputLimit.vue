<template>
  <div>
    <cat-input
      type="text"
      placeholder="请输入内容"
      v-model="text"
      maxlength="10"
      show-word-limit
    >
    </cat-input>
    <div style="margin: 20px 0;"></div>
    <cat-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="30"
      show-word-limit
    >
    </cat-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
.cat-input {
  width: 180px;
}
.cat-textarea {
  width: 400px;
}
</style>
