<template>
  <view-page title="Input 输入框" desc="通过鼠标或键盘输入字符">
    <show-box :config="inputBaseConfig">
      <input-base></input-base>
    </show-box>
  </view-page>
</template>

<script>
import InputBase from './components/InputBase'
import code from './code'

export default {
  name: 'InputApi',
  components: {
    InputBase
  },
  data () {
    return {
      inputBaseConfig: {
        title: '基础用法',
        code: code.baseCode
      }
    }
  }
}
</script>
