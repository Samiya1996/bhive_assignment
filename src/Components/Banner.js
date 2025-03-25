import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import backgroundImage from "../assets/meeting2.avif";

const styles = {
  banner: {
    position: "relative",
    width: "100%",
    height: "40vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
    px: { xs: "1rem", md: "3rem" },
  },
  gridContainer: {
    width: "60%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: { xs: "1rem", md: "2.5rem" },
    p: 1,
    borderRadius: 1,
    fontWeight: "bold",
  },
  blackText: {
    color: "black",
  },
  highlightText: {
    color: "#FFBB00",
  },
};

const MeetingBanner = () => {
  return (
    <Box sx={styles.banner}>
      <Grid container sx={styles.gridContainer}>
        <Typography variant="h4" color="white" sx={styles.text}>
          <Box component="span" sx={styles.blackText}>
            Host your meetings with world-class amenities. Starting at
          </Box>
          <Box component="span" sx={styles.highlightText}> ₹199/-!</Box>
        </Typography>
      </Grid>
    </Box>
  );
};

export default MeetingBanner;