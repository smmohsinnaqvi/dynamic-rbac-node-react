import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const MNGridCard = styled(Grid)(({ theme }) => ({
  height: 260,
  width: "100%",
  borderRadius: 4,
  backgroundColor: "#ffffff",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
}));

export default MNGridCard;
