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
