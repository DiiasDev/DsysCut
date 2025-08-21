import React from 'react';

type Categoria = {
  nome: string;
  valor: number;
};

type CategoriasProps = {
  categorias: Categoria[];
};

export default function CategoriasDespesas({ categorias }: CategoriasProps) {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Categorias de Despesas</h2>
      <ul>
        {categorias.map((cat, idx) => (
          <li key={idx} className="flex justify-between py-2 border-b border-[var(--color-border)] last:border-none">
            <span className="text-[var(--color-text-secondary)]">{cat.nome}</span>
            <span className="text-[var(--color-error)] font-semibold">R$ {cat.valor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
