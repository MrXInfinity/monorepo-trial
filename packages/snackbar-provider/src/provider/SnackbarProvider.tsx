"use client";

import { ReactNode, useCallback, useState } from "react";
import { EachSnackbarType } from "../types";
import { SnackbarContext } from "./SnackbarContext";
import { Snackbar } from "../components/Snackbar";
import { Box, SnackbarCloseReason } from "@mui/material";

export function SnackbarProvider({ children }: { children?: ReactNode }) {
  const [snackBarOptions, setSnackBarOptions] = useState<EachSnackbarType[]>(
    []
  );

  const handleEachSnackbarClose = useCallback(
    (id: string, reason: SnackbarCloseReason) => {
      if (reason === "clickaway" || reason === "escapeKeyDown") {
        return;
      }
      setSnackBarOptions((prev) => prev.filter((s) => s.id !== id));
    },
    []
  );

  return (
    <SnackbarContext.Provider value={{ snackBarOptions, setSnackBarOptions }}>
      <Box>
        {snackBarOptions.map(({ id, ...rest }, idx) => (
          <Snackbar
            onClose={(_, reason) => handleEachSnackbarClose(id, reason)}
            sx={{ mb: idx * 8 }}
            key={id}
            id={id}
            {...rest}
          />
        ))}
      </Box>
      {children}
    </SnackbarContext.Provider>
  );
}
