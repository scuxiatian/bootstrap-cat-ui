<template>
  <cat-checkbox-group v-model="checkList">
    <cat-checkbox label="复选框 A"></cat-checkbox>
    <cat-checkbox label="复选框 B"></cat-checkbox>
    <cat-checkbox label="复选框 C"></cat-checkbox>
    <cat-checkbox label="禁用" disabled></cat-checkbox>
    <cat-checkbox label="选中且禁用" disabled></cat-checkbox>
  </cat-checkbox-group>
</template>

<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A']
    }
  }
}
</script>
