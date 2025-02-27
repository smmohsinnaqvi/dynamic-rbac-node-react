import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MNGridCard from "../../Components/MNGridCard";
import RevenueCard from "./Cards/RevenueCard";
const Dashboard = () => {
  return (
    <Grid
      mb={2}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <RevenueCard />
      <MNGridCard size={{ xs: 2, sm: 4.5, md: 4.5 }}></MNGridCard>
      <MNGridCard size={{ xs: 2, sm: 3, md: 3 }}></MNGridCard>
    </Grid>
  );
};

export default Dashboard;
