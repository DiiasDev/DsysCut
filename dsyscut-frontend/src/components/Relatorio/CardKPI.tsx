import React from 'react'

interface CardKPIProps {
    titulo: string
    valor: string
    icone?: string
}

export default function CardKPI({ titulo, valor, icone }: CardKPIProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
            <div className="text-3xl">{icone}</div>
            <div>
                <div className="text-sm text-gray-500">{titulo}</div>
                <div className="text-2xl font-bold text-gray-800">{valor}</div>
            </div>
        </div>
    )
}
