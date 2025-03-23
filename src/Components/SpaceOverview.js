import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import data from "../data/data.json"
import SpaceOverviewCard from "./SpaceDetailCard";


const SpaceOverview = () =>{
    return(
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: "1rem", md: "3rem" } }}>        <Grid2 sx={{ display: "flex", justifyContent: "flex-start" }}>
          <p style={{fontSize:"2rem",fontWeight:600}}>Our Space Overview</p>
        </Grid2>
        <Grid2 container spacing={2}>
            {data.map((item)=>(
                <Grid2 item xs={4} md={6} lg={12}>
                    <SpaceOverviewCard item={item}/>
                </Grid2>
            ))}
        </Grid2>
        </Box>
    )
}

export default SpaceOverview
