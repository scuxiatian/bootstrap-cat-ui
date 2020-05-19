const baseCode = `
<div class="button-row">
  <cat-button>默认按钮</cat-button>
  <cat-button type="primary">主要按钮</cat-button>
  <cat-button type="secondary">次要按钮</cat-button>
  <cat-button type="success">成功按钮</cat-button>
  <cat-button type="danger">危险按钮</cat-button>
  <cat-button type="warning">警告按钮</cat-button>
  <cat-button type="info">信息按钮</cat-button>
  <cat-button type="dark">深色按钮</cat-button>
</div>
<div class="button-row">
  <cat-button plain>朴素按钮</cat-button>
  <cat-button type="primary" plain>主要按钮</cat-button>
  <cat-button type="secondary" plain>次要按钮</cat-button>
  <cat-button type="success" plain>成功按钮</cat-button>
  <cat-button type="danger" plain>危险按钮</cat-button>
  <cat-button type="warning" plain>警告按钮</cat-button>
  <cat-button type="info" plain>信息按钮</cat-button>
  <cat-button type="dark" plain>深色按钮</cat-button>
</div>

<style scoped>
  .cat-button {
    margin-left: 5px;
  }
  .button-row {
    margin: 10px;
  }
</style>
`
const disabledCode = `
<div class="button-row">
  <cat-button disabled>默认按钮</cat-button>
  <cat-button type="primary" disabled>主要按钮</cat-button>
  <cat-button type="secondary" disabled>次要按钮</cat-button>
  <cat-button type="success" disabled>成功按钮</cat-button>
  <cat-button type="danger" disabled>危险按钮</cat-button>
  <cat-button type="warning" disabled>警告按钮</cat-button>
  <cat-button type="info" disabled>信息按钮</cat-button>
  <cat-button type="dark" disabled>深色按钮</cat-button>
</div>
<div class="button-row">
  <cat-button plain disabled>朴素按钮</cat-button>
  <cat-button type="primary" plain disabled>主要按钮</cat-button>
  <cat-button type="secondary" plain disabled>次要按钮</cat-button>
  <cat-button type="success" plain disabled>成功按钮</cat-button>
  <cat-button type="danger" plain disabled>危险按钮</cat-button>
  <cat-button type="warning" plain disabled>警告按钮</cat-button>
  <cat-button type="info" plain disabled>信息按钮</cat-button>
  <cat-button type="dark" plain disabled>深色按钮</cat-button>
</div>

<style scoped>
  .cat-button {
    margin-left: 5px;
  }
  .button-row {
    margin: 10px;
  }
</style>
`

const iconCode = `
<div>
  <cat-button type="primary" icon="fa fa-edit"></cat-button>
  <cat-button type="primary" icon="fa fa-share-alt"></cat-button>
  <cat-button type="primary" icon="fa fa-trash-o"></cat-button>
  <cat-button type="primary" icon="fa fa-search">搜索</cat-button>
  <cat-button type="primary">上传<i class="fa fa-upload"></i></cat-button>
</div>

<style scoped>
.cat-button {
  margin-right: 10px;
}
</style>
`
const groupCode = `
<div>
  <cat-button-group>
    <cat-button type="primary" icon="fa fa-angle-left">上一页</cat-button>
    <cat-button type="primary">下一页<i class="fa fa-angle-right"></i></cat-button>
  </cat-button-group>
  <cat-button-group>
    <cat-button type="primary" icon="fa fa-edit"></cat-button>
    <cat-button type="primary" icon="fa fa-share-alt"></cat-button>
    <cat-button type="primary" icon="fa fa-trash-o"></cat-button>
  </cat-button-group>
</div>

<style scoped>
.cat-button-group {
  margin-right: 20px;
}
</style>
`
const sizeCode = `
<div>
  <div class="button-row">
    <cat-button type="primary" size="lg">大型按钮</cat-button>
    <cat-button type="primary">默认按钮</cat-button>
    <cat-button type="primary" size="sm">小型按钮</cat-button>
  </div>
  <div>
    <cat-button-group size="lg">
      <cat-button type="primary">大型按钮组</cat-button>
      <cat-button type="primary">大型按钮组</cat-button>
      <cat-button type="primary">大型按钮组</cat-button>
    </cat-button-group>
  </div>
  <div>
    <cat-button-group>
      <cat-button type="primary">默认按钮组</cat-button>
      <cat-button type="primary">默认按钮组</cat-button>
      <cat-button type="primary">默认按钮组</cat-button>
    </cat-button-group>
  </div>
  <div>
    <cat-button-group size="sm">
      <cat-button type="primary">小型按钮组</cat-button>
      <cat-button type="primary">小型按钮组</cat-button>
      <cat-button type="primary">小型按钮组</cat-button>
    </cat-button-group>
  </div>
</div>

<style scoped>
.button-row .cat-button {
  margin-right: 20px;
}
.cat-button-group {
  margin-top: 10px;
}
</style>
`
const blockCode = `
<cat-button type="primary" block>块级按钮</cat-button>
`

export default {
  baseCode,
  disabledCode,
  iconCode,
  groupCode,
  sizeCode,
  blockCode
}
