<template>
  <li class="cat-menu-item" role="menuitem" :class="menuItemClass" :style="[paddingStyle, itemStyle]" @click="handleItemClick">
    <slot></slot>
    <slot name="title"></slot>
  </li>
</template>

<script>
import Menu from './menu-mixins'
import Emitter from '../utils/mixins/emitter'

export default {
  name: 'CatMenuItem',
  componentName: 'CatMenuItem',
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
    activeTextColor () {
      return this.rootMenu.activeTextColor || ''
    },
    textColor () {
      return this.rootMenu.textColor || ''
    },
    itemStyle () {
      const style = {
        color: this.active ? this.activeTextColor : this.textColor
      }
      if (this.mode === 'horizontal' && !this.isNested) {
        style.borderBottomColor = this.active ? (this.rootMenu.activeTextColor ? this.activeTextColor : '') : 'transparent'
      }
      return style
    },
    isNested () {
      return this.parentMenu !== this.rootMenu
    }
  },
  methods: {
    handleItemClick () {
      if (!this.disabled) {
        this.dispatch('CatMenu', 'item-click', this)
        this.$emit('click', this)
      }
    }
  },
  mounted () {
    this.parentMenu.addItem(this)
    this.rootMenu.addItem(this)
  },
  beforeDestroy () {
    this.parentMenu.removeItem(this)
    this.rootMenu.removeItem(this)
  }
}
</script>

<style scoped>
</style>
