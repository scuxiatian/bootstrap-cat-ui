<template>
  <button class="cat-button btn" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'light'
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass () {
      const classList = []
      const prefix = this.plain ? 'btn-outline' : 'btn'
      classList.push(`${prefix}-${this.type}`)
      return classList
    }
  }
}
</script>
