import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { Box, Stack, Typography } from "@mui/material";
import { assets } from "../../../assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { themePalette } from "../../../Theme/colors";

const RevenueCard = () => {
  return (
    <MNGridCard size={{ xs: 2, sm: 4.5, md: 4.5 }}>
      <Stack p={4} height={1} spacing={1}>
        <Typography variant="cardTitle">Revenues</Typography>
        <Stack py={2}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography variant="card_h2">15%</Typography>
            <Box
              component="img"
              src={assets.revenue}
              alt="Revenue Icon"
              sx={{
                height: 20,
                width: 20,
              }}
            />
          </Stack>
          <Typography variant="card_text1">
            Increase compared to last week
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
            {`Revenue Reports`}
          </Typography>
          <ArrowRightAltIcon
            sx={{ color: themePalette.palette.secondary.main }}
          />
        </Stack>
      </Stack>
    </MNGridCard>
  );
};

export default RevenueCard;
