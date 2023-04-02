"use client";

import classes from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "light");
      console.log(document.body.dataset);
    } else {
      document.body.setAttribute("data-theme", "dark");
      console.log(document.body.dataset);
    }
  };
  return (
    <>
      <div className={classes.header_container}>
        <h1>헤더섹션</h1>
        <button onClick={darkModeHandler}>
          {isDarkMode ? "light-mode" : "dark-mode"}
        </button>
      </div>
    </>
  );
}
