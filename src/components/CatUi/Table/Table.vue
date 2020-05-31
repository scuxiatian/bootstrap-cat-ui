<template>
  <div class="cat-table"
    :class="[{
      'el-table--fit': fit
    }]">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="cat-table__header-wrapper" ref="headerWrapper">
      <table-header
        ref="tableHeader"
        :store="store"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }">
      </table-header>
      <div class="cat-table__body-wrapper" ref="bodyWrapper">
        <table-body
          :store="store">
        </table-body>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'
import TableLayout from './table-layout'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { createStore, mapStates } from './store/helper'

let tableIdSeed = 1

export default {
  name: 'CatTable',
  componentName: 'CatTable',

  components: {
    TableHeader,
    TableBody
  },

  props: {
    data: {
      type: Array,
      default: () => []
    },
    fit: {
      type: Boolean,
      default: true
    },
    treeProps: {
      type: Object,
      default () {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        }
      }
    }
  },

  data () {
    // const { hasChildren = 'hasChildren', children = 'children' } = this.treeProps
    this.store = createStore(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate
    })
    const layout = new TableLayout({
      store: this.store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    })
    return {
      layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      }
    }
  },

  computed: {
    bodyWidth () {
      const { bodyWidth, scrollY, gutterWidth } = this.layout
      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : ''
    },

    ...mapStates({
      columns: 'columns'
    })
  },

  watch: {
    data: {
      immediate: true,
      handler (value) {
        this.store.commit('setData', value)
      }
    }
  },

  methods: {
    doLayout () {
      this.layout.updateColumnsWidth()
    }
  },

  created () {
    this.tableId = 'cat-table_' + tableIdSeed++
    this.debouncedUpdateLayout = debounce(50, () => this.doLayout())
  },

  mounted () {
    this.store.updateColumns()
    this.doLayout()

    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    }

    this.$ready = true
  }
}
</script>
