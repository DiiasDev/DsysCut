import React from 'react';

export default function FormClientes({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-[var(--color-bg-card)] text-[var(--color-text)] rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-[var(--color-border)] animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-[var(--color-text)]">Adicionar Cliente</h2>
                    <button
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)] hover:text-white transition"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        &times;
                    </button>
                </div>
                <form className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Nome:</label>
                        <input type="text" id="nome" placeholder="João Silva..."
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="numero" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Número:</label>
                        <input type="text" id="numero" placeholder="(19) 99..."
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="insta" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Instagram:</label>
                        <input type="text" id="insta" placeholder="@Dsys"
                            className="w-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="mensalista" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Mensalista:</label>
                        <select name="mensalista" id="mensalista"
                            className="w-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
                        >
                            <option value="sim">Sim</option>
                            <option value="não">Não</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all duration-200 font-semibold mt-2"
                    >
                        Salvar
                    </button>
                </form>
            </div>
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