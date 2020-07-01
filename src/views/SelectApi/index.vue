<template>
  <view-page title="Select 选择器" desc="当选项过多时，使用下拉菜单展示并选择内容。">
    <show-box :config="baseConfig">
      <select-base></select-base>
    </show-box>
    <show-box :config="disabledConfig">
      <select-disabled></select-disabled>
    </show-box>
    <show-box :config="disabledAllConfig">
      <select-all-disabled></select-all-disabled>
    </show-box>
    <show-box :config="clearableConfig">
      <select-clearable></select-clearable>
    </show-box>
    <show-box :config="multipleConfig">
      <select-multiple></select-multiple>
    </show-box>
  </view-page>
</template>

<script>
import SelectBase from './components/SelectBase'
import SelectDisabled from './components/SelectDisabled'
import SelectAllDisabled from './components/SelectAllDisabled'
import SelectClearable from './components/SelectClearable'
import SelectMultiple from './components/SelectMultiple'
import code from './code'

export default {
  name: 'SelectApi',
  components: {
    SelectBase,
    SelectDisabled,
    SelectAllDisabled,
    SelectClearable,
    SelectMultiple
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '适用广泛的基础单选',
        code: code.baseCode,
        codeDesc: 'v-model的值为当前被选中的cat-option的 value 属性值'
      },
      disabledConfig: {
        title: '有禁用选项',
        desc: '',
        code: code.disabledCode,
        codeDesc: '在cat-option中，设定disabled值为 true，即可禁用该选项'
      },
      disabledAllConfig: {
        title: '禁用状态',
        desc: '选择器不可用状态',
        code: code.disabledAllCode,
        codeDesc: '为cat-select设置disabled属性，则整个选择器不可用'
      },
      clearableConfig: {
        title: '可清空单选',
        desc: '包含清空按钮，可将选择器清空为初始状态',
        code: code.clearableCode,
        codeDesc: '为cat-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。'
      },
      multipleConfig: {
        title: '基础多选',
        desc: '适用性较广的基础多选，用 Tag 展示已选项',
        code: code.multipleCode,
        codeDesc: '为cat-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。'
      }
    }
  }
}
</script>
