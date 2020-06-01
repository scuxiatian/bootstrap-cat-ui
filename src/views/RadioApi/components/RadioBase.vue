<template>
  <div>
    <cat-radio v-model="radio" label="1">备选项1</cat-radio>
    <cat-radio v-model="radio" label="2">备选项2</cat-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
