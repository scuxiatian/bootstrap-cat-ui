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

const templateCode = `
<template>
  <cat-select v-model="value" placeholder="请选择">
    <cat-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </cat-option>
  </cat-select>
</template>

<script>
export default {
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      value: ''
    }
  }
}
</script>
`

const groupCode = `
<template>
  <cat-select v-model="value" placeholder="请选择">
    <cat-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <cat-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </cat-option>
    </cat-option-group>
  </cat-select>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      value: ''
    }
  }
}
</script>`

const filterableCode = `
<template>
  <cat-select v-model="value" filterable placeholder="请选择">
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
</script>`

const remoteCode = `
<template>
  <cat-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
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
      options: [],
      value: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming']
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: \`value:\${item}\`, label: \`label:\${item}\` }
    })
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>
`

const allowCreateCode = `
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
`

export default {
  baseCode,
  disabledCode,
  disabledAllCode,
  clearableCode,
  multipleCode,
  templateCode,
  groupCode,
  filterableCode,
  remoteCode,
  allowCreateCode
}
