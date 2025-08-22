import React from "react";
import { FiUser } from "react-icons/fi";

export default function UsuarioButton() {
    return (
        <button
            className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition"
            style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)"
            }}
            onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--color-hover-row)";
            }}
            onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--color-bg-card)";
            }}
        >
            {React.createElement(FiUser as React.FC<{ size?: number }>, { size: 20 })}
            <span>Editar Usuário</span>
        </button>
    );
}
