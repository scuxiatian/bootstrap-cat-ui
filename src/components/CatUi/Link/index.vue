<template>
  <a :href="href" class="cat-link" :class="linkClass" :target="target" :disabled="disabled">
    <i v-if="icon" :class="icon"></i>
    <span class="link-content" :style="this.$slots.default && icon ? { 'margin-left': '5px' } : {}"><slot></slot></span>
  </a>
</template>

<script>
export default {
  name: 'CatLink',
  props: {
    type: {
      type: String,
      default: 'dark'
    },
    href: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: '_self'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    },
    icon: String
  },
  computed: {
    linkClass () {
      const classList = []
      classList.push(`text-${this.type}`)
      if (!this.underline) {
        classList.push('text-decoration-none')
      }
      return classList
    }
  }
}
</script>

<style scoped>
  .link-content .fa {
    margin: 0 5px;
  }
</style>
