import React from "react";
import "./Header.css";
import { FaBell, FaSearch } from "react-icons/fa";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => (
  <header
    className="w-full border-b shadow px-4 py-2 flex items-center justify-between sticky top-0 z-10 h-16"
    style={{
      background: "linear-gradient(90deg, var(--color-bg) 0%, var(--color-bg-card) 50%, var(--color-bg) 100%)",
      borderBottom: "1px solid var(--color-border)"
    }}
  >
    <div className="flex items-center gap-2">
      <span
        className="text-2xl font-extrabold tracking-tight drop-shadow"
        style={{ color: "var(--color-accent)" }}
      >
        DsysCut
      </span>
    </div>
    <div className="flex items-center gap-4">
      {/* Barra de pesquisa */}
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="rounded-full px-4 py-1 text-sm focus:outline-none transition w-36 md:w-52 shadow-sm"
          style={{
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
            boxShadow: "0 1px 2px 0 var(--color-border)"
          }}
        />
        <span
          className="absolute right-3 top-1.5"
          style={{ color: "var(--color-accent)" }}
        >
          {React.createElement(FaSearch as React.ElementType, { className: "text-base" })}
        </span>
      </div>
      {/* Notificações */}
      <button
        className="relative p-1 rounded-full transition shadow-sm"
        style={{ background: "transparent" }}
      >
        {React.createElement(FaBell as React.ElementType, { style: { color: "var(--color-accent)", fontSize: "1.25rem" } })}
        <span
          className="absolute top-0 right-0 text-[10px] rounded-full px-1.5 py-0.5 font-bold shadow"
          style={{
            background: "var(--color-error)",
            color: "var(--color-bg-card)"
          }}
        >
          3
        </span>
      </button>
      {/* Usuário */}
      <div className="flex items-center gap-2">
        <span
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {userName}
        </span>
        <span
          className="rounded-full w-8 h-8 flex items-center justify-center font-bold shadow border-2 text-xs"
          style={{
            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
            color: "var(--color-bg-card)",
            borderColor: "var(--color-bg-card)"
          }}
        >
          {userName.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
