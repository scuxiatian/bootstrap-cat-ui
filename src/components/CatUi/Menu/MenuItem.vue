<template>
  <li :class="linkClass" :style="menuItemStyle" @click="handleItemClick">
    <slot></slot>
  </li>
</template>

<script>
import Menu from './menu-mixins'
import Emitter from '../utils/mixins/emitter'

export default {
  name: 'CatMenu',
  mixins: [Menu, Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: String
  },
  computed: {
    active () {
      return this.index === this.rootMenu.activeIndex
    },
    linkClass () {
      const parentMap = {
        CatMenu: 'nav-link',
        CatSubMenu: 'dropdown-item'
      }
      const classList = []
      classList.push(parentMap[this.$parent.$options.componentName])
      if (this.active) {
        classList.push('active')
      }
      return classList
    },
    menuItemStyle () {
      const style = {
        cursor: this.disabled ? 'not-allowed' : 'pointer',
        color: this.disabled ? 'grey' : false
      }
      return style
    }
  },
  methods: {
    handleItemClick () {
      if (!this.disabled) {
        this.dispatch('CatMenu', 'item-click', this)
        this.$emit('click', this)
      }
    }
  }
}
</script>

<style scoped>
</style>
