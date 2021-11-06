import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
const MyAccount = () => {
  return (
    <>
      <Box sx={{ display: "flex" }} pl={2}>
        <Box>
          <Typography variant="subtitle1" gutterBottom component="div">
            Research
          </Typography>
        </Box>
        <Box sx={{ width: "15ch", border: "none", paddingLeft: "15px" }}>
          <TextField id="filled-basic" label="Type here..." size="small" />
        </Box>
        <Box sx={{ paddingLeft: "15px" }}>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            color="error"
            sx={{ paddinBottom: "5px", paddingTop: "9px" }}
          >
            To Search
          </Button>
        </Box>
      </Box>

      <Box p={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="subtitle1" gutterBottom component="div">
            My Account
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{ marginRight: "10px" }}
          >
            Add
          </Button>
          <Button variant="outlined" href="#outlined-buttons" color="error">
            To Delete
          </Button>
          <Button href="#outlined-buttons">
            <SettingsIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MyAccount;
