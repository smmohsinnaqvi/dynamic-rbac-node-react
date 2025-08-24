import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RevenueCard from "./Cards/RevenueCard";
import LostDealCard from "./Cards/LostDealCard";
import ActionBar from "../../Layout/ActionBar";
import QuarterGoals from "./Cards/QuaterGoals";
import CustomerCard from "./Cards/CutomerCard";
import GrowthCard from "./Cards/GrowthCard";
import MNGridCard from "../../Components/MNGridCard";
import SummaryCard from "./Cards/SummaryCard";
import ChatsCard from "./Cards/ChatsCard";
import TopStatesCard from "./Cards/TopStatesCard";
import NewDealsCard from "./Cards/NewDealsCard";
const Dashboard = () => {
  const breadCrumbs = [{ label: "Dashboard", path: "/dashboard" }];

  return (
    <Stack mb={1}>
      <ActionBar breadCrumbs={breadCrumbs} />
      <Grid
        my={2}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <RevenueCard />
        <LostDealCard />
        <QuarterGoals />
      </Grid>
      <Grid container spacing={3} columns={12} sx={{ mt: 1 }}>
        <CustomerCard />
        <Grid size={{ xs: 12, sm: 4, md: 6 }}>
          <Stack height={440} justifyContent={"space-between"} spacing={2}>
            <GrowthCard />
            <Stack
              direction={"row"}
              spacing={3}
              flex={1}
              justifyContent={"center"}
            >
              <SummaryCard
                label="Top month"
                value={"November"}
                subtitle="2019"
                size={{ md: 4 }}
                height={130}
              />
              <SummaryCard
                label="Top year"
                value={"2019"}
                subtitle="96K sold so far"
                size={{ md: 4 }}
                height={130}
              />
              <SummaryCard
                label="Top buyer"
                value={"Mohsin Naqvi"}
                subtitle="Oasis Organic Inc."
                size={{ md: 4 }}
                height={130}
                isAvatar={true}
              />
            </Stack>
          </Stack>
        </Grid>
        <ChatsCard />
        <TopStatesCard />
        <NewDealsCard />
      </Grid>
    </Stack>
  );
};

export default Dashboard;
