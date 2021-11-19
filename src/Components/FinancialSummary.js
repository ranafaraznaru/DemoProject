import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Card, CardContent } from "@mui/material";
import PieChart from "../Components/PieChart";
import ColumnChart from "./ColumnChart";
import BalanceOfAccounts from "../Components/BalanceOfAccounts";
import { Scrollbars } from "react-custom-scrollbars";
const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const FinancialSummary = () => {
	return (
		<>
			<Typography
				variant="h5"
				gutterBottom
				component="div"
				sx={{ textAlign: "center" }}
			>
				Bienvenue dans votre récapitulatif financier, Alexis.
			</Typography>

			<Typography
				variant="body1"
				gutterBottom
				component="div"
				sx={{ textAlign: "center" }}
			>
				Découvrez vos habitudes. Gérez votre argent plus intelligemment
			</Typography>

			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={4}>
						<Item>
							<PieChart />
						</Item>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Item>
							{" "}
							<PieChart />
						</Item>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Item>
							{" "}
							<ColumnChart />
						</Item>
					</Grid>
				</Grid>
				<Grid container spacing={2} pt={3}>
					<Grid item xs={12} lg={4}>
						<Item>
							<PieChart />
						</Item>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Item>
							{" "}
							<PieChart />
						</Item>
					</Grid>

					<Grid item xs={12} lg={4}>
						<Scrollbars style={{ height: 200 }}>
							<Item>
								{" "}
								<BalanceOfAccounts />
								<BalanceOfAccounts />
							</Item>
						</Scrollbars>
					</Grid>
				</Grid>
			</Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4} mt={2}>
					<Card sx={{ minWidth: 275 }}>
						<CardContent
							sx={{ display: "flex", justifyContent: "space-between" }}
						>
							<Typography
								variant="h6"
								component="div"
								sx={{
									paddingTop: "5px",
									paddingLeft: "10px",
									color: "#637586",
								}}
							>
								Espèces
							</Typography>
							<Typography
								variant="h6"
								component="div"
								sx={{ paddingTop: "5px", color: "#637586" }}
							>
								600 €
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4} mt={2}>
					<Card sx={{ minWidth: 275 }}>
						<CardContent
							sx={{ display: "flex", justifyContent: "space-between" }}
						>
							<Typography
								variant="h6"
								component="div"
								sx={{ paddingTop: "5px", color: "#637586" }}
							>
								Patrimoine
							</Typography>
							<Typography
								variant="h6"
								component="div"
								sx={{ paddingTop: "5px", color: "#637586" }}
							>
								200 €
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default FinancialSummary;
