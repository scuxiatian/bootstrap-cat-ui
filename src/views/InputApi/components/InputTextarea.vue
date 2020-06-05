<template>
  <div style="width: 400px">
    <cat-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </cat-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textarea: ''
    }
  }
}
</script>
