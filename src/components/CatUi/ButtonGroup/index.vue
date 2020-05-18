<template>
  <div class="cat-button-group btn-group" :class="buttonGroupClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CatButtonGroup',
  props: {
    size: String
  },
  computed: {
    buttonGroupClass () {
      return `btn-group-${this.size}`
    }
  }
}
</script>
