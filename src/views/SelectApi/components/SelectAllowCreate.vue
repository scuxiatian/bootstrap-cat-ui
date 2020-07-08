<template>
  <cat-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签">
    <cat-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </cat-option>
  </cat-select>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value: []
    }
  }
}
</script>
