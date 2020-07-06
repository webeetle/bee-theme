import React from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from '@material-ui/core'
import classNames from 'classnames'
import {
  CustomPaging,
  DataTypeProvider,
  FilteringState,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  PagingState,
  SearchState,
  SelectionState,
  SortingState,
  RowDetailState
} from '@devexpress/dx-react-grid'
import {
  Grid,
  PagingPanel,
  SearchPanel,
  Table,
  TableColumnResizing,
  TableHeaderRow,
  TableRowDetail,
  TableSelection,
  Toolbar,
  VirtualTable
} from '@devexpress/dx-react-grid-material-ui'

class BeeGrid extends React.Component {
  render () {
    const {
      classes,
      className,
      rows = [],
      columns = [],
      toolbar,
      loading,
      search,
      selection,
      sorting,
      paging,
      table,
      tableHeaderRow,
      defaultColumnWidths,
      showColumnResizing,
      providers = [],
      filters,
      height,
      rowDetail,
      ...rest
    } = this.props

    const GridClasses = classNames({
      'BeeGrid-root': true,
      [className]: className
    })

    return (
      <>
        {loading && <LinearProgress/>}
        <Grid
          rows={rows}
          columns={columns}
          className={GridClasses}
          {...rest}
        >
          {providers.length > 0
            ? providers.map((provider) => (
              <DataTypeProvider
                key={provider.for}
                {...provider}
              />
            )
            ) : null}

          <SelectionState {...selection} />
          <SearchState {...search} />
          <SortingState {...sorting} />
          <PagingState {...paging} />

          {filters ? <FilteringState filters={filters}/> : null}
          {(search && !search.onValueChange) || (filters) ? <IntegratedFiltering columnExtensions={filters}/> : null}
          {selection && selection.showSelectAll ? <IntegratedSelection/> : null}
          {sorting && !sorting.onSortingChange ? <IntegratedSorting/> : null}
          {paging && !paging.onCurrentPageChange ? <IntegratedPaging/> : <CustomPaging {...paging} />}

          {rowDetail && <RowDetailState
            defaultExpandedRowIds={Array.isArray(rowDetail.defaultExpanded) && rowDetail.defaultExpanded.length > 0 ? rowDetail.defaultExpanded : []}
          />}

          <Table
            {...table}
          />
          {(showColumnResizing && defaultColumnWidths.length > 0)
            ? <TableColumnResizing defaultColumnWidths={defaultColumnWidths}/> : null}
          {height ? <VirtualTable height={height}/> : null}
          <TableHeaderRow
            showSortingControls={sorting && sorting.showSortingControls}
            {...tableHeaderRow}
          />

          {rowDetail && <TableRowDetail
            contentComponent={(el) => rowDetail.callback(el)}
          />}

          {(search || toolbar) && <Toolbar/>}
          {search && <SearchPanel/>}
          {selection && <TableSelection {...selection} />}
          {paging && <PagingPanel {...paging} />}

        </Grid>
      </>
    )
  }
}

BeeGrid.defaultProps = {
  showColumnResizing: false,
  defaultColumnWidths: []
}

BeeGrid.propTypes = {
  height: PropTypes.number,
  classes: PropTypes.object,
  rows: PropTypes.array,
  columns: PropTypes.array,
  providers: PropTypes.array,
  filters: PropTypes.array,
  showColumnResizing: PropTypes.bool,
  defaultColumnWidths: PropTypes.array,
  loading: PropTypes.bool,
  search: PropTypes.object,
  toolbar: PropTypes.any,
  selection: PropTypes.object,
  table: PropTypes.object,
  tableHeaderRow: PropTypes.object,
  sorting: PropTypes.object,
  paging: PropTypes.object,
  rowDetail: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
}

export default BeeGrid
