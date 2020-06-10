<template>
  <cat-input-number v-model="num" :disabled="true"></cat-input-number>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  }
}
</script>
