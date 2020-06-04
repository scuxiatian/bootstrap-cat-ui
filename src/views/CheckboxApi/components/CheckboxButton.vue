<template>
  <div>
    <div>
      <cat-checkbox-group v-model="checkboxGroup1">
        <cat-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</cat-checkbox-button>
      </cat-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <cat-checkbox-group v-model="checkboxGroup2" size="medium" fill="#545c64" textColor="#ffd04b">
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
