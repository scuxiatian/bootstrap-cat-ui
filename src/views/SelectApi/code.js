const baseCode = `
<template>
  <cat-select v-model="value" placeholder="请选择">
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
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>
`

const disabledCode = `
<template>
  <cat-select v-model="value" placeholder="请选择">
    <cat-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </cat-option>
  </cat-select>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>
`

const disabledAllCode = `
<template>
  <cat-select v-model="value" disabled placeholder="请选择">
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
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>
`

const clearableCode = `
<template>
  <cat-select v-model="value" clearable placeholder="请选择">
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
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>
`
const multipleCode = `
<template>
  <div>
    <cat-select v-model="value1" multiple placeholder="请选择">
      <cat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </cat-option>
    </cat-select>

    <cat-select
      v-model="value2"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="请选择">
      <cat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </cat-option>
    </cat-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: [],
      value2: []
    }
  }
}
</script>
`

export default {
  baseCode,
  disabledCode,
  disabledAllCode,
  clearableCode,
  multipleCode
}
