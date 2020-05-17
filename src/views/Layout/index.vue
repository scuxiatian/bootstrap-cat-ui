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
  </div>
</template>

<script>
import LayoutBase from './components/LayoutBase'
import LayoutGutter from './components/LayoutGutter'
import LayoutOffset from './components/LayoutOffset'
import code from './code'

export default {
  name: 'Layout',
  components: {
    LayoutBase,
    LayoutGutter,
    LayoutOffset
  },
  data () {
    return {
      layoutBaseConfig: {
        title: '基础布局',
        desc: '使用单一分栏创建基础的栅格布局。',
        codeDesc: '默认情况Col组件会等分row组件，可通过设置Col组件的span属性（1-12）来自由布局，未设置span属性的Col组件会等分剩下空间',
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
        code: code.gutterCode
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page-container {
  margin: 20px;
}
.page-title, .page-desc {
  margin: 20px 0;
}
</style>
