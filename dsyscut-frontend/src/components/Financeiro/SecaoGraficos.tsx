import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { getDataMensal, getDataDespesas, getDespesasPorCategoria } from "../../services/financeService"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE', '#FF6384', '#36A2EB', '#FFCE56'];

export default function SecaoGraficos() {
  const [receitaMensalData, setReceitaMensalData] = useState<any[]>([])
  const [despesaMensalData, setDespesaMensalData] = useState<any[]>([])
  const [despesasCategoriaData, setDespesasCategoriaData] = useState<any[]>([])

  useEffect(() => {
    async function fetchDataReceita() {
      const response = await getDataMensal();
      const dataArray = Array.isArray(response?.data) ? response.data : [];
      setReceitaMensalData(dataArray)
    }
    async function fetchDataDespesas() {
      const response = await getDataDespesas();
      const dataArray = Array.isArray(response?.data) ? response.data : [];
      setDespesaMensalData(dataArray)
    }
    async function fetchDespesasCategoria() {
      const response = await getDespesasPorCategoria();
      const dataArray = Array.isArray(response?.data) ? response.data : [];
      setDespesasCategoriaData(dataArray)
    }
    fetchDataDespesas()
    fetchDataReceita()
    fetchDespesasCategoria()
  }, [])

  // Função para formatar valores em reais
  const formatBRL = (value: number) =>
    value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Tooltip customizado para BarChart
  const CustomBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow text-black">
          <div>{label}</div>
          <div>receita : {formatBRL(payload[0].value)}</div>
        </div>
      );
    }
    return null;
  };

  // Tooltip customizado para PieChart
  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { categoria, valor } = payload[0].payload;
      return (
        <div className="bg-white p-2 rounded shadow text-black">
          <div>{categoria}</div>
          <div>{formatBRL(valor)}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4 h-full flex flex-col gap-6 min-h-[500px]">
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Gráfico de Receita Mensal</h2>
        <div className="bg-[var(--color-border)] rounded flex-1 flex items-center justify-center text-[var(--color-text-secondary)] min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={receitaMensalData} barSize={40}>
              <XAxis dataKey="periodo" />
              <YAxis />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar dataKey="receita" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Despesas por Categoria</h2>
        <div className="bg-[var(--color-border)] rounded flex-1 flex items-center justify-center text-[var(--color-text-secondary)] min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={despesasCategoriaData}
                dataKey="valor"
                nameKey="categoria"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label={({ value }) => formatBRL(value ?? 0)}
              >
                {despesasCategoriaData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip content={<CustomPieTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
