<template>
  <view-page title="Radio 单选框" desc="在一组备选项中进行单选">
    <show-box :config="radioBaseConfig">
      <radio-base></radio-base>
    </show-box>
    <show-box :config="radioDisabledConfig">
      <radio-disabled></radio-disabled>
    </show-box>
    <show-box :config="radioGroupConfig">
      <radio-group></radio-group>
    </show-box>
    <show-box :config="radioButtonConfig">
      <radio-button></radio-button>
    </show-box>
    <show-box :config="radioBorderConfig">
      <radio-border></radio-border>
    </show-box>

    <show-table title="Radio" :data="radioAttributes"></show-table>
    <show-table title="Radio" type="events" :data="radioEvents"></show-table>
    <show-table title="RadioGroup" :data="radioGroupAttributes"></show-table>
    <show-table title="RadioGroup" type="events" :data="radioGroupEvents"></show-table>
    <show-table title="RadioButton" :data="radioButtonAttributes"></show-table>
  </view-page>
</template>

<script>
import RadioBase from './components/RadioBase'
import RadioDisabled from './components/RadioDisabled'
import RadioGroup from './components/RadioGroup'
import RadioButton from './components/RadioButton'
import RadioBorder from './components/RadioBorder'
import code from './code'

export default {
  name: 'RadioApi',
  components: {
    RadioBase,
    RadioDisabled,
    RadioGroup,
    RadioButton,
    RadioBorder
  },
  data () {
    return {
      radioBaseConfig: {
        title: '基础用法',
        desc: '由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。',
        code: code.baseCode,
        codeDesc: '要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。'
      },
      radioDisabledConfig: {
        title: '禁用状态',
        desc: '单选框不可用的状态。',
        code: code.disabledCode,
        codeDesc: '只要在 cat-radio 元素中设置 disabled 属性即可，它接受一个 Boolean ，true 为禁用。'
      },
      radioGroupConfig: {
        title: '单选框组',
        desc: '适用于在多个互斥的选项中选择的场景。',
        code: code.groupCode,
        codeDesc: '结合 cat-radio-group 元素和子元素 cat-radio 可以实现单选组，在 cat-radio-group 中绑定 v-model ，在 cat-radio 中设置好 label 即可，无需再给每一个 cat-radio 绑定变量，另外，还提供了 change 事件来响应变化，它会传入一个参数 value 。'
      },
      radioButtonConfig: {
        title: '按钮样式',
        desc: '按钮样式的单选组合。',
        code: code.buttonCode,
        codeDesc: '只需要把 cat-radio 元素换成 cat-radio-button元素即可，此外，还提供了size，fill，textColor属性。'
      },
      radioBorderConfig: {
        title: '带有边框',
        code: code.borderCode,
        codeDesc: '设置 border 属性可以渲染为带有边框的单选框。'
      },
      radioAttributes: [
        ['value / v-model', '绑定值', 'string / number / boolean', '—', '—'],
        ['label', 'Radio 的 value', 'string / number / boolean', '—', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['border', '是否显示边框', 'boolean', '—', 'false'],
        ['size', 'Radio 的尺寸，仅在 border 为真时有效', 'string', 'medium / small / mini', '—'],
        ['name', '原生 name 属性', 'string', '—', '—']
      ],
      radioEvents: [
        ['change', '绑定值变化时触发的事件', '选中的 Radio label 值']
      ],
      radioGroupAttributes: [
        ['value / v-model', '绑定值', 'string / number / boolean', '—', '—'],
        ['size', '单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效', 'string', 'medium / small / mini', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['text-color', '按钮形式的 Radio 激活时的文本颜色', 'string', '—', '#ffffff'],
        ['fill', '按钮形式的 Radio 激活时的填充色和边框色', 'string', '—', '#409EFF']
      ],
      radioGroupEvents: [
        ['change', '绑定值变化时触发的事件', '选中的 Radio label 值']
      ],
      radioButtonAttributes: [
        ['label', 'Radio 的 value', 'string / number', '—', '—'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['name', '原生 name 属性', 'string', '—', '—']
      ]
    }
  }
}
</script>
