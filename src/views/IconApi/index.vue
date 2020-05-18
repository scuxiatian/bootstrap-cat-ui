<template>
  <div class="page-container">
    <h2 class="page-title">图标</h2>
    <h6 class="page-desc">提供了一套常用的图标集合。</h6>
    <show-box :config="iconConfig">
      <icon-use></icon-use>
    </show-box>
    <h4 class="show-title">图标集合</h4>
    <cat-row>
      <cat-col v-for="iconName in awesomeIcons" :key="iconName" :span="2">
        <div class="content text-center">
          <icon :name="iconName"></icon>
          <div class="icon-name">{{ iconName }}</div>
        </div>
      </cat-col>
    </cat-row>
  </div>
</template>

<script>
import IconUse from './components/IconUse'
import awesomeIcons from './awesome-icon.json'
import code from './code'

export default {
  name: 'IconApi',
  components: {
    IconUse
  },
  data () {
    return {
      iconConfig: {
        title: '使用方法',
        desc: '通过设置属性 name 来使用即可。例如：',
        code: code.useCode
      },
      awesomeIcons
    }
  }
}
</script>

<style scoped>
.content {
  font-size: 40px;
  border: 1px solid #eeeeee;
  min-height: 120px;
  padding-top: 5px;
}
.icon-name {
  font-size: 15px;
}
</style>
