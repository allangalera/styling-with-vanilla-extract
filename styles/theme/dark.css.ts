import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./index.css";
import { grayDark } from "@radix-ui/colors";

export const dark = createTheme(themeContract, {
  baseColors: {
    ...grayDark,
  },
  background: grayDark.gray1,
  textColor: grayDark.gray12,
});
