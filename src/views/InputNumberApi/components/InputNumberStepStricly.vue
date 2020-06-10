<template>
  <cat-input-number v-model="num" :step="2" step-strictly></cat-input-number>
</template>

<script>
export default {
  data () {
    return {
      num: 2
    }
  }
}
</script>
