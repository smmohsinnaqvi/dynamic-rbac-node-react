import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { gray, mecGrey, themePalette } from "../../Theme/colors";
import { assets } from "../../assets";
import InputField from "../../Components/InputField";
import { RouteConstants } from "../../constants/route-constants";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <Stack
      height={"96.5vh"}
      overflow={"hidden"}
      sx={{
        backgroundColor: gray[200],
        py: 2,
        px: 4,
      }}
    >
      <Stack
        width={1}
        height={1}
        sx={{
          boxShadow: `rgba(0, 0, 0, 0.2) 0px 18px 50px -10px`,
          backgroundColor: themePalette.palette.common.white,
          borderRadius: 4,
        }}
        direction={"row"}
      >
        <Stack width={1} justifyContent={"center"} alignItems={"center"}>
          <Stack height={0.5} spacing={2} width={"60%"}>
            <Typography variant="cardTitle">Set a password </Typography>
            <Typography color={mecGrey[600]}>
              Your previous password has been reseted. Please set a new password
              for your account.
            </Typography>
            <InputField
              label="Create password"
              value={""}
              onChange={() => {}}
              sx={{ py: 1 }}
            />
            <InputField
              label="Re-enter password"
              value={""}
              onChange={() => {}}
              sx={{ py: 1 }}
            />
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => navigate(RouteConstants.ROUTE_LOGIN)}
            >
              Set Password
            </Button>
          </Stack>
        </Stack>
        <Stack width={1} justifyContent={"center"} alignItems={"center"}>
          <Box
            component="img"
            src={assets.forgotPassword}
            alt="Login Image"
            width={800}
            height={800}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ResetPassword;
