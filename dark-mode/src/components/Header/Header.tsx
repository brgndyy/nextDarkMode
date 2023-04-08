"use client";

import classes from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.body;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      <div className={classes.header_container}>
        <h1>헤더섹션</h1>
        {darkTheme !== undefined && (
          <button onClick={handleToggle}>
            {darkTheme ? "light-mode" : "dark-mode"}
          </button>
        )}
      </div>
    </>
  );
}
