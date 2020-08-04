<template>
  <div
    ref="reference"
    :class="[
      'cat-cascader',
      realSize && `el-cascader--${realSize}`,
      { 'is-disabled': isDisabled }
    ]"
    v-clickoutside="() => toggleDropDownVisible(false)"
    @mouseenter="inputHover = true"
    @mouseleave="inputHover = false"
    @click="() => toggleDropDownVisible(readonly ? undefined : true)"
    @keydown="handleKeyDown">
    <cat-input
      ref="input"
      v-model="presentText"
      :size="realSize"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="isDisabled"
      :validate-event="false"
      :class="{ 'is-focus': dropDownVisible }"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput">
      <template slot="suffix">
        <i
          v-if="clearBtnVisible"
          key="clear"
          class="cat-input__icon cat-icon-circle-close"
          @click.stop="handleClear"></i>
        <i
          v-else
          key="arrow-down"
          :class="[
            'cat-input__icon',
            'cat-icon-arrow-down',
            dropDownVisible && 'is-reverse'
          ]"
          @click.stop="toggleDropDownVisible()"></i>
      </template>
    </cat-input>

    <div v-if="multiple" class="cat-cascader__tags">
      <cat-tag
        v-for="(tag, index) in presentTags"
        :key="tag.key"
        type="info"
        :size="tagSize"
        :hit="tag.hitState"
        :closable="tag.closable"
        disable-transitions
        @close="deleteTag(index)">
        <span>{{ tag.text }}</span>
      </cat-tag>
      <input
        v-if="filterable && !isDisabled"
        v-model.trim="inputValue"
        type="text"
        class="cat-cascader__search-input"
        :placeholder="presentTags.length ? '' : placeholder"
        @input="e => handleInput(inputValue, e)"
        @click.stop="toggleDropDownVisible(true)"
        @keydown.delete="handleDelete">
    </div>

    <transition name="cat-zoom-in-top" @after-leave="handleDropdownLeave">
      <div
        v-show="dropDownVisible"
        ref="popper"
        :class="['cat-popper', 'cat-cascader__dropdown', popperClass]">
        <cat-cascader-panel
          ref="panel"
          v-show="!filtering"
          v-model="checkedValue"
          :options="options"
          :props="config"
          :border="false"
          :render-label="$scopedSlots.default"
          @expand-change="handleExpandChange"
          @close="toggleDropDownVisible(false)">
        </cat-cascader-panel>
        <cat-scrollbar
          ref="suggestionPanel"
          v-if="filterable"
          v-show="filtering"
          tag="ul"
          class="cat-cascader__suggestion-panel"
          view-class="cat-cascader__suggestion-list"
          @keydown.native="handleSuggestionKeyDown">
          <template v-if="suggestions.length">
            <li
              v-for="(item, index) in suggestions"
              :key="item.uid"
              :class="[
                'cat-cascader__suggestion-item',
                item.checked && 'is-checked'
              ]"
              :tabindex="-1"
              @click="handleSuggestionClick(index)">
              <span>{{ item.text }}</span>
              <i v-if="item.checked" class="cat-icon-check"></i>
            </li>
          </template>
          <slot v-else name="empty">
            <li class="cat-cascader__empty-text">无匹配数据</li>
          </slot>
        </cat-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script>
import Popper from '../utils/vue-popper'
import Clickoutside from '../utils/clickoutside'
import Emitter from '../utils/mixins/emitter'
import CatInput from '../Input/Input'
import CatTag from '../Tag/Tag'
import CatScrollbar from '../Scrollbar/main'
import CatCascaderPanel from './CascaderPanel'
import AriaUtils from '../utils/aria-utils'
import { isEqual, isEmpty } from '../utils/util'
import { isUndefined, isFunction } from '../utils/types'
import { isDef } from '../utils/shared'
import { addResizeListener, removeResizeListener } from '../utils/resize-event'
import { debounce } from 'throttle-debounce'

const { keys: KeyCode } = AriaUtils
const PopperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: Popper.props.appendToBody,
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: Popper.props.arrowOffset,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions
  },
  methods: Popper.methods,
  data: Popper.data,
  beforeDestroy: Popper.beforeDestroy
}

const InputSizeMap = {
  medium: 36,
  small: 32,
  mini: 28
}

export default {
  name: 'CatCascader',

  directives: { Clickoutside },

  mixins: [PopperMixin, Emitter],

  components: {
    CatInput,
    CatTag,
    CatCascaderPanel,
    CatScrollbar
  },

  inject: {
    catForm: {
      default: ''
    },

    catFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    options: Array,
    props: Object,
    size: String,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    separator: {
      type: String,
      default: ' / '
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => () => {}
    },
    popperClass: String
  },

  data () {
    return {
      dropDownVisible: false,
      checkedValue: this.value || null,
      inputHover: false,
      inputValue: null,
      presentText: null,
      presentTags: [],
      checkedNodes: [],
      filtering: false,
      suggestions: [],
      inputInitialHeight: 0,
      pressDeleteCount: 0
    }
  },

  computed: {
    realSize () {
      const _catFormItemSize = (this.catFormItem || {})._catFormItemSize
      return this.size || _catFormItemSize || (this.$CAT || {}).size
    },

    tagSize () {
      return ['small', 'mini'].indexOf(this.realSize) > -1
        ? 'mini'
        : 'small'
    },

    isDisabled () {
      return this.disabled || (this.catForm || {}).disabled
    },

    config () {
      const config = this.props || {}
      return config
    },

    multiple () {
      return this.config.multiple
    },

    leafOnly () {
      return !this.config.checkStrictly
    },

    readonly () {
      return !this.filterable || this.multiple
    },

    clearBtnVisible () {
      if (!this.clearable || this.isDisabled || this.filtering || !this.inputHover) {
        return false
      }
      return this.multiple
        ? !!this.checkedNodes.filter(node => !node.isDisabled).length
        : !!this.presentText
    },

    panel () {
      return this.$refs.panel
    }
  },

  watch: {
    disabled () {
      this.computePresentContent()
    },

    value (val) {
      if (!isEqual(val, this.checkedValue)) {
        this.checkedValue = val
        this.computePresentContent()
      }
    },

    checkedValue (val) {
      const { value, dropDownVisible } = this
      const { checkStrictly, multiple } = this.config

      if (!isEqual(val, value) || isUndefined(value)) {
        this.computePresentContent()
        if (!multiple && !checkStrictly && dropDownVisible) {
          this.toggleDropDownVisible(false)
        }
      }

      this.$emit('input', val)
      this.$emit('change', val)
      this.dispatch('CatFormItem', 'cat.form.change', [val])
    },

    options: {
      handler () {
        this.$nextTick(this.computePresentContent)
      },
      deep: true
    },

    presentText (val) {
      this.inputValue = val
    },

    presentTags (val, oldVal) {
      if (this.multiple && (val.length || oldVal.length)) {
        this.$nextTick(this.updateStyle)
      }
    },

    filtering (val) {
      this.$nextTick(this.updatePopper)
    }
  },

  methods: {
    toggleDropDownVisible (visible) {
      const { dropDownVisible } = this
      visible = isDef(visible) ? visible : !dropDownVisible
      if (visible !== dropDownVisible) {
        this.dropDownVisible = visible
        if (visible) {
          this.$nextTick(() => {
            this.updatePopper()
          })
        }
      }
      this.$emit('visible-change', visible)
    },

    handleDropdownLeave () {
      this.filtering = false
      this.inputValue = this.presentText
    },

    handleKeyDown (event) {
      switch (event.keyCode) {
        case KeyCode.enter:
          this.toggleDropDownVisible()
          break
        case KeyCode.down:
          this.toggleDropDownVisible(true)
          this.focusFirstNode()
          event.preventDefault()
          break
        case KeyCode.esc:
        case KeyCode.tab:
          this.toggleDropDownVisible(false)
          break
      }
    },

    handleFocus (e) {
      this.$emit('focus', e)
    },

    handleBlur (e) {
      this.$emit('blur', e)
    },

    handleInput (val, event) {
      !this.dropDownVisible && this.toggleDropDownVisible(true)

      if (event && event.isComposing) return
      if (val) {
        this.filterHandler()
      } else {
        this.filtering = false
      }
    },

    handleClear () {
      this.presentText = ''
      this.panel.clearCheckedNodes()
    },

    handleExpandChange (value) {
      this.$nextTick(this.updatePopper.bind(this))
      this.$emit('expand-change', value)
    },

    focusFirstNode () {
      this.$nextTick(() => {
        const { filtering } = this
        const { popper, suggestionPanel } = this.$refs
        let firstNode = null

        if (filtering && suggestionPanel) {
          firstNode = suggestionPanel.$el.querySelector('.cat-cascader__suggestion-item')
        } else {
          const firstMenu = popper.querySelector('.cat-cascader-menu')
          firstNode = firstMenu.querySelector('.cat-cascader-node[tabindex="-1"]')
        }

        if (firstNode) {
          firstNode.focus()
          !filtering && firstNode.click()
        }
      })
    },

    computePresentContent () {
      this.$nextTick(() => {
        if (this.config.multiple) {
          this.computePresentTags()
          this.presentText = this.presentTags.length ? ' ' : null
        } else {
          this.computePresentText()
        }
      })
    },

    computePresentText () {
      const { checkedValue, config } = this
      if (!isEmpty(checkedValue)) {
        const node = this.panel.getNodeByValue(checkedValue)
        if (node && (config.checkStrictly || node.isLeaf)) {
          this.presentText = node.getText(this.showAllLevels, this.separator)
          return
        }
      }
      this.presentText = null
    },

    computePresentTags () {
      const { isDisabled, leafOnly, showAllLevels, separator, collapseTags } = this
      const checkedNodes = this.getCheckedNodes(leafOnly)
      const tags = []

      const genTag = node => ({
        node,
        key: node.uid,
        text: node.getText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled && !node.isDisabled
      })

      if (checkedNodes.length) {
        const [first, ...rest] = checkedNodes
        const restCount = rest.length
        tags.push(genTag(first))

        if (restCount) {
          if (collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false
            })
          } else {
            rest.forEach(node => tags.push(genTag(node)))
          }
        }
      }

      this.checkedNodes = checkedNodes
      this.presentTags = tags
    },

    getSuggestions () {
      let { filterMethod } = this

      if (!isFunction(filterMethod)) {
        filterMethod = (node, keyword) => node.text.includes(keyword)
      }

      const suggestions = this.panel.getFlattedNodes(this.leafOnly)
        .filter(node => {
          if (node.isDisabled) return false
          node.text = node.getText(this.showAllLevels, this.separator) || ''
          return filterMethod(node, this.inputValue)
        })

      if (this.multiple) {
        this.presentTags.forEach(tag => {
          tag.hitState = false
        })
      } else {
        suggestions.forEach(node => {
          node.checked = isEqual(this.checkedValue, node.getValueByOption())
        })
      }

      this.filtering = true
      this.suggestions = suggestions
      this.$nextTick(this.updatePopper)
    },

    handleSuggestionKeyDown (event) {
      const { keyCode, target } = event
      let prev, next
      switch (keyCode) {
        case KeyCode.enter:
          target.click()
          break
        case KeyCode.up:
          prev = target.previousElementSibling
          prev && prev.focus()
          break
        case KeyCode.down:
          next = target.nextElementSibling
          next && next.focus()
          break
        case KeyCode.esc:
        case KeyCode.tab:
          this.toggleDropDownVisible(false)
          break
      }
    },

    handleDelete () {
      const { inputValue, pressDeleteCount, presentTags } = this
      const lastIndex = presentTags.length - 1
      const lastTag = presentTags[lastIndex]
      this.pressDeleteCount = inputValue ? 0 : pressDeleteCount + 1

      if (!lastTag) return

      if (this.pressDeleteCount) {
        if (lastTag.hitState) {
          this.deleteTag(lastIndex)
        } else {
          lastTag.hitState = true
        }
      }
    },

    handleSuggestionClick (index) {
      const { multiple } = this
      const targetNode = this.suggestions[index]

      if (multiple) {
        const { checked } = targetNode
        targetNode.doCheck(!checked)
        this.panel.calculateMultiCheckedValue()
      } else {
        this.checkedValue = targetNode.getValueByOption()
        this.toggleDropDownVisible(false)
      }
    },

    deleteTag (index) {
      const { checkedValue } = this
      const val = checkedValue[index]
      this.checkedValue = checkedValue.filter((n, i) => i !== index)
      this.$emit('remove-tag', val)
    },

    updateStyle () {
      const { $el, inputInitialHeight } = this
      if (this.$isServer || !$el) return

      const { suggestionPanel } = this.$refs
      const inputInner = $el.querySelector('.cat-input__inner')

      if (!inputInner) return

      const tags = $el.querySelector('.cat-cascader__tags')
      let suggestionPanelEl = null

      if (suggestionPanel && (suggestionPanelEl = suggestionPanel.$el)) {
        const suggestionList = suggestionPanelEl.querySelector('.cat-cascader__suggestion-list')
        suggestionList.style.minWidth = inputInner.offsetWidth + 'px'
      }

      if (tags) {
        const { offsetHeight } = tags
        const height = Math.max(offsetHeight + 6, inputInitialHeight) + 'px'
        inputInner.style.height = height
        this.updatePopper()
      }
    },

    getCheckedNodes (leafOnly) {
      return this.panel.getCheckedNodes(leafOnly)
    }
  },

  mounted () {
    const { input } = this.$refs
    if (input && input.$el) {
      this.inputInitialHeight = input.$el.offsetHeight || InputSizeMap[this.realSize] || 40
    }

    if (!isEmpty(this.value)) {
      this.computePresentContent()
    }

    this.filterHandler = debounce(this.debounce, () => {
      const { inputValue } = this

      if (!inputValue) {
        this.filtering = false
        return
      }

      const before = this.beforeFilter(inputValue)

      if (before && before.then) {
        before.then(this.getSuggestions)
      } else if (before !== false) {
        this.getSuggestions()
      } else {
        this.filtering = false
      }
    })

    addResizeListener(this.$el, this.updateStyle)
  },

  beforeDestroy () {
    removeResizeListener(this.$el, this.updateStyle)
  }
}
</script>
