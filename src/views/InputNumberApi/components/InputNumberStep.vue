<template>
  <cat-input-number v-model="num" :step="2"></cat-input-number>
</template>

<script>
export default {
  data () {
    return {
      num: 5
    }
  }
}
</script>
