import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { gray, primary, red, themePalette } from "../../Theme/colors";
import { assets } from "../../assets";
import InputField from "../../Components/InputField";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/route-constants";
const SignUp = () => {
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
          <Box
            component="img"
            src={assets.signUp}
            alt="Sign Image"
            width={800}
            height={800}
          />
        </Stack>
        <Stack width={1} justifyContent={"center"} alignItems={"center"}>
          <Stack height={0.7} spacing={2} width={"60%"}>
            <Typography variant="cardTitle">Sign up</Typography>
            <Typography>
              Let’s get you all st up so you can access your personal account.
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <InputField label="First Name" value="" onChange={() => {}} />
              <InputField label="Last Name" value="" onChange={() => {}} />
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <InputField label="Email" value="" onChange={() => {}} />
              <InputField label="Phone Number" value="" onChange={() => {}} />
            </Stack>
            <InputField label="Password" value="" onChange={() => {}} />
            <InputField label="Confirm Password" value="" onChange={() => {}} />

            <Stack alignItems={"center"} direction={"row"} width={1}>
              <Checkbox checked={true} sx={{ pl: 0 }} />
              <Typography>
                I agree to all the{" "}
                <span style={{ color: red[400], cursor: "pointer" }}>
                  Terms
                </span>{" "}
                and{" "}
                <span style={{ color: red[400], cursor: "pointer" }}>
                  Privacy Policies
                </span>
                .
              </Typography>
            </Stack>
            <Button size="large" variant="contained" color="primary">
              Create account
            </Button>
            <Typography variant="mec_body">
              Already have an account?{" "}
              <span
                style={{ color: red[400], cursor: "pointer" }}
                onClick={() => navigate(RouteConstants.ROUTE_LOGIN)}
              >
                Login{" "}
              </span>
            </Typography>
            <Stack
              width={1}
              direction={"row"}
              alignItems={"center"}
              spacing={1}
            >
              <Divider sx={{ flex: 1 }} />
              <Typography color={themePalette.palette.mecGray.main}>
                Or Sign up with
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Stack>
            <Stack direction={"row"} justifyContent={"space-around"}>
              <Stack
                border={`1px solid ${primary[500]}`}
                px={6}
                py={1}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  "&:hover": {
                    backgroundColor: themePalette.palette.primary.light,
                  },
                  cursor: "pointer",
                  borderRadius: 2,
                }}
              >
                <Box
                  component={"img"}
                  src={assets.faceBookIcon}
                  alt="Facebook Icon"
                  sx={{ height: 38, width: 38 }}
                />
              </Stack>
              <Stack
                border={`1px solid ${primary[500]}`}
                px={6}
                py={1}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  "&:hover": {
                    backgroundColor: themePalette.palette.primary.light,
                  },
                  cursor: "pointer",
                  borderRadius: 2,
                }}
              >
                <Box
                  component={"img"}
                  src={assets.googleIcon}
                  alt="Facebook Icon"
                  sx={{ height: 32, width: 32 }}
                />
              </Stack>
              <Stack
                border={`1px solid ${primary[500]}`}
                px={6}
                py={1}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  "&:hover": {
                    backgroundColor: themePalette.palette.primary.light,
                  },
                  cursor: "pointer",
                  borderRadius: 2,
                }}
              >
                <Box
                  component={"img"}
                  src={assets.appleIcon}
                  alt="Facebook Icon"
                  sx={{ height: 38, width: 38 }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignUp;
