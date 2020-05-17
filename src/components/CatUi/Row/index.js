export default {
  name: 'CatRow',
  componentName: 'CatRow',
  props: {
    // 渲染标签
    tag: {
      type: String,
      default: 'div'
    },
    // 间隔
    gutter: {
      type: Number,
      default: 0
    },
    // 栅格垂直对齐方式
    align: {
      type: String,
      default: 'start'
    },
    // 栅格水平对齐方式
    justify: {
      type: String,
      default: 'start'
    }
  },
  computed: {
    rowClass () {
      const classes = ['row', 'cat-row']
      classes.push(`align-items-${this.align}`)
      classes.push(`justify-content-${this.justify}`)
      if (this.gutter === 0) {
        classes.push('no-gutters')
      }
      return classes
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.rowClass
    }, this.$slots.default)
  }
}
