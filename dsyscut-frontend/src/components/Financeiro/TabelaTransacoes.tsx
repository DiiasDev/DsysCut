import React, { useEffect, useState } from 'react';
import { getRegisters } from '../../services/financeService';

export default function TabelaTransacoes() {
  const [transacoes, setTransacoes] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getRegisters();
      setTransacoes(data || [])
    }
    fetchData();
  }, []);

  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Transações Recentes</h2>
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-[var(--color-text-secondary)]">
            <th className="py-2 px-2">Tipo</th>
            <th className="py-2 px-2">Descrição</th>
            <th className="py-2 px-2">Valor</th>
            <th className="py-2 px-2">Data</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((t) => (
            <tr key={t.id} className="border-b border-[var(--color-border)]">
              <td className="py-2 px-2">{t.tipo}</td>
              <td className="py-2 px-2">{t.descricao}</td>
              <td className={`py-2 px-2 ${t.valor >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                R$ {Math.abs(t.valor)}
              </td>
              <td className="py-2 px-2">
                {(() => {
                  const d = new Date(t.data_movimentacao);
                  const dd = String(d.getDay()).padStart(2,'0')
                  const mm = String(d.getMonth() + 1).padStart(2, '0');
                  const yyyy = d.getFullYear();
                  return `${dd}/${mm}/${yyyy}`;
                })()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
