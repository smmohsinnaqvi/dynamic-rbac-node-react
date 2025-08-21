import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { Box, Stack, Typography } from "@mui/material";
import { assets } from "../../../assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { themePalette } from "../../../Theme/colors";
import CustomList from "../../../Components/CustomList";

const customerList = [
  {
    id: 1,
    name: "Chris Friedkly",
    subtitle: "Supermarket Villanova",
    avatarUrl: "/images/chris.jpg",
  },
  {
    id: 2,
    name: "Maggie Johnson",
    subtitle: "Oasis Organic Inc.",
    avatarUrl: "/images/maggie.jpg",
  },
  {
    id: 3,
    name: "Maggie Johnson",
    subtitle: "Oasis Organic Inc.",
    avatarUrl: "/images/maggie.jpg",
  },
  {
    id: 3,
    name: "Maggie Johnson",
    subtitle: "Oasis Organic Inc.",
    avatarUrl: "/images/maggie.jpg",
  },
];

const CustomerCard = () => {
  return (
    <MNGridCard
      sx={{ height: 440, overFlow: "hidden" }}
      size={{ xs: 12, sm: 4, md: 6 }}
    >
      <Stack height={1} spacing={1} justifyContent={"space-between"}>
        <Stack p={`32px 32px 16px 32px`}>
          <Typography variant="cardTitle">Customers</Typography>
        </Stack>
        <Stack px={1} sx={{ overflowY: "auto" }}>
          <CustomList data={customerList} />
        </Stack>
        <Stack
          p={`16px 32px 16px 32px`}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          sx={{ cursor: "pointer", width: "fit-content" }}
        >
          <Typography alignContent={"center"} variant="card_click">
            {`All Customers`}
          </Typography>
          <ArrowRightAltIcon
            sx={{ color: themePalette.palette.secondary.main }}
          />
        </Stack>
      </Stack>
    </MNGridCard>
  );
};

export default CustomerCard;
