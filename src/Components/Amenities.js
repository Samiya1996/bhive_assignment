import * as React from 'react';
import Box from '@mui/material/Box';
import  { Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WifiIcon from '@mui/icons-material/Wifi';
import CoffeeIcon from '@mui/icons-material/Coffee';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ChairIcon from '@mui/icons-material/Chair';
import UpdateIcon from '@mui/icons-material/Update';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';


const listOfAmenities = [
    {label:"Community Events",
     logo: <PeopleIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"Gym facilities",
     logo: <FitnessCenterIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"High Speed Wifi",
     logo: <WifiIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"Cafe & Tea Bar",
     logo: <CoffeeIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"Affordable",
     logo: <MonetizationOnIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"Comfort Lounges",
     logo: <ChairIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"Quick Booking",
     logo: <UpdateIcon style={{fontSize:"2rem"}}/>  
    },
    {label:"Sports Area",
     logo: <SportsTennisIcon style={{fontSize:"2rem"}}/>  
    },   
]

const Amenities = () =>{
    return(
 <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: "1rem", md: "3rem" } }}>
    <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>
      <p style={{fontSize:"2rem",fontWeight:600}}>Why choose us?</p>
    </Grid>
    <Grid container spacing={{ xs: 2, md: 0 }}> 
      {listOfAmenities.map((item, index) => (
        <Grid item xs={4} md={6} lg={6} key={index}> 
          <Paper 
          sx={{
            height: {xs:60,md:80},
            width: {md:250, xs:90},
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" }, 
            textAlign: "center",
            padding: 2,
            borderRadius: { xs: "8px", md: "0" }
            
          }}
          >
            <Box sx={{ color: "#FFBB00", margin: 0 }}>{item.logo}</Box>
            <Box 
          sx={{ 
            margin: { xs: 0, md: "1rem" } 
          }}
        >
          {item.label}
        </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
    )

}

export default Amenities