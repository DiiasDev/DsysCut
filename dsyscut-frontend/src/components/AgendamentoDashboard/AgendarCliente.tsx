import React, { useState, useEffect } from 'react';
import { getBarber } from "../../services/barberService"
import { getClient } from "../../services/clientService"

const servicos = [
    { id: 1, nome: 'Corte de cabelo', valor: 30 },
    { id: 7, nome: 'Barba', valor: 20 },
    { id: 4, nome: 'Sobrancelha', valor: 15 },
    { id: 2, nome: 'Corte + Barba', valor: 45 },
    { id: 3, nome: 'Corte + Sobrancelha', valor: 40 },
    { id: 5, nome: 'Corte + Barba + Sobrancelha', valor: 55 },
    { id: 6, nome: 'Barba + Sobrancelha', valor: 30 },
];

const horariosDisponiveis: { [key: string]: string[] } = {
    '1': ['08:00', '09:30', '11:00', '14:00', '16:00'],
    '2': ['09:00', '10:00', '13:00', '15:00'],
};

// Função para criar agendamento (esqueleto)
async function createAppointment({ clienteId, barbeiroId, servicoId, data, horario }: { clienteId: string, barbeiroId: string, servicoId: number, data: string, horario: string }) {
    // Aqui você pode implementar a chamada real da API
    // Exemplo de fetch/post:
    // await api.post('/appointments', { clienteId, barbeiroId, servicoId, data, horario })
    console.log('Agendamento:', { clienteId, barbeiroId, servicoId, data, horario });
    return { success: true };
}

export default function AgendarCliente() {
    const [barbeiros, setBarbeiros] = useState<any[]>([]);
    const [clientes, setClientes] = useState<any[]>([]);
    const [barbeiro, setBarbeiro] = useState('');
    const [cliente, setCliente] = useState('');
    const [servicoId, setServicoId] = useState(servicos[0].id);
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');

    async function fetchBarber() {
        const response = await getBarber();
        setBarbeiros(Array.isArray(response) ? response : []);
    }

    async function fetchClient() {
        const response = await getClient();
        const message = response.clientes
        setClientes(Array.isArray(message) ? message : []);
    }

    useEffect(() => {
        fetchBarber();
        fetchClient();
    }, []);

    async function handleAgendar() {
        if (!cliente || !barbeiro || !servicoId || !data || !horario) {
            alert('Preencha todos os campos para agendar.');
            return;
        }
        const result = await createAppointment({
            clienteId: cliente,
            barbeiroId: barbeiro,
            servicoId,
            data,
            horario
        });
        if (result.success) {
            alert('Agendamento realizado com sucesso!');
            // Limpar campos se desejar
        } else {
            alert('Erro ao agendar.');
        }
    }

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
                    <label className="block mb-1" style={{ color: 'var(--color-text-secondary)' }}>Cliente</label>
                    <select
                        className="w-full rounded px-3 py-2"
                        style={{
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            background: 'var(--color-bg-card)'
                        }}
                        value={cliente}
                        onChange={e => setCliente(e.target.value)}
                    >
                        <option value="">Selecione um cliente</option>
                        {clientes.map(c => (
                            <option key={c.id} value={c.id}>{c.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block mb-1" style={{ color: 'var(--color-text-secondary)' }}>Serviço</label>
                    <select
                        className="w-full rounded px-3 py-2"
                        style={{
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            background: 'var(--color-bg-card)'
                        }}
                        value={servicoId}
                        onChange={e => setServicoId(Number(e.target.value))}
                    >
                        {servicos.map(s => (
                            <option key={s.id} value={s.id}>{`${s.nome} - R$ ${s.valor}`}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block mb-1" style={{ color: 'var(--color-text-secondary)' }}>Barbeiro</label>
                    <select
                        className="w-full rounded px-3 py-2"
                        style={{
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text)',
                            background: 'var(--color-bg-card)'
                        }}
                        value={barbeiro}
                        onChange={e => setBarbeiro(e.target.value)}
                    >
                        <option value="">Selecione um barbeiro</option>
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
                        {(horariosDisponiveis[String(barbeiro)] || []).map(h => (
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
                    onClick={handleAgendar}
                >
                    Agendar
                </button>
            </form>
        </div>
    );
}