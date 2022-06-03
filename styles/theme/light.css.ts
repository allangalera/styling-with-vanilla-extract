import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./index.css";
import { gray } from "@radix-ui/colors";

export const light = createTheme(themeContract, {
  baseColors: {
    ...gray,
  },
  background: gray.gray1,
  textColor: gray.gray12,
});
