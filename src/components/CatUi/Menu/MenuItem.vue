<template>
  <li class="cat-menu-item"
    role="menuitem"
    :class="menuItemClass"
    :style="[paddingStyle, itemStyle, {backgroundColor}]"
    @click="handleItemClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave">
    <slot></slot>
    <slot name="title"></slot>
  </li>
</template>

<script>
import Menu from './menu-mixin'
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
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null
    }
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
    hoverBackground () {
      return this.rootMenu.hoverBackground
    },
    backgroundColor () {
      return this.rootMenu.backgroundColor || ''
    },
    activeTextColor () {
      return this.rootMenu.activeTextColor || ''
    },
    textColor () {
      return this.rootMenu.textColor || ''
    },
    mode () {
      return this.rootMenu.mode
    },
    itemStyle () {
      const style = {
        color: this.active ? this.activeTextColor : this.textColor
      }
      if (this.mode === 'horizontal' && !this.isNested) {
        style.borderBottomColor = this.active
          ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
          : 'transparent'
      }
      return style
    },
    isNested () {
      return this.parentMenu !== this.rootMenu
    }
  },
  methods: {
    onMouseEnter () {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      this.$el.style.backgroundColor = this.hoverBackground
    },
    onMouseLeave () {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      this.$el.style.backgroundColor = this.backgroundColor
    },
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
