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

<style scoped>
.cat-button {
  margin-right: 10px;
}
</style>
