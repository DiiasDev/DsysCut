import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggleButton() {
    const [dark, setDark] = useState(false);
    return (
        <button
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition font-medium"
            onClick={() => setDark(d => !d)}
        >
            {dark
                ? React.createElement(FiMoon as React.FC<{ size?: number }>, { size: 20 })
                : React.createElement(FiSun as React.FC<{ size?: number }>, { size: 20 })
            }
            <span>{dark ? "Tema Escuro" : "Tema Claro"}</span>
        </button>
    );
}
