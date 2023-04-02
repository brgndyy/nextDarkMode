"use client";

import classes from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
    const theme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // 기본값 "light" 추가
    if (savedTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      document.body.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);

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
