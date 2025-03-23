import React from "react";
import {Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import backgroundImage from "../assets/meeting2.avif" 

const MeetingBanner = () => {
    return (
        <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "40vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "0 auto", px: { xs: "1rem", md: "3rem" }
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width:"60%", height: "100%" }}
        >
          <Typography variant="h4" color="white" fontWeight="bold"
          sx={{ fontSize: { xs: "1rem", md: "2.5rem" }, p: 1, borderRadius: 1 }}
                      
          >
            <Box component="span" sx={{ color: "black" }}>Host your meetings with world-class amenities. Starting at</Box>
            <Box component="span" sx={{ color: "#FFBB00" }}> ₹199/-!</Box>
          </Typography>
        </Grid>
      </Box>
    );
  };

export default MeetingBanner;
