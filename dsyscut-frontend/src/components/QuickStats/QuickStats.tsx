import React from "react";
import "./QuickStats.css";

const QuickStats: React.FC = () => (
  <section className="w-screen grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 md:px-8">
    <div className="bg-[var(--color-bg-card)] rounded-2xl shadow-2xl p-7 flex flex-col items-center transition-all hover:scale-105 hover:shadow-[0_8px_32px_rgba(72,187,120,0.15)] border-2 border-[var(--color-success)]">
      <div className="mb-2">
        {/* Calendário */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="4" fill="#48BB78"/>
          <rect x="7" y="2" width="2" height="6" rx="1" fill="#38A169"/>
          <rect x="15" y="2" width="2" height="6" rx="1" fill="#38A169"/>
        </svg>
      </div>
      <span className="text-4xl font-extrabold text-[var(--color-success)] animate-pulse">24</span>
      <span className="text-[var(--color-text-secondary)] mt-2 font-semibold">Agendamentos hoje</span>
    </div>
    <div className="bg-[var(--color-bg-card)] rounded-2xl shadow-2xl p-7 flex flex-col items-center transition-all hover:scale-105 hover:shadow-[0_8px_32px_rgba(79,70,229,0.15)] border-2 border-[var(--color-primary)]">
      <div className="mb-2">
        {/* Tesoura */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M6 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm12-13-7.5 7.5M18 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-4xl font-extrabold text-[var(--color-primary)]">18</span>
      <span className="text-[var(--color-text-secondary)] mt-2 font-semibold">Serviços realizados</span>
    </div>
    <div className="bg-[var(--color-bg-card)] rounded-2xl shadow-2xl p-7 flex flex-col items-center transition-all hover:scale-105 hover:shadow-[0_8px_32px_rgba(229,62,62,0.15)] border-2 border-[var(--color-error)]">
      <div className="mb-2">
        {/* Usuário */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="9" r="4" fill="#E53E3E"/>
          <rect x="6" y="17" width="12" height="4" rx="2" fill="#E53E3E"/>
        </svg>
      </div>
      <span className="text-4xl font-extrabold text-[var(--color-error)] animate-pulse">2</span>
      <span className="text-[var(--color-text-secondary)] mt-2 font-semibold">Clientes Ativos</span>
    </div>
  </section>
);

export default QuickStats;
