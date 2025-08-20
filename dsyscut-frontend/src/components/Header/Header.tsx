import React from "react";
import "./Header.css";
import { FaBell, FaSearch } from "react-icons/fa";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => (
  <header className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-b border-[var(--color-border)] shadow px-4 py-2 flex items-center justify-between sticky top-0 z-10 h-16">
    <div className="flex items-center gap-2">
      <span className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow">DsysCut</span>
    </div>
    <div className="flex items-center gap-4">
      {/* Barra de pesquisa */}
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="bg-white border border-blue-200 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-36 md:w-52 shadow-sm"
        />
        <span className="absolute right-3 top-1.5 text-blue-400">
          {React.createElement(FaSearch as React.ElementType, { className: "text-base" })}
        </span>
      </div>
      {/* Notificações */}
      <button className="relative bg-transparent p-1 rounded-full hover:bg-blue-100 transition shadow-sm">
        {React.createElement(FaBell as React.ElementType, { className: "text-lg text-blue-500" })}
        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5 font-bold shadow">3</span>
      </button>
      {/* Usuário */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 font-medium">{userName}</span>
        <span className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow border-2 border-white text-xs">
          {userName.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
