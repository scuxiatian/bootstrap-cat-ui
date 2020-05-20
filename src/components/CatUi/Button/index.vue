<template>
  <button class="cat-button" :type="nativeType" :autofocus="autofocus" :class="buttonClass" :disabled="disabled" @click="handleClick">
    <i v-if="loading" class="cat-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'CatButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: String,
    icon: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    buttonClass () {
      const classList = [
        `cat-button--${this.type}`,
        this.size ? `cat-button--${this.size}` : '',
        {
          'is-disabled': this.disabled,
          'is-loading': this.loading,
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle
        }
      ]
      return classList
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
</style>
