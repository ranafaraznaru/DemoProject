import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	accountbalanceData: {
		[theme.breakpoints.up("md")]: {
			display: "flex",
			justifyContent: "space-between",
		},
		[theme.breakpoints.down("md")]: {
			display: "flex",
			justifyContent: "space-around",
		},
	},
	currentAccount: {
		[theme.breakpoints.down("md")]: {
			paddingLeft: "21px",
		},
	},
}));

const BalanceOfAccounts = () => {
	const classes = useStyles();

	return (
		<>
			<Box>
				<Box className={classes.accountbalanceData}>
					<Typography variant="h5" gutterBottom>
						Solde des comptes
					</Typography>
					<Typography variant="h5" gutterBottom>
						2
					</Typography>
				</Box>
				<Box className={classes.accountbalanceData}>
					<Typography variant="h6">Date de mise à jour</Typography>

					<Typography variant="h6">7.10.2021</Typography>
				</Box>
				<Stack>
					<Typography
						className={classes.currentAccount}
						variant="h6"
						sx={{ width: "fit-content" }}
					>
						compte courant ING
					</Typography>
				</Stack>
				<Box className={classes.accountbalanceData}>
					<Typography variant="h6" sx={{ width: "fit-content" }}>
						54678000
					</Typography>
					<Typography variant="h6" sx={{ width: "fit-content" }}>
						+350
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default BalanceOfAccounts;
