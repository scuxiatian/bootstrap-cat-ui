<template>
  <cat-row class="home" :gutter="10">
    <cat-col :span="4">
      <cat-menu router>
        <cat-menu-item-group v-for="(group, index) of routes" :key="index" :title="groups[index]">
          <template v-if="group">
            <cat-menu-item v-for="route in group" :key="route.name" :index="route.path">
              {{ route.meta.title }}
            </cat-menu-item>
          </template>
        </cat-menu-item-group>
      </cat-menu>
    </cat-col>
    <cat-col :span="20" class="content">
      <router-view />
    </cat-col>
  </cat-row>
</template>

<script>
import routes from '@/router/subRoutes'

export default {
  name: 'Home',
  data () {
    return {
      routes: this.groupRoutes(routes),
      groups: ['Basic', 'Form', 'Data', 'Notice', 'Navigation', 'Others']
    }
  },
  methods: {
    groupRoutes (routes) {
      const result = []
      routes.forEach(route => {
        const group = route.meta.group
        if (!result[group]) {
          result[group] = []
        }
        result[group].push(route)
      })
      return result
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  margin: 0;
}
.content {
  overflow: auto;
}
</style>
