const baseCode = `
<template>
  <cat-checkbox v-model="checked">备选项</cat-checkbox>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
`
const disabledCode = `
<template>
  <div>
    <cat-checkbox v-model="checked1" disabled>备选项1</cat-checkbox>
    <cat-checkbox v-model="checked2" disabled>备选项2</cat-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked1: false,
      checked2: true
    }
  }
}
</script>
`
const customValueCode = `
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
`
const groupCode = `
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
`
const indeterminateCode = `
<template>
  <div>
    <cat-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</cat-checkbox>
    <div style="margin: 15px 0;"></div>
    <cat-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <cat-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</cat-checkbox>
    </cat-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
`

const limitCode = `
<template>
  <cat-checkbox-group
    v-model="checkedCities"
    :min="1"
    :max="2">
    <cat-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</cat-checkbox>
  </cat-checkbox-group>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions
    }
  }
}
</script>
`

const buttonCode = `
<template>
  <div>
    <div>
      <cat-checkbox-group v-model="checkboxGroup1">
        <cat-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</cat-checkbox-button>
      </cat-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox-group v-model="checkboxGroup2" size="medium">
        <cat-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</cat-checkbox-button>
      </cat-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox-group v-model="checkboxGroup3" size="small">
        <cat-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</cat-checkbox-button>
      </cat-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <cat-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</cat-checkbox-button>
      </cat-checkbox-group>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      cities: cityOptions
    }
  }
}
</script>
`

const borderCode = `
<template>
  <div>
    <div>
      <cat-checkbox v-model="checked1" label="备选项1" border></cat-checkbox>
      <cat-checkbox v-model="checked2" label="备选项2" border></cat-checkbox>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox v-model="checked3" label="备选项1" border size="medium"></cat-checkbox>
      <cat-checkbox v-model="checked4" label="备选项2" border size="medium"></cat-checkbox>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox-group v-model="checkboxGroup1" size="small">
        <cat-checkbox label="备选项1" border></cat-checkbox>
        <cat-checkbox label="备选项2" border disabled></cat-checkbox>
      </cat-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <cat-checkbox label="备选项1" border></cat-checkbox>
        <cat-checkbox label="备选项2" border></cat-checkbox>
      </cat-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: []
    }
  }
}
</script>
`

export default {
  baseCode,
  disabledCode,
  customValueCode,
  groupCode,
  indeterminateCode,
  limitCode,
  buttonCode,
  borderCode
}
