<template>
  <div
    @mouseenter="hoving = true"
    @mouseleave="hoving = false"
    :class="[
      type === 'textarea' ? 'cat-textarea' : 'cat-input',
      inputSize ? `cat-input--${inputSize}` : '',
      {
        'is-disabled': inputDisabled,
        'is-exceed': inputExceed,
        'cat-input-group': $slots.prepend || $slots.append,
        'cat-input-group--append': $slots.append,
        'cat-input-group--prepend': $slots.prepend,
        'cat-input--prefix': $slots.prefix || prefixIcon,
        'cat-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
      }
    ]">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="cat-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        class="cat-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        ref="input"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange">
      <!-- 前置内容 -->
      <span class="cat-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="cat-input__icon" v-if="prefixIcon" :class="prefixIcon"></i>
      </span>
      <!-- 后置内容 -->
      <span
        class="cat-input__suffix"
        v-if="getSuffixVisible()">
        <span class="cat-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible">
            <slot name="suffix"></slot>
            <i class="cat-input__icon" v-if="suffixIcon" :class="suffixIcon"></i>
          </template>
          <i v-if="showClear"
            class="cat-input__icon cat-icon-circle-close cat-input__clear"
            @mousedown.prevent
            @click="clear"></i>
          <i v-if="showPwdVisible"
            class="cat-input__icon cat-icon-view cat-input__clear"
            @click="handlePasswordVisible"></i>
        </span>
      </span>
      <!-- 后置元素 -->
      <div class="cat-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="cat-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange">
    </textarea>
  </div>
</template>

<script>
import Emitter from '../utils/mixins/emitter'
import calcTextareaHeight from './calcTextareaHeight'
import merge from '../utils/merge'

export default {
  name: 'CatInput',

  componentName: 'CatInput',

  mixins: [Emitter],

  inheritAttrs: false,

  inject: {
    catForm: {
      default: ''
    },
    catFormItem: {
      default: ''
    }
  },

  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },

  data () {
    return {
      textareaCalcStyle: {},
      hoving: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    }
  },

  computed: {
    _catFormItemSize () {
      return (this.catFormItem || {}).catFormItemSize
    },

    textareaStyle () {
      return merge({}, this.textareaCalcStyle, { resize: this.resize })
    },

    inputSize () {
      return this.size || this._catFormItemSize || (this.$CAT || {}).size
    },

    inputDisabled () {
      return this.disabled || (this.catForm || {}).disabled
    },

    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    },

    showClear () {
      return this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hoving)
    },

    showPwdVisible () {
      return this.showPassword &&
        !this.inputDisabled &&
        !this.readonly &&
        (!!this.nativeInputValue || this.focused)
    }
  },

  watch: {
    value (val) {
      this.$nextTick(this.resizeTextarea)
      if (this.validateEvent) {
        this.dispatch('CatFormItem', 'cat.form.change', [val])
      }
    },
    nativeInputValue () {
      this.setNativeInputValue()
    },
    type () {
      this.$nextTick(() => {
        this.setNativeInputValue()
        this.resizeTextarea()
      })
    }
  },

  methods: {
    focus () {
      this.getInput().focus()
    },

    blur () {
      this.getInput().blur()
    },

    handleBlur (event) {
      this.focused = false
      this.$emit('blur', event)
      if (this.validateEvent) {
        this.dispatch('CatFormItem', 'cat.form.blur', [this.value])
      }
    },

    select () {
      this.getInput().select()
    },

    resizeTextarea () {
      if (this.$isServer) return
      const { autosize, type } = this
      if (type !== 'textarea') return
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        }
        return
      }
      const minRows = autosize.minRows
      const maxRows = autosize.maxRows

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
    },

    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },

    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },

    handleInput (event) {
      if (this.isComposing) return
      if (event.target.value === this.nativeInputValue) return
      this.$emit('input', event.target.value)
      this.$nextTick(this.setNativeInputValue)
    },

    clear () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    },

    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
      this.focus()
    },

    getInput () {
      return this.$refs.input || this.$refs.textarea
    },

    getSuffixVisible () {
      return this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword
    }
  },

  mounted () {
    this.setNativeInputValue()
    this.resizeTextarea()
  }
}
</script>
