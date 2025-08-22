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
        <div
            className="rounded-lg shadow p-6"
            style={{ background: 'var(--color-bg-card)' }}
        >
            <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
            >
                Agendamentos
            </h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2 text-left" style={{ color: 'var(--color-text-secondary)' }}>Foto</th>
                        <th className="py-2 text-left" style={{ color: 'var(--color-text-secondary)' }}>Cliente</th>
                        <th className="py-2 text-left" style={{ color: 'var(--color-text-secondary)' }}>Serviço</th>
                        <th className="py-2 text-left" style={{ color: 'var(--color-text-secondary)' }}>Data</th>
                        <th className="py-2 text-left" style={{ color: 'var(--color-text-secondary)' }}>Horário</th>
                    </tr>
                </thead>
                <tbody>
                    {agendamentos.map(a => (
                        <tr
                            key={a.id}
                            className="border-t"
                            style={{
                                borderColor: 'var(--color-border)',
                                transition: 'background 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLTableRowElement).style.background = 'var(--color-hover-row)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLTableRowElement).style.background = '';
                            }}
                        >
                            <td className="py-2">
                                <img src={a.foto} alt={a.cliente} className="w-10 h-10 rounded-full object-cover" />
                            </td>
                            <td className="py-2" style={{ color: 'var(--color-text)' }}>{a.cliente}</td>
                            <td className="py-2" style={{ color: 'var(--color-text-secondary)' }}>{a.servico}</td>
                            <td className="py-2" style={{ color: 'var(--color-text-secondary)' }}>{a.data}</td>
                            <td className="py-2" style={{ color: 'var(--color-text-secondary)' }}>{a.horario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
