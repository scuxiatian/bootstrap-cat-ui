<template>
  <div class="page-container">
    <h2 class="page-title">Button 按钮</h2>
    <h6 class="page-desc">常用的操作按钮。</h6>
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
    <show-box :config="buttonBlockConfig">
      <button-block></button-block>
    </show-box>

    <show-table title="Button" :data="buttonAttributes"></show-table>
    <show-table title="ButtonGroup" :data="buttonGroupAttributes"></show-table>
  </div>
</template>

<script>
import ButtonBase from './components/ButtonBase'
import ButtonDisabled from './components/ButtonDisabled'
import ButtonIcon from './components/ButtonIcon'
import ButtonGroup from './components/ButtonGroup'
import ButtonSize from './components/ButtonSize'
import ButtonBlock from './components/ButtonBlock'
import code from './code'

export default {
  name: 'ButtonApi',
  components: {
    ButtonBase,
    ButtonDisabled,
    ButtonIcon,
    ButtonGroup,
    ButtonSize,
    ButtonBlock
  },
  data () {
    return {
      buttonBaseConfig: {
        title: '基础用法',
        desc: '基础的按钮用法。',
        code: code.baseCode,
        codeDesc: '使用type 和 plain属性来定义 Button 的样式。'
      },
      buttonDisabledConfig: {
        title: '禁用状态',
        desc: '按钮不可用状态。',
        code: code.disabledCode,
        codeDesc: '你可以使用 disabled 属性来定义按钮是否可用，它接受一个Boolean值。'
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
        desc: 'Button 组件与 ButtonGroup 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。',
        code: code.sizeCode,
        codeDesc: '额外的尺寸：lg、sm，通过设置size属性来配置它们。'
      },
      buttonBlockConfig: {
        title: '块级按钮',
        desc: '按钮占满水平空间',
        code: code.blockCode,
        codeDesc: '你可以使用 block 属性来定义按钮是否占满水平空间，它接受一个Boolean值。'
      },
      buttonAttributes: [
        ['size', '尺寸', 'string', 'lg / sm', '—'],
        ['type', '类型', 'string', 'primary / secondary / success / warning / danger / info / dark / light', 'light'],
        ['plain', '是否朴素按钮', 'boolean', '—', 'false'],
        ['disabled', '是否禁用状态', 'boolean', '—', 'false'],
        ['icon', '图标类名', 'string', '—', '—'],
        ['autofocus', '是否默认聚焦', 'boolean', '—', 'false'],
        ['native-type', '原生 type 属性', 'string', 'button / submit / reset', 'button']
      ],
      buttonGroupAttributes: [
        ['size', '尺寸', 'string', 'lg / sm', '—']
      ]
    }
  }
}
</script>
