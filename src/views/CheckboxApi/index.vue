<template>
  <view-page title="Checkbox 多选框" desc="一组备选项中进行多选">
    <show-box :config="checkboxBaseConfig">
      <checkbox-base></checkbox-base>
    </show-box>
    <show-box :config="checkboxDisabledConfig">
      <checkbox-disabled></checkbox-disabled>
    </show-box>
    <show-box :config="checkboxCustomValueConfig">
      <checkbox-custom-value></checkbox-custom-value>
    </show-box>
    <show-box :config="checkboxGroupConfig">
      <checkbox-group></checkbox-group>
    </show-box>
    <show-box :config="checkboxIndeterminateConfig">
      <checkbox-indeterminate></checkbox-indeterminate>
    </show-box>
    <show-box :config="checkboxLimitConfig">
      <checkbox-limit></checkbox-limit>
    </show-box>
    <show-box :config="checkboxButtonConfig">
      <checkbox-button></checkbox-button>
    </show-box>
    <show-box :config="checkboxBorderConfig">
      <checkbox-border></checkbox-border>
    </show-box>

    <show-table title="Checkbox" :data="checkboxAttributes"></show-table>
    <show-table title="Checkbox" :data="checkboxEvents" type="events"></show-table>
    <show-table title="Checkbox-group" :data="checkboxGroupAttributes"></show-table>
    <show-table title="Checkbox-group" :data="checkboxGroupEvents" type="events"></show-table>
    <show-table title="Checkbox-button" :data="checkboxButtonAttributes"></show-table>
  </view-page>
</template>

<script>
import CheckboxBase from './components/CheckboxBase'
import CheckboxDisabled from './components/CheckboxDisabled'
import CheckboxCustomValue from './components/CheckboxCustomValue'
import CheckboxGroup from './components/CheckboxGroup'
import CheckboxIndeterminate from './components/CheckboxIndeterminate'
import CheckboxLimit from './components/CheckboxLimit'
import CheckboxButton from './components/CheckboxButton'
import CheckboxBorder from './components/CheckboxBorder'
import code from './code'

export default {
  name: 'CheckboxApi',
  components: {
    CheckboxBase,
    CheckboxDisabled,
    CheckboxCustomValue,
    CheckboxGroup,
    CheckboxIndeterminate,
    CheckboxLimit,
    CheckboxButton,
    CheckboxBorder
  },
  data () {
    return {
      checkboxBaseConfig: {
        title: '基础用法',
        desc: '单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。',
        code: code.baseCode,
        codeDesc: '在 cat-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean ，选中为 true。'
      },
      checkboxDisabledConfig: {
        title: '禁用状态',
        desc: '多选框不可用状态。',
        code: code.disabledCode,
        codeDesc: '设置 disabled 属性即可。'
      },
      checkboxCustomValueConfig: {
        title: '自定义值',
        desc: '自定义选中 / 未选中时 checkbox 的 value',
        code: code.customValueCode,
        codeDesc: '设置 true-label 与 false-label 属性。'
      },
      checkboxGroupConfig: {
        title: '多选框组',
        desc: '适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。',
        code: code.groupCode,
        codeDesc: 'checkbox-group 元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定 Array 类型的变量即可。 cat-checkbox 的 label 属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。'
      },
      checkboxIndeterminateConfig: {
        title: 'indeterminate 状态',
        desc: 'indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果',
        code: code.indeterminateCode
      },
      checkboxLimitConfig: {
        title: '可选项目数量的限制',
        desc: '使用 min 和 max 属性能够限制可以被勾选的项目的数量。',
        code: code.limitCode
      },
      checkboxButtonConfig: {
        title: '按钮样式',
        desc: '按钮样式的多选组合。',
        code: code.buttonCode,
        codeDesc: '只需要把 cat-checkbox 元素替换为 cat-checkbox-button 元素即可。此外，还提供了size属性。'
      },
      checkboxBorderConfig: {
        title: '带有边框',
        code: code.borderCode,
        codeDesc: '设置 border 属性可以渲染为带有边框的多选框。'
      },
      checkboxAttributes: [
        ['value / v-model', '绑定值', 'string / number / boolean', '—', '—'],
        ['label', '选中状态的值（只有在 checkbox-group 或者绑定对象类型为 array 时有效）', 'string / number / boolean', '—', '—'],
        ['true-label', '选中时的值', 'string / number', '—', '—'],
        ['false-label', '没有选中时的值', 'string / number', '—', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['border', '是否显示边框', 'boolean', '—', 'false'],
        ['size', 'Checkbox 的尺寸，仅在 border 为真时有效', 'string', 'medium / small / mini', '—'],
        ['name', '原生 name 属性', 'string', '—', '—'],
        ['checked', '当前是否勾选', 'boolean', '—', 'false'],
        ['indeterminate', '设置 indeterminate 状态，只负责样式控制', 'boolean', '—', 'false']
      ],
      checkboxEvents: [
        ['change', '当绑定值变化时触发的事件', '更新后的值']
      ],
      checkboxGroupAttributes: [
        ['value / v-model', '绑定值', 'string / number / boolean', '—', '—'],
        ['size', '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效', 'string', 'medium / small / mini', '—'],
        ['min', '可被勾选的 checkbox 的最小数量', 'number', '—', '—'],
        ['max', '可被勾选的 checkbox 的最大数量', 'number', '—', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['text-color', '按钮形式的 Radio 激活时的文本颜色', 'string', '—', '#ffffff'],
        ['fill', '按钮形式的 Radio 激活时的填充色和边框色', 'string', '—', '#409EFF']
      ],
      checkboxGroupEvents: [
        ['change', '当绑定值变化时触发的事件', '更新后的值']
      ],
      checkboxButtonAttributes: [
        ['label', '选中状态的值（只有在 checkbox-group 或者绑定对象类型为 array 时有效）', 'string / number', '—', '—'],
        ['true-label', '选中时的值', 'string / number', '—', '—'],
        ['false-label', '没有选中时的值', 'string / number', '—', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['name', '原生 name 属性', 'string', '—', '—'],
        ['checked', '当前是否勾选', 'boolean', '—', 'false']
      ]
    }
  }
}
</script>
