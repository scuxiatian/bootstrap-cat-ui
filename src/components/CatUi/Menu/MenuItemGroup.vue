<template>
  <li class="cat-menu-item-group">
    <div class="cat-menu-item-group__title" :style="{paddingLeft: levelPadding + 'px'}">
      <slot name="title">{{ title }}</slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'CatMenuItemGroup',
  componentName: 'CatMenuItemGroup',
  inject: ['rootMenu'],
  props: {
    title: String
  },
  computed: {
    levelPadding () {
      let padding = 20
      let parent = this.$parent
      if (this.rootMenu.collapse) return 20
      while (parent && parent.$options.componentName !== 'CatMenu') {
        if (parent.$options.componentName === 'CatSubmenu') {
          padding += 20
        }
        parent = parent.$parent
      }
      return padding
    }
  }
}
</script>
