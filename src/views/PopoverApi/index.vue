<template>
  <view-page title="Popover 弹出框">
    <show-box :config="baseConfig">
      <popover-base></popover-base>
    </show-box>
    <show-box :config="slotConfig">
      <popover-slot></popover-slot>
    </show-box>
    <show-box :config="operationConfig">
      <popover-operation></popover-operation>
    </show-box>

    <show-table title="Popover" :data="popoverAttributes"></show-table>
    <show-table title="Popover" type="slots" :data="popoverSlots"></show-table>
    <show-table title="Popover" type="events" :data="popoverEvents"></show-table>
  </view-page>
</template>

<script>
import PopoverBase from './components/PopoverBase'
import PopoverSlot from './components/PopoverSlot'
import PopoverOperation from './components/PopoverOperation'
import code from './code'

export default {
  name: 'PopoverApi',
  components: {
    PopoverBase,
    PopoverSlot,
    PopoverOperation
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: 'Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。',
        code: code.baseCode,
        codeDesc: 'trigger属性用于设置何时触发 Popover，支持四种触发方式：hover，click，focus 和 manual。对于触发 Popover 的元素，有两种写法：使用 slot="reference" 的具名插槽，或使用自定义指令v-popover指向 Popover 的索引ref。'
      },
      slotConfig: {
        title: '嵌套信息',
        desc: '可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。',
        code: code.slotCode,
        codeDesc: ''
      },
      operationConfig: {
        title: '嵌套操作',
        desc: '当然，你还可以嵌套操作，这相比 Dialog 更为轻量：',
        code: code.operationCode,
        codeDesc: ''
      },
      popoverAttributes: [
        ['trigger', '触发方式', 'String', 'click/focus/hover/manual', 'click'],
        ['title', '标题', 'String', '—', '—'],
        ['content', '显示的内容，也可以通过 slot 传入 DOM', 'String', '—', '—'],
        ['width', '宽度', 'String, Number', '—', '最小宽度 150px'],
        ['placement', '出现位置', 'String', 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end', 'bottom'],
        ['disabled', 'Popover 是否可用', 'Boolean', '—', 'false'],
        ['value / v-model', '状态是否可见', 'Boolean', '—', 'false'],
        ['offset', '出现位置的偏移量', 'Number', '—', '0'],
        ['transition', '定义渐变动画', 'String', '—', 'fade-in-linear'],
        ['visible-arrow', '是否显示 Tooltip 箭头，更多参数可见Vue-popper', 'Boolean', '—', 'true'],
        ['popper-options', 'popper.js 的参数', 'Object', '参考 popper.js 文档', "{ boundariesElement: 'body', gpuAcceleration: false }"],
        ['popper-class', '为 popper 添加类名', 'String', '—', '—'],
        ['open-delay', '触发方式为 hover 时的显示延迟，单位为毫秒', 'Number', '—', '—'],
        ['close-delay', '触发方式为 hover 时的隐藏延迟，单位为毫秒', 'number', '—', '200'],
        ['tabindex', 'Popover 组件的 tabindex', 'number', '—', '0']
      ],
      popoverSlots: [
        ['—', 'Popover 内嵌 HTML 文本'],
        ['reference', '触发 Popover 显示的 HTML 元素']
      ],
      popoverEvents: [
        ['show', '显示时触发', '—'],
        ['after-enter', '显示动画播放完毕后触发', '—'],
        ['hide', '隐藏时触发', '—'],
        ['after-leave', '隐藏动画播放完毕后触发', '—']
      ]
    }
  }
}
</script>
