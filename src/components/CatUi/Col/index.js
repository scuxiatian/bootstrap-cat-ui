export default {
  name: 'CatCol',
  props: {
    // 渲染标签
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格所占列数
    span: {
      type: Number,
      default: 0
    },
    // 栅格偏移列数
    offset: Number,
    // 栅格排列顺序
    order: Number,
    // 栅格垂直对齐方式
    align: {
      type: String,
      default: 'start'
    },
    // 响应式布局
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
      const classes = ['cat-col']
      // 处理span
      if (!this.span) {
        classes.push('col')
      }
      classes.push(`col-${this.span} `)
      // 处理offset
      if (this.offset || this.offset === 0) {
        classes.push(`offset-${this.offset}`)
      }
      // 处理列顺序
      if (this.order) {
        classes.push(`order-${this.order}`)
      }
      // 垂直对齐
      classes.push(`align-self-${this.align}`)
      // 响应式布局
      const renderProps = ['xs', 'sm', 'md', 'lg', 'xl']
      renderProps.forEach(size => {
        // 值为数字表示栅格所占列数
        if (typeof this[size] === 'number') {
          classes.push(`col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') { // 值为对象
          const props = this[size]
          Object.keys(props).forEach(prop => {
            classes.push(prop === 'span' ? `col-${size}-${props[prop]}` : `${prop}-${size}-${props[prop]}`)
          })
        }
      })
      return classes
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.colClass,
      style: this.colStyle
    }, this.$slots.default)
  }
}
