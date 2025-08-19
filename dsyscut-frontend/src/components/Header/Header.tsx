import React from "react";
import "./Header.css";
import { FaBell, FaSearch } from "react-icons/fa";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => (
  <header className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-b border-[var(--color-border)] shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-10">
    <div className="flex items-center gap-3">
      <span className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow">BarbeariaPro</span>
    </div>
    <div className="flex items-center gap-6">
      {/* Barra de pesquisa */}
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="bg-white border border-blue-200 rounded-full px-5 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-48 md:w-64 shadow"
        />
        <span className="absolute right-4 top-2 text-blue-400">
          {React.createElement(FaSearch as React.ElementType, { className: "text-base" })}
        </span>
      </div>
      {/* Notificações */}
      <button className="relative bg-transparent p-2 rounded-full hover:bg-blue-50 transition shadow">
        {React.createElement(FaBell as React.ElementType, { className: "text-xl text-blue-500" })}
        <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow">3</span>
      </button>
      {/* Usuário */}
      <div className="flex items-center gap-3">
        <span className="text-base text-gray-600 font-medium">{userName}</span>
        <span className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg border-2 border-white">
          {userName.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
