import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MyAccount from "../Components/MyAccount";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "Name", headerName: "Name", width: 200 },
  { field: "AccountNumber", headerName: "Account Number", width: 300 },

  {
    field: "IBAN",
    headerName: "IBAN",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.getValue(params.id, "Name") || ""} ${params.getValue(params.id, "AccountNumber") || ""
      }`,
  },
  {
    field: "Incumbent",
    headerName: "Incumbent",
    width: 110,
  },
  {
    field: "Clientnumber",
    headerName: "Client number",

    width: 150,
  },
  {
    field: "AccountType",
    headerName: "Account Type",

    width: 150,
  },
];

const rows = [
  {
    id: 1,
    AccountNumber: "Snow",
    Name: "Amundi",
    Incumbent: "Michael",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 2,
    AccountNumber: "Lannister",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 3,
    AccountNumber: "Lannister",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 4,
    AccountNumber: "Stark",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 5,
    AccountNumber: "Targaryen",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 6,
    AccountNumber: "Melisandre",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 7,
    AccountNumber: "Clifford",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 8,
    AccountNumber: "Frances",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
  {
    id: 9,
    AccountNumber: "Roxie",
    Name: "Amundi",
    Incumbent: "john",
    Clientnumber: "567",
    AccountType: "5",
  },
];

const Table = () => {
  return (
    <>
      <Box pt={4}>
        <MyAccount />
        <div style={{ height: 400, width: "100%" }}>
          <Link to='/myaccount/currentaccount' style={{ textDecoration: 'none' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
            />
          </Link >
        </div>
      </Box>
    </>
  );
};
export default Table;
