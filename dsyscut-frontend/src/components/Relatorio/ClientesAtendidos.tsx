export default function ClientesAtendidos() {
    return (
        <div
            className="rounded-lg shadow p-4"
            style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text)"
            }}
        >
            <div>
                <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>Clientes Atendidos</h2>
                <span
                    className="inline-block text-xs px-2 py-1 rounded mb-4"
                    style={{
                        background: "var(--color-success)",
                        color: "var(--color-bg-card)"
                    }}
                >
                    Gráfico sugerido: Barra
                </span>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    Veja quantos clientes foram atendidos em cada período. Ajuda a identificar horários de pico.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-2xl font-bold" style={{ color: "var(--color-success)" }}>27</span>
                <span className="text-sm mt-1" style={{ color: "var(--color-success)" }}>Hoje</span>
            </div>
        </div>
    )
}
