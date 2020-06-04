<template>
  <label
    class="cat-radio"
    :class="[
      border && radioSize ? `cat-radio--${radioSize}` : '',
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-disabled': isDisabled },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label">
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
          @focus="focus = true"
          @blur="focus = false"
          @change="handleChange"
          :name="name"
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

  data () {
    return {
      focus: false
    }
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

    _catFormItemSize () {
      return (this.catFormItem || {}).catFormItemSize
    },

    radioSize () {
      const temRadioSize = this.size || this._catFormItemSize
      return this._isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    },

    isDisabled () {
      return this._isGroup
        ? this._radioGroup.disabled || this.disabled || (this.catForm || {}).disabled
        : this.disabled || (this.catForm || {}).disabled
    },

    tabIndex () {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this._isGroup && this.dispatch('CatRadioGroup', 'handleChange', this.model)
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
