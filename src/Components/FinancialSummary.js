import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography } from "@mui/material";
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
				Welcome to your financial summary, Alexis.
			</Typography>

			<Typography
				variant="body1"
				gutterBottom
				component="div"
				sx={{ textAlign: "center" }}
			>
				Find out your habits. Manage your money smarter
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
								<BalanceOfAccounts />
								<BalanceOfAccounts />
							</Item>
						</Scrollbars>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default FinancialSummary;
