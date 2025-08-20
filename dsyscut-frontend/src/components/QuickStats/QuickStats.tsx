import React from "react";
import "./QuickStats.css";

const QuickStats: React.FC = () => (
  <section className="w-full mb-8 px-2 md:px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {/* Card: Agendamentos Hoje */}
      <div className="bg-[var(--color-bg-card)] rounded-xl shadow-lg p-4 flex flex-col items-center min-w-0">
        <span className="text-blue-600 text-3xl mb-2 drop-shadow">
          <i className="fas fa-calendar-day" />
        </span>
        <span className="font-bold text-base text-[var(--color-text)]">Agendamentos Hoje</span>
        <span className="text-[var(--color-text-secondary)] text-xs text-center mt-2">
          {/* ...conteúdo... */}
        </span>
      </div>
      {/* Card: Serviços Realizados */}
      <div className="bg-[var(--color-bg-card)] rounded-xl shadow-lg p-4 flex flex-col items-center min-w-0">
        <span className="text-green-600 text-3xl mb-2 drop-shadow">
          <i className="fas fa-cut" />
        </span>
        <span className="font-bold text-base text-[var(--color-text)]">Serviços Realizados</span>
        <span className="text-[var(--color-text-secondary)] text-xs text-center mt-2">
          {/* ...conteúdo... */}
        </span>
      </div>
      {/* Card: Clientes Ativos */}
      <div className="bg-[var(--color-bg-card)] rounded-xl shadow-lg p-4 flex flex-col items-center min-w-0">
        <span className="text-purple-600 text-3xl mb-2 drop-shadow">
          <i className="fas fa-users" />
        </span>
        <span className="font-bold text-base text-[var(--color-text)]">Clientes Ativos</span>
        <span className="text-[var(--color-text-secondary)] text-xs text-center mt-2">
          {/* ...conteúdo... */}
        </span>
      </div>
    </div>
  </section>
);

export default QuickStats;
