export default {
  name: 'CatCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'CatRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    },
    colStyle () {
      const style = {}
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`
        style.paddingRight = style.paddingLeft
      }
      return style
    },
    colClass () {
      const classList = ['cat-col']

      const baseProps = ['span', 'offset', 'pull', 'push']
      baseProps.forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          const prefix = prop === 'span' ? 'cat-col-' : `cat-col-${prop}-`
          classList.push(`${prefix}${this[prop]}`)
        }
      })

      const responsiveProps = ['xs', 'sm', 'md', 'lg', 'xl']
      responsiveProps.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`cat-col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          const props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(prop === 'span' ? `cat-col-${size}-${props[prop]}` : `cat-col-${size}-${prop}-${props[prop]}`)
          })
        }
      })
      return classList
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.colClass,
      style: this.colStyle
    }, this.$slots.default)
  }
}
