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
      <table className="min-w-full rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
            <th className="py-3 px-3 font-medium">Tipo</th>
            <th className="py-3 px-3 font-medium">Descrição</th>
            <th className="py-3 px-3 font-medium">Valor</th>
            <th className="py-3 px-3 font-medium">Data</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((t, idx) => {
            const isDespesa = t.tipo?.toLowerCase() === 'despesa';
            return (
              <tr
                key={t.id}
                className={`border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-hover-row)]`}
              >
                <td className={`py-2 px-3 font-semibold ${isDespesa ? 'text-[var(--color-error)]' : 'text-[var(--color-success)]'}`}>
                  {t.tipo}
                </td>
                <td className="py-2 px-3 text-[var(--color-text)]">{t.descricao}</td>
                <td className={`py-2 px-3 font-semibold ${isDespesa ? 'text-[var(--color-error)]' : 'text-[var(--color-success)]'}`}>
                  R$ {Math.abs(t.valor)}
                </td>
                <td className="py-2 px-3 text-[var(--color-text-secondary)]">
                  {(() => {
                    const d = new Date(t.data_movimentacao);
                    const dd = String(d.getUTCDate()).padStart(2,'0')
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const yyyy = d.getFullYear();
                    return `${dd}/${mm}/${yyyy}`;
                  })()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
