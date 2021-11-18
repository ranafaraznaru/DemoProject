import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import logo from "../Components/images/logo.png";

const CurrentAccount = () => {
	return (
		<>
			<Box sx={{ display: "flex" }} pt={4} pl={3}>
				<Box>
					<Typography variant="h5">My Account</Typography>
				</Box>

				<Box pl={2}>
					<Typography variant="h6">Current account</Typography>
				</Box>
			</Box>
			<Grid container spacing={3} pl={3} py={3}>
				<Grid item md={1} xs={12}>
					<img src={logo} alt="" />
				</Grid>
				<Grid item md={11} xs={12}>
					<Typography variant="h6">Opening Date: 2021-01-10</Typography>
					<Typography variant="h6">Creation Date :2021-10-24</Typography>
					<Typography variant="h6">Client number : XXXXXX</Typography>
				</Grid>
			</Grid>

			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} pl={3}>
					<Grid item xs="auto">
						<Button variant="contained" color="success">
							General Information
						</Button>
					</Grid>
					<Grid item xs="auto">
						<Button variant="contained" color="error">
							Accounts history
						</Button>
					</Grid>
					<Grid item xs="auto">
						<Button variant="contained" color="secondary">
							linked document
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Account information</Typography>
				<Typography variant="h5">IBAN:</Typography>
				<Typography variant="h5">1,230,000</Typography>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Incumbent:</Typography>
				<Typography variant="h5">Michael</Typography>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Account number:</Typography>
				<Typography variant="h5">12313</Typography>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">City</Typography>
				<Typography variant="h5">VALENCE CEDEX</Typography>
				<Typography variant="h5">Name Street:</Typography>
				<Typography variant="h5">Amundi ESR</Typography>
			</Box>
			<Grid
				container
				spacing={2}
				pl={3}
				mt={3}
				pb={3}
				sx={{ backgroundColor: "darksalmon" }}
			>
				<Grid item xs={4}>
					<Typography variant="h6">Dated</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h6">Wording</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h6">Rising</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">2021-01-10</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">TEST</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">10</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">2021-01-10</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">TEST</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">10</Typography>
				</Grid>
			</Grid>
			<Box>
				<Box>
					<Typography variant="h5" pl={3} pt={3}>
						Related documents
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }} py={5}>
					<Box>
						<Typography variant="h5" pl={3}>
							Documents (0)
						</Typography>
					</Box>
					<Box>
						<Typography variant="h5" pr={3}>
							Add documents
						</Typography>
					</Box>
				</Box>
				<Box>
					<Typography variant="h5" sx={{ textAlign: "center" }} pb={5}>
						No document found
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default CurrentAccount;
