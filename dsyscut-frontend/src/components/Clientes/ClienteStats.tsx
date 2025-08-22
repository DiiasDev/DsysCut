type ClienteStatsProps = {
    totalClientes: number
    clientesMensais: number
    clientesAvulsos: number
}

export default function ClienteStats({ totalClientes, clientesMensais, clientesAvulsos }: ClienteStatsProps) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <div
                className="rounded shadow p-4 text-center"
                style={{
                    background: "var(--color-bg-card)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-border)"
                }}
            >
                <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{totalClientes}</div>
                <div style={{ color: "var(--color-text-secondary)" }}>Total de clientes</div>
            </div>
            <div
                className="rounded shadow p-4 text-center"
                style={{
                    background: "var(--color-bg-card)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-border)"
                }}
            >
                <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{clientesMensais}</div>
                <div style={{ color: "var(--color-text-secondary)" }}>Mensais</div>
            </div>
            <div
                className="rounded shadow p-4 text-center"
                style={{
                    background: "var(--color-bg-card)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-border)"
                }}
            >
                <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{clientesAvulsos}</div>
                <div style={{ color: "var(--color-text-secondary)" }}>Avulsos</div>
            </div>
        </div>
    )
}
