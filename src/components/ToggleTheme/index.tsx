import Sun from "@phosphor-icons/react/dist/icons/Sun";
import Moon from "@phosphor-icons/react/dist/icons/Moon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={32} /> : <Moon size={32} />}
    </button>
  );
}
