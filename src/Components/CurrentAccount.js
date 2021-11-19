import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import logo from "../Components/images/logo.png";

const CurrentAccount = () => {
	return (
		<>
			<Box sx={{ display: "flex" }} pt={4} pl={3}>
				<Box>
					<Typography variant="h5">Mon compte</Typography>
				</Box>

				<Box pl={2}>
					<Typography variant="h6">Compte courant</Typography>
				</Box>
			</Box>
			<Grid container spacing={3} pl={3} py={3}>
				<Grid item md={1} xs={12}>
					<img src={logo} alt="" />
				</Grid>
				<Grid item md={11} xs={12}>
					<Typography variant="h6">Date d'ouverture : 2021-01-10</Typography>
					<Typography variant="h6">Date de création : 2021-10-24</Typography>
					<Typography variant="h6">Numéro de client : XXXXXX</Typography>
				</Grid>
			</Grid>

			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={3} pl={3}>
					<Grid item xs="auto">
						<Button variant="contained" color="success">
							Informations générales
						</Button>
					</Grid>
					<Grid item xs="auto">
						<Button variant="contained" color="error">
							Historique des comptes
						</Button>
					</Grid>
					<Grid item xs="auto">
						<Button variant="contained" color="secondary">
							document lié
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Information sur le compte</Typography>
				<Typography variant="h5">IBAN:</Typography>
				<Typography variant="h5">1,230,000</Typography>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Titulaire:</Typography>
				<Typography variant="h5">Michael</Typography>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Numéro de compte:</Typography>
				<Typography variant="h5">12313</Typography>
			</Box>
			<Box pt={3} pl={3}>
				<Typography variant="h5">Ville</Typography>
				<Typography variant="h5">VALENCE CEDEX</Typography>
				<Typography variant="h5">Nom Rue:</Typography>
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
					<Typography variant="h6">Daté</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h6">Formulation</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h6">En hausse</Typography>
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
						Documents connexes
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
							Ajouter des documents
						</Typography>
					</Box>
				</Box>
				<Box>
					<Typography variant="h5" sx={{ textAlign: "center" }} pb={5}>
						Aucun document trouvé
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default CurrentAccount;
