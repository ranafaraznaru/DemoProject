import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	Cards: {
		[theme.breakpoints.up("md")]: {
			display: "flex",
			justifyContent: "center",
		},
	},
	customizeCard: {
		[theme.breakpoints.down("md")]: {
			marginRight: "35em",
		},
		"&:hover": {
			boxShadow: "0 0 11px rgba(33,33,33,.2)",
		},
	},
	secondCard: {
		[theme.breakpoints.down("md")]: {
			maxWidth: "fit-content",
			minWidth: "294px",
		},
		"&:hover": {
			boxShadow: "0 0 11px rgba(33,33,33,.2)",
		},
		[theme.breakpoints.up("md")]: {
			minWidth: "250px",
		},
	},
	thirdCard: {
		[theme.breakpoints.up("md")]: {
			marginLeft: "1em",
			minWidth: 250,
			paddingBottom: "4.4em",
		},
	},
}));
const Cards = () => {
	const classes = useStyles();

	return (
		<>
			<Typography
				variant="h6"
				component="div"
				sx={{ paddingTop: "30px", color: "#637586", textAlign: "center" }}
				pb={4}
			>
				Finance
			</Typography>
			<Box
				className={classes.Cards}
				sx={{
					paddingLeft: "50px",
				}}
			>
				<Link to="/myaccount" style={{ textDecoration: "none" }}>
					<Card
						sx={{ marginBottom: "1em", marginRight: "1em", minWidth: 250 }}
						className={`${classes.customizeCard}`}
					>
						<CardContent>
							<Typography
								variant="h6"
								component="div"
								sx={{ paddingTop: "5px", color: "#637586" }}
							>
								My Accounts
							</Typography>
							<Typography
								variant="body2"
								component="div"
								sx={{
									fontWeight: "400",
									color: "#798692",
									lineHeight: "1.5",
									fontSize: "17px",
								}}
							>
								Pay
							</Typography>
							<Box sx={{ float: "right", paddingTop: "20px" }}>
								<Typography
									variant="body2"
									component="div"
									sx={{
										fontWeight: "400",
										color: "#798692",
										lineHeight: "1.5",
										fontSize: "20px",
									}}
								>
									+ 2500 €
								</Typography>
								<Typography
									variant="body2"
									component="div"
									sx={{
										fontWeight: "400",
										color: "#798692",
										lineHeight: "1.5",
										fontSize: "13px",
									}}
								>
									Current accounts
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Link>
				<Link to="/categorization" style={{ textDecoration: "none" }}>
					<Card
						sx={{ marginBottom: "1em" }}
						className={` ${classes.secondCard}`}
					>
						<CardContent>
							<Typography
								variant="h6"
								component="div"
								sx={{ paddingTop: "5px", color: "#637586" }}
							>
								Categorization
							</Typography>
							<Box sx={{ float: "right", paddingTop: "45px" }}>
								<Typography
									variant="body2"
									component="div"
									sx={{
										fontWeight: "400",
										color: "#798692",
										lineHeight: "1.5",
										fontSize: "20px",
									}}
								>
									12
								</Typography>
								<Typography
									variant="body2"
									component="div"
									sx={{
										fontWeight: "400",
										color: "#798692",
										lineHeight: "1.5",
										fontSize: "13px",
									}}
								>
									to Assign
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Link>
				<Link to="/financialsummary" style={{ textDecoration: "none" }}>
					<Card
						// sx={{ marginLeft: "1em", minWidth: 250, paddingBottom: "4.4em" }}
						// className={classes.customizeCard}
						className={`${classes.thirdCard}`}
					>
						<CardContent>
							<Typography
								variant="h6"
								component="div"
								sx={{ paddingTop: "5px", color: "#637586" }}
							>
								Financial summary
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Box>
		</>
	);
};

export default Cards;
