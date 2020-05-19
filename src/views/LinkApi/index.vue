<template>
  <div class="page-container">
    <h2 class="page-title">Link 文字链接</h2>
    <h6 class="page-desc">文字超链接</h6>
    <show-box :config="linkBaseConfig">
      <link-base></link-base>
    </show-box>
    <show-box :config="linkUnderlineConfig">
      <link-underline></link-underline>
    </show-box>
    <show-box :config="linkIconConfig">
      <link-icon></link-icon>
    </show-box>

    <show-table title="Link" :data="linkAttributes"></show-table>
  </div>
</template>

<script>
import LinkBase from './components/LinkBase'
import LinkUnderline from './components/LinkUnderline'
import LinkIcon from './components/LinkIcon'
import code from './code'

export default {
  name: 'LinkApi',
  components: {
    LinkBase,
    LinkUnderline,
    LinkIcon
  },
  data () {
    return {
      linkBaseConfig: {
        title: '基础用法',
        desc: '基础的文字链接用法。',
        code: code.baseCode,
        codeDesc: '支持原生 a 标签的 href 与 target 属性'
      },
      linkUnderlineConfig: {
        title: '下划线',
        desc: '文字链接下划线。',
        code: code.underlineCode
      },
      linkIconConfig: {
        title: '图标',
        desc: '带图标的文字链接可增强辨识度。',
        code: code.iconCode
      },
      linkAttributes: [
        ['type', '类型', 'string', 'primary / secondary / success / warning / danger / info / dark', 'dark'],
        ['underline', '是否下划线', 'boolean', '—', 'true'],
        ['href', '原生 href 属性', 'string', '—', '—'],
        ['icon', '图标类名', 'string', '—', '—']
      ]
    }
  }
}
</script>
