import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { Box, Stack, Typography } from "@mui/material";
import { assets } from "../../../assets";

const RevenueCard = () => {
  return (
    <MNGridCard size={{ xs: 2, sm: 4.5, md: 4.5 }}>
      <Stack px={4} py={2} spacing={1} height={1}>
        <Typography variant="cardTitle">Revenues</Typography>
        <Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography
              fontSize="48px"
              fontFamily={"Inter,sans-serif"}
              fontWeight={400}
            >
              15%
            </Typography>
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
          <Typography
            fontSize="14px"
            fontFamily={"Inter,sans-serif"}
            fontWeight={400}
            sx={{ color: "#454545" }}
          >
            Increase compared to last week
          </Typography>
        </Stack>
        <Typography
          height={1}
          width={1}
          alignContent={"center"}
          fontSize="16px"
          fontFamily={"Inter,sans-serif"}
          fontWeight={400}
          sx={{ color: "#734A00" }}
        >
          {`Revenue report ->`}
        </Typography>
      </Stack>
    </MNGridCard>
  );
};

export default RevenueCard;
