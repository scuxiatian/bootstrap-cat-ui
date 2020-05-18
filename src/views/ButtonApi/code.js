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

export default {
  baseCode
}
