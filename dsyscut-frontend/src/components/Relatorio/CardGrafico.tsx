import React from 'react'

interface CardGraficoProps {
    titulo: string
    tipoGrafico: string
    descricao: string
}

export default function CardGrafico({ titulo, tipoGrafico, descricao }: CardGraficoProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{titulo}</h2>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: {tipoGrafico}
                </span>
                <p className="text-gray-600 text-sm">{descricao}</p>
            </div>
            <div className="flex items-center justify-center h-24 mt-4">
                {/* Aqui insira o gráfico correspondente */}
                <span className="text-gray-400 text-lg">[Gráfico {tipoGrafico} aqui]</span>
            </div>
        </div>
    )
}
