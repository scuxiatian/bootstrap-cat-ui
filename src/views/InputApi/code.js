const baseCode = `
<template>
  <cat-input v-model="input" placeholder="请输入内容"></cat-input>
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
`
export default {
  baseCode
}
