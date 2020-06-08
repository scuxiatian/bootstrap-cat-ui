const baseCode = `
<template>
  <cat-input v-model="input" placeholder="请输入内容"></cat-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
`

const disabledCode = `
<template>
  <cat-input placeholder="请输入内容" v-model="input" disabled></cat-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
`

const clearCode = `
<template>
  <cat-input placeholder="请输入内容" v-model="input" clearable></cat-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
`

const passwordCode = `
<template>
  <cat-input placeholder="请输入内容" v-model="input" show-password></cat-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>
`
const iconCode = `
<template>
  <div>
    <div class="demo-input-suffix">
      属性方式：
      <cat-input
        placeholder="请选择日期"
        suffix-icon="cat-icon-date"
        v-model="input1">
      </cat-input>
      <cat-input
        placeholder="请输入内容"
        prefix-icon="cat-icon-search"
        v-model="input2">
      </cat-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <cat-input
        placeholder="请选择日期"
        v-model="input3">
        <i slot="suffix" class="cat-input__icon cat-icon-date"></i>
      </cat-input>
      <cat-input
        placeholder="请输入内容"
        v-model="input4">
        <i slot="prefix" class="cat-input__icon cat-icon-search"></i>
      </cat-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
`

const textareaCode = `
<template>
  <div style="width: 400px">
    <cat-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </cat-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textarea: ''
    }
  }
}
</script>
`

const autosizeCode = `
<template>
  <div>
    <cat-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea1">
    </cat-input>
    <div style="margin: 20px 0;"></div>
    <cat-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea2">
    </cat-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
`

const complexCode = `
<template>
  <div>
    <div>
      <cat-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </cat-input>
    </div>
    <div style="margin-top: 15px;">
      <cat-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </cat-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style scoped>
  .cat-select .cat-input {
    width: 130px;
  }
  .input-with-select .cat-input-group__prepend {
    background-color: #fff;
  }
</style>
`

const sizeCode = `
<template>
  <div>
    <div class="demo-input-size">
      <cat-input
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input1">
      </cat-input>
      <cat-input
        size="medium"
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input2">
      </cat-input>
      <cat-input
        size="small"
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input3">
      </cat-input>
      <cat-input
        size="mini"
        placeholder="请输入内容"
        suffix-icon="cat-icon-date"
        v-model="input4">
      </cat-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>

<style scoped>
.demo-input-size .cat-input {
    vertical-align: top;
    margin: 0 10px 10px 0;
}
.cat-input {
    width: 180px;
}
</style>
`

const limitCode = `
<template>
  <div>
    <cat-input
      type="text"
      placeholder="请输入内容"
      v-model="text"
      maxlength="10"
      show-word-limit
    >
    </cat-input>
    <div style="margin: 20px 0;"></div>
    <cat-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="30"
      show-word-limit
    >
    </cat-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
.cat-input {
  width: 180px;
}
.cat-textarea {
  width: 400px;
}
</style>
`

export default {
  baseCode,
  disabledCode,
  clearCode,
  passwordCode,
  iconCode,
  textareaCode,
  autosizeCode,
  complexCode,
  sizeCode,
  limitCode
}
