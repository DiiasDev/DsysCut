import React from 'react';

export default function SecaoGraficos() {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 h-full flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Gráfico de Receita Mensal</h2>
        <div className="bg-[var(--color-border)] rounded h-40 flex items-center justify-center text-[var(--color-text-secondary)]">
          {/* Aqui você pode adicionar o gráfico de receita mensal */}
          [Gráfico de Receita Mensal]
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Gráfico de Despesas por Categoria</h2>
        <div className="bg-[var(--color-border)] rounded h-40 flex items-center justify-center text-[var(--color-text-secondary)]">
          {/* Aqui você pode adicionar o gráfico de despesas por categoria */}
          [Gráfico de Despesas por Categoria]
        </div>
      </div>
    </div>
  );
}
