<template>
  <transition name="cat-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="cat-autocomplete-suggestion cat-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <li v-if="!parent.hideLoading && parent.loading"><i class="el-icon-loading"></i></li>
      <slot v-else></slot>
    </div>
  </transition>
</template>

<script>
import Popper from '../utils/vue-popper'
import Emitter from '../utils/mixins/emitter'

export default {
  name: 'CatAutocompleteSuggestions',

  componentName: 'CatAutocompleteSuggestions',

  mixins: [Popper, Emitter],

  data () {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    }
  },

  props: {
    options: {
      default () {
        return {
          gpuAcceleration: false
        }
      }
    },
    id: String
  },

  methods: {
    select (item) {
      this.dispatch('CatAutocomplete', 'item-click', item)
    }
  },

  created () {
    this.$on('visible', (val, inputWidth) => {
      this.dropdownWidth = inputWidth + 'px'
      this.showPopper = val
    })
  },

  mounted () {
    this.$parent.popperElm = this.popperElm = this.$el
    this.referenceElm = this.$parent.$refs.input.$refs.input
    this.referenceList = this.$el.querySelector('.cat-autocomplete-suggestion__list')
    this.referenceList.setAttribute('role', 'listbox')
    this.referenceList.setAttribute('id', this.id)
  },

  updated () {
    this.$nextTick(_ => {
      this.popperJS && this.updatePopper()
    })
  }
}
</script>
