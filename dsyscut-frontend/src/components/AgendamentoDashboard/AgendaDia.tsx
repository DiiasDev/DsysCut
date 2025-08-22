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
        <div
            className="rounded-lg shadow p-6"
            style={{ background: 'var(--color-bg-card)' }}
        >
            <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
            >
                Agenda do Dia
            </h2>
            <ul>
                {agenda.map((item, idx) => (
                    <li
                        key={idx}
                        className="flex items-center justify-between py-2 border-b last:border-none"
                        style={{ borderColor: 'var(--color-border)' }}
                    >
                        <div>
                            <span className="font-medium" style={{ color: 'var(--color-text)' }}>{item.horario}</span>
                            <span className="ml-2" style={{ color: 'var(--color-text-secondary)' }}>{item.cliente}</span>
                        </div>
                        <span
                            className="px-3 py-1 rounded text-xs"
                            style={{
                                background: item.status === 'Agendado'
                                    ? 'var(--color-accent)'
                                    : 'var(--color-secondary)',
                                color: item.status === 'Agendado'
                                    ? 'var(--color-bg-card)'
                                    : 'var(--color-bg-card)',
                                fontWeight: 600,
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            {item.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
