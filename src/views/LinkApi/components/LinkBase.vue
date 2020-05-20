<template>
  <div>
    <cat-link href="https://www.baidu.com" target="_blank">默认链接</cat-link>
    <cat-link href="https://www.baidu.com" type="primary">主要链接</cat-link>
    <cat-link type="success">成功链接</cat-link>
    <cat-link type="danger">危险链接</cat-link>
    <cat-link type="warning">警告链接</cat-link>
    <cat-link type="info">信息链接</cat-link>
  </div>
</template>

<style scoped>
.cat-link {
  margin-right: 5px;
}
</style>
