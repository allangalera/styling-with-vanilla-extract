export const sizings = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
} as const;

export const breakpoints = {
    [sizings["sm"]]: "30em", // 480px
    [sizings["md"]]: "48em", // 768px
    [sizings["lg"]]: "62em", // 992px
    [sizings["xl"]]: "80em", // 1280px
    [sizings["2xl"]]: "96em", // 1536px
}