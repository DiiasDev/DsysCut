import React from "react";
import { FiUser } from "react-icons/fi";
import { ThemeProvider } from "./ThemeContext";

export default function UsuarioButton() {
    return (
        <ThemeProvider>
            <button
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition font-medium"
            >
                {React.createElement(FiUser as React.FC<{ size?: number }>, { size: 20 })}
                <span>Editar Usuário</span>
            </button>
        </ThemeProvider>
    );
}