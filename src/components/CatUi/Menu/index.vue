<template>
  <ul role="menubar" class="cat-menu" :class="menuClass">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'CatMenu',
  componentName: 'CatMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    collapse: Boolean,
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpenedMenus: Array
  },
  data () {
    return {
      activeIndex: this.defaultActive,
      openedMenus: this.defaultOpenedMenus ? this.defaultOpenedMenus.slice(0) : []
    }
  },
  provide () {
    return {
      rootMenu: this
    }
  },
  computed: {
    menuClass () {
      const classList = [
        {
          'cat-menu--horizontal': this.mode === 'horizontal'
        }
      ]
      return classList
    },
    isMenuPopup () {
      return this.mode === 'horizontal' || (this.mode === 'vertical' && this.collapse)
    }
  },
  methods: {
    handleItemClick (item) {
      const { index } = item
      this.activeIndex = index
      this.$emit('select', index, item)
    },
    openMenu (index, indexPath) {
      const openedMenus = this.openedMenus
      if (openedMenus.indexOf(index) !== -1) {
        return
      }
      this.openedMenus.push(index)
    },
    closeMenu (index) {
      const i = this.openedMenus.indexOf(index)
      if (i > -1) {
        this.openedMenus.splice(i, 1)
      }
    }
  },
  mounted () {
    this.$on('item-click', this.handleItemClick)
  }
}
</script>
