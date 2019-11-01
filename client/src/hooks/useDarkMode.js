import React, { useState, useEffect } from "react";

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useState(initialValue);

  useEffect(() => {
    let element = document.querySelector("body");
    if (darkMode) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
