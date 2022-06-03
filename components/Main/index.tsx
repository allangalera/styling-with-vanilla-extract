import { ReactNode, useEffect, useState } from "react";
import { sprinkles } from "../../styles/sprinkles.css";
import { light as lightTheme } from "../../styles/theme/light.css";
import { dark as darkTheme } from "../../styles/theme/dark.css";
import { useWatchMedia } from "../../hooks/useWatchMedia";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  const [theme, setTheme] = useState(lightTheme);
  const matches = useWatchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    setTheme(matches ? darkTheme : lightTheme);
  }, [matches]);

  return (
    <main
      className={[
        theme,
        sprinkles({
          display: "flex",
          flexDirection: {
            sm: "row",
            md: "column",
          },
          background: "gray1",
        }),
      ].join(" ")}
    >
      {children}
    </main>
  );
};
