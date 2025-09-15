"use client";

import { ReactNode, useState } from "react";
import { EachSnackbarType } from "../types";
import { SnackbarContext } from "./SnackbarContext";
import { Snackbar } from "../components/Snackbar";

export function SnackbarProvider({ children }: { children?: ReactNode }) {
  const [snackBarOptions, setSnackBarOptions] = useState<EachSnackbarType[]>(
    []
  );

  return (
    <SnackbarContext.Provider value={{ snackBarOptions, setSnackBarOptions }}>
      {snackBarOptions.map(({ id, ...rest }) => (
        <Snackbar key={id} id={id} {...rest} />
      ))}
      {children}
    </SnackbarContext.Provider>
  );
}
