import React from "react";
import { Box, Grid, TextField, Fab, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
const AddAccounts = () => {
	return (
		<>
			<Grid container spacing={2} align="center" pt={4}>
				<Grid xs={12}>
					<Typography variant="h5" gutterBottom component="div">
						Ajouter des comptes
					</Typography>
				</Grid>
			</Grid>

			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={2}
					sx={{ displa: "flex", justifyContent: "center" }}
				>
					<Grid item xs={12} align="center">
						<span>
							institution financière
							<DropdownButton
								variant="warning"
								id="dropdown-basic-button"
								title="Amundi"
							>
								<Dropdown.Item href="#/action-1">demo1</Dropdown.Item>
								<Dropdown.Item href="#/action-2">demo2</Dropdown.Item>
								<Dropdown.Item href="#/action-3">demo3</Dropdown.Item>
							</DropdownButton>
						</span>
					</Grid>
					<Grid item xs={12} align="center">
						<span>
							Type de compte
							<DropdownButton
								variant="warning"
								id="dropdown-basic-button"
								title="Assurance vie"
							>
								<Dropdown.Item href="#/action-1">demo1</Dropdown.Item>
								<Dropdown.Item href="#/action-2">demo2</Dropdown.Item>
								<Dropdown.Item href="#/action-3">demo3</Dropdown.Item>
							</DropdownButton>
						</span>
					</Grid>
					<Grid item xs={12} align="center">
						<span>
							IBAN
							<br />
							<TextField
								id="outlined-basic"
								label="Cherche ici.."
								variant="outlined"
								size="small"
							/>
						</span>
					</Grid>
					<Grid item xs={12} align="center">
						<span>
							Téléchargement CSV1
							<br />
							<label htmlFor="upload-photo">
								<input
									style={{ display: "none" }}
									id="upload-photo"
									name="upload-photo"
									type="file"
								/>
								<Fab
									color="secondary"
									size="small"
									component="span"
									aria-label="add"
									variant="extended"
								>
									<AddIcon />
									Choisir le fichier
								</Fab>
							</label>
						</span>
					</Grid>
					<Grid item xs={12} align="center">
						<span>
							Téléchargement CSV2
							<br />
							<label htmlFor="upload-photo">
								<input
									style={{ display: "none" }}
									id="upload-photo"
									name="upload-photo"
									type="file"
								/>
								<Fab
									color="primary"
									size="small"
									component="span"
									aria-label="add"
									variant="extended"
								>
									<AddIcon /> Choisir le fichier
								</Fab>
							</label>
						</span>
					</Grid>
				</Grid>
				<Grid container spacing={2} columns={12} pl={3} py={3} align="center">
					<Grid item xs={12}>
						<Button
							variant="contained"
							href="#outlined-buttons"
							color="success"
							sx={{ marginRight: "10px" }}
						>
							Valider
						</Button>
						<Button
							variant="contained"
							href="#outlined-buttons"
							color="error"
							sx={{ marginRight: "10px" }}
						>
							Annuler
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default AddAccounts;
