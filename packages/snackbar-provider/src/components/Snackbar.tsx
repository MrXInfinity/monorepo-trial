"use client";

import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import { EachSnackbarType } from "../types";

export function Snackbar({ id, variant, message }: EachSnackbarType) {
  return (
    <MuiSnackbar key={id} open={true} autoHideDuration={6000}>
      <Alert
        // onClose={handleClose}
        severity={variant}
        // variant="filled"
        // sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
}
