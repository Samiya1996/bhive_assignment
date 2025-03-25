import React from "react";
import { Typography, Box, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import bhiveImage from "../assets/BHive-WP.webp";
import wallpaper from "../assets/wallpaper.avif";

const theme = createTheme({});

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "60px auto 80px",
    px: { xs: "1rem", md: "3rem" },
  },
  paper: {
    width: "100%",
    display: "flex",
    p: 3,
    backgroundColor: "white",
    position: "relative",
    overflow: "visible",
  },
  imageBox: {
    width: 150,
    height: 320,
    borderRadius: 3,
    border: "4px solid black",
    backgroundColor: "white",
    position: "relative",
  },
  smallImageBox: {
    width: 130,
    height: 260,
    borderRadius: 3,
    border: "4px solid black",
    backgroundColor: "white",
    position: "relative",
  },
  wallpaperBox: {
    width: "100%",
    height: "60%",
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  textBox: {
    width: "100%",
    height: "40%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
  },
};

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>
        <Typography variant="h4" fontWeight={600} textAlign="left" mb={5}>
          Download our app now
        </Typography>
        <Paper elevation={3} sx={styles.paper}>
          <Grid container spacing={1} alignItems="center" overflowY="auto" overflowX="hidden">
            <Grid item xs={6} md={6} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <Box sx={{ display: "flex", gap: 0, alignItems: "flex-end" }}>
                <Box sx={styles.imageBox}>
                  <img src={bhiveImage} alt="BHive" style={{ maxWidth: "100%", maxHeight: "100%", position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
                </Box>
                <Box sx={styles.smallImageBox}>
                  <Box sx={styles.wallpaperBox} />
                  <Box sx={styles.textBox}>
                    <Typography variant="body2" fontWeight={500}>Let's Get Started!</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item container xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", flexShrink: 1, minWidth: 0, overflow: "hidden" }}>
              <Grid item>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Boost your productivity with BHIVE Workspace App.
                </Typography>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item>
                  <Button variant="contained" sx={styles.button} startIcon={<AppleIcon />}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "10px" }}>Get it on</span>
                      <span style={{ fontSize: "14px", fontWeight: "bold" }}>App Store</span>
                    </div>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" sx={styles.button} startIcon={<PlayArrowIcon />}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "10px" }}>Get it on</span>
                      <span style={{ fontSize: "14px", fontWeight: "bold" }}>Google Play</span>
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;