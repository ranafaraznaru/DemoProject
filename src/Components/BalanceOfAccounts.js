import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	BalanceOfAccounts: {
		[theme.breakpoints.down("md")]: {},
	},
}));

const BalanceOfAccounts = () => {
	const classes = useStyles();

	return (
		<>
			<Box>
				<Box sx={{ display: "flex" }}>
					<Typography variant="h5" gutterBottom>
						Balance of Accounts
					</Typography>
					<Typography variant="h5" gutterBottom sx={{ marginLeft: "170px" }}>
						2
					</Typography>
				</Box>
				<Box sx={{ display: "flex" }}>
					<Typography variant="h6">Date of update</Typography>

					<Typography variant="h6" sx={{ marginLeft: "180px" }}>
						7.10.2021
					</Typography>
				</Box>
				<Stack>
					<Typography variant="h6" sx={{ width: "fit-content" }}>
						ING current account
					</Typography>
				</Stack>
				<Box sx={{ display: "flex" }}>
					<Typography variant="h6" sx={{ width: "fit-content" }}>
						54678000
					</Typography>
					<Typography
						variant="h6"
						sx={{ width: "fit-content", marginLeft: "260px" }}
					>
						+ 350
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default BalanceOfAccounts;
