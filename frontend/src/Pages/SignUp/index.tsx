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
import { useState } from "react";
import { useSignupMutation } from "../../services/feature/authApi";
import { showSnackbar } from "../../redux/slices/snackBar.slice";
import { useAppDispatch } from "../../redux/hooks";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signup, { isLoading, isError }] = useSignupMutation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: true,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const signUpUser = async () => {
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      const res = await signup(payload).unwrap();
      console.log("Registration Success:", res.data);
      dispatch(
        showSnackbar({
          message: "User Registered Successfully",
          severity: "success",
        })
      );
      navigate(RouteConstants.ROUTE_LOGIN);
    } catch (error: any) {
      console.error("Registration Error:", error.message);
      // show error toast
      showSnackbar({
        message: "Registration Error",
        severity: "error",
      });
    }
  };

  return (
    <Stack
      height={"96.5vh"}
      overflow={"hidden"}
      sx={{ backgroundColor: gray[200], py: 2, px: 4 }}
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
              Let’s get you all set up so you can access your personal account.
            </Typography>

            <Stack direction={"row"} spacing={2}>
              <InputField
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <InputField
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <InputField
                label="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <InputField
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </Stack>
            <InputField
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <InputField
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />

            <Stack alignItems={"center"} direction={"row"} width={1}>
              <Checkbox
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  handleChange("agreedToTerms", e.target.checked)
                }
                sx={{ pl: 0 }}
              />
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

            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={signUpUser}
            >
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
              {[assets.faceBookIcon, assets.googleIcon, assets.appleIcon].map(
                (icon, index) => (
                  <Stack
                    key={index}
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
                      src={icon}
                      alt="Auth Icon"
                      sx={{ height: 38, width: 38 }}
                    />
                  </Stack>
                )
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignUp;
