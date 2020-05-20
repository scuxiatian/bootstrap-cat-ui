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
    defaultOpenedMenus: Array,
    textColor: String,
    activeTextColor: String
  },
  data () {
    return {
      activeIndex: this.defaultActive,
      openedMenus: this.defaultOpenedMenus ? this.defaultOpenedMenus.slice(0) : [],
      items: {},
      submenus: {}
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
      const { index, indexPath } = item
      // const oldActiveIndex = this.activeIndex
      const hasIndex = item.index !== null

      if (hasIndex) {
        this.activeIndex = item.index
      }

      this.$emit('select', index, indexPath, item)

      if (this.mode === 'horizontal' || this.collapse) {
        this.openedMenus = []
      }
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
    }
  },
  mounted () {
    this.$on('item-click', this.handleItemClick)
  }
}
</script>
