import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import BeeGrid from './BeeGrid'
import BeeButton from '../Button/BeeButton'
import { Typography } from '@material-ui/core'

export const Standard = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' }
  ])
  const [rows] = useState([
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: '??', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Nunzia', gender: 'Female', city: 'Nocera Inferiore', car: 'BMW Serie 1' }
  ])

  const [tableColumnExtensions] = useState([
    { columnName: 'name', width: '20%', align: 'center' },
    { columnName: 'gender', width: '15%', align: 'left' },
    { columnName: 'city', width: 'auto', align: 'right' },
    { columnName: 'car', width: 'auto' }
  ])

  const providers = [
    {
      for: ['gender'],
      formatterComponent: ({ row, value }) => <BeeButton color='primary' variant='contained' size='sm' onClick={() => console.log('message')}>Clicca per scoprire</BeeButton>
    }
  ]
  return (
    <div>
      <Typography variant='h5'>Default Grid</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        providers={providers}
      />
      <Typography variant='h5' style={{ marginTop: 30, marginBottom: 10 }}>Column size / column align / loading</Typography>
      <BeeGrid
        columns={columns}
        table={{
          columnExtensions: tableColumnExtensions
        }}
        rows={rows}
        loading
      />
    </div>
  )
}

export const Search = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' }
  ])
  const [rows] = useState([
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Nunzia', gender: 'Female', city: 'Nocera Inferiore', car: 'BMW Serie 1' }
  ])

  return (
    <div>
      <Typography variant='h5'>Local Search</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        search={{ defaultValue: '' }}
      />
      <Typography variant='h5' style={{ marginTop: 30 }}>Use callback - Ckeck console</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        search={{
          onValueChange: (text) => {
            console.log(text)
          }
        }}
      />
    </div>
  )
}

export const Selection = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' }
  ])
  const [rows] = useState([
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Giulia', gender: 'Female', city: 'Nocera Inferiore', car: 'BMW Serie 1' }
  ])
  const [selection, setSelection] = useState([1])
  return (
    <div>
      <Typography variant='h5'>Single Selection</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        selection={{
          showSelectAll: false,
          selection: selection,
          onSelectionChange: setSelection
        }}
      />
      <Typography variant='h5' style={{ marginTop: 30 }}>Allow select "all"</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        selection={{
          showSelectAll: true,
          selection: selection,
          onSelectionChange: setSelection
        }}
      />
    </div>
  )
}

export const Sorting = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' }
  ])
  const [rows] = useState([
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Nunzia', gender: 'Female', city: 'Nocera Inferiore', car: 'BMW Serie 1' }
  ])

  const [sorting] = useState([{ columnName: 'city', direction: 'asc' }])

  return (
    <div>
      <Typography variant='h5'>Local Sotring</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}

        sorting={{
          defaultSorting: sorting,
          showSortingControls: true
        }}
      />
      <Typography variant='h5' style={{ marginTop: 30 }}>Remote Sorting (see in console)</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        sorting={{
          sorting: sorting,
          onSortingChange: (sortingTable) => {
            console.log(sortingTable)
          },
          showSortingControls: true
        }}
      />
    </div>
  )
}

export const Paging = () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' }
  ])
  const [rows] = useState([
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Marco', gender: 'Male', city: 'Angri', car: 'Hyundai 10' },
    { name: 'Gennaro', gender: 'Male', city: 'Pagani', car: 'Panda 2008' },
    { name: 'Nunzia', gender: 'Female', city: 'Nocera Inferiore', car: 'BMW Serie 1' }
  ])

  const [pageSizes] = useState([5, 10, 15, 0])

  return (
    <div>
      <Typography variant='h5'>Local paging</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        paging={{
          defaultCurrentPage: 0,
          defaultPageSize: 5
        }}
      />
      <Typography variant='h5' style={{ marginTop: 30 }}>Local paging with page size</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        showColumnResizing
        paging={{
          defaultCurrentPage: 0,
          defaultPageSize: 5,
          pageSizes: pageSizes
        }}
        defaultColumnWidths={[
          { columnName: 'name', width: 500 },
          { columnName: 'gender', width: 100 },
          { columnName: 'city', width: 130 },
          { columnName: 'car', width: 150 }
        ]}
        filters={[
          {
            columnName: 'name',
            predicate: (value, filter, row) => value === 'Marco'
          }
        ]}
      />
      <Typography variant='h5' style={{ marginTop: 30 }}>Remote paging (see console)</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        paging={{
          currentPage: 1,
          onCurrentPageChange: (page) => {
            console.log(page)
          },
          pageSize: 5,
          onPageSizeChange: (pageSize) => {
            console.log(pageSize)
          },
          pageSizes: pageSizes,
          totalCount: 13
        }}
      />
    </div>
  )
}

storiesOf('Grid', Standard)
  .add('Basic', Standard)
  .add('Search', Search)
  .add('Selection', Selection)
  .add('Sorting', Sorting)
  .add('Paging', Paging)
