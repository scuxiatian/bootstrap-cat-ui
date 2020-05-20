<template>
  <view-page title="Button 按钮" desc="常用的操作按钮。">
    <show-box :config="buttonBaseConfig">
      <button-base></button-base>
    </show-box>
    <show-box :config="buttonDisabledConfig">
      <button-disabled></button-disabled>
    </show-box>
    <show-box :config="buttonIconConfig">
      <button-icon></button-icon>
    </show-box>
    <show-box :config="buttonGroupConfig">
      <button-group></button-group>
    </show-box>
    <show-box :config="buttonSizeConfig">
      <button-size></button-size>
    </show-box>
    <show-box :config="buttonLoadinConfig">
      <button-loading></button-loading>
    </show-box>

    <show-table title="Button" :data="buttonAttributes"></show-table>
    <show-table title="ButtonGroup" :data="buttonGroupAttributes"></show-table>
  </view-page>
</template>

<script>
import ButtonBase from './components/ButtonBase'
import ButtonDisabled from './components/ButtonDisabled'
import ButtonIcon from './components/ButtonIcon'
import ButtonGroup from './components/ButtonGroup'
import ButtonSize from './components/ButtonSize'
import ButtonLoading from './components/ButtonLoading'
import code from './code'

export default {
  name: 'ButtonApi',
  components: {
    ButtonBase,
    ButtonDisabled,
    ButtonIcon,
    ButtonGroup,
    ButtonSize,
    ButtonLoading
  },
  data () {
    return {
      buttonBaseConfig: {
        title: '基础用法',
        desc: '基础的按钮用法。',
        code: code.baseCode,
        codeDesc: '使用 type、plain、round 和 circle 属性来定义 Button 的样式。'
      },
      buttonDisabledConfig: {
        title: '禁用状态',
        desc: '按钮不可用状态。',
        code: code.disabledCode,
        codeDesc: '你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。'
      },
      buttonIconConfig: {
        title: '图标按钮',
        desc: '带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。',
        code: code.iconCode,
        codeDesc: '设置icon属性即可，icon 的列表可以参考 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。'
      },
      buttonGroupConfig: {
        title: '按钮组',
        desc: '以按钮组的方式出现，常用于多项类似操作。',
        code: code.groupCode,
        codeDesc: '使用 <cat-button-group> 标签来嵌套你的按钮。'
      },
      buttonSizeConfig: {
        title: '不同尺寸',
        desc: 'Button 组件与 ButtonGroup 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。',
        code: code.sizeCode,
        codeDesc: '额外的尺寸：medium、small、mini，通过设置size属性来配置它们。'
      },
      buttonLoadinConfig: {
        title: '加载中',
        desc: '点击按钮后进行数据加载操作，在按钮上显示加载状态。',
        code: code.loadingCode,
        codeDesc: '要设置为 loading 状态，只要设置loading属性为true即可。'
      },
      buttonAttributes: [
        ['size', '尺寸', 'string', 'medium / small / mini', '—'],
        ['type', '类型', 'string', 'primary / success / warning / danger / info', '—'],
        ['plain', '是否朴素按钮', 'boolean', '—', 'false'],
        ['round', '是否圆角按钮', 'boolean', '—', 'false'],
        ['circle', '是否圆形按钮', 'boolean', '—', 'false'],
        ['loading', '是否加载中状态', 'boolean', '—', 'false'],
        ['disabled', '是否禁用状态', 'boolean', '—', 'false'],
        ['icon', '图标类名', 'string', '—', '—'],
        ['autofocus', '是否默认聚焦', 'boolean', '—', 'false'],
        ['native-type', '原生 type 属性', 'string', 'button / submit / reset', 'button']
      ]
    }
  }
}
</script>
