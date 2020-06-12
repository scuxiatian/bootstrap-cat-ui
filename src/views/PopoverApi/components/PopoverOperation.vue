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
