import React from "react";
import NavBar from "./NavBar";
import Cards from "../Components/Cards";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Components/Theme";
import Table from "./Table";
import Categorization from "../Components/Categorization";
// import CategorizationTable from "../Components/CategorizationTable";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/myaccount" element={<Table />} />
            <Route path="/categorization" element={<Categorization />} />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
