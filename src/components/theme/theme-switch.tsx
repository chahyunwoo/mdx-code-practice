"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-4 right-4">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme}
      </button>
    </div>
  );
}
