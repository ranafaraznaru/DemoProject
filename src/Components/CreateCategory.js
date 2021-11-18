import React from "react";
import { Box, TextField, Grid, Typography, Button } from "@mui/material";
const CreateCategory = (props) => {
	return (
		<>
			<Box sx={{ backgroundColor: "white" }}>
				<Box>
					<Typography variant="h5" sx={{ textAlign: "center" }} pb={5} pt={3}>
						Manage categories
					</Typography>
				</Box>
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, marginLeft: "40px" },
					}}
					noValidate
					autoComplete="off"
				>
					<Grid container spacing={10}>
						<Grid item xs={3}>
							<div>
								<TextField
									label="Category"
									id="outlined-size-small"
									size="small"
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div>
								<TextField
									label="Sub-category"
									id="outlined-size-small"
									size="small"
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div>
								<TextField
									label="Movement"
									id="outlined-size-small"
									size="small"
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div>
								<TextField
									label="Budget"
									id="outlined-size-small"
									size="small"
								/>
							</div>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "end",
						marginTop: "40px",
						paddingTop: "40px",
						paddingBottom: "30px",
						backgroundColor: "white",
						minWidth: "100%",
					}}
				>
					<Button
						variant="contained"
						href="#outlined-buttons"
						color="success"
						sx={{ marginRight: "10px" }}
					>
						To validate
					</Button>

					{props.children}
				</Box>
			</Box>
		</>
	);
};

export default CreateCategory;
