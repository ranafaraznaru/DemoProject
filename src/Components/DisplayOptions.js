import React from "react";
import {
	Grid,
	Typography,
	TextField,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Button,
} from "@mui/material";

const DisplayOptions = () => {
	return (
		<>
			<Grid container spacing={2} align="center" pt={4}>
				<Grid xs={12}>
					<Typography variant="h5" gutterBottom component="div">
						Option d'affichage
					</Typography>
				</Grid>
				<Grid xs={12}>
					<TextField
						id="outlined-basic"
						label="Recherche"
						variant="outlined"
						size="small"
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Tout sélectionner (#NbreOfEntry)"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="identifiant"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Nom"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Opération"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Numéro de compte"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="IBAN"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Titulaire"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Date de création"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Monnaie"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Date d'ouverture"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Numéro client"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="TOUCHE"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Type de compte"
						/>
					</FormGroup>
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
		</>
	);
};

export default DisplayOptions;
