import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function DarkMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme ? JSON.parse(currentTheme) : "light";
  });

  useEffect((): void => {
    localStorage.setItem("theme", JSON.stringify(theme));
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex-none" onClick={toggleTheme}>
      Mode
    </div>
  );
}

export default DarkMode;
