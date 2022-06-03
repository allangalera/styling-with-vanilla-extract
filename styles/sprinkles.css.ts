import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { colors } from "./tokens/colors";
import { breakpoints, sizings } from "./tokens/space";
import * as typographyTokens from "./tokens/typography";
import { theme } from "./theme/index.css";
import { dark } from "./theme/dark.css";

const responsiveProperties = defineProperties({
  conditions: {
    [sizings["sm"]]: {},
    [sizings["md"]]: {
      "@media": `screen and (min-width: ${breakpoints["md"]})`,
    },
    [sizings["lg"]]: {
      "@media": `screen and (min-width: ${breakpoints["lg"]})`,
    },
    [sizings["xl"]]: {
      "@media": `screen and (min-width: ${breakpoints["xl"]})`,
    },
    [sizings["2xl"]]: {
      "@media": `screen and (min-width: ${breakpoints["2xl"]})`,
    },
  },
  defaultCondition: "sm",
  properties: {
    display: ["flex"],
    flexDirection: ["row", "column"],
    fontSize: theme.fontSize,
  },
});

const colorProperties = defineProperties({
  conditions: {
    light: {},
    dark: { selector: `.${dark} &` },
  },
  defaultCondition: ["light", "dark"],
  properties: {
    color: theme.colors.baseColors,
    background: theme.colors.baseColors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
