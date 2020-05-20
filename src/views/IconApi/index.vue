<template>
  <view-page title="Icon 图标" desc="提供了 element-ui 与 awesome-font 图标集合。">
    <show-box :config="iconConfig">
      <icon-use></icon-use>
    </show-box>
    <h3 class="show-title">element-ui 图标集合</h3>
    <cat-row>
      <cat-col v-for="iconName in elementIcons" :key="iconName" :span="4">
        <div class="content">
          <i :class="`cat-icon-${iconName}`"></i>
          <div class="icon-name">{{ iconName }}</div>
        </div>
      </cat-col>
    </cat-row>
    <h3 class="show-title">awesome-font 图标集合</h3>
    <cat-row>
      <cat-col v-for="iconName in awesomeIcons" :key="iconName" :span="4">
        <div class="content">
          <i :class="getIconClass(iconName)"></i>
          <div class="icon-name">{{ iconName }}</div>
        </div>
      </cat-col>
    </cat-row>
  </view-page>
</template>

<script>
import IconUse from './components/IconUse'
import awesomeIcons from './awesome-icon.json'
import elementIcons from './element-icon.json'
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
        desc: '直接通过设置类名为 cat-icon-iconName / fa fa-iconName 来使用即可。例如：',
        code: code.useCode
      },
      elementIcons,
      awesomeIcons
    }
  },
  methods: {
    getIconClass (iconName) {
      return `fa fa-${iconName}`
    }
  }
}
</script>

<style scoped>
.content {
  font-size: 40px;
  border: 1px solid #eeeeee;
  min-height: 100px;
  padding-top: 15px;
  text-align: center;
}
.icon-name {
  font-size: 15px;
}
</style>
