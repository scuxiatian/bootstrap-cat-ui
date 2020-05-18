<template>
  <button class="cat-button btn" :type="nativeType" :autofocus="autofocus" :class="buttonClass" :disabled="disabled">
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
    <span class="btn-content" :style="this.$slots.default && icon ? { 'margin-left': '5px' } : {}"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'CatButton',
  props: {
    type: {
      type: String,
      default: 'light'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: String,
    icon: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    buttonClass () {
      const classList = []
      const prefix = this.plain ? 'btn-outline' : 'btn'
      classList.push(`${prefix}-${this.type}`)
      if (this.size) {
        classList.push(`btn-${this.size}`)
      }
      return classList
    }
  }
}
</script>

<style scoped>
.btn-content .fa {
  margin: 0 5px;
}
</style>
