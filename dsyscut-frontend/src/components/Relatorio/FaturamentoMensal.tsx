export default function FaturamentoMensal() {
    return (
        <div
            className="rounded-lg shadow p-4"
            style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text)"
            }}
        >
            <div className="rounded-xl shadow-md p-6 flex flex-col justify-between h-64" style={{ background: "var(--color-bg-card)" }}>
                <div>
                    <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>Faturamento Mensal</h2>
                    <span
                        className="inline-block text-xs px-2 py-1 rounded mb-4"
                        style={{
                            background: "var(--color-accent)",
                            color: "var(--color-bg-card)"
                        }}
                    >
                        Gráfico sugerido: Linha
                    </span>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Acompanhe o crescimento do faturamento mês a mês. Ideal para visualizar tendências e sazonalidades.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-24 mt-4">
                    <span className="text-2xl font-bold" style={{ color: "var(--color-accent)" }}>R$ 8.500</span>
                    <span className="text-sm mt-1" style={{ color: "var(--color-accent)" }}>+12% em relação ao mês anterior</span>
                </div>
            </div>
        </div>
    )
}
