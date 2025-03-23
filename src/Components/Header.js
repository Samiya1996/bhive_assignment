import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import bhiveLogo from "../assets/bhiveLogo.jpg";

const PageHeader =() =>{
  return (
   
   <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
      <img src={bhiveLogo} alt="BHIVE Logo" style={{ height: "40px" }} />
        <Typography component="div" sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <p style={{ 
            margin: 0, 
            color: "black", 
            fontSize: "1.5rem", 
            fontWeight: "bold", 
            letterSpacing: "3px" 
          }}>
            BHIVE
          </p>
          <p style={{ 
            margin: 0, 
            color: "black", 
            fontSize: "1rem", 
            letterSpacing: "2px" 
          }}>
            WORKSPACE
          </p>
        </Typography>
        </Box>
        <Button
          sx={{
            width: 40,
            height: 40,
            border: "2px solid #FFBB00",
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "unset",
          }}
        >
          <CallIcon sx={{ color: "#FFBB00" }} />
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default PageHeader;