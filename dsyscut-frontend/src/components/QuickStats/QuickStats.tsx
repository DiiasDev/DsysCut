import React from "react";
import "./QuickStats.css";

const QuickStats: React.FC = () => (
  <section className="w-screen grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-4 md:px-8">
    <div className="bg-[var(--color-bg-card)] rounded-xl shadow p-5 flex flex-col items-center">
      <span className="text-3xl font-bold text-[var(--color-success)] animate-pulse">24</span>
      <span className="text-[var(--color-text-secondary)] mt-1">Agendamentos hoje</span>
    </div>
    <div className="bg-[var(--color-bg-card)] rounded-xl shadow p-5 flex flex-col items-center">
      <span className="text-3xl font-bold text-[var(--color-primary)]">R$ 1.250</span>
      <span className="text-[var(--color-text-secondary)] mt-1">Receita do mês</span>
      {/* Gráfico simples fake */}
      <div className="w-full h-16 mt-2 flex items-end gap-1">
        <div className="bg-[var(--color-primary)] h-8 w-2 rounded"></div>
        <div className="bg-[var(--color-primary)] h-12 w-2 rounded"></div>
        <div className="bg-[var(--color-primary)] h-6 w-2 rounded"></div>
        <div className="bg-[var(--color-primary)] h-14 w-2 rounded"></div>
        <div className="bg-[var(--color-primary)] h-10 w-2 rounded"></div>
        <div className="bg-[var(--color-primary)] h-16 w-2 rounded"></div>
      </div>
    </div>
    <div className="bg-[var(--color-bg-card)] rounded-xl shadow p-5 flex flex-col items-center">
      <span className="text-3xl font-bold text-[var(--color-error)] animate-pulse">2</span>
      <span className="text-[var(--color-text-secondary)] mt-1">Pendências financeiras</span>
    </div>
  </section>
);

export default QuickStats;
