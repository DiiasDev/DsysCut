import React from "react";
import "./WelcomeSection.css";

const tips = [
  "Use o menu acima para acessar rapidamente as funções principais.",
  "Mantenha o cadastro dos clientes sempre atualizado.",
  "Confira suas pendências financeiras diariamente.",
];

const WelcomeSection: React.FC = () => (
  <section className="w-screen mb-8 px-4 md:px-8">
    <h1
      className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-3 drop-shadow"
      style={{ letterSpacing: "0.5px" }}
    >
      Bem-vindo ao{" "}
      <span className="text-[var(--color-accent)]">DsysCut!</span>
    </h1>
    <p className="text-lg text-[var(--color-text-secondary)] mb-4 font-medium">
      Gerencie sua barbearia com agilidade e praticidade.
      <br />
      <span className="text-[var(--color-accent)]">
        Use os atalhos abaixo para acessar as principais áreas do sistema.
      </span>
    </p>
    <div className="flex flex-wrap gap-2 mt-2">
      {tips.map((tip, idx) => (
        <span
          key={idx}
          className="bg-[var(--color-bg-card)] px-3 py-1 rounded-full text-xs text-[var(--color-accent)] shadow flex items-center font-semibold"
        >
          <i className="fas fa-lightbulb mr-1" /> {tip}
        </span>
      ))}
    </div>
  </section>
);

export default WelcomeSection;
