import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import { LocationOn } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DiamondIcon from '@mui/icons-material/Diamond';
import BusinessIcon from '@mui/icons-material/Business';

const SpaceOverviewCard = ({item}) =>{    
    return (
       <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <Card sx={{ width: 280, height: 280, padding: 2, position: "relative" }}>
      <div container style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "gray" }}>
        <div item style={{ flexGrow:1,textAlign:"left", width: "75%",fontSize:"17px",color:"black",fontWeight:600 }}>{item.name}</div>
        <div item style={{ flexDirection: "column", display: "flex", alignItems: "center", background: "#f0f0f0", padding: "4px 8px", borderRadius: 4 }}>
          <LocationOn fontSize="small" style={{ color: "gray" }} />
          <span>6km</span>
        </div>
      </div>
      <CardContent style={{ position: "relative", marginTop: 8, padding: 0 }}>
        <div style={{ position: "relative" }}>
          <img
            src={item.images[0]}
            alt={item.name}
            style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, display: "block" }}
          />
          <span style={{ position: "absolute", top: 8, left: 8, background: "#263238", color: "#FFCF4B", fontSize: 12, padding: "2px 6px", borderRadius: 4 }}>
          {item.type}
          </span>
        </div>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 15 }}>
      <Button
        variant="outlined"
        style={{
        backgroundColor: "#F9F9F9",
        border: "1px solid #A0A0A0",
        color: "#000",
        textTransform: "none",
        padding: "5px 5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "140px",
        position: "relative",
        marginRight:"2px"
    }}
  >
   <span style={{ fontSize: "12px" }}>Day Pass</span>
    <div style={{ width: "100%", textAlign: "left", marginTop: 4 }}>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>{item.day_pass_price}</span>
      <span style={{ fontSize: "12px" }}> /day</span>
    </div>
    <KeyboardDoubleArrowRightIcon style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)" }} />
  </Button>
  <div style={{ position: "relative", display: "inline-block" }}>
  <div
    style={{
      position: "absolute",
      top: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "black",
      color: "#FFF",
      fontSize: "10px",
      fontWeight: "bold",
      padding: "2px 8px",
      whiteSpace: "nowrap",
      zIndex:1,
      borderRadius:"5px"
    }}
  >
    20% Discount
  </div>

  <Button
    variant="outlined"
    style={{
      backgroundColor: "#FFCF4B",
      border: "1px solid #cca63f",
      color: "#000",
      textTransform: "none",
      padding: "5px 5px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "140px",
      position: "relative",
      marginLeft: "2px"
    }}
  >
    <span style={{ fontSize: "12px" }}>Bulk Pass</span>
    <div style={{ width: "100%", textAlign: "left", marginTop: 4 }}>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>{item.day_pass_price * 10 * 0.8 }</span>
      <span style={{ fontSize: "12px" }}> /10 days</span>
    </div>
    <KeyboardDoubleArrowRightIcon
      style={{
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)"
      }}
    />
  </Button>
</div>       
      </div>
      </Card>
      </div>
    )
}


export default SpaceOverviewCard