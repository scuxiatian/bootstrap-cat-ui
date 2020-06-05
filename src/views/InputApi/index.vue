<template>
  <view-page title="Input 输入框" desc="通过鼠标或键盘输入字符">
    <show-box :config="inputBaseConfig">
      <input-base></input-base>
    </show-box>
    <show-box :config="inputDisabledConfig">
      <input-disabled></input-disabled>
    </show-box>
    <show-box :config="inputClearConfig">
      <input-clear></input-clear>
    </show-box>
    <show-box :config="inputPasswordConfig">
      <input-password></input-password>
    </show-box>
    <show-box :config="inputIconConfig">
      <input-icon></input-icon>
    </show-box>
    <show-box :config="inputTextareaConfig">
      <input-textarea></input-textarea>
    </show-box>
  </view-page>
</template>

<script>
import InputBase from './components/InputBase'
import InputDisabled from './components/InputDisabled'
import InputClear from './components/InputClear'
import InputPassword from './components/InputPassword'
import InputIcon from './components/InputIcon'
import InputTextarea from './components/InputTextarea'
import code from './code'

export default {
  name: 'InputApi',
  components: {
    InputBase,
    InputDisabled,
    InputClear,
    InputPassword,
    InputIcon,
    InputTextarea
  },
  data () {
    return {
      inputBaseConfig: {
        title: '基础用法',
        code: code.baseCode
      },
      inputDisabledConfig: {
        title: '禁用状态',
        code: code.disabledCode,
        codeDesc: '通过 disabled 属性指定是否禁用 input 组件'
      },
      inputClearConfig: {
        title: '可清空',
        code: code.clearCode,
        codeDesc: '通过 clearable 属性即可得到一个可清空的输入框'
      },
      inputPasswordConfig: {
        title: '密码框',
        code: code.passwordCode,
        codeDesc: '使用 show-password 属性即可得到一个可切换显示隐藏的密码框'
      },
      inputIconConfig: {
        title: '带 icon 的输入框',
        desc: '带有图标标记输入类型',
        code: code.iconCode,
        codeDesc: '可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。'
      },
      inputTextareaConfig: {
        title: '文本域',
        desc: '用于输入多行文本信息，通过将 type 属性的值指定为 textarea。',
        code: code.textareaCode,
        codeDesc: '文本域高度可通过 rows 属性控制。'
      }
    }
  }
}
</script>
