import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

const columns = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "Category", headerName: "Category", width: 300 },
    { field: "SubCategory", headerName: "Sub Category", width: 300 },

    {
        field: "Budget",
        headerName: "Budget",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 300,
        valueGetter: (params) =>
            `${params.getValue(params.id, "Name") || ""} ${params.getValue(params.id, "SubCategory") || ""
            }`,
    },

];

const rows = [
    {
        id: 1,
        SubCategory: "Snow",
        Category: "Amundi",

    },
    {
        id: 2,
        SubCategory: "Lannister",
        Category: "Amundi",

    },

];

const ManageCategories = () => {
    return (
        <>
            <Box>
                <Typography variant="h5" sx={{ textAlign: 'center' }} pb={5} pt={3} >
                    Manage categories
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h5"  >
                        Category management
                    </Typography>
                </Box>
                <Box>
                    <Link to='/categorization/managecategories/createcategory' style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" href="#outlined-buttons" color="secondary" sx={{ marginRight: '10px' }} >
                            To Create
                        </Button>

                        <Button variant="outlined" href="#outlined-buttons" color="success" sx={{ marginRight: '10px' }}>
                            To Modify
                        </Button>
                        <Button variant="outlined" href="#outlined-buttons" color="error">
                            To Delete
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box pt={4}>

                <div style={{ height: 400, width: "100%" }}>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />

                </div>
            </Box>
            <Box sx={{ float: 'right' }}>
                <Button variant="outlined" href="#outlined-buttons" color="success" sx={{ marginRight: '10px' }}>
                    To validate
                </Button>

                <Button variant="outlined" href="#outlined-buttons" color="error" >
                    To cancel
                </Button>

            </Box>
        </>
    );
};
export default ManageCategories;
