import React from 'react';

const cortes = [
    { id: 1, cliente: 'João Silva', horario: '09:00', plano: 'Mensal' },
    { id: 2, cliente: 'Lucas Souza', horario: '10:30', plano: 'Avulso' },
    { id: 3, cliente: 'Pedro Lima', horario: '11:00', plano: 'Mensal' },
];

export default function CortesPendentes() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Cortes Pendentes</h2>
            <ul className="divide-y divide-gray-200">
                {cortes.map(corte => (
                    <li key={corte.id} className="py-3 flex items-center justify-between">
                        <div>
                            <span className="font-medium text-gray-800">{corte.cliente}</span>
                            <span className="ml-2 text-gray-500 text-sm">{corte.horario}</span>
                            <span className="ml-2 text-green-600 text-xs">{corte.plano}</span>
                        </div>
                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                            Finalizar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
