import React from 'react';

const cortes = [
    { id: 1, cliente: 'João Silva', horario: '09:00', plano: 'Mensal' },
    { id: 2, cliente: 'Lucas Souza', horario: '10:30', plano: 'Avulso' },
    { id: 3, cliente: 'Pedro Lima', horario: '11:00', plano: 'Mensal' },
];

export default function CortesPendentes() {
    return (
        <div
            className="rounded-lg shadow p-6"
            style={{ background: 'var(--color-bg-card)' }}
        >
            <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
            >
                Cortes Pendentes
            </h2>
            <ul className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
                {cortes.map(corte => (
                    <li key={corte.id} className="py-3 flex items-center justify-between">
                        <div>
                            <span className="font-medium" style={{ color: 'var(--color-text)' }}>{corte.cliente}</span>
                            <span className="ml-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>{corte.horario}</span>
                            <span className="ml-2 text-xs" style={{ color: 'var(--color-success)' }}>{corte.plano}</span>
                        </div>
                        <button
                            className="px-3 py-1 rounded transition"
                            style={{
                                background: 'var(--color-success)',
                                color: 'var(--color-bg-card)'
                            }}
                        >
                            Finalizar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
