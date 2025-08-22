import React, { useState } from 'react';

const barbeiros = [
    { id: 1, nome: 'Carlos Mendes' },
    { id: 2, nome: 'Pedro Lima' },
];

const horariosDisponiveis: { [key: string]: string[] } = {
    '1': ['08:00', '09:30', '11:00', '14:00', '16:00'],
    '2': ['09:00', '10:00', '13:00', '15:00'],
};

export default function AgendarCliente() {
    const [barbeiroId, setBarbeiroId] = useState(barbeiros[0].id);
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');

    return (
        <div
            className="rounded-lg shadow p-6"
            style={{ background: 'var(--color-bg-card)' }}
        >
            <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
            >
                Agendar Cliente
            </h2>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block mb-1" style={{ color: 'var(--color-text-secondary)' }}>Barbeiro</label>
                    <select
                        className="w-full rounded px-3 py-2"
                        style={{
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            background: 'var(--color-bg-card)'
                        }}
                        value={barbeiroId}
                        onChange={e => setBarbeiroId(Number(e.target.value))}
                    >
                        {barbeiros.map(b => (
                            <option key={b.id} value={b.id}>{b.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block mb-1" style={{ color: 'var(--color-text-secondary)' }}>Data</label>
                    <input
                        type="date"
                        className="w-full rounded px-3 py-2"
                        style={{
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            background: 'var(--color-bg-card)'
                        }}
                        value={data}
                        onChange={e => setData(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block mb-1" style={{ color: 'var(--color-text-secondary)' }}>Horário disponível</label>
                    <div className="flex flex-wrap gap-2">
                        {horariosDisponiveis[String(barbeiroId)].map(h => (
                            <button
                                type="button"
                                key={h}
                                className="px-3 py-1 rounded border"
                                style={{
                                    background: horario === h ? 'var(--color-success)' : 'var(--color-bg)',
                                    color: horario === h ? 'var(--color-bg-card)' : 'var(--color-text-secondary)',
                                    border: '1px solid var(--color-border)'
                                }}
                                onClick={() => setHorario(h)}
                            >
                                {h}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    className="px-4 py-2 rounded mt-2 transition"
                    style={{
                        background: 'var(--color-primary)',
                        color: 'var(--color-bg-card)'
                    }}
                >
                    Agendar
                </button>
            </form>
        </div>
    );
}
