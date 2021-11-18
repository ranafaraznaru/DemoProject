import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import SettingsIcon from "@mui/icons-material/Settings";

const MyAccount1 = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Box xs={12} sx={{ display: "flex" }} pl={2}>
							<Box>
								<Typography variant="subtitle1" gutterBottom component="div">
									Research
								</Typography>
							</Box>
							<Box sx={{ width: "15ch", border: "none", paddingLeft: "15px" }}>
								<TextField
									id="filled-basic"
									label="Type here..."
									size="small"
								/>
							</Box>
							<Box sx={{ paddingLeft: "15px" }}>
								<Button
									variant="contained"
									href="#outlined-buttons"
									color="error"
									sx={{ paddinBottom: "5px", paddingTop: "9px" }}
								>
									To Search
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box>
							<Typography variant="subtitle1" gutterBottom component="div">
								My Account
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
						{" "}
						<Box>
							<Button
								variant="contained"
								href="#outlined-buttons"
								sx={{ marginRight: "10px" }}
							>
								Add
							</Button>
							<Button
								variant="contained"
								href="#outlined-buttons"
								color="error"
							>
								To Delete
							</Button>
							<Button href="#outlined-buttons">
								<SettingsIcon />
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default MyAccount1;
