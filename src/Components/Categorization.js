import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Button } from "@mui/material";

const columns = [
  { field: "Dated", headerName: "Dated", width: 200 },
  { field: "AccountNumber", headerName: "Account Number", width: 300 },

  {
    field: "Wording",
    headerName: "Wording",

    width: 500,
  },
  {
    field: "Rising",
    headerName: "Rising",

    width: 150,
  },
  {
    field: "Categories",
    headerName: "Categories",

    width: 150,
  },
];

const rows = [
  {
    id: 1,
    AccountNumber: null,
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 2,
    AccountNumber: null,
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 3,
    AccountNumber: null,
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 4,
    AccountNumber: null,
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 5,
    AccountNumber: null,
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 6,
    AccountNumber: "Melisandre",
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 7,
    AccountNumber: "Clifford",
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 8,
    AccountNumber: "Frances",
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
  {
    id: 9,
    AccountNumber: null,
    Dated: "2021-01-10",
    Wording: "TEST",
    Rising: "567",
    Categories: "5",
  },
];

const Categorization = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="subtitle1" gutterBottom component="div">
            Summary of operations assignment
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" href="#outlined-buttons">
            See everything
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Create / Modify category
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Manage automatic assignment rule
          </Button>
        </Box>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  );
};
export default Categorization;