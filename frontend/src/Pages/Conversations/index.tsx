import { Grid2 as Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import ActionBar from "../../Layout/ActionBar";
import ConversationList from "./ConversationList";
import Conversation from "./Conversation";
import { gray, themePalette } from "../../Theme/colors";

const Conversations = () => {
  const breadCrumbs = [
    {
      label: `Conversations`,
      path: "",
    },
  ];
  return (
    <Stack>
      <ActionBar breadCrumbs={breadCrumbs} />
      <Stack direction={"row"} height={"93vh"} overflow={"hidden"} mt={1}>
        <Grid container columns={12} width={1} spacing={1}>
          <Grid
            size={2.5}
            sx={{
              backgroundColor: themePalette.palette.common.white,
              border: `1px solid ${gray[650]}`,
              height: 1,
              borderRadius: "0 0 0px 8px",
            }}
          >
            <ConversationList />
          </Grid>
          <Grid
            size={9.5}
            sx={{
              border: `1px solid ${gray[650]}`,
              borderRadius: "0 0 8px 0px",
            }}
          >
            <Conversation />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Conversations;
