import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Button, Grid } from "@mui/material";

const columns = [
	{ field: "id", headerName: "ID", width: 200 },
	{ field: "Category", headerName: "Category", width: 250 },
	{ field: "SubCategory", headerName: "Sub Category", width: 250 },

	{
		field: "Budget",
		headerName: "Budget",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 300,
		valueGetter: (params) =>
			`${params.getValue(params.id, "Name") || ""} ${
				params.getValue(params.id, "SubCategory") || ""
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

const ManageCategories = (props) => {
	return (
		<>
			<Box>
				<Typography variant="h5" sx={{ textAlign: "center" }} pb={5} pt={3}>
					Manage categories
				</Typography>
			</Box>
			{props.children}
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

			<Box>
				<Grid container spacing={2} columns={12} pl={3} py={3} align="center">
					<Grid item xs={12}>
						<Button
							variant="contained"
							href="#outlined-buttons"
							color="success"
							sx={{ marginRight: "10px" }}
						>
							To validate
						</Button>
						<Button
							variant="contained"
							href="#outlined-buttons"
							color="error"
							sx={{ marginRight: "10px" }}
						>
							Cancel
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};
export default ManageCategories;
