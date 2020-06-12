const baseCode = `
<template>
  <div>
    <cat-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <cat-button slot="reference">hover 激活</cat-button>
    </cat-popover>
    <cat-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <cat-button slot="reference">click 激活</cat-button>
    </cat-popover>
    <cat-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </cat-popover>
    <cat-button v-popover:popover>focus 激活</cat-button>
    <cat-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible">
      <cat-button slot="reference" @click="visible = !visible">手动激活</cat-button>
    </cat-popover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
`

const slotCode = `
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
`

const operationCode = `
<template>
  <cat-popover
    placement="top"
    width="160"
    v-model="visible">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <cat-button size="mini" type="text" @click="visible = false">取消</cat-button>
      <cat-button type="primary" size="mini" @click="visible = false">确定</cat-button>
    </div>
    <cat-button slot="reference">删除</cat-button>
  </cat-popover>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
`

export default {
  baseCode,
  slotCode,
  operationCode
}
