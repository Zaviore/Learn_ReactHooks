import React, { useState } from "react";

import Array from "./array";
import Usefek from "./useEffect";
import Count from "./count";
import ClassCount from "./classcount";

export const ThemeContext = React.createContext();

function Indexs() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Count initialCount={0} />
      <ClassCount initialCount={0} />
      <Array />
      <Usefek />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        {" "}
        toggle theme{" "}
      </button>
    </ThemeContext.Provider>
  );
}

export default Indexs;
