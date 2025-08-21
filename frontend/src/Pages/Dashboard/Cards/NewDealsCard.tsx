import MNGridCard from "../../../Components/MNGridCard";
import { Stack, Typography } from "@mui/material";
import { mecGrey, themePalette } from "../../../Theme/colors";

const NewDealsCard = () => {
  return (
    <MNGridCard size={{ md: 4 }} sx={{ height: 200 }}>
      <Stack p={2} spacing={2}>
        <Typography variant="cardTitle">New deals</Typography>

        <Stack
          direction={"row"}
          height={1}
          spacing={1}
          alignItems={"center"}
        ></Stack>
      </Stack>
    </MNGridCard>
  );
};

export default NewDealsCard;
