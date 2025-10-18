"use client";

import {
  Alert,
  Snackbar as MuiSnackbar,
  SnackbarCloseReason,
  SnackbarProps,
} from "@mui/material";
import { EachSnackbarType } from "../types";
import { useCallback, useState } from "react";

export function Snackbar({
  id,
  variant,
  message,
  onClose,
  ...rest
}: EachSnackbarType & SnackbarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(
    (_: React.SyntheticEvent<unknown> | Event, reason: SnackbarCloseReason) => {
      if (reason === "clickaway" || reason === "escapeKeyDown") {
        return;
      }
      setIsOpen(false);

      setTimeout(() => onClose?.(_, reason), 200);
    },
    [onClose]
  );

  return (
    <MuiSnackbar
      key={id}
      onClose={handleClose}
      open={isOpen}
      autoHideDuration={6000}
      {...rest}
    >
      <Alert severity={variant}>
        {message} {id}
      </Alert>
    </MuiSnackbar>
  );
}
