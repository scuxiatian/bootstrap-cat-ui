<template>
  <div class="page-container">
    <h2 class="page-title">按钮</h2>
    <h6 class="page-desc">常用的操作按钮。</h6>
    <show-box :config="buttonBaseConfig">
      <button-base></button-base>
    </show-box>
  </div>
</template>

<script>
import ButtonBase from './components/ButtonBase'
import code from './code'

export default {
  name: 'ButtonApi',
  components: {
    ButtonBase
  },
  data () {
    return {
      buttonBaseConfig: {
        title: '基础用法',
        desc: '基础的按钮用法',
        code: code.baseCode,
        codeDesc: '使用type 和 plain属性来定义 Button 的样式。'
      }
    }
  }
}
</script>
