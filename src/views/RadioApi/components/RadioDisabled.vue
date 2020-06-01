<template>
  <div>
    <cat-radio disabled v-model="radio" label="禁用">备选项1</cat-radio>
    <cat-radio disabled v-model="radio" label="选中且禁用">备选项2</cat-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '选中且禁用'
    }
  }
}
</script>
