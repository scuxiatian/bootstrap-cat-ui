<template>
  <label
    class="cat-checkbox"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-checked': isChecked }]"
    :id="id">
    <span class="cat-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
      :tabindex="indeterminate ? 0 : false"
      :role="indeterminate ? 0 : false">
      <span class="cat-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="cat-checkbox__original"
        type="checkbox"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        class="cat-checkbox__original"
        type="checkbox"
        :value="label"
        :name="name"
        :disabled="isDisabled"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="cat-checkbox__label" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import Emitter from '../utils/mixins/emitter'

export default {
  name: 'CatCheckbox',

  componentName: 'CatCheckbox',

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
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
    border: Boolean,
    size: String
  },

  data () {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    }
  },

  computed: {
    model: {
      get () {
        return this._isGroup
          ? this.store
          : this.value !== undefined ? this.value : this.selfModel
      },
      set (val) {
        if (this._isGroup) {
          this.isLimitExceeded = false
          if (this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min) {
            this.isLimitExceeded = true
          }
          if (this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max) {
            this.isLimitExceeded = true
          }
          this.isLimitExceeded === false && this.dispatch('CatCheckboxGroup', 'input', [val])
        } else {
          this.$emit('input', val)
          this.selfModel = val
        }
      }
    },

    isChecked () {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel
      } else {
        return false
      }
    },

    store () {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },

    isLimitDisabled () {
      const { max, min } = this._checkboxGroup
      return !!(max || min) &&
        ((this.model.length >= max && !this.isChecked) ||
        (this.model.length <= min && this.isChecked))
    },

    isDisabled () {
      return this._isGroup
        ? this._checkboxGroup.disabled || this.disabled || (this.catForm || {}).disabled || this.isLimitDisabled
        : this.disabled || (this.catForm || {}).disabled
    }
  },

  beforeCreate () {
    this._isGroup = false
    let parent = this.$parent
    while (parent) {
      if (parent.$options.componentName !== 'CatCheckboxGroup') {
        parent = parent.$parent
      } else {
        this._isGroup = true
        this._checkboxGroup = parent
        break
      }
    }
  },

  watch: {
    value (value) {
      this.dispatch('CatFormItem', 'cat.form.change', value)
    }
  },

  methods: {
    addToStore () {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label)
      } else {
        this.model = this.trueLabel || true
      }
    },

    handleChange (ev) {
      if (this.isLimitExceeded) return
      let value
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel
      }
      this.$emit('change', value, ev)
      this.$nextTick(() => {
        if (this._isGroup) {
          this.dispatch('CatCheckboxGroup', 'change', [this._checkboxGroup.value])
        }
      })
    }
  },

  created () {
    this.checked && this.addToStore()
  }
}
</script>
