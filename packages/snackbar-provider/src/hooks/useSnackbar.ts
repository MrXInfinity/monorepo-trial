import { useCallback } from "react";
import { useSnackbarContext } from "../provider/SnackbarContext";
import { EachSnackbarType } from "../types";

export function useSnackbar() {
  const { snackBarOptions, setSnackBarOptions } = useSnackbarContext();

  const enqueueSnackbar = useCallback(
    (msg: string, option: Omit<EachSnackbarType, "message" | "id">) => {
      const key = Date.now().toString();
      setSnackBarOptions([
        ...snackBarOptions,
        { message: msg, id: key, ...option },
      ]);

      return key;
    },
    [setSnackBarOptions, snackBarOptions]
  );

  const closeSnackbar = useCallback(
    (key?: string) => {
      if (!key) {
        setSnackBarOptions([]);
      }

      setSnackBarOptions((prev) => prev.filter((p) => p.id !== key));
    },
    [setSnackBarOptions]
  );

  return { enqueueSnackbar, closeSnackbar };
}

export type useSnackbarReturnType = ReturnType<typeof useSnackbar>;
