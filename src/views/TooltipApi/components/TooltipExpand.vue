<template>
  <cat-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
    <cat-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</cat-button>
  </cat-tooltip>
</template>

<script>
export default {
  data () {
    return {
      disabled: false
    }
  }
}
</script>
