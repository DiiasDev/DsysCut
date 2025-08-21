import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../ThemeContext";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    // Adiciona log para depuração
    const handleClick = () => {
        console.log("Botão clicado. Tema atual:", theme);
        toggleTheme();
    };

    return (
        <button
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium
                ${theme === "dark"
                    ? "bg-gray-800 hover:bg-blue-900 text-white"
                    : "bg-gray-100 hover:bg-blue-100 text-gray-900"}`}
            onClick={handleClick}
        >
            {theme === "dark"
                ? React.createElement(FiMoon as React.FC<{ size?: number }>, { size: 20 })
                : React.createElement(FiSun as React.FC<{ size?: number }>, { size: 20 })
            }
            <span>{theme === "dark" ? "Tema Escuro" : "Tema Claro"}</span>
        </button>
    );
}
