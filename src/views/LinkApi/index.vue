<template>
  <view-page title="Link 文字链接" desc="文字超链接">
    <show-box :config="linkBaseConfig">
      <link-base></link-base>
    </show-box>
    <show-box :config="linkDisabledConfig">
      <link-disabled></link-disabled>
    </show-box>
    <show-box :config="linkUnderlineConfig">
      <link-underline></link-underline>
    </show-box>
    <show-box :config="linkIconConfig">
      <link-icon></link-icon>
    </show-box>

    <show-table title="Link" :data="linkAttributes"></show-table>
  </view-page>
</template>

<script>
import LinkBase from './components/LinkBase'
import LinkDisabled from './components/LinkDisabled'
import LinkUnderline from './components/LinkUnderline'
import LinkIcon from './components/LinkIcon'
import code from './code'

export default {
  name: 'LinkApi',
  components: {
    LinkBase,
    LinkDisabled,
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
      linkDisabledConfig: {
        title: '禁用状态',
        desc: '文字链接不可用状态。',
        code: code.disabledCode
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
        ['type', '类型', 'string', 'primary / success / warning / danger / info', 'default'],
        ['underline', '是否下划线', 'boolean', '—', 'true'],
        ['disabled', '是否禁用状态', 'boolean', '—', 'false'],
        ['href', '原生 href 属性', 'string', '—', '—'],
        ['icon', '图标类名', 'string', '—', '—']
      ]
    }
  }
}
</script>
