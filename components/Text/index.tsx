import { ReactNode } from "react";
import * as styles from "./index.css";

import { sprinkles, Sprinkles } from "../../styles/sprinkles.css";

type TextProps = {
  children: ReactNode;
  fontSize?: Sprinkles["fontSize"];
  color?: Sprinkles["color"];
};

export const Text = ({
  children,
  fontSize = "base",
  color = "gray12",
}: TextProps) => {
  return (
    <p
      className={[
        styles.container,
        sprinkles({
          fontSize: fontSize,
          color: color,
        }),
      ].join(" ")}
    >
      {children}
    </p>
  );
};
