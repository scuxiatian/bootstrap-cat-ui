<template>
  <cat-table :data="data">
    <cat-table-column label="日期" width="180" prop="date"></cat-table-column>
    <cat-table-column label="姓名" width="180" prop="name"></cat-table-column>
    <cat-table-column label="地址" prop="address"></cat-table-column>
  </cat-table>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { date: '2020-4-1', name: 'cat', address: '成都市' }
      ]
    }
  }
}
</script>
