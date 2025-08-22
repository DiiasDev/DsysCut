export default function HorariosPico() {
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
                    <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>Horários de Pico</h2>
                    <span
                        className="inline-block text-xs px-2 py-1 rounded mb-4"
                        style={{
                            background: "var(--color-error)",
                            color: "var(--color-bg-card)"
                        }}
                    >
                        Gráfico sugerido: Linha
                    </span>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Identifique os horários com maior movimento para otimizar o agendamento.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-24 mt-4">
                    <span className="text-lg font-bold" style={{ color: "var(--color-error)" }}>16:00 - 18:00</span>
                    <span className="text-sm mt-1" style={{ color: "var(--color-error)" }}>Horário mais movimentado</span>
                </div>
            </div>
        </div>
    )
}
