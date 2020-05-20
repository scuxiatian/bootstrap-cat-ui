<template>
  <li class="cat-submenu" role="menuitem" :class="subMenuClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @focus="handleMouseEnter">
    <div class="cat-submenu__title" role="submenu-title">
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
      timeout: null,
      mouseInChild: false
    }
  },
  computed: {
    subMenuClass () {
      const classList = [
        {
          'is-opended': this.opened
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
    isMenuPopup () {
      return this.rootMenu.isMenuPopup
    },
    submenuTitleIcon () {
      return this.isFirstLevel ? 'cat-icon-arrow-down' : 'cat-icon-arrow-right'
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
    updatePlacement () {
      this.currentPlacement = this.mode === 'horizontal' && this.isFirstLevel ? 'bottom-start' : 'right-start'
    },
    initPopup () {
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
    this.initPopup()
  }
}
</script>

<style scoped>
.fa {
  margin-left: 5px;
}
</style>
