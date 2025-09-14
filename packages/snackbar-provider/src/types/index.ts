export type SnackbarVariant = "info" | "success" | "error";

export interface EachSnackbarType {
  id: string;
  message: string;
  variant: SnackbarVariant;
}
