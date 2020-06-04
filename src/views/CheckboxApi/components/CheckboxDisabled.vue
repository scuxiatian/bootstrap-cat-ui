<template>
  <div>
    <cat-checkbox v-model="checked1" disabled>备选项1</cat-checkbox>
    <cat-checkbox v-model="checked2" disabled>备选项2</cat-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked1: false,
      checked2: true
    }
  }
}
</script>
