<template>
  <div
    @dragstart.prevent
    :class="[
      'cat-input-number',
      inputNumberSize ? `cat-input-number--${inputNumberSize}` : '',
      { 'is-disabled': inputNumberDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': controlsAtRight }
    ]">
    <span
      class="cat-input-number__decrease"
      role="button"
      v-if="controls"
      v-repeat-click="decrease"
      :class="{ 'is-disabled': minDisabled }"
      @keydown.enter="decrease">
      <i :class="`cat-icon-${controlsAtRight ? 'arrow-down' : 'minus'}`"></i>
    </span>
    <span
      class="cat-input-number__increase"
      role="button"
      v-if="controls"
      v-repeat-click="increase"
      :class="{ 'is-disabled': maxDisabled }"
      @keydown.enter="increase">
      <i :class="`cat-icon-${controlsAtRight ? 'arrow-up' : 'plus'}`"></i>
    </span>
    <cat-input
      ref="input"
      :value="displayValue"
      :placeholder="placeholder"
      :disabled="inputNumberDisabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      :name="name"
      :label="label"
      @keydown.up.native.prevent="increase"
      @keydown.down.native.prevent="decrease"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      @change="handleInputChange">
    </cat-input>
  </div>
</template>

<script>
import CatInput from '../Input/Input'
import Focus from '../utils/mixins/focus'
import RepeatClick from '../utils/directives/repeat-click'

export default {
  name: 'CatInputNumber',

  componentName: 'CatInputNumber',

  mixins: [Focus('input')],

  inject: {
    catForm: {
      default: ''
    },
    catFormItem: {
      default: ''
    }
  },

  directives: {
    repeatClick: RepeatClick
  },

  components: {
    CatInput
  },

  props: {
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {},
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ''
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator (val) {
        return val >= 0 && val === parseInt(val, 10)
      }
    }
  },

  data () {
    return {
      currentValue: 0,
      userInput: null
    }
  },

  computed: {
    minDisabled () {
      return this._decrease(this.value, this.step) < this.min
    },

    maxDisabled () {
      return this._increase(this.value, this.step) < this.min
    },

    numPrecision () {
      const { value, step, getPrecision, precision } = this
      const stepPrecision = getPrecision(step)
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn('[Cat Warn][InputNumber]precision should not be less than the decimal places of step')
        }
        return precision
      } else {
        return Math.max(getPrecision(value), stepPrecision)
      }
    },

    controlsAtRight () {
      return this.controls && this.controlsPosition === 'right'
    },

    _catFormItemSize () {
      return (this.catFormItem || {}).catFormItemSize
    },

    inputNumberSize () {
      return this.size || this._catFormItemSize || (this.$CAT || {}).size
    },

    inputNumberDisabled () {
      return this.disabled || (this.catForm || {}).disabled
    },

    displayValue () {
      if (this.userInput !== null) {
        return this.userInput
      }

      let currentValue = this.currentValue

      if (typeof currentValue === 'number') {
        if (this.stepStrictly) {
          const stepPrecision = this.getPrecision(this.step)
          const precisionFactor = Math.pow(10, stepPrecision)
          currentValue = Math.round(currentValue / this.step) * precisionFactor * this.step / precisionFactor
        }

        if (this.precision !== undefined) {
          currentValue = currentValue.toFixed(this.precision)
        }
      }

      return currentValue
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (value) {
        let newVal = value === undefined ? value : Number(value)
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            return
          }

          if (this.stepStrictly) {
            const stepPrecision = this.getPrecision(this.step)
            const precisionFactor = Math.pow(10, stepPrecision)
            newVal = Math.round(newVal / this.step) * precisionFactor * this.step / precisionFactor
          }

          if (this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision)
          }
        }
        if (newVal >= this.max) newVal = this.max
        if (newVal <= this.min) newVal = this.min
        this.currentValue = newVal
        this.userInput = null
        this.$emit('input', newVal)
      }
    }
  },

  methods: {
    toPrecision (num, precision) {
      if (precision === undefined) precision = this.numPrecision
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision))
    },

    getPrecision (value) {
      if (value === undefined) return 0
      const valueString = value.toString()
      const dotPosition = valueString.indexOf('.')
      let precision = 0
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
      }
      return precision
    },

    _increase (val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue
      const precisionFactor = Math.pow(10, this.numPrecision)
      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor)
    },

    _decrease (val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue
      const precisionFactor = Math.pow(10, this.numPrecision)
      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor)
    },

    increase () {
      if (this.inputNumberDisabled || this.maxDisabled) return
      const value = this.value || 0
      const newVal = this._increase(value, this.step)
      this.setCurrentValue(newVal)
    },

    decrease () {
      if (this.inputNumberDisabled || this.maxDisabled) return
      const value = this.value || 0
      const newVal = this._decrease(value, this.step)
      this.setCurrentValue(newVal)
    },

    handleBlur (event) {
      this.$emit('blur', event)
    },

    handleFocus (event) {
      this.$emit('focus', event)
    },

    setCurrentValue (newVal) {
      const oldVal = this.currentValue
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision)
      }
      if (newVal >= this.max) newVal = this.max
      if (newVal <= this.min) newVal = this.min
      if (oldVal === newVal) return
      this.userInput = null
      this.$emit('input', newVal)
      this.$emit('change', newVal, oldVal)
      this.currentValue = newVal
    },

    handleInput (value) {
      this.userInput = value
    },

    handleInputChange (value) {
      const newVal = value === '' ? undefined : Number(value)
      if (!isNaN(newVal) || value === '') {
        this.setCurrentValue(newVal)
      }
      this.userInput = null
    },

    select () {
      this.$refs.input.select()
    }
  }
}
</script>
