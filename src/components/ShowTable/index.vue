<template>
  <div>
    <h4 class="show-title">{{ title }} {{ config[type].title }}</h4>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td v-for="head of config[type].heads" :key="head">{{ head }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) of data" :key="index">
          <td v-for="(col, colIndex) of row" :key="colIndex">{{ col }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ShowTable',
  props: {
    title: String,
    type: {
      type: String,
      default: 'attributes'
    },
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      config: {
        attributes: {
          title: 'Attributes',
          heads: ['参数', '说明', '类型', '可选值', '默认值']
        },
        methods: {
          title: 'Methods',
          heads: ['方法名称', '说明', '参数']
        },
        events: {
          title: 'Events',
          heads: ['事件名称', '说明', '回调参数']
        }
      }
    }
  }
}
</script>

<style scoped>
.show-title {
  margin: 20px 0;
}
</style>
