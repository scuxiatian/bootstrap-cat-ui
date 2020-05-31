import { arrayFindIndex } from '../utils/util'
import { getRowIdentity } from './util'
import LayoutObserver from './layout-observer'
import { mapStates } from './store/helper'

export default {
  name: 'CatTableBody',

  mixins: [LayoutObserver],

  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },

  render (h) {
    const data = this.data || []
    return (
      <table
        class="cat-table__body"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          { this.columns.map(column => <col name={ column.id } key={ column.id } />) }
        </colgroup>
        <tbody>
          {
            data.reduce((acc, row) => {
              return acc.concat(this.wrappedRowRender(row, acc.length))
            }, [])
          }
        </tbody>
      </table>
    )
  },

  computed: {
    table () {
      return this.$parent
    },

    ...mapStates({
      data: 'data',
      columns: 'columns',
      treeIndent: 'indent',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length,
      hasExpandColumn: states => states.columns.some(({ type }) => type === 'expand')
    }),

    firstDefaultColumnIndex () {
      return arrayFindIndex(this.columns, ({ type }) => type === 'default')
    }
  },

  methods: {
    getKeyOfRow (row, index) {
      const rowKey = this.table.rowKey
      if (rowKey) {
        return getRowIdentity(row, rowKey)
      }
      return index
    },

    isColumnHidden (index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount
      } else {
        return (index < this.leftFixedLeafCount) || (index >= this.columnsCount - this.rightFixedLeafCount)
      }
    },

    getSpan (row, column, rowIndex, columnIndex) {
      let rowspan = 1
      let colspan = 1
      const fn = this.table.spanMethod
      if (typeof fn === 'function') {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex
        })
        if (Array.isArray(result)) {
          rowspan = result[0]
          colspan = result[1]
        } else if (typeof result === 'object') {
          rowspan = result.rowspan
          colspan = result.colspan
        }
      }
      return { rowspan, colspan }
    },

    getRowStyle (row, rowIndex) {
      const rowStyle = this.table.rowStyle
      if (typeof rowStyle === 'function') {
        return rowStyle({
          row,
          rowIndex
        })
      }
      return rowStyle || null
    },

    getRowClass (row, rowIndex) {
      const classes = ['cat-table__row']

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('cat-table__row--striped')
      }
      const rowClassName = this.table.rowClassName
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName)
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName({
          row,
          rowIndex
        }))
      }

      return classes
    },

    getCellStyle (rowIndex, columnIndex, row, column) {
      const cellStyle = this.table.cellStyle
      if (typeof cellStyle === 'function') {
        return cellStyle({
          rowIndex,
          columnIndex,
          row,
          column
        })
      }
      return cellStyle
    },

    getCellClass (rowIndex, columnIndex, row, column) {
      const classes = [column.id, column.align, column.className]

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden')
      }

      const cellClassName = this.table.cellClassName
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName)
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName({
          rowIndex,
          columnIndex,
          row,
          column
        }))
      }

      return classes.join(' ')
    },

    getColspanRealWidth (columns, colspan, index) {
      if (colspan < 1) {
        return columns[index].realWidth
      }
      const widthArr = columns.map(({ realWidth }) => realWidth).slice(index, index + colspan)
      return widthArr.reduce((acc, width) => acc + width, -1)
    },

    rowRender (row, $index, treeRowData) {
      const { columns } = this
      const columnsHidden = columns.map((column, index) => this.isColumnHidden(index))
      const rowClasses = this.getRowClass(row, $index)
      const display = true
      const displayStyle = display ? null : { display: 'none' }
      return (
        <tr
          style={ [displayStyle, this.getRowStyle(row, $index)] }
          class={ rowClasses }
          key={ this.getKeyOfRow(row, $index)}>
          {
            columns.map((column, cellIndex) => {
              const { rowspan, colspan } = this.getSpan(row, column, $index, cellIndex)
              if (!rowspan || !colspan) {
                return null
              }
              const columnData = { ...column }
              columnData.realWidth = this.getColspanRealWidth(columns, colspan, cellIndex)
              const data = {
                store: this.store,
                _self: this.context || this.table.$vnode.context,
                column: columnData,
                row,
                $index
              }
              return (
                <td
                  style={ this.getCellStyle($index, cellIndex, row, column) }
                  class={ this.getCellClass($index, cellIndex, row, column) }
                  rowspan= { rowspan }>
                  {
                    column.renderCell.call(
                      this._renderProxy,
                      this.$createElement,
                      data,
                      columnsHidden[cellIndex]
                    )
                  }
                </td>
              )
            })
          }
        </tr>
      )
    },

    wrappedRowRender (row, $index) {
      return this.rowRender(row, $index)
    }
  }
}
