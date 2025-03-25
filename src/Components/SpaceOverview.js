import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import data from "../data/data.json";
import SpaceOverviewCard from "./SpaceDetailCard";

const styles = {
  container: { maxWidth: "1200px", margin: "0 auto", px: { xs: "1rem", md: "3rem" } },
  titleContainer: { display: "flex", justifyContent: "flex-start" },
  title: { fontSize: "2rem", fontWeight: 600 },
};

const SpaceOverview = () => {
  return (
    <Box sx={styles.container}>
      <Grid2 sx={styles.titleContainer}>
        <p style={styles.title}>Our Space Overview</p>
      </Grid2>
      <Grid2 container spacing={2}>
        {data.map((item, index) => (
          <Grid2 item xs={4} md={6} lg={12} key={index}>
            <SpaceOverviewCard item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default SpaceOverview;
