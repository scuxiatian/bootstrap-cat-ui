const baseCode = `
<template>
  <div>
    <div class="box">
      <div class="top">
        <cat-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <cat-button>上左</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <cat-button>上边</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <cat-button>上右</cat-button>
        </cat-tooltip>
      </div>
      <div class="left">
        <cat-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
          <cat-button>左上</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <cat-button>左边</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
          <cat-button>左下</cat-button>
        </cat-tooltip>
      </div>
      <div class="right">
        <cat-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
          <cat-button>右上</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <cat-button>右边</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
          <cat-button>右下</cat-button>
        </cat-tooltip>
      </div>
      <div class="bottom">
        <cat-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
          <cat-button>下左</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <cat-button>下边</cat-button>
        </cat-tooltip>
        <cat-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
          <cat-button>下右</cat-button>
        </cat-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 400px;
}
.top {
  text-align: center;
}

.left {
  float: left;
  width: 60px;
}

.right {
  float: right;
  width: 60px;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>
`

const effectCode = `
<template>
  <div>
    <cat-tooltip content="Top center" placement="top">
      <cat-button>Dark</cat-button>
    </cat-tooltip>
    <cat-tooltip content="Bottom center" placement="bottom" effect="light">
      <cat-button>Light</cat-button>
    </cat-tooltip>
  </div>
</template>
`

const contentCode = `
<template>
  <cat-tooltip placement="top">
    <div slot="content">多行信息<br/>第二行信息</div>
    <cat-button>Top center</cat-button>
  </cat-tooltip>
</template>
`

export default {
  baseCode,
  effectCode,
  contentCode
}
