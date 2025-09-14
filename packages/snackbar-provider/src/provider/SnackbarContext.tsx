import { createContext, useContext } from "react";
import { EachSnackbarType } from "../types";

interface SnackBarContextType {
  snackBarOptions: EachSnackbarType[];
  setSnackBarOptions: React.Dispatch<React.SetStateAction<EachSnackbarType[]>>;
}

export const SnackbarContext = createContext<SnackBarContextType>({
  snackBarOptions: [],
  setSnackBarOptions: () => [],
});

export const useSnackbarContext = () => {
  if (!SnackbarContext) {
    throw new Error(
      "useSnackbarContext must be used within a SnackbarProvider"
    );
  }
  return useContext(SnackbarContext);
};
