import React, { useEffect, useState } from 'react';
import {getRegisters} from "../../services/financeService"

export default function CategoriasDespesas() {
  const [categorias, setCategorias] = useState<any[]>([])

  useEffect(() => {
    async function fetchData (){
      const data = await getRegisters();
      console.log("DADOS CHEGANDO: ",data)
      setCategorias(data || [])
    }
    fetchData()
  }, [])

  const categoriasAgrupadas = categorias
    .filter(cat => cat.tipo === "Despesa")
    .reduce((acc: any[], curr: any) => {
      const categoriaLower = curr.categoria.toLowerCase();
      const found = acc.find((item: any) => item.categoria === categoriaLower);
      if (found) {
        found.valor += curr.valor;
      } else {
        acc.push({ ...curr, categoria: categoriaLower });
      }
      return acc;
    }, []);

  return (
    <div className="bg-[var(--color-bg-card)] rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Categorias de Despesas</h2>
      <ul>
        {categoriasAgrupadas.map((cat, idx) => (
          <li key={idx} className="flex justify-between py-2 border-b border-[var(--color-border)] last:border-none">
            <span className="text-[var(--color-text-secondary)]">{cat.categoria}</span>
            <span className="text-[var(--color-error)] font-semibold">R$ {cat.valor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}