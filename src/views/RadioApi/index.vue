<template>
  <view-page title="Radio 单选框" desc="在一组备选项中进行单选">
    <show-box :config="radioBaseConfig">
      <radio-base></radio-base>
    </show-box>
    <show-box :config="radioDisabledConfig">
      <radio-disabled></radio-disabled>
    </show-box>
    <show-box :config="radioGroupConfig">
      <radio-group></radio-group>
    </show-box>
  </view-page>
</template>

<script>
import RadioBase from './components/RadioBase'
import RadioDisabled from './components/RadioDisabled'
import RadioGroup from './components/RadioGroup'
import code from './code'

export default {
  name: 'RadioApi',
  components: {
    RadioBase,
    RadioDisabled,
    RadioGroup
  },
  data () {
    return {
      radioBaseConfig: {
        title: '基础用法',
        desc: '由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。',
        code: code.baseCode,
        codeDesc: '要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。'
      },
      radioDisabledConfig: {
        title: '禁用状态',
        desc: '单选框不可用的状态。',
        code: code.baseCode,
        codeDesc: '只要在 cat-radio 元素中设置 disabled 属性即可，它接受一个 Boolean ，true 为禁用。'
      },
      radioGroupConfig: {
        title: '单选框组',
        desc: '适用于在多个互斥的选项中选择的场景。',
        code: code.baseCode,
        codeDesc: '结合 cat-radio-group 元素和子元素 cat-radio 可以实现单选组，在 cat-radio-group 中绑定 v-model ，在 cat-radio 中设置好 label 即可，无需再给每一个 cat-radio 绑定变量，另外，还提供了 change 事件来响应变化，它会传入一个参数 value 。'
      }
    }
  }
}
</script>
