import React from 'react'

interface CardGraficoProps {
    titulo: string
    tipoGrafico: string
    descricao: string
}

export default function CardGrafico({ titulo, tipoGrafico, descricao }: CardGraficoProps) {
    return (
        <div className="rounded-xl shadow-md p-6 flex flex-col justify-between h-64" style={{ background: "var(--color-bg-card)" }}>
            <div>
                <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>{titulo}</h2>
                <span
                    className="inline-block text-xs px-2 py-1 rounded mb-4"
                    style={{
                        background: "var(--color-accent)",
                        color: "var(--color-bg-card)"
                    }}
                >
                    Gráfico sugerido: {tipoGrafico}
                </span>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{descricao}</p>
            </div>
            <div className="flex items-center justify-center h-24 mt-4">
                {/* Aqui insira o gráfico correspondente */}
                <span className="text-lg" style={{ color: "var(--color-border)" }}>[Gráfico {tipoGrafico} aqui]</span>
            </div>
        </div>
    )
}
