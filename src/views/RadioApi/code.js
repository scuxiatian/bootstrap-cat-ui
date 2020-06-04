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
const buttonCode = `
<template>
  <div>
    <div>
      <cat-radio-group v-model="radio1">
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京"></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio2" size="medium" fill="#545c64" textColor="#ffd04b">
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京"></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio3" size="small">
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京" disabled></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
    <div class="radio-row">
      <cat-radio-group v-model="radio4" size="mini" disabled>
        <cat-radio-button label="上海"></cat-radio-button>
        <cat-radio-button label="北京"></cat-radio-button>
        <cat-radio-button label="广州"></cat-radio-button>
        <cat-radio-button label="深圳"></cat-radio-button>
      </cat-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海'
    }
  }
}
</script>
`

const borderCode = `
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
`

export default {
  baseCode,
  disabledCode,
  groupCode,
  buttonCode,
  borderCode
}
