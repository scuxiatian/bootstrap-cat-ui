<template>
  <view-page title="Input 输入框" desc="通过鼠标或键盘输入字符">
    <show-box :config="inputBaseConfig">
      <input-base></input-base>
    </show-box>
    <show-box :config="inputDisabledConfig">
      <input-disabled></input-disabled>
    </show-box>
    <show-box :config="inputClearConfig">
      <input-clear></input-clear>
    </show-box>
    <show-box :config="inputPasswordConfig">
      <input-password></input-password>
    </show-box>
    <show-box :config="inputIconConfig">
      <input-icon></input-icon>
    </show-box>
    <show-box :config="inputTextareaConfig">
      <input-textarea></input-textarea>
    </show-box>
    <show-box :config="inputAutosizeConfig">
      <input-autosize></input-autosize>
    </show-box>
    <show-box :config="inputComplexConfig">
      <input-complex></input-complex>
    </show-box>
    <show-box :config="inputSizeConfig">
      <input-size></input-size>
    </show-box>
    <show-box :config="inputAutocompleteConfig">
      <input-autocomplete></input-autocomplete>
    </show-box>
    <show-box :config="inputSuggestionSlotConfig">
      <input-suggestion-slot></input-suggestion-slot>
    </show-box>
    <show-box :config="inputSearchConfig">
      <input-search></input-search>
    </show-box>
    <show-box :config="inputLimitConfig">
      <input-limit></input-limit>
    </show-box>

    <show-table title="Input" :data="inputAttributes"></show-table>
    <show-table title="Input" type="slots" :data="inputSlots"></show-table>
    <show-table title="Input" type="events" :data="inputEvents"></show-table>
    <show-table title="Input" type="methods" :data="InputMethods"></show-table>
    <show-table title="Autocomplete" :data="autocompleteAttributes"></show-table>
    <show-table title="Autocomplete" type="slots" :data="autocompleteSlots"></show-table>
    <show-table title="Autocomplete" type="scopedSlot" :data="autocompleteScopedSlot"></show-table>
    <show-table title="Autocomplete" type="events" :data="autocompleteEvents"></show-table>
    <show-table title="Autocomplete" type="methods" :data="autocompleteMethods"></show-table>
  </view-page>
</template>

<script>
import InputBase from './components/InputBase'
import InputDisabled from './components/InputDisabled'
import InputClear from './components/InputClear'
import InputPassword from './components/InputPassword'
import InputIcon from './components/InputIcon'
import InputTextarea from './components/InputTextarea'
import InputAutosize from './components/InputAutosize'
import InputComplex from './components/InputComplex'
import InputSize from './components/InputSize'
import InputAutocomplete from './components/InputAutocomplete'
import InputSuggestionSlot from './components/InputSuggestionSlot'
import InputSearch from './components/InputSearch'
import InputLimit from './components/InputLimit'
import code from './code'

export default {
  name: 'InputApi',
  components: {
    InputBase,
    InputDisabled,
    InputClear,
    InputPassword,
    InputIcon,
    InputTextarea,
    InputAutosize,
    InputComplex,
    InputSize,
    InputAutocomplete,
    InputSuggestionSlot,
    InputSearch,
    InputLimit
  },
  data () {
    return {
      inputBaseConfig: {
        title: '基础用法',
        code: code.baseCode
      },
      inputDisabledConfig: {
        title: '禁用状态',
        code: code.disabledCode,
        codeDesc: '通过 disabled 属性指定是否禁用 input 组件'
      },
      inputClearConfig: {
        title: '可清空',
        code: code.clearCode,
        codeDesc: '通过 clearable 属性即可得到一个可清空的输入框'
      },
      inputPasswordConfig: {
        title: '密码框',
        code: code.passwordCode,
        codeDesc: '使用 show-password 属性即可得到一个可切换显示隐藏的密码框'
      },
      inputIconConfig: {
        title: '带 icon 的输入框',
        desc: '带有图标标记输入类型',
        code: code.iconCode,
        codeDesc: '可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。'
      },
      inputTextareaConfig: {
        title: '文本域',
        desc: '用于输入多行文本信息，通过将 type 属性的值指定为 textarea。',
        code: code.textareaCode,
        codeDesc: '文本域高度可通过 rows 属性控制。'
      },
      inputAutosizeConfig: {
        title: '可自适应文本高度的文本域',
        desc: '通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。',
        code: code.autosizeCode
      },
      inputComplexConfig: {
        title: '复合型输入框',
        desc: '可前置或后置元素，一般为标签或按钮。',
        code: code.complexCode,
        codeDesc: '可通过 slot 来指定在 input 中前置或者后置内容。'
      },
      inputSizeConfig: {
        title: '尺寸',
        code: code.sizeCode,
        codeDesc: '可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。'
      },
      inputAutocompleteConfig: {
        title: '带输入建议',
        desc: '根据输入内容提供对应的输入建议',
        code: code.autocompleteCode,
        codeDesc: 'autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。'
      },
      inputSuggestionSlotConfig: {
        title: '自定义模板',
        desc: '可自定义输入建议的显示',
        code: code.autocompleteCode,
        codeDesc: '使用scoped slot自定义输入建议的模板。该 scope 的参数为item，表示当前输入建议对象。'
      },
      inputSearchConfig: {
        title: '远程搜索',
        desc: '从服务端搜索数据',
        code: code.searchCode
      },
      inputLimitConfig: {
        title: '输入长度限制',
        code: code.limitCode,
        codeDesc: 'maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。'
      },
      inputAttributes: [
        ['type', '类型', 'string', 'text，textarea 和其他 原生 input 的 type 值', 'text'],
        ['value / v-model', '绑定值', 'string / number', '—', '—'],
        ['maxlength', '原生属性，最大输入长度', 'number', '—', '—'],
        ['minlength', '原生属性，最小输入长度', 'number', '—', '—'],
        ['show-word-limit', '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效', 'boolean', '—', 'false'],
        ['placeholder', '输入框占位文本', 'string', '—', '—'],
        ['clearable', '是否可清空', 'boolean', '—', 'false'],
        ['show-password', '是否显示切换密码图标', 'boolean', '—', 'false'],
        ['disabled', '禁用', 'boolean', '—', 'false'],
        ['size', '输入框尺寸，只在 type!="textarea" 时有效', 'string', 'medium / small / mini', '—'],
        ['prefix-icon', '输入框头部图标', 'string', '—', '—'],
        ['suffix-icon', '输入框尾部图标', 'string', '—', '—'],
        ['rows', '输入框行数，只对 type="textarea" 有效', 'number', '—', '2'],
        ['autosize', '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }', 'boolean / object', '—', 'false'],
        ['autocomplete', '原生属性，自动补全', 'string', 'on, off', 'off'],
        ['name', '原生属性', 'string', '—', '—'],
        ['readonly', '原生属性，是否只读', 'boolean', '—', 'false'],
        ['max', '原生属性，设置最大值', '—', '—', '—'],
        ['min', '原生属性，设置最小值', '—', '—', '—'],
        ['step', '原生属性，设置输入字段的合法数字间隔', '—', '—', '—'],
        ['resize', '控制是否能被用户缩放', 'string', 'none, both, horizontal, vertical', '—'],
        ['autofocus', '原生属性，自动获取焦点', 'boolean', 'true, false', 'false'],
        ['form', '原生属性', 'string', '—', '—'],
        ['label', '输入框关联的label文字', 'string', '—', '—'],
        ['tabindex', '输入框的tabindex', 'string', '—', '—'],
        ['validate-event', '输入时是否触发表单的校验', 'boolean', '—', 'true']
      ],
      autocompleteAttributes: [
        ['value / v-model', '必填值，输入绑定值', 'string', '—', '—'],
        ['placeholder', '输入框占位文本', 'string', '—', '—'],
        ['debounce', '获取输入建议的去抖延时', 'number', '—', '300'],
        ['value-key', '输入建议对象中用于显示的键名', 'string', '—', 'value'],
        ['disabled', '禁用', 'boolean', '—', 'false'],
        ['placement', '菜单弹出位置', 'string', 'top / top-start / top-end / bottom / bottom-start / bottom-end', 'bottom-start'],
        ['prefix-icon', '输入框头部图标', 'string', '—', '—'],
        ['suffix-icon', '输入框尾部图标', 'string', '—', '—'],
        ['fetch-suggestions', '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它', 'Function(queryString, callback)', '—', '—'],
        ['popper-class', 'Autocomplete 下拉列表的类名', 'string', '—', '—'],
        ['trigger-on-focus', '是否在输入框 focus 时显示建议列表', 'boolean', '—', 'true'],
        ['name', '原生属性', 'string', '—', '—'],
        ['select-when-unmatched', '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件', 'boolean', '—', 'false'],
        ['hide-loading', '是否隐藏远程加载时的加载图标', 'boolean', '—', 'false'],
        ['popper-append-to-body', '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false', 'boolean', '—', 'true'],
        ['highlight-first-item', '是否默认突出显示远程搜索建议中的第一项', 'boolean', '—', 'false'],
        ['label', '输入框关联的label文字', 'string', '—', '—']
      ],
      inputSlots: [
        ['prefix', '输入框头部内容，只对 type="text" 有效'],
        ['suffix', '输入框尾部内容，只对 type="text" 有效'],
        ['prepend', '输入框前置内容，只对 type="text" 有效'],
        ['append', '输入框后置内容，只对 type="text" 有效']
      ],
      autocompleteSlots: [
        ['prefix', '输入框头部内容'],
        ['suffix', '输入框尾部内容'],
        ['prepend', '输入框前置内容'],
        ['append', '输入框后置内容']
      ],
      inputEvents: [
        ['blur', '在 Input 失去焦点时触发', '(event: Event)'],
        ['focus', '在 Input 获得焦点时触发', '(event: Event)'],
        ['change', '仅在输入框失去焦点或用户按下回车时触发', '(value: string | number)'],
        ['input', '在 Input 值改变时触发', '(value: string | number)'],
        ['clear', '在点击由 clearable 属性生成的清空按钮时触发', '—']
      ],
      autocompleteEvents: [
        ['select', '点击选中建议项时触发', '选中建议项'],
        ['change', '在 Input 值改变时触发', '(value: string | number)']
      ],
      InputMethods: [
        ['focus', '使 input 获取焦点', '—'],
        ['blur', '使 input 失去焦点', '—'],
        ['select', '选中 input 中的文字', '—']
      ],
      autocompleteMethods: [
        ['focus', '使 input 获取焦点', '—']
      ],
      autocompleteScopedSlot: [
        ['—', '自定义输入建议，参数为 { item }']
      ]
    }
  }
}
</script>
