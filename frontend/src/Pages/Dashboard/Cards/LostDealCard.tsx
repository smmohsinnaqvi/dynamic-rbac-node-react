import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { gray, themePalette } from "../../../Theme/colors";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LostDealCard = () => {
  return (
    <MNGridCard size={{ xs: 2, sm: 4.5, md: 4.5 }}>
      <Stack p={4} height={1} spacing={1}>
        <Typography variant="cardTitle">Lost Deals</Typography>
        <Stack py={2}>
          <Typography variant="card_h2">4%</Typography>
          <Typography variant="card_text1">
            You closed 96 out of 100 deals
          </Typography>
        </Stack>
        <Stack
          height={1}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          sx={{ cursor: "pointer", width: "fit-content" }}
        >
          <Typography alignContent={"center"} variant="card_click">
            {`All Deals`}
          </Typography>
          <ArrowRightAltIcon
            sx={{ color: themePalette.palette.secondary.main }}
          />
        </Stack>
      </Stack>
    </MNGridCard>
  );
};

export default LostDealCard;
