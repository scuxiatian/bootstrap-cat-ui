<template>
  <div>
    <cat-input-number v-model="num1"></cat-input-number>
    <cat-input-number size="medium" v-model="num2"></cat-input-number>
    <cat-input-number size="small" v-model="num3"></cat-input-number>
    <cat-input-number size="mini" v-model="num4"></cat-input-number>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1
    }
  }
}
</script>

<style scoped>
.cat-input-number {
  margin-right: 5px;
}
</style>
