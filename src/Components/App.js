import React from "react";
import NavBar from "./NavBar";
import Cards from "../Components/Cards";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Components/Theme";
import Table from "./Table";
import Categorization from "../Components/Categorization";
import CurrentAccount from "../Components/CurrentAccount";
// import CategorizationTable from "../Components/CategorizationTable";
import { Routes, Route } from "react-router-dom";
import ManageCategories from "../Components/ManageCategories";
import FinancialSummary from "../Components/FinancialSummary";
const App = () => {
	return (
		<>
			<NavBar />
			{/* <CategorizationTable /> */}
			<div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path="/" element={<Cards />} />
						<Route path="/myaccount" element={<Table />} />
						<Route
							path="/myaccount/currentaccount"
							element={<CurrentAccount />}
						/>
						<Route path="/categorization" element={<Categorization />} />
						<Route path="/financialsummary" element={<FinancialSummary />} />

						<Route
							path="/categorization/managecategories"
							element={<ManageCategories />}
						/>
					</Routes>
				</ThemeProvider>
			</div>
		</>
	);
};

export default App;
