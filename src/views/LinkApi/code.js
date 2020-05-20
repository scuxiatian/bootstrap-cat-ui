const baseCode = `
<div>
  <cat-link href="https://www.baidu.com" target="_blank">默认链接</cat-link>
  <cat-link href="https://www.baidu.com" type="primary">主要链接</cat-link>
  <cat-link type="success">成功链接</cat-link>
  <cat-link type="danger">危险链接</cat-link>
  <cat-link type="warning">警告链接</cat-link>
  <cat-link type="info">信息链接</cat-link>
</div>
`
const disabledCode = `
<div>
  <cat-link disabled>默认链接</cat-link>
  <cat-link type="primary" disabled>主要链接</cat-link>
  <cat-link type="success" disabled>成功链接</cat-link>
  <cat-link type="danger" disabled>危险链接</cat-link>
  <cat-link type="warning" disabled>警告链接</cat-link>
  <cat-link type="info" disabled>信息链接</cat-link>
</div>
`

const underlineCode = `
<div>
  <cat-link>有下划线</cat-link>
  <cat-link :underline="false">无下划线</cat-link>
</div>
`
const iconCode = `
<div>
  <cat-link icon="cat-icon-edit">编辑</cat-link>
  <cat-link><i class="cat-icon-view cat-icon--right" slot="icon"></i>查看</cat-link>
</div>
`

export default {
  baseCode,
  disabledCode,
  underlineCode,
  iconCode
}
