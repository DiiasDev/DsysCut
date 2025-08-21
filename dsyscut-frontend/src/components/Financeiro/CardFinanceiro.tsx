import React from 'react';

type CardFinanceiroProps = {
  titulo: string;
  valor: number;
  corValor: string; // Ex: 'var(--color-success)'
};

export default function CardFinanceiro({ titulo, valor, corValor }: CardFinanceiroProps) {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 flex flex-col items-center">
      <span className="text-[var(--color-text-secondary)]">{titulo}</span>
      <span className="text-2xl font-bold" style={{ color: corValor }}>
        R$ {valor}
      </span>
    </div>
  );
}
