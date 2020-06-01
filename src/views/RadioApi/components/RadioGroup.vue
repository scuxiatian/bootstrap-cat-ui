<template>
  <cat-radio-group v-model="radio">
    <cat-radio :label="1">备选项1</cat-radio>
    <cat-radio :label="2">备选项2</cat-radio>
    <cat-radio :label="3">备选项3</cat-radio>
  </cat-radio-group>
</template>

<script>
export default {
  data () {
    return {
      radio: 3
    }
  }
}
</script>
