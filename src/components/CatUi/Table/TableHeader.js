// import Vue from 'vue'
// import { hasClass, addClass, removeClass } from '../utils/dom'
import LayoutObserver from './layout-observer'
import { mapStates } from './store/helper'

const getAllColumns = (columns) => {
  const result = []
  columns.forEach((column) => {
    if (column.children) {
      result.push(column)
      result.push.apply(result, getAllColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

const convertToRows = (originColumns) => {
  let maxLevel = 1
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1
      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }
    if (column.children) {
      let colSpan = 0
      column.children.forEach((subColumn) => {
        traverse(subColumn, column)
        colSpan += subColumn.colSpan
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach((column) => {
    column.level = 1
    traverse(column)
  })

  const rows = []
  for (let i = 0; i < maxLevel; i++) {
    rows.push([])
  }

  const allColumns = getAllColumns(originColumns)

  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1
    } else {
      column.rowSpan = 1
    }
    rows[column.level - 1].push(column)
  })

  return rows
}

export default {
  name: 'CatTableHeader',

  mixins: [LayoutObserver],

  render (h) {
    const originColumns = this.store.states.originColumns
    const columnRows = convertToRows(originColumns, this.columns)
    // 是否拥有多级表头
    const isGroup = columnRows.length > 1
    if (isGroup) this.$parent.isGroup = true
    return (
      <table
        class="cat-table__header"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this.columns.map(column => <col name={ column.id } key={ column.id } />)
          }
          {
            this.hasGutter ? <col name="gutter" /> : ''
          }
        </colgroup>
        <thead class={[{ 'is-group': isGroup, 'has-gutter': this.hasGutter }]}>
          {
            this._l(columnRows, (columns, rowIndex) =>
              <tr
                style={ this.getHeaderRowStyle(rowIndex) }
                class={ this.getHeaderRowClass(rowIndex)}
              >
                {
                  columns.map((column, cellIndex) => (
                    <th
                      colSpan={ column.colSpan }
                      rowSpan={ column.rowSpan }
                      style={ this.getHeaderCellStyle(rowIndex, cellIndex, columns, column) }
                      class={ this.getHeaderCellClass(rowIndex, cellIndex, columns, column) }
                      key={ column.id }>
                      <div class={ ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName]}>
                        {
                          column.renderHeader
                            ? column.renderHeader.call(this._renderProxy, h, { column, $index: cellIndex, store: this.store, _self: this.$parent.$vnode.context })
                            : column.label
                        }
                        {
                          column.sortable ? (
                            <span></span>
                          ) : ''
                        }
                        {
                          column.filterable ? (
                            <span></span>
                          ) : ''
                        }
                      </div>
                    </th>
                  ))
                }
                {
                  this.hasGutter ? <th class="gutter" /> : ''
                }
              </tr>
            )
          }
        </thead>
      </table>
    )
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default () {
        return {
          prop: '',
          order: ''
        }
      }
    }
  },

  data () {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    }
  },

  computed: {
    table () {
      return this.$parent
    },

    hadGutter () {
      return !this.fixed && this.tableLayout.gutterWidth
    },

    ...mapStates({
      columns: 'columns',
      isAllSelected: 'isAllSelected',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length
    })
  },

  created () {
    this.filterPanels = {}
  },

  mounted () {
    this.$nextTick(() => {
      const { prop, order } = this.defaultSort
      const init = true
      this.store.commit('sort', { prop, order, init })
    })
  },

  beforeDestroy () {
    const panels = this.filterPanels
    for (const prop in panels) {
      if (Object.prototype.hasOwnProperty.call(panels, prop) && panels[prop]) {
        panels[prop].$destroy(true)
      }
    }
  },

  methods: {
    isCellHidden (index, columns) {
      let start = 0
      for (let i = 0; i < index; i++) {
        start += columns[i].colSpan
      }
      const after = start + columns[index].colSpan - 1
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount
      } else {
        return (after < this.leftFixedLeafCount) || (start >= this.columnsCount - this.rightFixedLeafCount)
      }
    },

    getHeaderRowStyle (rowIndex) {
      const headerRowStyle = this.table.headerRowStyle
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle({ rowIndex })
      }
      return headerRowStyle
    },

    getHeaderRowClass (rowIndex) {
      const classes = []

      const headerRowClassName = this.table.headerRowClassName
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName)
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName({ rowIndex }))
      }

      return classes.join(' ')
    },

    getHeaderCellStyle (rowIndex, columnIndex, row, column) {
      const headerCellStyle = this.table.headerCellStyle
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle({
          rowIndex,
          columnIndex,
          row,
          column
        })
      }
      return headerCellStyle
    },

    getHeaderCellClass (rowIndex, columnIndex, row, column) {
      const classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName]

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden')
      }

      if (!column.children) {
        classes.push('is-leaf')
      }

      if (column.sortable) {
        classes.push('is-sortable')
      }

      const headerCellClassName = this.table.headerCellClassName
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName)
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName({
          rowIndex,
          columnIndex,
          row,
          column
        }))
      }

      return classes.join(' ')
    }
  }
}
