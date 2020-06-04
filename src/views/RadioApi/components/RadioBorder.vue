<template>
  <div>
    <div>
      <cat-radio v-model="radio1" label="1" border>备选项1</cat-radio>
      <cat-radio v-model="radio1" label="2" border>备选项2</cat-radio>
    </div>
    <div class="radio-row">
      <cat-radio v-model="radio2" label="1" border size="medium">备选项1</cat-radio>
      <cat-radio v-model="radio2" label="2" border size="medium">备选项2</cat-radio>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio3" size="small">
        <cat-radio label="1" border>备选项1</cat-radio>
        <cat-radio label="2" border disabled>备选项2</cat-radio>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio4" size="mini" disabled>
        <cat-radio label="1" border>备选项1</cat-radio>
        <cat-radio label="2" border>备选项2</cat-radio>
      </cat-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1'
    }
  }
}
</script>

<style scoped>
.radio-row {
  margin-top: 20px;
}
</style>
