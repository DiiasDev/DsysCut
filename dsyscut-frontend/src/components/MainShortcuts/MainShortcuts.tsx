import React from "react";
import "./MainShortcuts.css";

const shortcuts = [
  {
    icon: "fa-calendar-check",
    color: "text-blue-600",
    title: "Agendamentos",
    desc: "Visualize e gerencie os cortes agendados.",
    hover: "hover:bg-blue-50 dark:hover:bg-[var(--color-bg)] hover:border-blue-200",
  },
  {
    icon: "fa-gift",
    color: "text-green-600",
    title: "Pacotes & Mensalidades",
    desc: "Gerencie pacotes de serviços e assinaturas de clientes.",
    hover: "hover:bg-green-50 dark:hover:bg-[var(--color-bg)] hover:border-green-200",
  },
  {
    icon: "fa-users",
    color: "text-purple-600",
    title: "Clientes",
    desc: "Acesse e edite informações dos clientes da barbearia.",
    hover: "hover:bg-purple-50 dark:hover:bg-[var(--color-bg)] hover:border-purple-200",
  },
  {
    icon: "fa-dollar-sign",
    color: "text-yellow-500",
    title: "Financeiro",
    desc: "Controle receitas, despesas e fluxo de caixa.",
    hover: "hover:bg-yellow-50 dark:hover:bg-[var(--color-bg)] hover:border-yellow-200",
  },
];

const MainShortcuts: React.FC = () => (
  <section className="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 px-4 md:px-8">
    {shortcuts.map((s, idx) => (
      <a
        key={idx}
        href="#"
        className={`bg-[var(--color-bg-card)] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition duration-200 border border-transparent ${s.hover}`}
      >
        <span className={`${s.color} text-5xl mb-2 drop-shadow`}>
          <i className={`fas ${s.icon}`} />
        </span>
        <span className="font-bold text-lg text-[var(--color-text)]">{s.title}</span>
        <span className="text-[var(--color-text-secondary)] text-sm text-center mt-2">
          {s.desc}
        </span>
      </a>
    ))}
  </section>
);

export default MainShortcuts;
