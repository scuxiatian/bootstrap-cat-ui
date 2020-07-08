<template>
  <ul class="cat-select-group__wrap" v-show="visible">
    <li class="cat-select-group__title">{{ label }}</li>
    <li>
      <ul class="cat-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
import Emitter from '../utils/mixins/emitter'
export default {
  name: 'CatOptionGroup',

  componentName: 'CatOptionGroup',

  mixins: [Emitter],

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      visible: true
    }
  },

  watch: {
    disabled (val) {
      this.broadcast('CatOption', 'handleGroupDisabled', val)
    }
  },

  methods: {
    queryChange () {
      this.visible = this.$children &&
        Array.isArray(this.$children) &&
        this.$children.some(option => option.visible === true)
    }
  },

  created () {
    this.$on('queryChange', this.queryChange)
  },

  mounted () {
    if (this.disabled) {
      this.broadcast('ElOption', 'handleGroupDisabled', this.disabled)
    }
  }
}
</script>
