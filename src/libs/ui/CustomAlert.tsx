"use client";
import React from "react";
import { Snackbar, Alert, Stack } from "@mui/material";

interface CustomAlertProps {
  open: boolean;
  onClose?: () => void;
  message: string;
  duration?: number;
  severity?: "success" | "info" | "warning" | "error";
  showProgress?: boolean;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  open,
  onClose,
  message,
  duration = 2000,
  severity = "info",
  showProgress = false,
}) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Alert variant="filled" severity={severity} sx={{ flex: 1 }}>
          {message}
        </Alert>
        {showProgress}
      </Stack>
    </Snackbar>
  );
};

export default CustomAlert;
