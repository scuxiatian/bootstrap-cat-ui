const baseCode = `
<template>
  <cat-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></cat-input-number>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
`

const disabledCode = `
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
`

const stepCode = `
<template>
  <cat-input-number v-model="num" :step="2"></cat-input-number>
</template>

<script>
export default {
  data () {
    return {
      num: 5
    }
  }
}
</script>
`

const stepStriclyCode = `
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
`

const precisionCode = `
<template>
  <cat-input-number v-model="num" :precision="2" :step="0.1" :max="10"></cat-input-number>
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
`

const sizeCode = `
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
`

const positionCode = `
<template>
  <cat-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></cat-input-number>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
`

export default {
  baseCode,
  disabledCode,
  stepCode,
  stepStriclyCode,
  precisionCode,
  sizeCode,
  positionCode
}
