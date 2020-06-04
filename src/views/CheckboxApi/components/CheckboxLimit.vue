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
