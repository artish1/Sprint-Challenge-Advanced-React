import React from "react";

import "./DarkMode.css";
import { useDarkMode } from "../../hooks/useDarkMode";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  console.log("Dark Mode", darkMode);
  return (
    <div className="dark-mode-wrapper">
      <h3>Dark Mode</h3>
      <button onClick={handleClick}>Turn {darkMode ? "off" : "on"}</button>
    </div>
  );
};

export default DarkMode;
