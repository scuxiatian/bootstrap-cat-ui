<script>
import Emitter from '../utils/mixins/emitter'
import Migrating from '../utils/mixins/migrating'
import MenuCollapseTransition from './MenuCollapseTransition'

export default {
  name: 'CatMenu',
  componentName: 'CatMenu',
  render (h) {
    const component = h('ul', {
      class: {
        'cat-menu--horizontal': this.mode === 'horizontal',
        'cat-menu--collapse': this.collapse,
        'cat-menu': true
      },
      style: { backgroundColor: this.backgroundColor || '' },
      key: +this.collapse
    }, this.$slots.default)
    if (this.collapseTransition) {
      return h(MenuCollapseTransition, {}, [component])
    } else {
      return component
    }
  },
  mixins: [Emitter, Migrating],
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
          'cat-menu--horizontal': this.mode === 'horizontal',
          'cat-menu--collapse': this.collapse
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
    collapse (value) {
      if (value) this.openedMenus = []
      this.broadcast('CatSubmenu', 'toggle-collapse', value)
    }
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
    getMigratingConfig () {
      return {
        props: {
          theme: 'theme is removed.'
        }
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
      if (this.uniqueOpeneds) {
        this.openedMenus = this.openedMenus.filter(index => {
          return indexPath.indexOf(index) !== -1
        })
      }
      this.openedMenus.push(index)
    },
    closeMenu (index) {
      const i = this.openedMenus.indexOf(index)
      if (i > -1) {
        this.openedMenus.splice(i, 1)
      }
    },
    handleSubmenuClick (submenu) {
      const { index, indexPath } = submenu
      const isOpened = this.openedMenus.indexOf(index) !== -1
      if (isOpened) {
        this.closeMenu(index)
        this.$emit('close', index, indexPath)
      } else {
        this.openMenu(index, indexPath)
        this.$emit('open', index, indexPath)
      }
    },
    handleItemClick (item) {
      const { index, indexPath } = item
      const oldActiveIndex = this.activeIndex
      const hasIndex = item.index !== null

      if (hasIndex) {
        this.activeIndex = item.index
      }

      this.$emit('select', index, indexPath, item)

      if (this.mode === 'horizontal' || this.collapse) {
        this.openedMenus = []
      }

      if (this.router && hasIndex) {
        this.routeToItem(item, error => {
          this.activeIndex = oldActiveIndex
          if (error) {
            if (error.name === 'NavigationDuplicated') return
            console.log(error)
          }
        })
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
    routeToItem (item, onError) {
      const route = item.route || item.index
      try {
        this.$router.push(route, () => {}, onError)
      } catch (e) {
        console.log(e)
      }
    },
    open (index) {
      const { indexPath } = this.submenus[index.toString()]
      indexPath.forEach(i => this.openMenu(i, indexPath))
    },
    close (index) {
      this.closeMenu(index)
    }
  },
  mounted () {
    this.initOpenedMenu()
    this.$on('item-click', this.handleItemClick)
    this.$on('submenu-click', this.handleSubmenuClick)
    this.$watch('items', this.updateActiveIndex)
  }
}
</script>
