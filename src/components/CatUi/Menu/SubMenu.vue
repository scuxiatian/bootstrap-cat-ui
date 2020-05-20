<template>
  <li :class="subMenuClass" :style="subMenuStyle" @mouseover="handleMouseOver" @mouseleave="menuShow = false">
    <a :class="linkClass">
      <slot name="title"></slot>
      <i class="fa" :class="menuShow ? 'fa-angle-up' : 'fa-angle-down'"></i>
    </a>
    <div class="drop-menu" v-show="menuShow">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CatSubMenu',
  componentName: 'CatSubMenu',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Object],
      default: null
    }
  },
  data () {
    return {
      menuShow: false
    }
  },
  computed: {
    subMenuClass () {
      const classList = ['dropdown']
      if (this.$parent && this.$parent.$options.componentName === 'CatSubMenu') {
        classList.push('dropdown-item')
      }
      return classList
    },
    linkClass () {
      const classList = []
      if (this.$parent && this.$parent.$options.componentName !== 'CatSubMenu') {
        classList.push('nav-link')
      }
      return classList
    },
    subMenuStyle () {
      const style = {
        cursor: this.disabled ? 'not-allowed' : 'pointer',
        color: this.disabled ? 'grey' : false
      }
      return style
    }
  },
  methods: {
    handleMouseOver () {
      if (!this.disabled) {
        this.menuShow = true
      }
    }
  }
}
</script>

<style scoped>
.fa {
  margin-left: 5px;
}
</style>
