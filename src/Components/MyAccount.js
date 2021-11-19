import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import SettingsIcon from "@mui/icons-material/Settings";

const MyAccount = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} pl={3}>
					<Grid item xs={12} md="auto" align="center">
						<Typography variant="subtitle1" gutterBottom component="div">
							Research
						</Typography>
					</Grid>
					<Grid item xs={12} md="auto" align="center">
						<TextField required id="outlined-required" size="small" />
					</Grid>
					<Grid item xs={12} md="auto" align="center">
						<Button variant="contained" href="#outlined-buttons" color="error">
							To Search
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} columns={12} pl={3} py={3}>
					<Grid item xs={12} md={9}>
						<Typography variant="subtitle1" gutterBottom component="div">
							My Account
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Button variant="contained" sx={{ marginLeft: "8px" }}>
							Add
						</Button>
						<Button
							variant="contained"
							color="error"
							sx={{ marginLeft: "15px" }}
						>
							To Delete
						</Button>
						<Button>
							<SettingsIcon />
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default MyAccount;
