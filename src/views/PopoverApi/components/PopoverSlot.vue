<template>
  <cat-popover
    placement="right"
    width="400"
    trigger="click">
    <cat-table :data="gridData">
      <cat-table-column width="150" property="date" label="日期"></cat-table-column>
      <cat-table-column width="100" property="name" label="姓名"></cat-table-column>
      <cat-table-column width="300" property="address" label="地址"></cat-table-column>
    </cat-table>
    <cat-button slot="reference">click 激活</cat-button>
  </cat-popover>
</template>

<script>
export default {
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>
