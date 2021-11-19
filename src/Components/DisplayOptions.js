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
						Display Options
					</Typography>
				</Grid>
				<Grid xs={12}>
					<TextField
						id="outlined-basic"
						label="Research"
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
							label="Select All (#NbreOfEntry)"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="id"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Name"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Surgery"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Account Number"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="IBAN"
						/>{" "}
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Incumbent"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Creation Date"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Currency"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Opening Date"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Client Number"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="KEYB"
						/>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Account Type"
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
						To validate
					</Button>
					<Button
						variant="contained"
						href="#outlined-buttons"
						color="error"
						sx={{ marginRight: "10px" }}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default DisplayOptions;
