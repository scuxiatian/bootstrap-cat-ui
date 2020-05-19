export default {
  name: 'CatRow',
  componentName: 'CatRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    align: {
      type: String,
      default: 'top'
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  computed: {
    rowClass () {
      const classList = ['cat-row']
      this.align !== 'top' && classList.push(`is-align-${this.align}`)
      this.justify !== 'start' && classList.push(`is-justify-${this.justify}`)
      this.type === 'flex' && classList.push('cat-row--flex')
      return classList
    }
  },
  render (h) {
    return h(this.tag, {
      class: this.rowClass
    }, this.$slots.default)
  }
}
