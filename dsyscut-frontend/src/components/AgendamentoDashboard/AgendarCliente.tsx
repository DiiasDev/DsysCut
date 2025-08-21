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
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Agendar Cliente</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block text-gray-600 mb-1">Barbeiro</label>
                    <select
                        className="w-full border rounded px-3 py-2"
                        value={barbeiroId}
                        onChange={e => setBarbeiroId(Number(e.target.value))}
                    >
                        {barbeiros.map(b => (
                            <option key={b.id} value={b.id}>{b.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Data</label>
                    <input
                        type="date"
                        className="w-full border rounded px-3 py-2"
                        value={data}
                        onChange={e => setData(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Horário disponível</label>
                    <div className="flex flex-wrap gap-2">
                        {horariosDisponiveis[String(barbeiroId)].map(h => (
                            <button
                                type="button"
                                key={h}
                                className={`px-3 py-1 rounded border ${horario === h ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
                                onClick={() => setHorario(h)}
                            >
                                {h}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    className="bg-primary text-white px-4 py-2 rounded mt-2 hover:bg-green-600 transition"
                >
                    Agendar
                </button>
            </form>
        </div>
    );
}
