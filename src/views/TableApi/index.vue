<template>
  <view-page title="Table 表格" desc="用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。">
    <show-box>
      <table-base></table-base>
    </show-box>
  </view-page>
</template>

<script>
import TableBase from './component/TableBase'

export default {
  name: 'TableApi',
  components: {
    TableBase
  }
}
</script>
