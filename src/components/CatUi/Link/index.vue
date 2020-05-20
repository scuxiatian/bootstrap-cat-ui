<template>
  <a :href="disabled ? '' : href" class="cat-link" :class="linkClass" :target="target" :disabled="disabled">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default" class="cat-link--inner">
      <slot></slot>
    </span>
    <template v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
  </a>
</template>

<script>
export default {
  name: 'CatLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    href: String,
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
      const classList = [
        `cat-link--${this.type}`,
        {
          'is-disabled': this.disabled,
          'is-underline': this.underline && !this.disabled
        }
      ]
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
