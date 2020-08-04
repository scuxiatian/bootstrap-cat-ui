<template>
  <view-page title="Cascader 级联选择器" desc="当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。">
    <show-box :config="baseConfig">
      <cascader-base></cascader-base>
    </show-box>
    <show-box :config="disabledConfig">
      <cascader-disabled></cascader-disabled>
    </show-box>
    <show-box :config="clearableConfig">
      <cascader-clearable></cascader-clearable>
    </show-box>
    <show-box :config="leafConfig">
      <cascader-leaf></cascader-leaf>
    </show-box>
    <show-box :config="multipleConfig">
      <cascader-multiple></cascader-multiple>
    </show-box>
    <show-box :config="checkStrictlyConfig">
      <cascader-check-strictly></cascader-check-strictly>
    </show-box>
    <show-box :config="lazyConfig">
      <cascader-lazy></cascader-lazy>
    </show-box>
    <show-box :config="filterableConfig">
      <cascader-filterable></cascader-filterable>
    </show-box>
    <show-box :config="templateConfig">
      <cascader-template></cascader-template>
    </show-box>
    <show-box :config="panelConfig">
      <cascader-panel></cascader-panel>
    </show-box>

    <show-table title="Cascader" :data="cascaderAttributes"></show-table>
    <show-table title="Cascader" type="events" :data="cascaderEvents"></show-table>
    <show-table title="Cascader" type="methods" :data="cascaderMethods"></show-table>
    <show-table title="Cascader" type="slots" :data="cascaderSlots"></show-table>
    <show-table title="CascaderPanel" :data="cascaderPanelAttributes"></show-table>
    <show-table title="CascaderPanel" type="events" :data="cascaderPanelEvents"></show-table>
    <show-table title="CascaderPanel" type="methods" :data="cascaderPanelMethods"></show-table>
    <show-table title="CascaderPanel" type="slots" :data="cascaderPanelSlots"></show-table>
    <show-table type="props" :data="cascaderProps"></show-table>
  </view-page>
</template>

<script>
import CascaderBase from './components/CascaderBase'
import CascaderDisabled from './components/CascaderDisabled'
import CascaderClearable from './components/CascaderClearable'
import CascaderLeaf from './components/CascaderLeaf'
import CascaderMultiple from './components/CascaderMultiple'
import CascaderCheckStrictly from './components/CascaderCheckStrictly'
import CascaderLazy from './components/CascaderLazy'
import CascaderFilterable from './components/CascaderFilterable'
import CascaderTemplate from './components/CascaderTemplate'
import CascaderPanel from './components/CascaderPanel'
import code from './code'

export default {
  name: 'CascaderApi',
  components: {
    CascaderBase,
    CascaderDisabled,
    CascaderClearable,
    CascaderLeaf,
    CascaderMultiple,
    CascaderCheckStrictly,
    CascaderLazy,
    CascaderFilterable,
    CascaderTemplate,
    CascaderPanel
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '有两种触发子菜单的方式',
        code: code.baseCode,
        codeDesc: '只需为 Cascader 的options属性指定选项数组即可渲染出一个级联选择器。通过props.expandTrigger可以定义展开子级菜单的触发方式。'
      },
      disabledConfig: {
        title: '禁用选项',
        desc: '通过在数据源中设置 disabled 字段来声明该选项是禁用的',
        code: code.disabledCode,
        codeDesc: '本例中，options指定的数组中的第一个元素含有disabled: true键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的disabled字段是否为true，如果你的数据中表示禁用含义的字段名不为disabled，可以通过props.disabled属性来指定（详见下方 API 表格）。当然，value、label和children这三个字段名也可以通过同样的方式指定。'
      },
      clearableConfig: {
        title: '可清空',
        desc: '通过 clearable 设置输入框可清空',
        code: code.clearableCode,
        codeDesc: ''
      },
      leafConfig: {
        title: '仅显示最后一级',
        desc: '可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。',
        code: code.leafCode,
        codeDesc: '属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级'
      },
      multipleConfig: {
        title: '多选',
        desc: '可通过 props.multiple = true 来开启多选模式',
        code: code.multipleCode,
        codeDesc: '在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用collapse-tags来折叠Tag'
      },
      checkStrictlyConfig: {
        title: '选择任意一级选项',
        desc: '在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。',
        code: code.checkStrictlyCode,
        codeDesc: '可通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。'
      },
      lazyConfig: {
        title: '动态加载',
        desc: '当选中某一级时，动态加载该级下的选项。',
        code: code.lazyCode,
        codeDesc: '通过lazy开启动态加载，并通过lazyload来设置加载数据源的方法。lazyload方法有两个参数，第一个参数node为当前点击的节点，第二个resolve为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为leaf，可通过props.leaf修改)，否则会简单的以有无子节点来判断是否为叶子节点。'
      },
      filterableConfig: {
        title: '可搜索',
        desc: '可以快捷地搜索选项并选择。',
        code: code.filterableCode,
        codeDesc: '将filterable赋值为true即可打开搜索功能，默认会匹配节点的label或所有父节点的label(由show-all-levels决定)中包含输入值的选项。你也可以用filter-method自定义搜索逻辑，接受一个函数，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中。'
      },
      templateConfig: {
        title: '自定义节点内容',
        desc: '可以自定义备选项的节点内容',
        code: code.templateCode,
        codeDesc: '可以通过scoped slot对级联选择器的备选项的节点内容进行自定义，scoped slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。'
      },
      panelConfig: {
        title: '级联面板',
        desc: '级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。',
        code: code.panelCode,
        codeDesc: '和级联选择器一样，通过options来指定选项，也可通过props来设置多选、动态加载等功能，具体详情见下方API表格。'
      },
      cascaderAttributes: [
        ['value / v-model', '选中项绑定值', '—', '—', '—'],
        ['options', '可选项数据源，键名可通过 Props 属性配置', 'array', '—', '—'],
        ['props', '配置选项，具体见下表', 'object', '—', '—'],
        ['size', '尺寸', 'string', 'medium / small / mini', '—'],
        ['placeholder', '输入框占位文本', 'string', '—', '请选择'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['clearable', '是否支持清空选项', 'boolean', '—', 'false'],
        ['show-all-levels', '输入框中是否显示选中值的完整路径', 'boolean', '—', 'true'],
        ['collapse-tags', '多选模式下是否折叠Tag', 'boolean', '-', 'false'],
        ['separator', '选项分隔符', 'string', '—', '斜杠" / "'],
        ['filterable', '是否可搜索选项', 'boolean', '—', '—'],
        ['filter-method', '自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中', 'function(node, keyword)', '—', '—'],
        ['debounce', '搜索关键词输入的去抖延迟，毫秒', 'number', '—', '300'],
        ['before-filter', '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选', 'function(value)', '—', '—'],
        ['popper-class', '自定义浮层类名', 'string', '—', '—']
      ],
      cascaderEvents: [
        ['change', '当选中节点变化时触发', '选中节点的值'],
        ['expand-change', '当展开节点发生变化时触发', '各父级选项值组成的数组'],
        ['blur', '当失去焦点时触发', '(event: Event)'],
        ['focus', '当获得焦点时触发', '(event: Event)'],
        ['visible-change', '下拉框出现/隐藏时触发', '出现则为 true，隐藏则为 false'],
        ['remove-tag', '在多选模式下，移除Tag时触发', '移除的Tag对应的节点的值']
      ],
      cascaderMethods: [
        ['getCheckedNodes', '获取选中的节点', '(leafOnly) 是否只是叶子节点，默认值为 false']
      ],
      cascaderSlots: [
        ['-', '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'],
        ['empty', '无匹配选项时的内容']
      ],
      cascaderPanelAttributes: [
        ['value / v-model', '选中项绑定值', '—', '—', '—'],
        ['options', '可选项数据源，键名可通过 Props 属性配置', 'array', '—', '—'],
        ['props', '配置选项，具体见下表', 'object', '—', '—']
      ],
      cascaderPanelEvents: [
        ['change', '当选中节点变化时触发', '选中节点的值'],
        ['expand-change', '当展开节点发生变化时触发', '各父级选项值组成的数组']
      ],
      cascaderPanelMethods: [
        ['getCheckedNodes', '获取选中的节点数组', '(leafOnly) 是否只是叶子节点，默认值为 false'],
        ['clearCheckedNodes', '清空选中的节点', '—']
      ],
      cascaderPanelSlots: [
        ['自定义备选项的节点内容', '参数为 { node, data }', '分别为当前节点的 Node 对象和数据']
      ],
      cascaderProps: [
        ['expandTrigger', '次级菜单的展开方式', 'string', 'click / hover', '"click"'],
        ['multiple', '是否多选', 'boolean', '-', 'false'],
        ['checkStrictly', '是否严格的遵守父子节点不互相关联', 'boolean', '-', 'false'],
        ['emitPath', '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值', 'boolean', '-', 'true'],
        ['lazy', '是否动态加载子节点，需与 lazyLoad 方法结合使用', 'boolean', '-', 'false'],
        ['lazyLoad', '加载动态数据的方法，仅在 lazy 为 true 时有效', 'function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)', '-', '-'],
        ['value', '指定选项的值为选项对象的某个属性值', 'string', '—', '"value"'],
        ['label', '指定选项标签为选项对象的某个属性值', 'string', '—', '"label"'],
        ['children', '指定选项的子选项为选项对象的某个属性值', 'string', '—', '"children"'],
        ['disabled', '指定选项的禁用为选项对象的某个属性值', 'string', '—', '"disabled"'],
        ['leaf', '指定选项的叶子节点的标志位为选项对象的某个属性值', 'string', '—', '"leaf"']
      ]
    }
  }
}
</script>
