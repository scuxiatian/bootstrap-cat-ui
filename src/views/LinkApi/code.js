const baseCode = `
<div>
  <cat-link href="https://www.baidu.com" target="_blank">默认链接</cat-link>
  <cat-link href="https://www.baidu.com" type="primary">主要链接</cat-link>
  <cat-link type="secondary">次要链接</cat-link>
  <cat-link type="success">成功链接</cat-link>
  <cat-link type="danger">危险链接</cat-link>
  <cat-link type="warning">警告链接</cat-link>
  <cat-link type="info">信息链接</cat-link>
</div>

<style scoped>
.cat-link {
  margin-right: 5px;
}
</style>
`
const underlineCode = `
<div>
  <cat-link>有下划线</cat-link>
  <cat-link :underline="false">无下划线</cat-link>
</div>

<style scoped>
.cat-link {
  margin-right: 5px;
}
</style>
`
const iconCode = `
<div>
  <cat-link icon="fa fa-edit">编辑</cat-link>
  <cat-link>查看<i class="fa fa-eye"></i></cat-link>
</div>

<style scoped>
.cat-link {
  margin-right: 20px;
}
</style>
`

export default {
  baseCode,
  underlineCode,
  iconCode
}
