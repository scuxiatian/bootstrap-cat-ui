<template>
  <div class="cat-table">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="cat-table__header-wrapper" ref="headerWrapper">
      <table-header
        ref="tableHeader"
        :store="store">
      </table-header>
    </div>
  </div>
</template>

<script>
import TableLayout from './table-layout'
import TableHeader from './TableHeader'
import { createStore, mapStates } from './store/helper'

let tableIdSeed = 1

export default {
  name: 'CatTable',
  componentName: 'CatTable',

  components: {
    TableHeader
  },

  props: {
    data: {
      type: Array,
      default: () => []
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
      layout
    }
  },

  computed: {
    ...mapStates({
      columns: 'columns'
    })
  },

  created () {
    this.tableId = 'cat-table_' + tableIdSeed++
  },

  mounted () {
    this.store.updateColumns()

    this.$ready = true
  }
}
</script>
