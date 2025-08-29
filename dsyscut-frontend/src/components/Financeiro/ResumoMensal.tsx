import React, { useEffect, useState } from 'react';
import { getTotalEntrada, getTotalDespesa, getTotalSomado } from '../../services/financeService';


export default function ResumoMensal() {
  const [receitaMes, setReceitaMes] = useState<number>(0);
  const [despesaMes, setDespesaMes] = useState<number>(0);
  const [totalSomado, setTotalSomado] = useState<number>(0);

  useEffect(() => {
    async function fetchReceita() {
      const receita = await getTotalEntrada();
      setReceitaMes(receita);
    }

    async function fetchDespesa() {
      const despesa = await getTotalDespesa();
      setDespesaMes(despesa);
    }

    async function fetchTotalSomado() {
      const totalSomado = await getTotalSomado();
      setTotalSomado(totalSomado);
    }
    fetchReceita();
    fetchDespesa();
    fetchTotalSomado();
  }, []);

  // Define cor do valor total dinamicamente
  const totalColor = totalSomado >= 0 ? 'text-blue-500' : 'text-[var(--color-error)]';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Receita do mês</span>
        <span className="text-xl font-bold text-[var(--color-success)]">
          R$ {(receitaMes ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Despesa do mês</span>
        <span className="text-xl font-bold text-[var(--color-error)]">
          R$ {(despesaMes ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center sm:col-span-2 lg:col-span-1">
        <span className="text-[var(--color-text-secondary)]">Valor total</span>
        <span className={`text-xl font-bold ${totalColor}`}>
          R$ {(totalSomado ?? 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}