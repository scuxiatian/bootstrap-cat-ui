const baseCode = `
<div>
  <div class="button-row">
    <cat-button>默认按钮</cat-button>
    <cat-button type="primary">主要按钮</cat-button>
    <cat-button type="success">成功按钮</cat-button>
    <cat-button type="danger">危险按钮</cat-button>
    <cat-button type="warning">警告按钮</cat-button>
    <cat-button type="info">信息按钮</cat-button>
  </div>
  <div class="button-row">
    <cat-button plain>朴素按钮</cat-button>
    <cat-button type="primary" plain>主要按钮</cat-button>
    <cat-button type="success" plain>成功按钮</cat-button>
    <cat-button type="danger" plain>危险按钮</cat-button>
    <cat-button type="warning" plain>警告按钮</cat-button>
    <cat-button type="info" plain>信息按钮</cat-button>
  </div>
  <div class="button-row">
    <cat-button round>圆角按钮</cat-button>
    <cat-button type="primary" round>主要按钮</cat-button>
    <cat-button type="success" round>成功按钮</cat-button>
    <cat-button type="danger" round>危险按钮</cat-button>
    <cat-button type="warning" round>警告按钮</cat-button>
    <cat-button type="info" round>信息按钮</cat-button>
  </div>
  <div class="button-row">
    <cat-button circle icon="cat-icon-search"></cat-button>
    <cat-button type="primary" icon="cat-icon-edit" circle></cat-button>
    <cat-button type="success" icon="cat-icon-check" circle></cat-button>
    <cat-button type="danger" icon="cat-icon-message" circle></cat-button>
    <cat-button type="warning" icon="cat-icon-star-off" circle></cat-button>
    <cat-button type="info" icon="cat-icon-delete" circle></cat-button>
  </div>
</div>
`
const disabledCode = `
<div class="button-row">
  <cat-button disabled>默认按钮</cat-button>
  <cat-button type="primary" disabled>主要按钮</cat-button>
  <cat-button type="success" disabled>成功按钮</cat-button>
  <cat-button type="danger" disabled>危险按钮</cat-button>
  <cat-button type="warning" disabled>警告按钮</cat-button>
  <cat-button type="info" disabled>信息按钮</cat-button>
</div>
<div class="button-row">
  <cat-button plain disabled>朴素按钮</cat-button>
  <cat-button type="primary" plain disabled>主要按钮</cat-button>
  <cat-button type="success" plain disabled>成功按钮</cat-button>
  <cat-button type="danger" plain disabled>危险按钮</cat-button>
  <cat-button type="warning" plain disabled>警告按钮</cat-button>
  <cat-button type="info" plain disabled>信息按钮</cat-button>
</div>
`

const iconCode = `
<div>
  <cat-button type="primary" icon="fa fa-edit"></cat-button>
  <cat-button type="primary" icon="fa fa-share-alt"></cat-button>
  <cat-button type="primary" icon="fa fa-trash-o"></cat-button>
  <cat-button type="primary" icon="cat-icon-search">搜索</cat-button>
  <cat-button type="primary">上传<i class="cat-icon-upload cat-icon--right"></i></cat-button>
</div>
`
const groupCode = `
<div>
  <cat-button-group>
    <cat-button type="primary" icon="cat-icon-arrow-left">上一页</cat-button>
    <cat-button type="primary">下一页<i class="cat-icon-arrow-right cat-icon--right"></i></cat-button>
  </cat-button-group>
  <cat-button-group>
    <cat-button type="primary" icon="fa fa-edit"></cat-button>
    <cat-button type="primary" icon="fa fa-share-alt"></cat-button>
    <cat-button type="primary" icon="fa fa-trash-o"></cat-button>
  </cat-button-group>
</div>
`
const sizeCode = `
<div>
  <cat-button type="primary">默认按钮</cat-button>
  <cat-button type="primary" size="medium">中型按钮</cat-button>
  <cat-button type="primary" size="small">小型按钮</cat-button>
  <cat-button type="primary" size="mini">超小按钮</cat-button>
</div>
`
const loadingCode = `
<div>
  <cat-button type="primary" loading>加载中</cat-button>
</div>
`

export default {
  baseCode,
  disabledCode,
  iconCode,
  groupCode,
  sizeCode,
  loadingCode
}
