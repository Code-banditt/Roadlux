"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Settings() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <motion.div
      className=" h-screen mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-r from-gray-800 to-zinc-600 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-primary">Settings</h2>

      <div className="flex items-center justify-between bg-base-200 p-4 rounded-xl">
        <div className="text-base-content">Appearance (Dark Mode)</div>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          {theme === "light" ? (
            <>
              <Sun className="w-5 h-5" />
              Light
            </>
          ) : (
            <>
              <Moon className="w-5 h-5" />
              Dark
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
