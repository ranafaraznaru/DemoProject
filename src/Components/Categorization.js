import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import Modals from "../Components/Modals";

// import CategorizationTable from "../Components/CategorizationTable";

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
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-around",
					backgroundColor: "cadetblue",
				}}
				mb={4}
			>
				<Box>
					<Typography variant="h3" component="div" gutterBottom>
						0.00 %
					</Typography>
					<Typography variant="body2" gutterBottom>
						Automation rate
					</Typography>
				</Box>
				<Box>
					<Typography variant="h3" component="div" gutterBottom>
						0
					</Typography>
					<Typography variant="body2" gutterBottom>
						Number of operations to be categorized
					</Typography>
				</Box>
				<Box>
					<Typography variant="h3" component="div" gutterBottom>
						1
					</Typography>
					<Typography variant="body2" gutterBottom>
						Number of categories
					</Typography>
				</Box>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box>
					<Typography variant="subtitle1" gutterBottom component="div">
						Summary of operations assignment
					</Typography>
				</Box>
				<Box>
					<Modals />
				</Box>
			</Box>
			{/* <CategorizationTable /> */}

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
