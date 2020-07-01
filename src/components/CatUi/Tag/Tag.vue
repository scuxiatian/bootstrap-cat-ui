<script>
export default {
  name: 'CatTag',

  props: {
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator (val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1
      }
    }
  },

  methods: {
    handleClose (event) {
      event.stopPropagation()
      this.$emit('close', event)
    },

    handleClick (event) {
      this.$emit('click', event)
    }
  },

  computed: {
    tagSize () {
      return this.size || (this.$CAT || {}).size
    }
  },

  render (h) {
    const { type, tagSize, hit, effect } = this
    const classes = [
      'cat-tag',
      type ? `cat-tag--${type}` : '',
      tagSize ? `cat-tag--${tagSize}` : '',
      effect ? `cat-tag--${effect}` : '',
      hit && 'is-hit'
    ]
    const tagEl = (
      <span
        class={ classes }
        style={{ backgroundColor: this.color }}
        on-click={ this.handleClick }>
        { this.$slots.default }
        {
          this.closable && <i class="cat-tag__close cat-icon-close" on-click={ this.handleClose }></i>
        }
      </span>
    )
    return this.disableTransitions ? tagEl : <transition name="cat-zoom-in-center">{ tagEl }</transition>
  }
}
</script>
