import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { themePalette } from "../../Theme/colors";
import { assets } from "../../assets";

const Login = () => {
  return (
    <Stack
      height={"96vh"}
      overflow={"hidden"}
      sx={{ backgroundColor: themePalette.palette.common.white, px: 3, py: 2 }}
    >
      <Stack
        width={1}
        height={1}
        sx={{ border: "1px solid black" }}
        direction={"row"}
      >
        <Stack width={1} justifyContent={"center"} alignItems={"center"}>
          <Stack
            height={0.5}
            width={"70%"}
            border={`1px solid black`}
            spacing={2}
          >
            <Typography variant="cardTitle">Login</Typography>
            <Typography>Login to access your OrangeFarm account</Typography>
            <TextField
              label="email"
              title="Email"
              placeholder="Enter your email"
            />
            <TextField
              label="email"
              title="Email"
              placeholder="Enter your email"
            />
          </Stack>
        </Stack>
        <Stack width={1} justifyContent={"center"} alignItems={"center"}>
          <Box
            component="img"
            src={assets.login}
            alt="Logout Icon"
            width={800}
            height={800}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
