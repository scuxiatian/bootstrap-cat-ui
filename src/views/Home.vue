<template>
  <cat-row class="home" :gutter="10">
    <cat-col :span="3">
      <ul class="cat-menu">
        <!-- <li class="nav-item">
          <router-link class="nav-link active" to="/test">Test</router-link>
        </li> -->
        <li class="nav-item" v-for="route in routes" :key="route.name">
          <router-link class="nav-link" :to="route.path">{{ route.meta.title }}</router-link>
        </li>
      </ul>
    </cat-col>
    <cat-col :span="21">
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
      routes
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  margin: 0;
}
</style>
