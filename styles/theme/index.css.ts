import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import { colors } from "../tokens/colors";
import { breakpoints } from "../tokens/space";
import * as typographyTokens from "../tokens/typography";

export const root = createGlobalTheme(":root", {
  breakpoins: breakpoints,
  fontSize: typographyTokens.sizes,
});

export const themeContract = createThemeContract({
  baseColors: colors,
  background: null,
  textColor: null,
});

export const theme = { ...root, colors: themeContract };
