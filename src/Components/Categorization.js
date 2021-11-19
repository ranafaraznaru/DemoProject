import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Grid } from "@mui/material";
import Modals from "../Components/Modals";

// import CategorizationTable from "../Components/CategorizationTable";

const columns = [
	{ field: "Dated", headerName: "Daté", width: 200 },
	{ field: "AccountNumber", headerName: "Numéro de compte", width: 300 },

	{
		field: "Wording",
		headerName: "Formulation",

		width: 500,
	},
	{
		field: "En hausse",
		headerName: "Rising",

		width: 150,
	},
	{
		field: "Categories",
		headerName: "Catégories",

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
			<Box sx={{ flexGrow: 1 }} pt={5}>
				<Grid container spacing={3} align="center">
					<Grid item xs={4}>
						<Typography variant="h3" component="div" gutterBottom>
							0.00 %
						</Typography>
						<Typography variant="body2" gutterBottom>
							Taux d'automatisation
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h3" component="div" gutterBottom>
							0
						</Typography>
						<Typography variant="body2" gutterBottom>
							Nombre d'opérations à catégoriser
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h3" component="div" gutterBottom>
							1
						</Typography>
						<Typography variant="body2" gutterBottom>
							Nombre de catégories
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between" }} py={3}>
				<Box>
					<Typography variant="subtitle1" gutterBottom component="div">
						Résumé de l'affectation des opérations
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
