const baseCode = `
<div>
  <cat-tag>标签一</cat-tag>
  <cat-tag type="success">标签二</cat-tag>
  <cat-tag type="info">标签三</cat-tag>
  <cat-tag type="warning">标签四</cat-tag>
  <cat-tag type="danger">标签五</cat-tag>
  <cat-tag color="white">标签六</cat-tag>
</div>`

const closableCode = `
<template>
  <div>
    <cat-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </cat-tag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  }
}
</script>
`

const editCode = `
<template>
  <div>
    <cat-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </cat-tag>
    <cat-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </cat-input>
    <cat-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</cat-button>
  </div>
</template>

<style>
  .cat-tag + .cat-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
export default {
  data () {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>`

const sizeCode = `
<template>
  <div>
    <cat-tag closable>默认标签</cat-tag>
    <cat-tag size="medium" closable>中等标签</cat-tag>
    <cat-tag size="small" closable>小型标签</cat-tag>
    <cat-tag size="mini" closable>超小标签</cat-tag>
  </div>
</template>`

const effectCode = `
<template>
  <div>
    <div class="tag-group">
      <span class="tag-group__title">Dark</span>
      <cat-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark">
        {{ item.label }}
      </cat-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group__title">Plain</span>
      <cat-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain">
        {{ item.label }}
      </cat-tag>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ]
    }
  }
}
</script>

<style scoped>
.tag-group__title {
  width: 45px;
  font-size: 14px;
  color: #606266;
}
.tag-group {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
</style>`

export default {
  baseCode,
  closableCode,
  editCode,
  sizeCode,
  effectCode
}
