const baseCode = `
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
`

const disabledCode = `
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
`

const groupCode = `
<template>
  <cat-radio-group v-model="radio">
    <cat-radio :label="1">备选项1</cat-radio>
    <cat-radio :label="2">备选项2</cat-radio>
    <cat-radio :label="3">备选项3</cat-radio>
  </cat-radio-group>
</template>

<script>
export default {
  data () {
    return {
      radio: 3
    }
  }
}
</script>
`

export default {
  baseCode,
  disabledCode,
  groupCode
}
