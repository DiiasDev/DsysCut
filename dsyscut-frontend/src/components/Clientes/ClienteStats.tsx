import { useEffect, useState } from "react"
import { getClient } from '../../services/clientService';

export default function ClienteStats() {
    const [clientes, setClientes] = useState<any[]>([])

    useEffect(() => {
        async function fetchData() {
            const response = await getClient();
            console.log('data clientes:', response)
            setClientes(response?.clientes || [])
        }
        fetchData()
    }, [])
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
                <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{clientes.length}</div>
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
                <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{clientes.filter(mensalista => mensalista.mensalista == true).length}</div>
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
                <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>{clientes.filter(avulso => avulso.mensalista === false).length}</div>
                <div style={{ color: "var(--color-text-secondary)" }}>Avulsos</div>
            </div>
        </div>
    )
}
