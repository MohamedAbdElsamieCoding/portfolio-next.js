"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newThemeIsDark = !html.classList.contains("dark");

    html.classList.toggle("dark", newThemeIsDark);
    setIsDark(newThemeIsDark);
  };

  return (
    <button
      className={clsx(
        "text-xl rounded-md border border-border p-2 bg-surface text-primary",
      )}
      onClick={toggleTheme}
    >
      {isDark ? <LuMoon /> : <LuSun />}
    </button>
  );
};

export default ThemeToggle;
