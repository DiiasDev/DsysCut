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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                background: "rgba(0,0,0,0.4)"
            }}
        >
            <div
                className="rounded-xl w-full max-w-md p-8 relative flex flex-col gap-6"
                style={{
                    background: "var(--color-bg-card)",
                    color: "var(--color-text)",
                    boxShadow: "0 8px 32px 0 var(--color-border)",
                    border: `1px solid var(--color-border)`
                }}
            >
                <button
                    className="absolute top-4 right-4 text-xl"
                    style={{
                        color: "var(--color-text-secondary)",
                        background: "transparent",
                        border: "none"
                    }}
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    ×
                </button>
                <h2
                    className="text-2xl font-bold mb-2"
                    style={{
                        color: "var(--color-accent)"
                    }}
                >
                    Configurações
                </h2>
                <div className="flex flex-col gap-4">
                    <ThemeToggleButton />
                    <UsuarioButton />
                    <BarbeariaButton />
                </div>
            </div>
        </div>
    );
}
