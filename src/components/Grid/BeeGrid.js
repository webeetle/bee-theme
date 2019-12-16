import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {CircularProgress, Paper} from '@material-ui/core';
import BeeGridStyle from "./BeeGridStyle";
import classNames from "classnames";
import {
  SearchState,
  SelectionState,
  SortingState,
  IntegratedFiltering,
  IntegratedSelection,
  IntegratedSorting, PagingState, IntegratedPaging, CustomPaging
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableSelection,
  TableHeaderRow,
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui';

class BeeGrid extends React.Component {
  render() {

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
      ...rest
    } = this.props

    const GridClasses = classNames({
      "BeeGrid-root": true,
      [className]: className
    })

    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
          className={GridClasses}
          {...rest}
        >
          <SelectionState {...selection} />
          <SearchState {...search} />
          <SortingState {...sorting} />
          <PagingState {...paging} />

          {search && !search.onValueChange ? <IntegratedFiltering/> : null}
          {selection && selection.showSelectAll ? <IntegratedSelection/> : null}
          {sorting && !sorting.onSortingChange ? <IntegratedSorting/> : null}
          {paging && !paging.onCurrentPageChange ? <IntegratedPaging/> : <CustomPaging {...paging} />}

          <Table/>
          <TableHeaderRow
            showSortingControls={sorting && sorting.showSortingControls}
          />

          {(search || toolbar) && <Toolbar/>}
          {search && <SearchPanel/>}
          {selection && <TableSelection {...selection} />}
          {paging && <PagingPanel {...paging} />}

        </Grid>
        {loading && <CircularProgress/>}
      </Paper>
    )
  }
}

BeeGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array,
  columns: PropTypes.array,
  loading: PropTypes.bool,
  search: PropTypes.object,
  selection: PropTypes.object,
  sorting: PropTypes.object,
  paging: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default withStyles(BeeGridStyle)(BeeGrid)