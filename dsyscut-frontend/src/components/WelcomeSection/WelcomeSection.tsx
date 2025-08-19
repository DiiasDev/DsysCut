import React from "react";
import "./WelcomeSection.css";

const tips = [
  "Use o menu acima para acessar rapidamente as funções principais.",
  "Mantenha o cadastro dos clientes sempre atualizado.",
  "Confira suas pendências financeiras diariamente.",
];

const WelcomeSection: React.FC = () => (
  <section className="w-screen mb-8 px-4 md:px-8">
    <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-2">
      Bem-vindo ao DsysCut!
    </h1>
    <p className="text-[var(--color-text-secondary)] mb-2">
      Gerencie sua barbearia com agilidade e praticidade. Use os atalhos abaixo para acessar as principais áreas do sistema.
    </p>
    <div className="flex flex-wrap gap-2 mt-2">
      {tips.map((tip, idx) => (
        <span key={idx} className="bg-[var(--color-bg-card)] px-3 py-1 rounded-full text-xs text-[var(--color-accent)] shadow flex items-center">
          <i className="fas fa-lightbulb mr-1" /> {tip}
        </span>
      ))}
    </div>
  </section>
);

export default WelcomeSection;
