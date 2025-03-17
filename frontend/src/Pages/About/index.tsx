import React from "react";
import ActionBar from "../../Layout/ActionBar";
import { Stack, Typography } from "@mui/material";

function About() {
  const breadCrumbs = [
    {
      label: "About",
      path: "/about",
    },
  ];
  return (
    <>
      <ActionBar breadCrumbs={breadCrumbs} />
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography>This is about page</Typography>
      </Stack>
    </>
  );
}

export default About;
