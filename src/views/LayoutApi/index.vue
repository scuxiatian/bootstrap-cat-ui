<template>
  <div class="page-container">
    <h2 class="page-title">栅格布局</h2>
    <h6 class="page-desc">通过基础的 12 分栏，迅速简便地创建布局。</h6>
    <show-box :config="layoutBaseConfig">
      <layout-base></layout-base>
    </show-box>
    <show-box :config="layoutGutterConfig">
      <layout-gutter></layout-gutter>
    </show-box>
    <show-box :config="layoutOffsetConfig">
      <layout-offset></layout-offset>
    </show-box>
    <show-box :config="layoutOrderConfig">
      <layout-order></layout-order>
    </show-box>
    <show-box :config="layoutJustifyConfig">
      <layout-justify></layout-justify>
    </show-box>
    <show-box :config="layoutAlignConfig">
      <layout-align></layout-align>
    </show-box>
    <show-box :config="layoutResponsiveConfig">
      <layout-responsive></layout-responsive>
    </show-box>

    <show-table title="Row" :data="rowAttributes"></show-table>
    <show-table title="Col" :data="colAttributes"></show-table>
  </div>
</template>

<script>
import LayoutBase from './components/LayoutBase'
import LayoutGutter from './components/LayoutGutter'
import LayoutOffset from './components/LayoutOffset'
import LayoutJustify from './components/LayoutJustify'
import LayoutAlign from './components/LayoutAlign'
import LayoutOrder from './components/LayoutOrder'
import LayoutResponsive from './components/LayoutResponsive'
import code from './code'

export default {
  name: 'LayoutApi',
  components: {
    LayoutBase,
    LayoutGutter,
    LayoutOffset,
    LayoutJustify,
    LayoutAlign,
    LayoutOrder,
    LayoutResponsive
  },
  data () {
    return {
      layoutBaseConfig: {
        title: '基础布局',
        desc: '使用单一分栏创建基础的栅格布局。',
        codeDesc: '默认情况 Col 组件会等分 Row 组件，可通过设置 Col 组件的 span 属性（1-12）来自由布局，未设置 span 属性的 Col 组件会等分剩下空间',
        code: code.baseCode
      },
      layoutGutterConfig: {
        title: '分栏间隔',
        desc: '分栏之间存在间隔。',
        codeDesc: 'Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。',
        code: code.gutterCode
      },
      layoutOffsetConfig: {
        title: '分栏偏移',
        desc: '支持偏移指定的栏数。',
        codeDesc: '通过设定 Col 组件的 offset 属性可以指定分栏偏移的栏数。',
        code: code.offsetCode
      },
      layoutOrderConfig: {
        title: '分栏排序',
        desc: '分栏重新排序',
        codeDesc: '通过设定 Col 组件的 offset 属性（1-12）可以指定分栏的排列顺序。',
        code: code.orderCode
      },
      layoutJustifyConfig: {
        title: '水平对齐',
        desc: '对分栏进行灵活的水平对齐。',
        codeDesc: '通过 justify 属性来指定 start, center, end, between, around 其中的值来定义子元素的排版方式',
        code: code.justifyCode
      },
      layoutAlignConfig: {
        title: '垂直对齐',
        desc: '对分栏进行灵活的垂直对齐。',
        codeDesc: '通过设定 Row 组件 align 属性来指定 start, center, end 其中的值来统一定义子元素的排版方式，也可以通过设定 Col 组件 align 属性来分别定义子元素的排版',
        code: code.alignCode
      },
      layoutResponsiveConfig: {
        title: '响应式布局',
        desc: '参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl，不设置默认为xs',
        codeDesc: '通过设定 Col 组件 sm、md、lg 和 xl 属性来实现响应式布局',
        code: code.responsiveCode
      },
      rowAttributes: [
        ['tag', '自定义元素标签', 'string', '*', 'div'],
        ['gutter', '栅格间隔', 'number', '—', '0'],
        ['align', '垂直排列方式', 'string', 'start/end/center', 'start'],
        ['justify', '水平排列方式', 'string', 'start/end/center/around/between', 'start']
      ],
      colAttributes: [
        ['tag', '自定义元素标签', 'string', '*', 'div'],
        ['span', '栅格占据的列数', 'number', '[1, 12]', '等分row'],
        ['offset', '栅格左侧的间隔格数', 'number', '[0, 12]', '0'],
        ['order', '栅格排列序号', 'number', '[1, 12]', '1'],
        ['align', '垂直排列方式', 'string', 'start/end/center', 'start'],
        ['sm', '≥576px 响应式栅格数或者栅格属性对象', 'number/object (例如： {span: 4, offset: 4, order: 4})', '—', '—'],
        ['md', '≥768px 响应式栅格数或者栅格属性对象', 'number/object (例如： {span: 4, offset: 4, order: 4})', '—', '—'],
        ['lg', '≥992px 响应式栅格数或者栅格属性对象', 'number/object (例如： {span: 4, offset: 4, order: 4})', '—', '—'],
        ['xl', '≥1200px 响应式栅格数或者栅格属性对象', 'number/object (例如： {span: 4, offset: 4, order: 4})', '—', '—']
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
