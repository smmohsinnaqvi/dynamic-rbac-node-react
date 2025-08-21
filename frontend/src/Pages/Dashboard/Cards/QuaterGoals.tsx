import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { Box, Stack, Typography } from "@mui/material";
import { assets } from "../../../assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { themePalette } from "../../../Theme/colors";

const QuarterGoals = () => {
  return (
    <MNGridCard size={{ xs: 2, sm: 3, md: 3 }}>
      <Stack p={4} height={1} spacing={1}>
        <Typography variant="cardTitle" textAlign={"center"}>
          Quarter Goal
        </Typography>
      </Stack>
    </MNGridCard>
  );
};

export default QuarterGoals;
