import React, { useEffect, useState } from 'react';
import { getTotalEntrada, getTotalDespesa, getTotalSomado } from '../../services/financeService';


export default function ResumoMensal() {
  const [receitaMes, setReceitaMes] = useState<number>(0);
  const [despesaMes, setDespesaMes] = useState<number>(0);
  const [totalSomado, setTotalSomado] = useState<number>(0)
  
  useEffect(() => {
    async function fetchReceita() {
      const receita = await getTotalEntrada();
      setReceitaMes(receita);
    }

    async function fetchDespesa() {
      const despesa = await getTotalDespesa();
      setDespesaMes(despesa);
    }

    async function fetchTotalSomado(){
      const totalSomado = await getTotalSomado();
      setTotalSomado(totalSomado);
    }
    fetchReceita();
    fetchDespesa();
    fetchTotalSomado();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-6">
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Receita do mês</span>
        <span className="text-xl font-bold text-[var(--color-success)]">  R$ {receitaMes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Despesa do mês</span>
        <span className="text-xl font-bold text-[var(--color-error)]"> R$ {despesaMes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
      </div>
      <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
        <span className="text-[var(--color-text-secondary)]">Valor total</span>
        <span className="text-xl font-bold text-[var(--color-error)]"> R$ {totalSomado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
      </div>
    </div>
  );
}