<template>
  <li class="cat-submenu" role="menuitem" :class="subMenuClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave(false)" @focus="handleMouseEnter">
    <div class="cat-submenu__title" role="submenu-title" :style="[paddingStyle, titleStyle]">
        <slot name="title"></slot>
        <i class="cat-submenu__icon-arrow" :class="submenuTitleIcon"></i>
      </div>
    <template v-if="isMenuPopup">
      <div ref="menu" v-show="opened" :class="[`cat-menu--${mode}`, popperClass]">
        <ul role="menu" class="cat-menu cat-menu--popup" :class="`cat-menu--popup-${currentPlacement}`">
          <slot></slot>
        </ul>
      </div>
    </template>
    <template v-else>
      <ul role="menu" class="cat-menu cat-menu--inline" v-show="opened">
        <slot></slot>
      </ul>
    </template>
  </li>
</template>

<script>
import Menu from './menu-mixins'
import Emitter from '../utils/mixins/emitter'
import Popper from '../utils/vue-popup'

const poperMixins = {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: false
    },
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions
  },
  data: Popper.data,
  methods: Popper.methods,
  beforeDestroy: Popper.beforeDestroy,
  deactivated: Popper.deactivated
}

export default {
  name: 'CatSubmenu',
  componentName: 'CatSubmenu',
  mixins: [Menu, Emitter, poperMixins],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Object],
      default: null
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    popperClass: String
  },
  data () {
    return {
      popperJS: null,
      timeout: null,
      mouseInChild: false,
      items: {},
      submenus: {}
    }
  },
  watch: {
    opened () {
      if (this.isMenuPopup) {
        this.$nextTick(() => {
          this.updatePopper()
        })
      }
    }
  },
  computed: {
    active () {
      let isActive = false
      const submenus = this.submenus
      const items = this.items

      Object.keys(items).forEach(key => {
        if (items[key].active) {
          isActive = true
        }
      })

      Object.keys(submenus).forEach(key => {
        if (submenus[key].active) {
          isActive = true
        }
      })

      return isActive
    },
    subMenuClass () {
      const classList = [
        {
          'is-opended': this.opened,
          'is-active': this.active,
          'is-disabled': this.disabled
        }
      ]
      return classList
    },
    opened () {
      return this.rootMenu.openedMenus.indexOf(this.index) > -1
    },
    isFirstLevel () {
      let isFirstLevel = true
      let parent = this.$parent
      while (parent && parent !== this.rootMenu) {
        if (['CatMenuItemGroup', 'CatSubmenu'].indexOf(parent.$options.componentName) > -1) {
          isFirstLevel = false
          break
        } else {
          parent = parent.$parent
        }
      }
      return isFirstLevel
    },
    mode () {
      return this.rootMenu.mode
    },
    activeTextColor () {
      return this.rootMenu.activeTextColor || ''
    },
    textColor () {
      return this.rootMenu.textColor || ''
    },
    isMenuPopup () {
      return this.rootMenu.isMenuPopup
    },
    isNested () {
      return this.parentMenu !== this.rootMenu
    },
    titleStyle () {
      if (this.mode !== 'horizontal') {
        return {
          color: this.textColor
        }
      }
      return {
        borderBottomColor: (this.active && !this.isNested)
          ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
          : 'transparent',
        color: this.active
          ? this.activeTextColor
          : this.textColor
      }
    },
    submenuTitleIcon () {
      return (this.rootMenu.mode === 'horizontal' && this.isFirstLevel) ||
       (this.rootMenu.mode === 'vertical' && !this.rootMenu.collapse)
        ? 'cat-icon-arrow-down' : 'cat-icon-arrow-right'
    }
  },
  methods: {
    handleMouseEnter (event, showTimeout = this.showTimeout) {
      if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) {
        return
      }
      const { rootMenu, disabled } = this
      if (disabled) {
        return
      }
      this.dispatch('CatSubmenu', 'mouse-enter-child')

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        rootMenu.openMenu(this.index, this.indexPath)
      }, this.showTimeout)
    },
    handleMouseLeave (deepDispatch = false) {
      this.dispatch('CatSubmenu', 'mouse-leave-child')

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        !this.mouseInChild && this.rootMenu.closeMenu(this.index)
      }, this.showTimeout)
    },
    addItem (item) {
      this.$set(this.items, item.index, item)
    },
    removeItem (item) {
      delete this.items[item.index]
    },
    addSubmenu (item) {
      this.$set(this.submenus, item.index, item)
    },
    removeSubmenu (item) {
      delete this.submenus[item.index]
    },
    updatePlacement () {
      this.currentPlacement = this.mode === 'horizontal' && this.isFirstLevel ? 'bottom-start' : 'right-start'
    },
    initPopup () {
      this.referenceElm = this.$el
      this.popperElm = this.$refs.menu
      this.updatePlacement()
    }
  },
  created () {
    this.$on('mouse-enter-child', () => {
      this.mouseInChild = true
      clearTimeout(this.timeout)
    })
    this.$on('mouse-leave-child', () => {
      this.mouseInChild = false
      clearTimeout(this.timeout)
    })
  },
  mounted () {
    this.parentMenu.addSubmenu(this)
    this.rootMenu.addSubmenu(this)
    this.initPopup()
  },
  beforeDestroy () {
    this.parentMenu.addSubmenu(this)
    this.rootMenu.addSubmenu(this)
  }
}
</script>

<style scoped>
.fa {
  margin-left: 5px;
}
</style>
