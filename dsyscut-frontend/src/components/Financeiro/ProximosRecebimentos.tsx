import React from 'react';

type Recebimento = {
  id: number;
  cliente: string;
  valor: number;
  data: string;
};

type RecebimentosProps = {
  recebimentos: Recebimento[];
};

export default function ProximosRecebimentos({ recebimentos }: RecebimentosProps) {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 mt-6">
      <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Próximos Recebimentos</h2>
      <ul>
        {recebimentos.map((r) => (
          <li key={r.id} className="flex justify-between py-2 border-b border-[var(--color-border)] last:border-none">
            <span>{r.cliente}</span>
            <span className="text-[var(--color-success)] font-semibold">R$ {r.valor}</span>
            <span className="text-[var(--color-text-secondary)]">{r.data}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
