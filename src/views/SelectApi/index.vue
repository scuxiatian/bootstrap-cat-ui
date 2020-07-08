<template>
  <view-page title="Select 选择器" desc="当选项过多时，使用下拉菜单展示并选择内容。">
    <show-box :config="baseConfig">
      <select-base></select-base>
    </show-box>
    <show-box :config="disabledConfig">
      <select-disabled></select-disabled>
    </show-box>
    <show-box :config="disabledAllConfig">
      <select-all-disabled></select-all-disabled>
    </show-box>
    <show-box :config="clearableConfig">
      <select-clearable></select-clearable>
    </show-box>
    <show-box :config="multipleConfig">
      <select-multiple></select-multiple>
    </show-box>
    <show-box :config="templateConfig">
      <select-template></select-template>
    </show-box>
    <show-box :config="groupConfig">
      <select-group></select-group>
    </show-box>
    <show-box :config="filterableConfig">
      <select-filterable></select-filterable>
    </show-box>
    <show-box :config="remoteConfig">
      <select-remote></select-remote>
    </show-box>
    <show-box :config="allowCreateConfig">
      <select-allow-create></select-allow-create>
    </show-box>

    <show-table title="Select" :data="selectAttributes"></show-table>
    <show-table title="Select" type="events" :data="selectEvents"></show-table>
    <show-table title="Select" type="slots" :data="selectSlots"></show-table>
    <show-table title="Select" type="methods" :data="selectMethods"></show-table>
    <show-table title="Option Group" :data="optionGroupAttributes"></show-table>
    <show-table title="Option" :data="optionAttributes"></show-table>
  </view-page>
</template>

<script>
import SelectBase from './components/SelectBase'
import SelectDisabled from './components/SelectDisabled'
import SelectAllDisabled from './components/SelectAllDisabled'
import SelectClearable from './components/SelectClearable'
import SelectMultiple from './components/SelectMultiple'
import SelectTemplate from './components/SelectTemplate'
import SelectGroup from './components/SelectGroup'
import SelectFilterable from './components/SelectFilterable'
import SelectRemote from './components/SelectRemote'
import SelectAllowCreate from './components/SelectAllowCreate'
import code from './code'

export default {
  name: 'SelectApi',
  components: {
    SelectBase,
    SelectDisabled,
    SelectAllDisabled,
    SelectClearable,
    SelectMultiple,
    SelectTemplate,
    SelectGroup,
    SelectFilterable,
    SelectRemote,
    SelectAllowCreate
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '适用广泛的基础单选',
        code: code.baseCode,
        codeDesc: 'v-model的值为当前被选中的cat-option的 value 属性值'
      },
      disabledConfig: {
        title: '有禁用选项',
        desc: '',
        code: code.disabledCode,
        codeDesc: '在cat-option中，设定disabled值为 true，即可禁用该选项'
      },
      disabledAllConfig: {
        title: '禁用状态',
        desc: '选择器不可用状态',
        code: code.disabledAllCode,
        codeDesc: '为cat-select设置disabled属性，则整个选择器不可用'
      },
      clearableConfig: {
        title: '可清空单选',
        desc: '包含清空按钮，可将选择器清空为初始状态',
        code: code.clearableCode,
        codeDesc: '为cat-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。'
      },
      multipleConfig: {
        title: '基础多选',
        desc: '适用性较广的基础多选，用 Tag 展示已选项',
        code: code.multipleCode,
        codeDesc: '为cat-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。'
      },
      templateConfig: {
        title: '自定义模板',
        desc: '可以自定义备选项',
        code: code.templateCode,
        codeDesc: '将自定义的 HTML 模板插入cat-option的 slot 中即可。'
      },
      groupConfig: {
        title: '分组',
        desc: '备选项进行分组展示',
        code: code.groupCode,
        codeDesc: '使用cat-option-group对备选项进行分组，它的label属性为分组名'
      },
      filterableConfig: {
        title: '可搜索',
        desc: '可以利用搜索功能快速查找选项',
        code: code.filterableCode,
        codeDesc: '为cat-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。'
      },
      remoteConfig: {
        title: '远程搜索',
        desc: '从服务器搜索数据，输入关键字进行查找',
        code: code.remoteCode,
        codeDesc: '为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果cat-option是通过v-for指令渲染出来的，此时需要为cat-option添加key属性，且其值需具有唯一性，比如此例中的item.value。'
      },
      allowCreateConfig: {
        title: '创建条目',
        desc: '可以创建并选中选项中不存在的条目',
        code: code.remoteCode,
        codeDesc: '使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。'
      },
      selectAttributes: [
        ['value / v-model', '绑定值', 'boolean / string / number', '—', '—'],
        ['multiple', '是否多选', 'boolean', '—', 'false'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['value-key', '作为 value 唯一标识的键名，绑定值为对象类型时必填', 'string', '—', 'value'],
        ['size', '输入框尺寸', 'string', 'medium/small/mini', '—'],
        ['clearable', '是否可以清空选项', 'boolean', '—', 'false'],
        ['collapse-tags', '多选时是否将选中值按文字的形式展示', 'boolean', '—', 'false'],
        ['multiple-limit', '多选时用户最多可以选择的项目数，为 0 则不限制', 'number', '—', '0'],
        ['name', 'select input 的 name 属性', 'string', '—', '—'],
        ['autocomplete', 'select input 的 autocomplete 属性', 'string', '—', 'off'],
        ['placeholder', '占位符', 'string', '—', '请选择'],
        ['filterable', '是否可搜索', 'boolean', '—', 'false'],
        ['allow-create', '是否允许用户创建新条目，需配合 filterable 使用', 'boolean', '—', 'false'],
        ['filter-method', '自定义搜索方法', 'function', '—', '—'],
        ['remote', '是否为远程搜索', 'boolean', '—', 'false'],
        ['remote-method', '远程搜索方法', 'function', '—', '—'],
        ['loading', '是否正在从远程获取数据', 'boolean', '—', 'false'],
        ['loading-text', '远程加载时显示的文字', 'string', '—', '加载中'],
        ['no-match-text', '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置', 'string', '—', '无匹配数据'],
        ['no-data-text', '选项为空时显示的文字，也可以使用slot="empty"设置', 'string', '—', '无数据'],
        ['popper-class', 'Select', '下拉框的类名', 'string', '—'],
        ['reserve-keyword', '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词', 'boolean', '—', 'false'],
        ['default-first-option', '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用', 'boolean', '-', 'false'],
        ['popper-append-to-body', '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false', 'boolean', '-', 'true'],
        ['automatic-dropdown', '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单', 'boolean', '-', 'false']
      ],
      selectEvents: [
        ['change', '选中值发生变化时触发', '目前的选中值'],
        ['visible-change', '下拉框出现/隐藏时触发', '出现则为 true，隐藏则为 false'],
        ['remove-tag', '多选模式下移除tag时触发', '移除的tag值'],
        ['clear', '可清空的单选模式下用户点击清空按钮时触发', '—'],
        ['blur', '当 input 失去焦点时触发', '(event: Event)'],
        ['focus', '当 input 获得焦点时触发', '(event: Event)']
      ],
      selectSlots: [
        ['—', 'Option 组件列表'],
        ['prefix', 'Select 组件头部内容'],
        ['empty', '无选项时的列表']
      ],
      optionGroupAttributes: [
        ['label', '分组的组名', 'string', '—', '—'],
        ['disabled', '是否将该分组下所有选项置为禁用', 'boolean', '—', 'false']
      ],
      optionAttributes: [
        ['value', '选项的值', 'string/number/object', '—', '—'],
        ['label', '选项的标签，若不设置则默认与 value 相同', 'string/number', '—', '—'],
        ['disabled', '是否禁用该选项', 'boolean', '—', 'false']
      ],
      selectMethods: [
        ['focus', '使 input 获取焦点', '—'],
        ['blur', '使 input 失去焦点，并隐藏下拉框', '—']
      ]
    }
  }
}
</script>
