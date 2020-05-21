<template>
  <ul role="menubar"
  class="cat-menu"
  :class="menuClass"
  :style="{ backgroundColor: backgroundColor || ''}">
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
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: Array,
    uniqueOpeneds: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover'
    },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      activeIndex: this.defaultActive,
      openedMenus: (this.defaultOpeneds && !this.collapse) ? this.defaultOpeneds.slice(0) : [],
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
    hoverBackgroud () {
      return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : ''
    },
    isMenuPopup () {
      return this.mode === 'horizontal' || (this.mode === 'vertical' && this.collapse)
    }
  },
  watch: {
    defaultActive (value) {
      if (!this.items[value]) {
        this.activeIndex = null
      }
      this.updateActiveIndex(value)
    },
    defaultOpeneds (value) {
      if (!this.collapse) {
        this.openedMenus = value
      }
    },
    collapse (value) {}
  },
  methods: {
    updateActiveIndex (val) {
      const item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive]
      if (item) {
        this.activeIndex = item.index
        this.initOpenedMenu()
      } else {
        this.activeIndex = null
      }
    },
    getColorChannels (color) {
      color = color.replace('#', '')
      if (/^[0-9a-fA-F]{3}$/.test(color)) {
        color = color.split('')
        for (let i = 2; i >= 0; i--) {
          color.splice(i, 0, color[i])
        }
        color = color.join('')
      }
      if (/^[0-9a-fA-F]{6}$/.test(color)) {
        return {
          red: parseInt(color.slice(0, 2), 16),
          green: parseInt(color.slice(2, 4), 16),
          blue: parseInt(color.slice(4, 6), 16)
        }
      } else {
        return {
          red: 255,
          green: 255,
          blue: 255
        }
      }
    },
    mixColor (color, percent) {
      let { red, green, blue } = this.getColorChannels(color)
      if (percent > 0) { // shade given color
        red *= 1 - percent
        green *= 1 - percent
        blue *= 1 - percent
      } else { // tint given color
        red += (255 - red) * percent
        green += (255 - green) * percent
        blue += (255 - blue) * percent
      }
      return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
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
    handleSubmenuClick (submenu) {},
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
    initOpenedMenu () {
      const index = this.activeIndex
      const activeItem = this.items[index]
      if (!activeItem || this.mode === 'horizontal' || this.collapse) return

      const indexPath = activeItem.indexPath

      indexPath.forEach(index => {
        const submenu = this.submenus[index]
        submenu && this.openMenu(index, submenu.indexPath)
      })
    },
    routeToItem (item, onError) {},
    open (index) {},
    close (index) {}
  },
  mounted () {
    this.initOpenedMenu()
    this.$on('item-click', this.handleItemClick)
    this.$on('submenu-click', this.handleSubmenuClick)
    this.$watch('items', this.updateActiveIndex)
  }
}
</script>
