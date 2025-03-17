import React from "react";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MNGridCard from "../../Components/MNGridCard";
import RevenueCard from "./Cards/RevenueCard";
import LostDealCard from "./Cards/LostDealCard";
import { gray, themePalette } from "../../Theme/colors";
import theme from "../../Theme";
import ActionBar from "../../Layout/ActionBar";
const Dashboard = () => {
  const breadCrumbs = [{ label: "Dashboard", path: "/dashboard" }];
  return (
    <Stack
      sx={
        {
          // border: `1px solid ${gray[650]}`,
          // borderTop: "none",
          // borderRadius: 2,
        }
      }
    >
      <ActionBar breadCrumbs={breadCrumbs} />

      <Grid
        my={2}
        // p={1}
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
    </Stack>
  );
};

export default Dashboard;
