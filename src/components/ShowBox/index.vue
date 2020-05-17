<template>
  <div>
    <h4 class="show-title">{{ config.title }}</h4>
    <h6 class="show-desc">{{ config.desc }}</h6>
    <div class="box view-box">
      <slot></slot>
      <hr>
      <div v-show="codeShow">
        <div v-if="config.codeDesc" class="code-desc">{{ config.codeDesc }}</div>
        <pre><code class="code-content">{{ markedCodess }}</code></pre>
      </div>
      <div class="btn" @click="codeShow = !codeShow">
        <span class="text-info">{{ buttonText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'ShowBox',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      codeShow: false
    }
  },
  computed: {
    markedCodess () {
      return this.config.code ? marked(this.config.code) : ''
    },
    buttonText () {
      return this.codeShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="less" scoped>
.show-title, .show-desc {
  margin: 20px 0;
}
.box {
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px;
}
.code-content {
  color:slateblue;
}
.code-desc {
  border: 1px solid #eeeeee;
  border-radius: 5px;
  color: chocolate;
  margin: 10px;
  padding: 10px;
}
.btn {
  width: 100%;
}
</style>
