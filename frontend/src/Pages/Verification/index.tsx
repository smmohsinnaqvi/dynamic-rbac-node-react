import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { assets } from "../../assets";
import { gray, mecGrey, primary, red, themePalette } from "../../Theme/colors";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/route-constants";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InputField from "../../Components/InputField";
const Verification = () => {
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
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton
                disableRipple
                size="small"
                sx={{ alignItems: "left", "&:hover": { color: primary[500] } }}
                onClick={() => {
                  navigate(RouteConstants.ROUTE_LOGIN);
                }}
              >
                <ArrowBackIosIcon fontSize="small" sx={{}} />
              </IconButton>
              <Typography color={mecGrey[600]} variant="mec_body">
                Back to login
              </Typography>
            </Stack>
            <Typography variant="cardTitle">Verify Code</Typography>
            <Typography color={mecGrey[600]} sx={{ py: 1 }}>
              An authentication code has been sent to your email.
            </Typography>
            <InputField label={"Enter Code"} value={""} onChange={() => {}} />
            <Typography variant="mec_body" sx={{ py: 1 }}>
              Didn’t receive a code?{" "}
              <span style={{ color: red[400] }}>Resend</span>
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {
                navigate(RouteConstants.ROUTE_RESET_PASSWORD);
              }}
            >
              Verify
            </Button>
          </Stack>
        </Stack>
        <Stack width={1} justifyContent={"center"} alignItems={"center"}>
          <Box
            component="img"
            src={assets.login}
            alt="Login Image"
            width={800}
            height={800}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Verification;
