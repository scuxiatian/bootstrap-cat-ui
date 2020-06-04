<template>
  <cat-checkbox v-model="checked" true-label="选中" false-label="未选中">{{ checked }}</cat-checkbox>
</template>

<script>
export default {
  data () {
    return {
      checked: '选中'
    }
  }
}
</script>
