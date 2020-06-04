<template>
  <label
    class="cat-radio-button"
    :class="[
      size ? `cat-radio-button--${size}` : '',
      { 'is-focus': focus },
      { 'is-disabled': isDisabled },
      { 'is-active': value === label }
    ]"
    role="radio"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label">
    <input
      class="cat-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false">
    <span
      class="cat-radio-button__inner"
      :style="value === label ? activeStyle: null"
      @keydown.stop>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import Emitter from '../utils/mixins/emitter'
export default {
  name: 'CatRadioButton',

  componentName: 'CatRadioButton',

  mixins: [Emitter],

  inject: {
    catForm: {
      default: ''
    },

    catFormItem: {
      default: ''
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },

  data () {
    return {
      focus: false
    }
  },

  computed: {
    value: {
      get () {
        return this._radioGroup.value
      },
      set (val) {
        this.dispatch('CatRadioGroup', 'input', [val])
      }
    },

    activeStyle () {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
        color: this._radioGroup.textColor || ''
      }
    },

    _catFormItemSize () {
      return (this.catFormItem || {}).catFormItemSize
    },

    size () {
      return this._radioGroup.radioGroupSize || this._catFormItemSize
    },

    isDisabled () {
      return this.disabled || this._radioGroup.disabled || (this.catForm || {}).disabled
    },

    tabIndex () {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.dispatch('CatRadioGroup', 'handleChange', this.value)
      })
    }
  },

  beforeCreate () {
    let parent = this.$parent
    while (parent) {
      if (parent.$options.componentName !== 'CatRadioGroup') {
        parent = parent.$parent
      } else {
        this._radioGroup = parent
        break
      }
    }
  }
}
</script>
