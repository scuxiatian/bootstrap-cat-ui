<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { cellStarts, cellForced } from './config'
import { mergeOptions, parseWidth, parseMinWidth, compose } from './util'

let columnIdSeed = -1

export default {
  name: 'CatTableColumn',
  componentName: 'CatTableColumn',
  props: {
    type: {
      String,
      default: 'default'
    },
    label: String,
    prop: String,
    width: {},
    minWidth: {}
  },
  data () {
    return {
      isSubColumn: false
    }
  },
  computed: {
    owner () {
      let parent = this.$parent
      while (parent && !parent.tableId) {
        parent = parent.$parent
      }
      return parent
    },

    columnOrTableParent () {
      let parent = this.$parent
      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent
      }
      return parent
    },

    realWidth () {
      return parseWidth(this.width)
    },

    realMinWidth () {
      return parseMinWidth(this.minWidth)
    }
  },
  methods: {
    getPropsData (...props) {
      return props.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          cur.forEach((key) => {
            prev[key] = this[key]
          })
        }
        return prev
      }, {})
    },
    setColumnWidth (column) {
      if (this.realWidth) {
        column.width = this.realWidth
      }
      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth
      }
      if (!column.minWidth) {
        column.minWidth = 80
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width
      return column
    },
    setColumnForcedProps (column) {
      // 对于特定类型的 column，某些属性不允许设置
      const type = column.type
      const source = cellForced[type] || {}
      Object.keys(source).forEach(prop => {
        const value = source[prop]
        if (value !== undefined) {
          column[prop] = prop === 'className' ? `${column[prop]} ${value}` : value
        }
        return column
      })
    },
    setColumnRenders (column) {
      // renderHeader 属性不推荐使用。
      if (this.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.')
      } else if (column.type !== 'selection') {
        column.renderHeader = (h, scope) => {
          const renderHeader = this.$scopedSlots.header
          return renderHeader ? renderHeader(scope) : column.label
        }
      }
    }
  },
  beforeCreate () {
    this.row = {}
    this.column = {}
    this.$index = 0
    this.columnId = ''
  },
  created () {
    const parent = this.columnOrTableParent
    this.isSubColumn = this.owner !== parent
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++

    const type = this.type || 'default'
    const sortable = this.sortable === '' ? true : this.sortable
    const defaults = {
      ...cellStarts[type],
      id: this.columnId,
      type: this.type,
      property: this.prop || this.property,
      align: this.realAlign,
      headerAlign: this.realHeaderAlign,
      showOverflowToolTip: this.showOverflowToolTip || this.showTooltipWhenOverflow,
      // filter 相关属性
      filterable: this.filters || this.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      isColumnGroup: false,
      filterOpened: false,
      // sort 相关属性
      sortable,
      // index 列
      index: this.index
    }
    const basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable']
    const sortProps = ['sortMethod', 'sortBy', 'sortOrders']
    const selectProps = ['selectable', 'reserveSelection']
    const filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement']

    let column = this.getPropsData(basicProps, sortProps, selectProps, filterProps)
    column = mergeOptions(defaults, column)

    // 注意 compose 中函数执行的顺序是从右到左
    const chains = compose(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps)
    column = chains(column)

    this.columnConfig = column
  }
}
</script>
