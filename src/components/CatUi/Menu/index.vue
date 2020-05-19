<template>
  <ul class="cat-menu nav nav-pills" :class="menuClass">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'CatMenu',
  componentName: 'CatMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    }
  },
  data () {
    return {
      activeIndex: ''
    }
  },
  provide () {
    return {
      rootMenu: this
    }
  },
  computed: {
    menuClass () {
      const classList = []
      if (this.mode !== 'horizontal') {
        classList.push('flex-column')
      }
      return classList
    }
  },
  methods: {
    handleItemClick (item) {
      const { index } = item
      this.activeIndex = index
      this.$emit('select', index, item)
    }
  },
  mounted () {
    this.$on('item-click', this.handleItemClick)
  }
}
</script>
