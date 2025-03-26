"use client";

import { FaMoon,FaSun } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const ModeToggleTheme = () => {
  const { setTheme, theme } = useTheme();


  return (
    <Button
      className="cursor-pointer"
      variant="variant"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-white cursor-pointer" />
      ) : (
        <FaMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-white cursor-pointer" />
      )}
    </Button>
  );
};

export default ModeToggleTheme;
