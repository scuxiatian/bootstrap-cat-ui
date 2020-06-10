<template>
  <view-page title="InputNumber 计数器" desc="仅允许输入标准的数字值，可定义范围">
    <show-box :config="baseConfig">
      <input-number-base></input-number-base>
    </show-box>
    <show-box :config="disabledConfig">
      <input-number-disabled></input-number-disabled>
    </show-box>
    <show-box :config="stepConfig">
      <input-number-step></input-number-step>
    </show-box>
    <show-box :config="stepStriclyConfig">
      <input-number-step-stricly></input-number-step-stricly>
    </show-box>
    <show-box :config="precisionConfig">
      <input-number-precision></input-number-precision>
    </show-box>
    <show-box :config="sizeConfig">
      <input-number-size></input-number-size>
    </show-box>
    <show-box :config="positionConfig">
      <input-number-position></input-number-position>
    </show-box>

    <show-table title="InputNumber" :data="inputNumberAttributes"></show-table>
    <show-table title="InputNumber" type="events" :data="inputNumberEvents"></show-table>
    <show-table title="InputNumber" type="methods" :data="inputNumberMethods"></show-table>
  </view-page>
</template>

<script>
import InputNumberBase from './components/InputNumberBase'
import InputNumberDisabled from './components/InputNumberDisabled'
import InputNumberStep from './components/InputNumberStep'
import InputNumberStepStricly from './components/InputNumberStepStricly'
import InputNumberPrecision from './components/InputNumberPrecision'
import InputNumberSize from './components/InputNumberSize'
import InputNumberPosition from './components/InputNumberPosition'
import code from './code'

export default {
  name: 'InputNumberApi',
  components: {
    InputNumberBase,
    InputNumberDisabled,
    InputNumberStep,
    InputNumberStepStricly,
    InputNumberPrecision,
    InputNumberSize,
    InputNumberPosition
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        code: code.baseCode,
        codeDesc: '要使用它，只需要在 cat-input-number 元素中使用 v-model 绑定变量即可，变量的初始值即为默认值。'
      },
      disabledConfig: {
        title: '禁用状态',
        code: code.disabledCode,
        codeDesc: 'disabled 属性接受一个 Boolean ，设置为 true 即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置 min 属性和 max 属性，不设置 min 和 max 时，最小值为 0。'
      },
      stepConfig: {
        title: '步数',
        desc: '允许定义递增递减的步数控制',
        code: code.stepCode,
        codeDesc: '设置 step 属性可以控制步长，接受一个 Number。'
      },
      stepStriclyConfig: {
        title: '严格步数',
        desc: '',
        code: code.stepCode,
        codeDesc: 'step-strictly 属性接受一个 Boolean 。如果这个属性被设置为 true ，则只能输入步数的倍数。'
      },
      precisionConfig: {
        title: '精度',
        desc: '',
        code: code.precisionCode,
        codeDesc: '设置 precision 属性可以控制数值精度，接收一个 Number。precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。'
      },
      sizeConfig: {
        title: '尺寸',
        desc: '额外提供了 medium、small、mini 三种尺寸的数字输入框',
        code: code.sizeCode,
        codeDesc: ''
      },
      positionConfig: {
        title: '按钮位置',
        desc: '',
        code: code.positionCode,
        codeDesc: '设置 controls-position 属性可以控制按钮位置。'
      },
      inputNumberAttributes: [
        ['value / v-model', '绑定值', 'number', '—', '0'],
        ['min', '设置计数器允许的最小值', 'number', '—', '-Infinity'],
        ['max', '设置计数器允许的最大值', 'number', '—', 'Infinity'],
        ['step', '计数器步长', 'number', '—', '1'],
        ['step-strictly', '是否只能输入 step 的倍数', 'boolean', '—', 'false'],
        ['precision', '数值精度', 'number', '—', '—'],
        ['size', '计数器尺寸', 'string', 'large, small', '—'],
        ['disabled', '是否禁用计数器', 'boolean', '—', 'false'],
        ['controls', '是否使用控制按钮', 'boolean', '—', 'true'],
        ['controls-position', '控制按钮位置', 'string', 'right', '-'],
        ['name', '原生属性', 'string', '—', '—'],
        ['label', '输入框关联的label文字', 'string', '—', '—'],
        ['placeholder', '输入框默认 placeholder', 'string', '-', '-']
      ],
      inputNumberEvents: [
        ['change', '绑定值被改变时触发', 'currentValue, oldValue'],
        ['blur', '在组件 Input 失去焦点时触发', '(event: Event)'],
        ['focus', '在组件 Input 获得焦点时触发', '(event: Event)']
      ],
      inputNumberMethods: [
        ['focus', '使 input 获取焦点', '-'],
        ['select', '选中 input 中的文字', '—']
      ]
    }
  }
}
</script>
