import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { Stack, Typography } from "@mui/material";
import GrowthChart from "../GrowthChart";

const GrowthCard = () => {
  return (
    <MNGridCard size={12} sx={{ height: 295 }}>
      <Stack height={1} spacing={1} justifyContent={"space-between"}>
        <Stack
          p={`32px 32px 16px 32px`}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="cardTitle">Growth</Typography>
          <Typography variant="card_text1">Yearly</Typography>
        </Stack>
        <Stack overflow={"hidden"} p={0}>
          <GrowthChart />
        </Stack>
      </Stack>
    </MNGridCard>
  );
};

export default GrowthCard;
