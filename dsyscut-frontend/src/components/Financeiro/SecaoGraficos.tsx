import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

// Dados de exemplo para receita mensal
const receitaMensalData = [
  { mes: 'Jan', receita: 4000 },
  { mes: 'Fev', receita: 3000 },
  { mes: 'Mar', receita: 5000 },
  { mes: 'Abr', receita: 4500 },
  { mes: 'Mai', receita: 6000 },
];

// Dados de exemplo para despesas por categoria
const despesasCategoriaData = [
  { categoria: 'Aluguel', valor: 2000 },
  { categoria: 'Salários', valor: 3500 },
  { categoria: 'Materiais', valor: 1200 },
  { categoria: 'Marketing', valor: 800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function SecaoGraficos() {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 h-full flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Gráfico de Receita Mensal</h2>
        <div className="bg-[var(--color-border)] rounded h-40 flex items-center justify-center text-[var(--color-text-secondary)]">
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={receitaMensalData}>
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="receita" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Gráfico de Despesas por Categoria</h2>
        <div className="bg-[var(--color-border)] rounded h-40 flex items-center justify-center text-[var(--color-text-secondary)]">
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={despesasCategoriaData}
                dataKey="valor"
                nameKey="categoria"
                cx="50%"
                cy="50%"
                outerRadius={50}
                label
              >
                {despesasCategoriaData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
