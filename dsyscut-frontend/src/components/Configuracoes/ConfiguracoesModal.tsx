import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import UsuarioButton from "./UsuarioButton";
import BarbeariaButton from "./BarbeariaButton";
import { useTheme } from "../../ThemeContext";

interface ConfiguracoesModalProps {
    open: boolean;
    onClose: () => void;
}

export default function ConfiguracoesModal({ open, onClose }: ConfiguracoesModalProps) {
    const { theme } = useTheme();
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div
                className={`rounded-xl shadow-2xl w-full max-w-md p-8 relative flex flex-col gap-6
                    ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    ×
                </button>
                <h2 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-blue-300" : "text-blue-700"}`}>Configurações</h2>
                <div className="flex flex-col gap-4">
                    <ThemeToggleButton />
                    <UsuarioButton />
                    <BarbeariaButton />
                </div>
            </div>
        </div>
    );
}
