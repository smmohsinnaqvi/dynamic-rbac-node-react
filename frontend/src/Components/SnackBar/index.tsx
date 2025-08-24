import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import { hideSnackbar } from "../../redux/slices/snackBar.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const CustomSnackbar = () => {
  const dispatch = useAppDispatch();
  const { open, message, severity } = useAppSelector(
    (state) => state?.snackbar
  );

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity as AlertColor}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
