import React from "react";
import NavBar from "./NavBar";
import Cards from "../Components/Cards";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Components/Theme";
import Table from "./Table";
import MyAccount from "../Components/MyAccount";
import Categorization from "../Components/Categorization";
const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <ThemeProvider theme={theme}>
          <Cards />
        </ThemeProvider>
        <MyAccount />
        <Table />
        <Categorization />
      </div>
    </>
  );
};

export default App;
