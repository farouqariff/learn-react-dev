import { useContext } from "react";
import { LevelContext } from "./LevelContext.js";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section
      style={{
        border: isFancy ? "4px dashed #f9a8d4" : "2px solid #9ca3af", // Pink-300 dan Gray-400
      }}
      className="p-4"
    >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
