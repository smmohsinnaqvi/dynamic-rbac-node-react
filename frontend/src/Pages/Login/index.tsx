import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { assets } from "../../assets";
export default function Login() {
  return (
    <>
      <Box
        sx={{
          background: `url(${assets.bg})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{ backgroundColor: "#ffffff8f" }}
          width={500}
          height={600}
          border={`2px solid #fff`}
          borderRadius={"16px"}
          pt={4}
          px={4}
        >
          <Stack direction={"column"} spacing={4}>
            <TextField label="Email" placeholder="Enter Email Address" />
            <TextField label="Password" placeholder="Enter Password" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
