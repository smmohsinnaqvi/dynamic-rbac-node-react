import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import {
  gray,
  primary,
  red,
  secondary,
  themePalette,
} from "../../Theme/colors";
import { assets } from "../../assets";
import InputField from "../../Components/InputField";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/route-constants";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../services/feature/authApi";
import { useState } from "react";
import { showSnackbar } from "../../redux/slices/snackBar.slice";
import { setCredentials } from "../../redux/slices/auth.slice";

const Login = () => {
  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCred((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      // Unwrap the result to get the data directly
      const res = await login(loginCred).unwrap();
      dispatch(setCredentials(res)); // res will directly contain user, accessToken, etc.
      navigate(RouteConstants.ROUTE_ENTRY);

      dispatch(
        showSnackbar({ message: "Login successful", severity: "success" })
      );
    } catch (err) {
      dispatch(showSnackbar({ message: err.message, severity: "error" }));
    }
  };
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
            <Typography variant="cardTitle">Login</Typography>
            <Typography>Login to access your OrangeFarm account</Typography>
            <InputField
              label="Email"
              name="email"
              value={loginCred?.email}
              onChange={handleInputChange}
            />
            <InputField
              label="Password"
              name="password"
              value={loginCred?.password}
              onChange={handleInputChange}
            />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Checkbox
                  disableRipple
                  checked={true}
                  sx={{ pl: 0, borderRadius: 2 }}
                />
                <Typography>Remember me</Typography>
              </Stack>
              <Typography
                sx={{ cursor: "pointer" }}
                color={red[400]}
                onClick={() => {
                  navigate(RouteConstants.ROUTE_FORGOT_PASSWORD);
                }}
              >
                Forgot Password ?
              </Typography>
            </Stack>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant="mec_body" sx={{ textAlign: "center" }}>
              Don't have an account?
              <Typography
                variant="mec_body"
                color={red[400]}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(RouteConstants.ROUTE_SIGNUP);
                }}
              >
                {" "}
                Sign Up
              </Typography>
            </Typography>
            <Stack
              width={1}
              direction={"row"}
              alignItems={"center"}
              spacing={1}
            >
              <Divider sx={{ flex: 1 }} />
              <Typography color={themePalette.palette.mecGray.main}>
                Or login with
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

export default Login;
