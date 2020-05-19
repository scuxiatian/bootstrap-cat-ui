<template>
  <div>
    <cat-link>有下划线</cat-link>
    <cat-link :underline="false">无下划线</cat-link>
  </div>
</template>

<style scoped>
.cat-link {
  margin-right: 5px;
}
</style>
