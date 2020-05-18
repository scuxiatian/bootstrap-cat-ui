<template>
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
</template>

<style scoped>
.button-row .cat-button {
  margin-right: 20px;
}
.cat-button-group {
  margin-top: 10px;
}
</style>
