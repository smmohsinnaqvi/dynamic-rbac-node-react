import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MNGridCard from "../../Components/MNGridCard";
import RevenueCard from "./Cards/RevenueCard";
import LostDealCard from "./Cards/LostDealCard";
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
      <MNGridCard sx={{ height: 400 }} size={{ xs: 2, sm: 4, md: 6 }}>
        <LostDealCard />
      </MNGridCard>

      <Grid sx={{ height: 200 }} size={{ xs: 2, sm: 4, md: 6 }}>
        <Grid container spacing={2}>
          <MNGridCard sx={{ height: 242 }} size={{ md: 12 }}></MNGridCard>

          <MNGridCard sx={{ height: 142 }} size={{ md: 4 }}></MNGridCard>
          <MNGridCard sx={{ height: 142 }} size={{ md: 4 }}></MNGridCard>
          <MNGridCard sx={{ height: 142 }} size={{ md: 4 }}></MNGridCard>
        </Grid>
      </Grid>
      <MNGridCard size={{ md: 3.5 }}></MNGridCard>
      <MNGridCard size={{ md: 3.5 }}></MNGridCard>
      <MNGridCard size={{ md: 5 }}></MNGridCard>
    </Grid>
  );
};

export default Dashboard;
