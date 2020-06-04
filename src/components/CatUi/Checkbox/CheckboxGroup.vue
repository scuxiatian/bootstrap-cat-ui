<template>
  <div class="cat-checkbox-group" role="group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../utils/mixins/emitter'

export default {
  name: 'CatCheckboxGroup',

  componentName: 'CatCheckboxGroup',

  mixins: [Emitter],

  inject: {
    catFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  watch: {
    value (value) {
      this.dispatch('CatFormItem', 'el.form.change', [value])
    }
  }
}
</script>
