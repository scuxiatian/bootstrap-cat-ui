<template>
  <label
    class="cat-radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-checked': model === label }
    ]"
    role="radio">
    <span class="cat-radio__input"
      :class="[
        { 'is-disabled': isDisabled },
        { 'is-checked': model === label }
      ]">
      <span class="cat-radio__inner">
        <input
          ref="radio"
          class="cat-radio__original"
          :value="label"
          type="radio"
          v-model="model"
          @change="handleChange"
          :disabled="isDisabled"
          tabindex="-1">
      </span>
    </span>
    <span class="cat-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import Emitter from '../utils/mixins/emitter'
export default {
  name: 'CatRadio',

  componentName: 'CatRadio',

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
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  computed: {
    model: {
      get () {
        return this._isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this._isGroup) {
          this.dispatch('CatRadioGroup', 'input', [val])
        } else {
          this.$emit('input', val)
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label)
      }
    },

    isDisabled () {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
        : this.disabled || (this.elForm || {}).disabled
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('CatRadioGroup', 'handleChange', this)
      })
    }
  },

  beforeCreate () {
    this._isGroup = false
    let parent = this.$parent
    while (parent) {
      if (parent.$options.componentName !== 'CatRadioGroup') {
        parent = parent.$parent
      } else {
        this._isGroup = true
        this._radioGroup = parent
        break
      }
    }
  }
}
</script>
