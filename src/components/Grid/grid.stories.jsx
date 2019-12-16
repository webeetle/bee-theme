import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import BeeGrid from './BeeGrid';
import {Typography, Paper, Divider} from "@material-ui/core";


export const Standard = () => {
  const [columns] = useState([
    {name: 'name', title: 'Name'},
    {name: 'gender', title: 'Gender'},
    {name: 'city', title: 'City'},
    {name: 'car', title: 'Car'},
  ]);
  const [rows] = useState([
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Nunzia", gender: "Female", city: "Nocera Inferiore", car: "BMW Serie 1"}
  ]);
  return (
    <div>
      <Typography variant={"h5"}>Default Grid</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
      />
      <Typography variant={"h5"} style={{marginTop: 30}}>Loading Grid</Typography>
      <BeeGrid
        columns={columns}
        rows={[]}
        loading={true}
      />
    </div>
  )
}

export const Search = () => {
  const [columns, setColumns] = useState([
    {name: 'name', title: 'Name'},
    {name: 'gender', title: 'Gender'},
    {name: 'city', title: 'City'},
    {name: 'car', title: 'Car'},
  ]);
  const [rows, setRows] = useState([
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Nunzia", gender: "Female", city: "Nocera Inferiore", car: "BMW Serie 1"}
  ]);

  return (
    <div>
      <Typography variant={"h5"}>Local Search</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        search={{defaultValue: ""}}
      />
      <Typography variant={"h5"} style={{marginTop: 30}}>Use callback - Ckeck console</Typography>
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
    {name: 'name', title: 'Name'},
    {name: 'gender', title: 'Gender'},
    {name: 'city', title: 'City'},
    {name: 'car', title: 'Car'},
  ]);
  const [rows] = useState([
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Giulia", gender: "Female", city: "Nocera Inferiore", car: "BMW Serie 1"}
  ]);
  const [selection, setSelection] = useState([1]);
  return (
    <div>
      <Typography variant={"h5"}>Single Selection</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        selection={{
          showSelectAll: false,
          selection: selection,
          onSelectionChange: setSelection
        }}
      />
      <Typography variant={"h5"} style={{marginTop: 30}}>Allow select "all"</Typography>
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
    {name: 'name', title: 'Name'},
    {name: 'gender', title: 'Gender'},
    {name: 'city', title: 'City'},
    {name: 'car', title: 'Car'},
  ]);
  const [rows] = useState([
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Nunzia", gender: "Female", city: "Nocera Inferiore", car: "BMW Serie 1"}
  ]);

  const [sorting, setSorting] = useState([{columnName: 'city', direction: 'asc'}]);


  return (
    <div>
      <Typography variant={"h5"}>Local Sotring</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}

        sorting={
          {
            defaultSorting: sorting,
            showSortingControls: true,
          }
        }
      />
      <Typography variant={"h5"} style={{marginTop: 30}}>Remote Sorting (see in console)</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        sorting={
          {
            sorting: sorting,
            onSortingChange: (sortingTable) => {
              console.log(sortingTable)
            },
            showSortingControls: true,
          }
        }
      />
    </div>
  )
}

export const Paging = () => {
  const [columns] = useState([
    {name: 'name', title: 'Name'},
    {name: 'gender', title: 'Gender'},
    {name: 'city', title: 'City'},
    {name: 'car', title: 'Car'},
  ]);
  const [rows] = useState([
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Marco", gender: "Male", city: "Angri", car: "Hyundai 10"},
    {name: "Gennaro", gender: "Male", city: "Pagani", car: "Panda 2008"},
    {name: "Nunzia", gender: "Female", city: "Nocera Inferiore", car: "BMW Serie 1"}
  ]);

  const [pageSizes] = useState([5, 10, 15, 0]);

  return (
    <div>
      <Typography variant={"h5"}>Local paging</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        paging={{
          defaultCurrentPage: 0,
          defaultPageSize: 5,
        }
        }
      />
      <Typography variant={"h5"} style={{marginTop: 30}}>Local paging with page size</Typography>
      <BeeGrid
        columns={columns}
        rows={rows}
        paging={{
          defaultCurrentPage: 0,
          defaultPageSize: 5,
          pageSizes: pageSizes
        }}
      />
      <Typography variant={"h5"} style={{marginTop: 30}}>Remote paging (see console)</Typography>
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
