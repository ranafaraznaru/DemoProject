import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	CardsHover: {
		"&:hover": {
			boxShadow: "0 0 11px rgba(33,33,33,.2)",
		},
		[theme.breakpoints.up("md")]: {
			marginRight: "1em",
		},
		[theme.breakpoints.down("md")]: {
			marginRight: "1em",
		},
		[theme.breakpoints.up("xs")]: {
			marginLeft: "2em",
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
			<Box sx={{ flexGrow: 1 }}>
				<Grid sx={{ justifyContent: "center" }} container spacing={2}>
					<Link to="/myaccount" style={{ textDecoration: "none" }}>
						<Grid item xs={12} sm={4} md={3} sx={{ marginBottom: "1rem" }}>
							{" "}
							<Card sx={{ minWidth: 275 }} className={classes.CardsHover}>
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
						</Grid>
					</Link>
					<Link to="/categorization" style={{ textDecoration: "none" }}>
						<Grid item xs={12} sm={4} md={3} sx={{ marginBottom: "1rem" }}>
							{" "}
							<Card sx={{ minWidth: 275 }} className={classes.CardsHover}>
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
											10
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
						</Grid>
					</Link>
					<Link to="/financialsummary" style={{ textDecoration: "none" }}>
						<Grid item xs={12} sm={4} md={3}>
							{" "}
							<Card
								sx={{ minWidth: 275, paddingBottom: "70px" }}
								className={classes.CardsHover}
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
						</Grid>
					</Link>
				</Grid>
			</Box>
		</>
	);
};

export default Cards;
