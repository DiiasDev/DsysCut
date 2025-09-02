import React from "react";
import { FiLogOut } from "react-icons/fi";

export default function LoggoutButton() {
    const handleClick = () => {
        localStorage.removeItem("isLogged");
        localStorage.removeItem("selectedTab");
        localStorage.removeItem("theme");
        localStorage.removeItem("token");
        window.location.reload()
    }
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
            onClick={handleClick} // <-- Mude para o botão!
        >
            {React.createElement(FiLogOut as React.FC<{ size?: number }>, { size: 20 })}
            <span>Sair</span>
        </button>
    );
}
