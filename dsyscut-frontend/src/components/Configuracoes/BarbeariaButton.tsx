import React from "react";
import { FiScissors } from "react-icons/fi";

export default function BarbeariaButton() {
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
            {React.createElement(FiScissors as React.FC<{ size?: number }>, { size: 20 })}
            <span>Controle da Barbearia</span>
        </button>
    );
}
