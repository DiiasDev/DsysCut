export default function ServicosMaisRealizados() {
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
                    <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>Serviços Mais Realizados</h2>
                    <span
                        className="inline-block text-xs px-2 py-1 rounded mb-4"
                        style={{
                            background: "var(--color-secondary)",
                            color: "var(--color-bg-card)"
                        }}
                    >
                        Gráfico sugerido: Pizza
                    </span>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Descubra quais serviços são mais populares na barbearia. Útil para promoções e estoque.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-24 mt-4">
                    <span className="text-lg font-bold" style={{ color: "var(--color-secondary)" }}>Corte Masculino</span>
                    <span className="text-sm mt-1" style={{ color: "var(--color-secondary)" }}>53% dos serviços</span>
                </div>
            </div>
        </div>
    )
}
