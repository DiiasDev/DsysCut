import React from 'react'

interface CardKPIProps {
    titulo: string
    valor: string
    icone?: string
}

export default function CardKPI({ titulo, valor, icone }: CardKPIProps) {
    return (
        <div
            className="rounded-lg shadow p-4 flex flex-col items-start"
            style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text)"
            }}
        >
            <div className="text-2xl mb-2">{icone}</div>
            <div className="text-sm font-semibold mb-1" style={{ color: "var(--color-text-secondary)" }}>{titulo}</div>
            <div className="text-xl font-bold">{valor}</div>
        </div>
    );
}
