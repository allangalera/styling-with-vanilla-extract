import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { colors } from "./tokens/colors";
import { breakpoints, sizings } from "./tokens/space";
import * as typographyTokens from "./tokens/typography";

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
    fontSize: typographyTokens.sizes,
  },
});

const colorProperties = defineProperties({
  conditions: {
    light: {
      "@media": "(prefers-color-scheme: light)",
    },
    dark: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: ["light", "dark"],
  properties: {
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
