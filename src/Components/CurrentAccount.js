import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import logo from "../Components/images/logo.png";

const CurrentAccount = () => {
	return (
		<>
			<Box sx={{ display: "flex" }} pt={3} pl={2}>
				<Box>
					<Typography variant="h5">My Account</Typography>
				</Box>

				<Box pl={2}>
					<Typography variant="h6">Current account</Typography>
				</Box>
			</Box>
			<Box sx={{ display: "flex" }} pt={3} pl={2}>
				<Box>
					<img src={logo} alt="" />
				</Box>
				<Box pl={7}>
					<Typography variant="h6">
						Opening Date: 2021-01-10
						<br />
						Creation Date :2021-10-24
						<br />
						Client number : XXXXXX
						<br />
					</Typography>
				</Box>
			</Box>
			<Box pl={2}>
				<Button variant="contained" color="success">
					General Information
				</Button>
				<Button variant="contained" color="error" sx={{ marginLeft: "10px" }}>
					Accounts history
				</Button>
				<Button
					variant="contained"
					color="secondary"
					sx={{ marginLeft: "10px" }}
				>
					linked document
				</Button>
			</Box>
			<Box pt={3} pl={2}>
				<Typography variant="h5">Account information</Typography>
				<Typography variant="h5">IBAN:</Typography>
				<Typography variant="h5">1,230,000</Typography>
			</Box>
			<Box pt={3} pl={2}>
				<Typography variant="h5">Incumbent:</Typography>
				<Typography variant="h5">Michael</Typography>
			</Box>
			<Box pt={3} pl={2}>
				<Typography variant="h5">Account number:</Typography>
				<Typography variant="h5">12313</Typography>
			</Box>
			<Box pt={3} pl={2}>
				<Typography variant="h5">City</Typography>
				<Typography variant="h5">VALENCE CEDEX</Typography>
				<Typography variant="h5">Name Street:</Typography>
				<Typography variant="h5">Amundi ESR</Typography>
			</Box>
			<Grid
				container
				spacing={2}
				pl={2}
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
					<Typography variant="h5" pl={2} pt={3}>
						Related documents
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }} py={5}>
					<Box>
						<Typography variant="h5" pl={2}>
							Documents (0)
						</Typography>
					</Box>
					<Box>
						<Typography variant="h5" pr={2}>
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
