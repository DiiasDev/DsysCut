import React from 'react';

const planos = [
    { nome: 'Mensal', ativos: 15, vencidos: 2 },
    { nome: 'Semanal', ativos: 8, vencidos: 1 },
    { nome: 'Avulso', ativos: 20, vencidos: 0 },
];

export default function ControlePlanos() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Controle de Planos</h2>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2 text-gray-600">Plano</th>
                        <th className="py-2 text-gray-600">Ativos</th>
                        <th className="py-2 text-gray-600">Vencidos</th>
                    </tr>
                </thead>
                <tbody>
                    {planos.map(plano => (
                        <tr key={plano.nome} className="border-t">
                            <td className="py-2">{plano.nome}</td>
                            <td className="py-2 text-green-700 font-bold">{plano.ativos}</td>
                            <td className="py-2 text-red-600 font-bold">{plano.vencidos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
