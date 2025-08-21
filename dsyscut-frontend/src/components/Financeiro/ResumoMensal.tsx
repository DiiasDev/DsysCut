import React from 'react';

type ResumoMensalProps = {
  resumoMensal: {
    receitaMes: number;
    despesaMes: number;
  };
};

export default function ResumoMensal({ resumoMensal }: ResumoMensalProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-6">
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Receita do mês</span>
        <span className="text-xl font-bold text-[var(--color-success)]">R$ {resumoMensal.receitaMes}</span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Despesa do mês</span>
        <span className="text-xl font-bold text-[var(--color-error)]">R$ {resumoMensal.despesaMes}</span>
      </div>
    </div>
  );
}
