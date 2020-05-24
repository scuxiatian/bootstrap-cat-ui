<template>
  <div class="cat-table">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="cat-table__header-wrapper" ref="headerWrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'CatTable',
  componentName: 'CatTable'
}
</script>
