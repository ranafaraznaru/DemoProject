import * as React from "react";
import { Box, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ManageCategories from "../Components/ManageCategories";
import CreateCategory from "../Components/CreateCategory";
import { makeStyles } from "@mui/styles";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

const ChildModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Box>
				<Grid container spacing={2} columns={12} pl={3} py={3} align="center">
					<Grid item xs={12}>
						<Button
							onClick={handleOpen}
							variant="contained"
							href="#outlined-buttons"
							color="secondary"
							sx={{ marginRight: "10px" }}
						>
							To Create
						</Button>
						<Button
							onClick={handleOpen}
							variant="contained"
							href="#outlined-buttons"
							color="success"
							sx={{ marginRight: "10px" }}
						>
							To Modify
						</Button>
						<Button
							onClick={handleOpen}
							variant="contained"
							href="#outlined-buttons"
							color="error"
						>
							To Delete
						</Button>
					</Grid>
				</Grid>
			</Box>

			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box sx={{ ...style, width: 1400 }}>
					<CreateCategory>
						<Button
							onClick={handleClose}
							variant="contained"
							href="#outlined-buttons"
							color="error"
							sx={{ marginRight: "55px" }}
						>
							To cancel
						</Button>
					</CreateCategory>
				</Box>
			</Modal>
		</React.Fragment>
	);
};
const useStyles = makeStyles((theme) => ({
	ButtonText: {
		[theme.breakpoints.down("md")]: {
			fontSize: "8px !important",
		},
	},
}));
const NestedModal = () => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Box sx={{ display: "flex" }}>
				<Box>
					<Button
						className={classes.ButtonText}
						onClick={handleOpen}
						size="small"
						variant="contained"
						href="#outlined-buttons"
						color="error"
						sx={{ marginRight: "10px" }}
					>
						See everything
					</Button>
					<Button
						className={classes.ButtonText}
						onClick={handleOpen}
						size="small"
						variant="contained"
						href="#outlined-buttons"
						color="success"
						sx={{ marginRight: "10px" }}
					>
						Create / Modify category
					</Button>
					<Button
						className={classes.ButtonText}
						onClick={handleOpen}
						size="small"
						variant="contained"
						href="#outlined-buttons"
						color="secondary"
					>
						Manage automatic assignment rule
					</Button>
				</Box>
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...style, width: 1000 }}>
					<ManageCategories>
						<ChildModal />
					</ManageCategories>
				</Box>
			</Modal>
		</div>
	);
};
export default NestedModal;
