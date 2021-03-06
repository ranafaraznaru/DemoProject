import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
// import SettingsIcon from "@mui/icons-material/Settings";
import AddModal from "./AddModal";
import SettingModal from "../Components/SettingModal";

const MyAccount = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} pl={3}>
					<Grid item xs={12} md="auto" align="center">
						<Typography variant="subtitle1" component="div">
							Recherche
						</Typography>
					</Grid>
					<Grid item xs={12} md="auto" align="center">
						<TextField
							variant="outlined"
							label="Écrivez ici"
							id="outlined-size-small"
							size="small"
						/>
					</Grid>
					<Grid item xs={12} md="auto" align="center">
						<Button variant="contained" href="#outlined-buttons" color="error">
							Chercher
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} columns={12} pl={3} py={3}>
					<Grid item xs={12} md={9}>
						<Typography variant="subtitle1" gutterBottom component="div">
							Mon compte
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Button>
							<AddModal />
						</Button>
						<Button
							variant="contained"
							color="error"
							sx={{ marginLeft: "15px" }}
						>
							Supprimer
						</Button>
						<Button>
							{/* <SettingsIcon /> */}
							<SettingModal />
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default MyAccount;
