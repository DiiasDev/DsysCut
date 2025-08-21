import React from 'react';

type ResumoProps = {
  resumo: {
    receita: number;
    despesa: number;
    lucro: number;
  };
};

export default function ResumoFinanceiro({ resumo }: ResumoProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Receita</span>
        <span className="text-2xl font-bold text-[var(--color-success)]">R$ {resumo.receita}</span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Despesa</span>
        <span className="text-2xl font-bold text-[var(--color-error)]">R$ {resumo.despesa}</span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Lucro</span>
        <span className="text-2xl font-bold text-[var(--color-primary)]">R$ {resumo.lucro}</span>
      </div>
    </div>
  );
}
