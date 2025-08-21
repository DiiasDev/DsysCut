import React from 'react';

export default function AcoesRapidas() {
  return (
    <div className="flex gap-4 mb-6">
      <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
        Registrar Receita
      </button>
      <button className="bg-[var(--color-error)] text-white px-4 py-2 rounded shadow hover:bg-red-700 transition">
        Registrar Despesa
      </button>
    </div>
  );
}
