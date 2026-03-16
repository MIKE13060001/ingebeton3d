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
      <button className="fixed top-4 left-8 md:top-6 md:left-6 z-50 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-black/5 dark:border-white/5 bg-white/10 dark:bg-black/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/10 dark:hover:bg-white/10" aria-label="Toggle theme">
        <div className="h-3.5 w-3.5 bg-transparent" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 left-8 md:top-6 md:left-6 z-50 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-black/5 dark:border-white/5 bg-white/20 dark:bg-black/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-black/30 dark:hover:bg-white/30 group"
      aria-label="Toggle theme"
    >
      {/* Sun icon shows only in dark mode to switch to light */}
      <Sun className="h-3 w-3 md:h-3.5 md:w-3.5 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white hidden dark:block transition-all" />
      
      {/* Moon icon shows only in light mode to switch to dark */}
      <Moon className="h-3 w-3 md:h-3.5 md:w-3.5 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white block dark:hidden transition-all" />
    </button>
  );
}
