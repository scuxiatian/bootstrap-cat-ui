<template>
  <div
    class="cat-autocomplete"
    role="combobox">
    <cat-input
      ref="input"
      v-bind="[$props, $attrs]"
      role="combobox">
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </template>
      <cat-autocomplete-suggestions
        visible-arrow
        :class="[popperClass ? popperClass : '']"
        ref="suggestions"
        :id="id">
        <li v-for="(item, index) in suggestions"
          :key="index"
          @click="select(item)"
          :id="`${id}-item-${index}`"
          role="option">
            <slot :item="item">{{ item[valueKey] }}</slot>
        </li>
      </cat-autocomplete-suggestions>
    </cat-input>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'
import CatInput from '../Input/Input'
import CatAutocompleteSuggestions from './AutocompleteSuggestions'
import { generateId } from 'element-ui/src/utils/util'

export default {
  name: 'CatAutocomplete',

  componentName: 'CatAutocomplete',

  components: {
    CatInput,
    CatAutocompleteSuggestions
  },

  props: {
    valueKey: {
      type: String,
      default: 'value'
    },
    popperClass: String,
    popperOptions: Object,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    name: String,
    size: String,
    value: String,
    maxlength: Number,
    minlength: Number,
    autofocus: Boolean,
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    label: String,
    debounce: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    hideLoading: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    highlightFirstItem: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      activated: false,
      suggestions: [],
      loading: false,
      highlightedIndex: -1,
      suggestionDisabled: false
    }
  },

  computed: {
    suggestionVisible () {
      const suggestions = this.suggestions
      const isValidData = Array.isArray(suggestions) && suggestions.length > 0
      return (isValidData || this.loading) && this.activated
    },

    id () {
      return `cat-autocomplete-${generateId()}`
    }
  },

  watch: {
    suggestionVisible (val) {
      const $input = this.getInput()
      if ($input) {
        this.broadcast('CatAutocompleteSuggestions', 'visible', [val, $input.offsetWidth])
      }
    }
  },

  methods: {
    getData (queryString) {
      if (this.suggestionDisabled) {
        return
      }
      this.loading = true
      this.fetchSuggestions(queryString, (suggestions) => {
        this.loading = false
        if (this.suggestionDisabled) {
          return
        }
        if (Array.isArray(suggestions)) {
          this.suggestions = suggestions
          this.highlightedIndex = this.highlightFirstItem ? 0 : -1
        } else {
          console.error('[Cat Error][Autocomplete]autocomplete suggestions must be an array')
        }
      })
    },

    handleChange (value) {
      this.$emit('input', value)
      this.suggestionDisabled = false
      if (!this.triggerOnFocus && !value) {
        this.suggestionDisabled = true
        this.suggestions = []
        return
      }
      this.debouncedGetData(value)
    },

    select (item) {
      this.$emit('input', item[this.valueKey])
      this.$emit('select', item)
      this.$nextTick(_ => {
        this.suggestions = []
        this.highlightedIndex = -1
      })
    },

    highlight (index) {
      if (!this.suggestionVisible || this.loading) { return }
      if (index < 0) {
        this.highlightedIndex = -1
        return
      }
      if (index >= this.suggestions.length) {
        index = this.suggestions.length - 1
      }
      const suggestion = this.$refs.suggestions.$el.querySelector('.cat-autocomplete-suggestion__wrap')
      const suggestionList = suggestion.querySelectorAll('.cat-autocomplete-suggestion__list li')

      const highlightItem = suggestionList[index]
      const scrollTop = suggestion.scrollTop
      const offsetTop = highlightItem.offsetTop

      if (offsetTop + highlightItem.scrollHeight > (scrollTop + suggestion.clientHeight)) {
        suggestion.scrollTop += highlightItem.scrollHeight
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= highlightItem.scrollHeight
      }
      this.highlightedIndex = index
    }
  },

  mounted () {
    this.debouncedGetData = debounce(this.debounce, this.getData)
    this.$on('item-click', item => {
      this.select(item)
    })
    const $input = this.getInput()
    $input.setAttribute('role', 'textbox')
  },

  beforeDestroy () {
    this.$refs.suggestions.$destroy()
  }
}
</script>
