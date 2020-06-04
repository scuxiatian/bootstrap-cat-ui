<template>
  <div :class="[
    type === 'textarea' ? 'cat-textarea' : 'cat-input'
  ]">
    <template v-if="type !== 'textarea'">
      <input
        class="cat-input__inner"
        v-bind="$attrs"
        ref="input"
        @input="handleInput">
    </template>
  </div>
</template>

<script>
export default {
  name: 'CatInput',

  componentName: 'CatInput',

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
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator (val) {
        process.env.NODE_ENV !== 'production' &&
            console.warn('[Cat Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.')
        return true
      }
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
      isComposing: false
    }
  },

  computed: {
    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    }
  },

  watch: {
    nativeInputValue () {
      this.setNativeInputValue()
    }
  },

  methods: {
    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },

    handleInput (event) {
      if (this.isComposing) return
      if (event.target.value === this.nativeInputValue) return
      this.$emit('input', event.target.value)
      this.$nextTick(this.setNativeInputValue)
    },

    getInput () {
      return this.$refs.input || this.$refs.textarea
    }
  },

  mounted () {
    this.setNativeInputValue()
  }
}
</script>
