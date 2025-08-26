import React, { useEffect, useState } from 'react';
import { getTotalEntrada } from '../../services/financeService';

type ResumoMensalProps = {
  despesaMes: number;
};

export default function ResumoMensal({ despesaMes }: ResumoMensalProps) {
  const [receitaMes, setReceitaMes] = useState<number>(0);

  useEffect(() => {
    async function fetchReceita() {
      const receita = await getTotalEntrada();
      setReceitaMes(receita || 0);
    }
    fetchReceita();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-6">
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Receita do mês</span>
        <span className="text-xl font-bold text-[var(--color-success)]">R$ {receitaMes}</span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Despesa do mês</span>
        <span className="text-xl font-bold text-[var(--color-error)]">R$ {despesaMes}</span>
      </div>
    </div>
  );
}