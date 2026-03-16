"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="fixed top-8 left-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-all hover:scale-110 hover:bg-black/5 dark:hover:bg-white/5" aria-label="Toggle theme">
        <div className="h-5 w-5 bg-transparent" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-8 left-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-all hover:scale-110 hover:bg-black/5 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {/* Sun icon shows only in dark mode to switch to light */}
      <Sun className="h-5 w-5 text-black dark:text-white hidden dark:block transition-all" />
      
      {/* Moon icon shows only in light mode to switch to dark */}
      <Moon className="h-5 w-5 text-black dark:text-white block dark:hidden transition-all" />
    </button>
  );
}
