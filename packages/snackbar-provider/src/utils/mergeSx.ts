import { SxProps, Theme } from "@mui/material";

export type SxObject<T extends object> =
  SxProps<T> extends infer U
    ? U extends ReadonlyArray<unknown>
      ? never
      : U
    : never;

export function mergeSx<T extends object = Theme>(
  ...sxArray: (SxProps<T> | undefined)[]
): SxProps<T> | undefined {
  if (sxArray.length < 2) return sxArray[0];
  return sxArray.reduce<SxObject<T>[]>((acc, sx) => {
    if (!sx) {
      return acc;
    }
    if (Array.isArray(sx)) {
      return [...acc, ...sx];
    }
    return [...acc, sx];
  }, []) as SxProps<T>;
}
