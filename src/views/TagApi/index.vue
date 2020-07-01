<template>
  <view-page title="Tag 标签" desc="用于标记和选择。">
    <show-box :config="baseConfig">
      <tag-base></tag-base>
    </show-box>
    <show-box :config="closableConfig">
      <tag-closable></tag-closable>
    </show-box>
    <show-box :config="editConfig">
      <tag-edit></tag-edit>
    </show-box>
    <show-box :config="sizeConfig">
      <tag-size></tag-size>
    </show-box>
    <show-box :config="effectConfig">
      <tag-effect></tag-effect>
    </show-box>

    <show-table title="Tag" :data="tagAttributes"></show-table>
    <show-table title="Tag" type="events" :data="tagEvents"></show-table>
  </view-page>
</template>

<script>
import TagBase from './components/TagBase'
import TagClosable from './components/TagClosable'
import TagEdit from './components/TagEdit'
import TagSize from './components/TagSize'
import TagEffect from './components/TagEffect'
import code from './code'

export default {
  name: 'TagApi',
  components: {
    TagBase,
    TagClosable,
    TagEdit,
    TagSize,
    TagEffect
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '',
        code: code.baseCode,
        codeDesc: '由type属性来选择tag的类型，也可以通过color属性来自定义背景色。'
      },
      closableConfig: {
        title: '可移除标签',
        desc: '',
        code: code.closableCode,
        codeDesc: '设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。'
      },
      editConfig: {
        title: '动态编辑标签',
        desc: '动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现',
        code: code.editCode,
        codeDesc: ''
      },
      sizeConfig: {
        title: '不同尺寸',
        desc: 'Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。',
        code: code.sizeCode,
        codeDesc: '额外的尺寸：medium、small、mini，通过设置size属性来配置它们。'
      },
      effectConfig: {
        title: '不同主题',
        desc: 'Tag 组件提供了三个不同的主题：dark、light 和 plain',
        code: code.effectCode,
        codeDesc: '通过设置effect属性来改变主题，默认为 light'
      },
      tagAttributes: [
        ['type', '类型', 'string', 'success/info/warning/danger', '—'],
        ['closable', '是否可关闭', 'boolean', '—', 'false'],
        ['disable-transitions', '是否禁用渐变动画', 'boolean', '—', 'false'],
        ['hit', '是否有边框描边', 'boolean', '—', 'false'],
        ['color', '背景色', 'string', '—', '—'],
        ['size', '尺寸', 'string', 'medium / small / mini', '—'],
        ['effect', '主题', 'string', 'dark / light / plain', 'light']
      ],
      tagEvents: [
        ['click', '点击 Tag 时触发的事件', '—'],
        ['close', '关闭 Tag 时触发的事件', '—']
      ]
    }
  }
}
</script>
