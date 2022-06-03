import { ReactNode } from "react";
import * as styles from "./index.css";

import { sprinkles, Sprinkles } from "../../styles/sprinkles.css";

type TextProps = {
  children: ReactNode;
  fontSize?: Sprinkles["fontSize"];
};

export const Text = ({ children, fontSize = "base" }: TextProps) => {
  return (
    <p
      className={[
        styles.container,
        sprinkles({
          fontSize: fontSize,
        }),
      ].join(" ")}
    >
      {children}
    </p>
  );
};
