import React from 'react';

const agenda = [
    { horario: '08:00', cliente: 'Carlos Mendes', status: 'Agendado' },
    { horario: '09:00', cliente: 'João Silva', status: 'Pendente' },
    { horario: '10:30', cliente: 'Lucas Souza', status: 'Agendado' },
    { horario: '11:00', cliente: 'Pedro Lima', status: 'Pendente' },
    { horario: '13:00', cliente: 'Ana Paula', status: 'Agendado' },
];

export default function AgendaDia() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Agenda do Dia</h2>
            <ul>
                {agenda.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between py-2 border-b last:border-none">
                        <div>
                            <span className="font-medium text-gray-800">{item.horario}</span>
                            <span className="ml-2 text-gray-600">{item.cliente}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                            item.status === 'Agendado' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                            {item.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
