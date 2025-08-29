import React from 'react';
import { RegisterFinance } from '../../services/financeService';
import { useState } from 'react';

export default function FormRegistrarReceitaDespesa({ onClose }: { onClose: () => void }) {
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState<'Receita' | 'Despesa'>('Receita');
    const [categoria, setCategoria] = useState('')
    const [dateMovimentacao, setDateMovimentacao] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log("Entrou no formulário financeiro")
        const valorFormatado = valor.replace(',', '.');
        if (!valorFormatado || isNaN(Number(valorFormatado)) || Number(valorFormatado) <= 0) {
            alert("Informe um valor válido!");
            return;
        }
        try {
            await RegisterFinance(
                Number(valorFormatado),
                descricao,
                tipo, // tipo deve ser 'Receita' ou 'Despesa'
                categoria,
                new Date(dateMovimentacao)
            )
            alert("Registro cadastrado com sucesso!")
            setDescricao('')
            setValor('')
            setCategoria('')
        } catch {
            alert('Erro ao cadastrar registro!')
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-[var(--color-bg-card)] text-[var(--color-text)] rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-[var(--color-border)] animate-fade-in">
                {/* Cabeçalho do modal */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-[var(--color-text)]">Registrar Receita/Despesa</h2>
                    <button
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        &times;
                    </button>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="valor" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Valor:</label>
                        <input
                            type="text"
                            id="valor"
                            placeholder="R$"
                            value={valor}
                            onChange={e => {
                                // Permite apenas números, vírgula e ponto
                                const val = e.target.value.replace(/[^0-9.,]/g, '');
                                setValor(val);
                            }}
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="descricao" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Descrição:</label>
                        <input type="text" id="descricao" placeholder="Conta de luz..." value={descricao} onChange={e => setDescricao(e.target.value)}
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="categoria" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Categoria:</label>
                        <input type="text" id="categoria" placeholder="Contas..." value={categoria} onChange={e => setCategoria(e.target.value)}
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Data de movimentação:</label>
                        <input type="date" id="date" placeholder="25/08" value={dateMovimentacao} onChange={e => setDateMovimentacao(e.target.value)}
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="tipo" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Tipo</label>
                        <select
                            value={tipo}
                            onChange={e => setTipo(e.target.value as 'Receita' | 'Despesa')}
                            name="tipo"
                            id="tipo"
                        >
                            <option value="Receita">Receita</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition-all duration-200 font-semibold mt-2"
                    >
                        Salvar
                    </button>
                </form>
            </div>
            {/* Animação fade-in */}
            <style>{`
                .animate-fade-in {
                    animation: fadeInModal 0.3s ease;
                }
                @keyframes fadeInModal {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
            `}</style>
        </div>
    )
}