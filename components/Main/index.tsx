import { ReactNode } from "react";
import { sprinkles } from "../../styles/sprinkles.css";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <main
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
      })}
    >
      {children}
    </main>
  );
};
