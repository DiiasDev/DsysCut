import React from 'react';

const agendamentos = [
    {
        id: 1,
        cliente: 'João Silva',
        servico: 'Corte de cabelo',
        foto: 'https://randomuser.me/api/portraits/men/32.jpg',
        data: '2024-06-10',
        horario: '09:00',
    },
    {
        id: 2,
        cliente: 'Lucas Souza',
        servico: 'Barba',
        foto: 'https://randomuser.me/api/portraits/men/45.jpg',
        data: '2024-06-10',
        horario: '10:30',
    },
    {
        id: 3,
        cliente: 'Ana Paula',
        servico: 'Corte feminino',
        foto: 'https://randomuser.me/api/portraits/women/65.jpg',
        data: '2024-06-10',
        horario: '13:00',
    },
];

export default function GridAgendamentos() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Agendamentos</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2 text-left text-gray-600">Foto</th>
                        <th className="py-2 text-left text-gray-600">Cliente</th>
                        <th className="py-2 text-left text-gray-600">Serviço</th>
                        <th className="py-2 text-left text-gray-600">Data</th>
                        <th className="py-2 text-left text-gray-600">Horário</th>
                    </tr>
                </thead>
                <tbody>
                    {agendamentos.map(a => (
                        <tr
                            key={a.id}
                            className="border-t hover:bg-gray-100"
                        >
                            <td className="py-2">
                                <img src={a.foto} alt={a.cliente} className="w-10 h-10 rounded-full object-cover" />
                            </td>
                            <td className="py-2">{a.cliente}</td>
                            <td className="py-2">{a.servico}</td>
                            <td className="py-2">{a.data}</td>
                            <td className="py-2">{a.horario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
