<template>
  <li class="cat-menu-item" role="menuitem" :class="menuItemClass" @click="handleItemClick">
    <slot></slot>
    <slot name="title"></slot>
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
    menuItemClass () {
      const classList = [
        {
          'is-active': this.active,
          'is-disabled': this.disabled
        }
      ]
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
