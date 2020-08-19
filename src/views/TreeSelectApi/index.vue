<template>
  <view-page title="TreeSelect 树选择器" desc="当选项有层次结构时，使用树选择器展示并选择内容">
    <show-box :config="baseConfig">
      <tree-select-base></tree-select-base>
    </show-box>
    <show-box :config="disabledOptionConfig">
      <tree-select-disabled-option></tree-select-disabled-option>
    </show-box>
    <show-box :config="disabledConfig">
      <tree-select-disabled></tree-select-disabled>
    </show-box>
    <show-box :config="clearableConfig">
      <tree-select-clearable></tree-select-clearable>
    </show-box>
    <show-box :config="multipleConfig">
      <tree-select-multiple></tree-select-multiple>
    </show-box>
    <show-box :config="templateConfig">
      <tree-select-template></tree-select-template>
    </show-box>
    <show-box :config="filterableConfig">
      <tree-select-filterable></tree-select-filterable>
    </show-box>
  </view-page>
</template>

<script>
import TreeSelectBase from './components/TreeSelectBase'
import TreeSelectDisabledOption from './components/TreeSelectDisabledOption'
import TreeSelectDisabled from './components/TreeSelectDisabled'
import TreeSelectClearable from './components/TreeSelectClearable'
import TreeSelectMultiple from './components/TreeSelectMultiple'
import TreeSelectTemplate from './components/TreeSelectTemplate'
import TreeSelectFilterable from './components/TreeSelectFilterable'
import { baseCode, disabledOptionCode, disabledCode, clearableCode, multipleCode, templateCode, filterableCode } from './code'

export default {
  name: 'TreeSelectApi',
  components: {
    TreeSelectBase,
    TreeSelectDisabled,
    TreeSelectDisabledOption,
    TreeSelectClearable,
    TreeSelectMultiple,
    TreeSelectTemplate,
    TreeSelectFilterable
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '简单的树形选择器',
        code: baseCode,
        codeDesc: 'v-model的值为选中树形节点的key属性，key属性可通过props配置为其它属性'
      },
      disabledOptionConfig: {
        title: '有禁用选项',
        desc: '',
        code: disabledOptionCode,
        codeDesc: '通过disabled设置禁用状态。'
      },
      disabledConfig: {
        title: '禁用状态',
        desc: '选择器不可用状态',
        code: disabledCode,
        codeDesc: '为cat-tree-select设置disabled属性，则整个选择器不可用'
      },
      clearableConfig: {
        title: '可清空单选',
        desc: '包含清空按钮，可将选择器清空为初始状态',
        code: clearableCode,
        codeDesc: '为cat-tree-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。'
      },
      multipleConfig: {
        title: '基础多选',
        desc: '适用性较广的基础多选，用 Tag 展示已选项',
        code: multipleCode,
        codeDesc: '为cat-tree-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。'
      },
      templateConfig: {
        title: '自定义节点内容',
        desc: '可以自定义备选项的节点内容',
        code: templateCode,
        codeDesc: '可以通过v-slot对级联选择器的备选项的节点内容进行自定义，v-slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。'
      },
      filterableConfig: {
        title: '可搜索',
        desc: '可以利用搜索功能快速查找选项',
        code: filterableCode,
        codeDesc: '为cat-tree-select添加filterable属性即可启用搜索功能。需要通过传入一个filter-node-method来实现。filter-node-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值与节点data值。'
      },
      attributes: [
        ['value / v-model', '绑定值', '', '', ''],
        ['multiple', '', '', '', ''],
        ['disabled', '', '', '', ''],
        ['size', '', '', '', ''],
        ['clearable', '', '', '', ''],
        ['collapse-tags', '', '', '', ''],
        ['name', '', '', '', ''],
        ['placeholder', '', '', '', ''],
        ['filterable', '', '', '', ''],
        ['placement: : ', '', '', '', ''],
        ['props: ', '', '', '', '']
      ],
      props: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ],
      methods: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      events: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      slots: [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ]
    }
  }
}
</script>
