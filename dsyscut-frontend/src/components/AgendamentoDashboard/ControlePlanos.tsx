import React from 'react';

const planos = [
    { nome: 'Mensal', ativos: 15, vencidos: 2 },
    { nome: 'Semanal', ativos: 8, vencidos: 1 },
    { nome: 'Avulso', ativos: 20, vencidos: 0 },
];

export default function ControlePlanos() {
    return (
        <div
            className="rounded-lg shadow p-6"
            style={{ background: 'var(--color-bg-card)' }}
        >
            <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
            >
                Controle de Planos
            </h2>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2" style={{ color: 'var(--color-text-secondary)' }}>Plano</th>
                        <th className="py-2" style={{ color: 'var(--color-text-secondary)' }}>Ativos</th>
                        <th className="py-2" style={{ color: 'var(--color-text-secondary)' }}>Vencidos</th>
                    </tr>
                </thead>
                <tbody>
                    {planos.map(plano => (
                        <tr key={plano.nome} className="border-t" style={{ borderColor: 'var(--color-border)' }}>
                            <td className="py-2" style={{ color: 'var(--color-text)' }}>{plano.nome}</td>
                            <td className="py-2 font-bold" style={{ color: 'var(--color-success)' }}>{plano.ativos}</td>
                            <td className="py-2 font-bold" style={{ color: 'var(--color-error)' }}>{plano.vencidos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
