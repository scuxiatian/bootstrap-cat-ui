<template>
  <div
    class="cat-select"
    @click.stop="toggleMenu"
    v-clickoutside="handleClose">
    <div
      class="cat-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }">
      <span v-if="collapseTags && selected.length">
        <cat-tag
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="selected[0].hitState"
          type="info"
          @close="deleteTag($event, item)"
          disable-transitions>
          <span class="cat-select__tags-text">{{ selected[0].currentLabel }}</span>
        </cat-tag>
        <cat-tag
          v-if="selected.length > 1"
          :closable="false"
          :size="collapseTagSize"
          type="info"
          disable-transitions>
          <span class="cat-select__tags-text">+ {{ selected.length - 1 }}</span>
        </cat-tag>
      </span>
      <transition-group @after-leave="resetInputHeight" v-if="!collapseTags">
        <cat-tag
          v-for="item in selected"
          :key="getValueKey(item)"
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="item.hitState"
          type="info"
          @close="deleteTag($event, item)"
          disable-transitions>
          <span class="cat-select__tags-text">{{ item.currentLabel }}</span>
        </cat-tag>
      </transition-group>
    </div>
    <cat-input
      ref="reference"
      v-model="selectedLabel"
      type="text"
      :placeholder="currentPlaceholder"
      :name="name"
      :id="id"
      :autocomplete="autocomplete"
      :disabled="selectDisabled"
      :readonly="readonly"
      :class="{ 'is-focus': visible }">
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i v-show="!showClose" :class="['cat-select__caret', 'cat-input__icon', 'cat-icon-' + iconClass]"></i>
        <i v-if="showClose" class="cat-select__caret cat-input__icon cat-icon-circle-close" @click="handleClearClick"></i>
      </template>
    </cat-input>
    <transition
      name="cat-zoom-in-top">
      <cat-select-menu
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible && emptyText !== false">
        <cat-scrollbar
          tag="ul"
          wrap-class="cat-select-dropdown__wrap"
          view-class="cat-select-dropdown__list"
          ref="scrollbar"
          v-show="options.length > 0 && !loading">
          <slot></slot>
        </cat-scrollbar>
      </cat-select-menu>
    </transition>
  </div>
</template>

<script>
import Emitter from '../utils/mixins/emitter'
import Focus from '../utils/mixins/focus'
import CatInput from '../Input/Input.vue'
import CatSelectMenu from './SelectDropdown'
import CatOption from './Option.vue'
import CatScrollbar from '../Scrollbar/main.js'
import Clickoutside from '../utils/clickoutside'
import { valueEquals, getValueByPath } from '../utils/util'

export default {
  name: 'CatSelect',

  componentName: 'CatSelect',

  mixins: [Emitter, Focus('reference')],

  inject: {
    CatForm: {
      default: ''
    },

    CatFormItem: {
      default: ''
    }
  },

  provide () {
    return {
      select: this
    }
  },

  components: {
    // eslint-disable-next-line vue/no-unused-components
    CatOption,
    CatInput,
    CatSelectMenu,
    CatScrollbar
  },

  directives: { Clickoutside },

  props: {
    name: String,
    id: String,
    value: {
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    loading: Boolean,
    popperClass: String,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default () {
        return ''
      }
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      cachedPlaceHolder: '',
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      selectedLabel: '',
      currentPlaceholder: ''
    }
  },

  computed: {
    readonly () {
      return true
    },

    showClose () {
      const hasValue = this.multiple
        ? Array.isArray(this.value) && this.value.length > 0
        : this.value !== undefined && this.value !== null && this.value !== ''
      const criteria = this.clearable &&
        !this.selectDisabled &&
        hasValue
      return criteria
    },

    iconClass () {
      return this.visible ? 'arrow-up is-reverse' : 'arrow-up'
    },

    emptyText () {
      return null
    },

    selectDisabled () {
      return this.disabled || (this.catForm || {}).disabled
    },

    collapseTagSize () {
      return ['small', 'mini'].indexOf(this.selectSize) > -1
        ? 'mini'
        : 'small'
    }
  },

  watch: {
    selectDisabled () {
      this.$nextTick(() => {
        this.resetInputHeight()
      })
    },

    value (val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight()
        if ((val && val.length > 0) || (this.$refs.input && this.query !== '')) {
          this.currentPlaceholder = ''
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder
        }
      }
      this.setSelected()
      if (!valueEquals(val, oldVal)) {
        this.dispatch('CatFormItem', 'cat.form.change', val)
      }
    }
  },

  methods: {
    emitChange (val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val)
      }
    },

    getOptions (value) {
      let option
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]'
      const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]'

      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i]
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
          : cachedOption.value === value
        if (isEqual) {
          option = cachedOption
          break
        }
      }
      if (option) return option
      const label = (!isObject && !isNull && !isUndefined)
        ? value : ''
      const newOption = {
        value,
        currentLabel: label
      }
      if (this.multiple) {
        newOption.hitState = false
      }
      return newOption
    },

    setSelected () {
      if (!this.multiple) {
        const option = this.getOptions(this.value)
        if (option.created) {
          this.createdLabel = option.currentLabel
          this.createdSelected = true
        } else {
          this.createdSelected = false
        }
        this.selectedLabel = option.currentLabel
        this.selected = option
        return
      }
      const result = []
      if (Array.isArray(this.value)) {
        this.value.forEach(value => {
          result.push(this.getOptions(value))
        })
      }
      this.selected = result
      this.$nextTick(() => {
        this.resetInputHeight()
      })
    },

    handleClearClick (event) {
      this.deleteSelected(event)
    },

    handleClose () {
      this.visible = false
    },

    resetInputHeight () {
      if (this.collapseTags && !this.filterable) return
      this.$nextTick(() => {
        if (!this.$refs.reference) return
        const inputChildNodes = this.$refs.reference.$el.childNodes
        const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
        const tags = this.$refs.tags
        const sizeInMap = this.initialInputHeight || 40
        input.style.height = this.selected.length === 0
          ? sizeInMap + 'px'
          : Math.max(
            tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
            sizeInMap
          ) + 'px'
        if (this.visible && this.emptyText !== false) {
          this.broadcast('CatSelectDropdown', 'updatePopper')
        }
      })
    },

    handleOptionSelect (option, byClick) {
      if (this.multiple) {
        const value = (this.value || []).slice()
        const optionIndex = this.getValueIndex(value, option.value)
        if (optionIndex > -1) {
          value.splice(optionIndex, 1)
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value)
        }
        this.$emit('input', value)
        this.emitChange(value)
      } else {
        this.$emit('input', option.value)
        this.emitChange(option.value)
        this.visible = false
      }
    },

    getValueIndex (arr = [], value) {
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      if (!isObject) {
        return arr.indexOf(value)
      } else {
        const valueKey = this.valueKey
        let index = -1
        arr.some((item, i) => {
          if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
            index = i
            return true
          }
          return false
        })
        return index
      }
    },

    toggleMenu () {
      if (!this.selectDisabled) {
        this.visible = !this.visible
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus()
        }
      }
    },

    deleteSelected (event) {
      event.stopPropagation()
      const value = this.multiple ? [] : ''
      this.$emit('input', value)
      this.emitChange(value)
      this.visible = false
      this.$emit('clear')
    },

    deleteTag (event, tag) {
      const index = this.selected.indexOf(tag)
      if (index > -1 && !this.selectDisabled) {
        const value = this.value.slice()
        value.splice(index, 1)
        this.$emit('input', value)
        this.emitChange(value)
        this.$emit('remove-tag', tag.value)
      }
      event.stopPropagation()
    },

    onOptionDestroy (index) {
      if (index > -1) {
        this.optionsCount--
        this.filteredOptionsCount--
        this.options.splice(index, 1)
      }
    },

    getValueKey (item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value
      } else {
        return getValueByPath(item.value, this.valueKey)
      }
    }
  },

  created () {
    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder
    this.$on('handleOptionClick', this.handleOptionSelect)
  }
}
</script>
